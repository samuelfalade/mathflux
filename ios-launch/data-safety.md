# MathFlux — Play Console Data Safety Answers

Paste these into the Data Safety form, section by section.

---

## Data collection & sharing

| Question | Answer |
|----------|--------|
| Does your app collect or share any of the required user data types? | **Yes** |
| Is all of the user data collected by your app encrypted in transit? | **Yes** (Firebase enforces TLS) |
| Do you provide a way for users to request that their data be deleted? | **Yes** — via email to samuelfalade@gmail.com |
| Is your app committed to following the Play Families Policy? | **Yes** |

---

## Data types collected

### Personal info
| Type | Collected? | Shared? |
|------|-----------|---------|
| Name | No | — |
| Email address | No | — |
| User IDs | **Yes** | No |
| Address | No | — |
| Phone number | No | — |
| Race / ethnicity | No | — |
| Political / religious beliefs | No | — |
| Sexual orientation | No | — |
| Other info | No | — |

### Financial info
| Type | Collected? |
|------|-----------|
| User payment info | **No** (Google Play Billing handles all payment data) |
| Purchase history | **No** (we never store receipts on our servers) |
| Credit score | No |
| Other financial info | No |

### Health & fitness, Messages, Photos / Videos, Audio files, Files / docs, Calendar, Contacts
| All of the above | **No** |

### Location
| Type | Collected? |
|------|-----------|
| Approximate location | **No** |
| Precise location | **No** |

### App activity
| Type | Collected? |
|------|-----------|
| App interactions | **No** (no analytics) |
| In-app search history | No |
| Installed apps | No |
| Other user-generated content | No |
| Other actions | No |

### Web browsing
| All | **No** |

### App info & performance
| Type | Collected? |
|------|-----------|
| Crash logs | **No** (no crash reporting SDK integrated) |
| Diagnostics | No |
| Other app performance | No |

### Device or other IDs
| Type | Collected? |
|------|-----------|
| Device or other IDs | **No** (we use only the anonymous Firebase Auth UID, which is treated as a User ID) |

---

## Per-type details: User IDs (the only collected category)

| Question | Answer |
|----------|--------|
| Is this data collected, shared, or both? | **Collected only** (not shared with third parties) |
| Is this data processed ephemerally? | **No** — persists for the duration of a multiplayer match, then auto-deleted via Firebase `onDisconnectRemoveValue` |
| Is collecting this data required for your app, or can users choose whether it's collected? | **Optional** (only collected when the user opts into multiplayer) |
| Why is this user data collected? | • **App functionality** — for matching players in the same room and tracking their scores during a match |

---

## Security practices

| Question | Answer |
|----------|--------|
| Is your data encrypted in transit? | **Yes** — Firebase Realtime Database enforces TLS 1.2+ |
| Do you provide a way for users to request their data be deleted? | **Yes** — users email samuelfalade@gmail.com; data is deleted within 7 days |
| Have you completed the Google Play Families Policy self-assessment? | **Yes** |

---

## Source-of-truth references

These answers are derived directly from the app code. Verify before submitting:

- **Anonymous auth** — `MathFlux-Flutter/lib/services/multiplayer_service.dart`, `ensureSignedIn()` method (also FluxCore iOS Swift equivalent)
- **Firebase room schema** — `rooms/{code}/players/{uid}/{score, joinedAt, questionIndex}` (no PII)
- **Auto-deletion** — `onDisconnectRemoveValue` set on both room and player nodes
- **No analytics SDKs** — verify `pubspec.yaml` has no firebase_analytics, no google_mobile_ads, no segment, etc.
- **IAP via Google Play Billing only** — `pubspec.yaml` includes `in_app_purchase` (^3.2.0). Receipts handled by the platform, not stored in our backend.
