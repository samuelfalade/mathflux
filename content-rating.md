# MathFlux — IARC Content Rating Answers

Use these answers in the Play Console Content Rating questionnaire.

Expected rating: **Everyone (E)** / **PEGI 3** / **ACB G**.

---

## Category questions

| Question | Answer |
|----------|--------|
| **Violence** — Does your app contain any violent imagery or themes? | **No** |
| **Realistic violence** | No |
| **Cartoon / fantasy violence** | No |
| **Sexual content** | **No** |
| **Nudity** | No |
| **Sexual themes** | No |
| **Language** — Profanity or crude humor? | **No** |
| **Controlled substances** — References to alcohol, tobacco, or drugs? | **No** |
| **Gambling** — Real-money gambling or simulated gambling? | **No** |
| **Crude humor** | **No** |
| **Horror / fear elements** | No |

---

## Interactive elements

| Question | Answer |
|----------|--------|
| **Users interact with each other** | **Yes — limited** (anonymous score updates only; no chat, no messaging, no profiles, no user-generated text/images) |
| **Shares user-generated content** | **No** |
| **Shares user's location** | **No** |
| **Allows users to access the internet** | **Yes** (Firebase connection for multiplayer) |
| **Enables digital purchases** | **Yes** (token packs via Google Play Billing) |
| **Contains user-generated text, audio, or images** | **No** |

---

## Why the "limited interaction" answer is correct

MathFlux multiplayer is anonymous and structured:
- Users join rooms via a 6-character code (no friend lists, no usernames)
- The only data exchanged is: numeric scores, question indices, anonymous Firebase UID
- There is no chat, voice, or text input
- Players cannot see each other's identifying info — only their position on the live leaderboard
- All multiplayer data auto-deletes when sessions end

Google considers this "**indirect** social interaction" — typically rated **Everyone** in North America and **PEGI 3** in Europe.

---

## Privacy questions

| Question | Answer |
|----------|--------|
| Personal information collection | **No** (only anonymous UID) |
| Account creation | **No** (anonymous auth only) |
| Account deletion | N/A (no accounts to delete) |
| Children's privacy compliance | **Yes** (no PII, no ads, no tracking) |

---

## Designed for Families (optional but recommended)

| Question | Answer |
|----------|--------|
| Will you participate in the Designed for Families program? | **Yes** |
| Primary target age group | **Ages 5 & under**, **6-8**, **9-12** (educational app) |
| Does your app appeal to children? | **Yes** (math game with kid-friendly visuals) |
| Confirm compliance with the Designed for Families policy | **Yes** |

Joining Designed for Families surfaces MathFlux in the Family section of Play Store, which is good distribution for an educational app.
