/* MathFlux — immersive layer shared by index.html and landing.html.
   Desktop: cursor aura + grid spotlight + 3D card tilt.
   Touch: gyroscope parallax (grid spotlight + phone tilt follow device motion).
   All pages: staggered scroll reveals and JS-driven anchor scrolling that works
   even inside sandboxed embeds. Reduced motion gets static content. */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(pointer: fine)").matches;

  /* ---------- in-page anchors: JS scroll (sandboxed frames block default nav) ---------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var id = a.getAttribute("href").slice(1);
    var el = id ? document.getElementById(id) : null;
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    }
  });

  /* ---------- staggered scroll reveals ---------- */
  var SEL = ".feat-card,.step,.shot,.mode,.stat,.faq-item,.privacy-card,.contact-card," +
            "section:not(#hero) .section-label,section:not(#hero) h2,section:not(#hero) .section-desc";
  var items = Array.prototype.slice.call(document.querySelectorAll(SEL));
  if (reduce || !("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("irv", "in"); });
  } else {
    items.forEach(function (el) { el.classList.add("irv"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var sibs = el.parentNode
          ? Array.prototype.slice.call(el.parentNode.children).filter(function (c) {
              return c.classList && c.classList.contains("irv");
            })
          : [el];
        var idx = sibs.indexOf(el);
        el.style.transitionDelay = (idx > 0 ? Math.min(idx, 6) * 90 : 0) + "ms";
        el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (el) { io.observe(el); });
  }

  if (reduce) return;

  /* ---------- scroll choreography: hero recede, phone settle, band parallax ----------
     The hero content sinks and fades as you scroll past it, the tilted phone mock
     straightens and settles as the page starts moving, and the feature/screenshot
     bands drift a few pixels against the scroll so the layers separate. */
  var heroSec = document.getElementById("hero");
  var heroCopy = document.querySelector(".hero-copy") || document.querySelector(".hero-inner");
  var heroArt = document.querySelector(".hero-art");
  var wideArt = window.matchMedia("(min-width: 861px)");
  var bands = Array.prototype.slice.call(document.querySelectorAll(".features-grid,.shots"));
  var ticking = false;

  function choreo() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset || 0;
    if (heroSec && heroCopy) {
      var p = Math.min(Math.max(y / Math.max(heroSec.offsetHeight * 0.85, 1), 0), 1);
      heroCopy.style.transform = "translateY(" + (p * 36).toFixed(1) + "px) scale(" + (1 - p * 0.05).toFixed(4) + ")";
      heroCopy.style.opacity = (1 - p * 0.6).toFixed(3);
    }
    if (heroArt) {
      if (wideArt.matches) {
        var s = Math.min(Math.max(y / 300, 0), 1);
        heroArt.style.transform = "rotate(" + (2.5 - s * 1.5).toFixed(2) + "deg) scale(" + (1.02 - s * 0.02).toFixed(4) + ")";
      } else {
        heroArt.style.transform = "";
      }
    }
    var vh = window.innerHeight;
    bands.forEach(function (b) {
      var r = b.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var off = (r.top + r.height / 2 - vh / 2) * -0.045;
      b.style.transform = "translateY(" + Math.max(-16, Math.min(16, off)).toFixed(1) + "px)";
    });
  }
  function queueChoreo() { if (!ticking) { ticking = true; requestAnimationFrame(choreo); } }
  if (heroCopy || heroArt || bands.length) {
    window.addEventListener("scroll", queueChoreo, { passive: true });
    window.addEventListener("resize", queueChoreo, { passive: true });
    choreo();
  }

  /* ---------- shared: grid spotlight element ---------- */
  function makeSpot() {
    var spot = document.createElement("div");
    spot.className = "grid-spot";
    spot.setAttribute("aria-hidden", "true");
    document.body.appendChild(spot);
    return spot;
  }

  if (fine) {
    /* ---------- desktop: cursor aura + grid spotlight ---------- */
    var aura = document.createElement("div");
    aura.className = "cursor-aura";
    aura.setAttribute("aria-hidden", "true");
    var spot = makeSpot();
    document.body.appendChild(aura);

    var tx = -2000, ty = -2000, ax = -2000, ay = -2000, live = false;
    document.addEventListener("pointermove", function (e) {
      tx = e.clientX; ty = e.clientY;
      spot.style.setProperty("--mx", tx + "px");
      spot.style.setProperty("--my", ty + "px");
      if (!live) { live = true; requestAnimationFrame(glide); }
    });
    function glide() {
      ax += (tx - ax) * 0.12; ay += (ty - ay) * 0.12;
      aura.style.transform = "translate(" + ax.toFixed(1) + "px," + ay.toFixed(1) + "px)";
      if (Math.abs(tx - ax) + Math.abs(ty - ay) > 0.4) requestAnimationFrame(glide);
      else live = false;
    }

    /* ---------- desktop: 3D tilt on cards, screenshots, and the hero phone ---------- */
    var tilts = Array.prototype.slice.call(
      document.querySelectorAll(".feat-card,.mode,.step,.shot .frame,.phone")
    );
    tilts.forEach(function (el) {
      el.classList.add("tiltable");
      var raf = null;
      var strength = el.classList.contains("phone") ? 9 : 6;
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width;
        var py = (e.clientY - r.top) / r.height;
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          var rx = (0.5 - py) * strength, ry = (px - 0.5) * strength;
          el.style.transform =
            "perspective(900px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-4px)";
        });
      });
      el.addEventListener("pointerleave", function () {
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        el.style.transform = "";
      });
    });
  } else if (window.DeviceOrientationEvent) {
    /* ---------- touch: gyroscope parallax ---------- */
    var gSpot = null;
    var phone = document.querySelector(".phone");
    var glow = document.querySelector(".hero-glow");

    function startGyro() {
      document.body.classList.add("gyro-on");
      if (!gSpot) gSpot = makeSpot();
      var raf2 = null, gx = 0.5, gy = 0.5;
      window.addEventListener("deviceorientation", function (e) {
        /* gamma: left/right tilt (deg), beta: front/back; 40° ≈ natural holding angle */
        var nx = Math.max(-1, Math.min(1, (e.gamma || 0) / 25));
        var ny = Math.max(-1, Math.min(1, ((e.beta == null ? 40 : e.beta) - 40) / 25));
        gx = 0.5 + nx * 0.5; gy = 0.5 + ny * 0.5;
        if (raf2) return;
        raf2 = requestAnimationFrame(function () {
          raf2 = null;
          gSpot.style.setProperty("--mx", (gx * window.innerWidth).toFixed(0) + "px");
          gSpot.style.setProperty("--my", (gy * window.innerHeight).toFixed(0) + "px");
          if (phone) phone.style.transform =
            "perspective(900px) rotateX(" + (-ny * 7).toFixed(2) + "deg) rotateY(" + (nx * 7).toFixed(2) + "deg)";
          if (glow) glow.style.transform =
            "translateX(calc(-50% + " + (nx * 28).toFixed(1) + "px)) translateY(" + (ny * 22).toFixed(1) + "px)";
        });
      });
    }

    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      /* iOS: motion access needs a user gesture */
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "motion-chip";
      chip.textContent = "✦ Enable motion";
      document.body.appendChild(chip);
      chip.addEventListener("click", function () {
        chip.remove();
        DeviceOrientationEvent.requestPermission().then(function (state) {
          if (state === "granted") startGyro();
        }).catch(function () {});
      });
    } else {
      startGyro();
    }
  }
})();
