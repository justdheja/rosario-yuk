# Requirements Specification: Rosario-Yuk (Web Application)

**Document Version:** 1.0.0  
**Status:** Approved / Source of Truth  
**Target Platform:** Responsive Web App (Desktop, Tablet, Mobile / PWA)  
**Primary Audience:** Catholic faithful, prayer groups, and individuals seeking structured, contemplative guidance for praying the Holy Rosary.

---

## 1. Executive Summary & Vision

**Rosario-Yuk** is an accessible, serene, and reverent digital companion designed to guide users through the complete Holy Rosary prayer (*Doa Rosario*). The application bridges traditional Catholic devotions with modern digital accessibility—providing step-by-step bead-by-bead prayer progression, automated day-and-mystery detection based on user geolocation/IP timezone, bilingual localization (Indonesian default, English supported), and customizable, high-legibility typography suitable for quiet contemplation in various lighting environments.

---

## 2. Core Functional Requirements

### 2.1 Multi-Language Support (Localization)
- **Supported Languages:**
  - **Indonesian (Bahasa Indonesia)** – *Default*.
  - **English (US / Catholic standard)**.
- **Scope of Localization:**
  - Complete prayers: *Tanda Salib* / Sign of the Cross, *Aku Percaya* / Apostles' Creed, *Bapa Kami* / Our Father, *Salam Maria* / Hail Mary, *Kemuliaan* / Glory Be, *Doa Fatima* / Fatima Prayer, *Salam Ya Ratu* / Hail Holy Queen, Concluding Prayer, Litany of Loreto (*Litani Santa Perawan Maria*).
  - All 4 Mysteries and their 5 decades each, including scripture references and brief contemplative reflections.
  - UI labels, controls, settings, and guidance hints.
- **Language Switcher:**
  - Accessible via a prominent, persistent toggle in the navigation bar/header.
  - Switching language preserves the user's active prayer position and selected mystery without reloading or resetting state.
  - User preference persisted in `localStorage`.

---

### 2.2 Full-Length Rosary Prayer Flow
The application must support the complete, traditional Catholic Rosary sequence:

1. **Introductory Prayers:**
   - Sign of the Cross (*Tanda Salib*)
   - Apostles' Creed (*Aku Percaya / Credo*)
   - Our Father (*Bapa Kami*) for the intentions of the Holy Father
   - 3x Hail Mary (*Salam Maria*) for the virtues of Faith, Hope, and Charity
   - Glory Be (*Kemuliaan*)
   - Fatima Prayer (*Doa Fatima: "Ya Yesus yang baik..." / "O My Jesus..."*)
2. **The 5 Decades (Peristiwa 1–5):**
   - For each decade:
     - Announcement of the Mystery decade & brief meditation/scripture reading.
     - 1x Our Father (*Bapa Kami*)
     - 10x Hail Mary (*Salam Maria*) with interactive bead progress
     - 1x Glory Be (*Kemuliaan*)
     - 1x Fatima Prayer (*Doa Fatima*)
3. **Concluding Prayers:**
   - Hail Holy Queen (*Salam Ya Ratu / Salve Regina*)
   - Concluding Rosary Prayer (*"Marilah berdoa: Ya Allah, Putra-Mu yang tunggal..." / "Let us pray: O God, whose only begotten Son..."*)
   - *(Optional/Toggle)* Litany of Loreto (*Litani Santa Perawan Maria*)
   - Final Sign of the Cross (*Tanda Salib Penutup*)

---

### 2.3 Mysteries of the Holy Rosary & Day Mapping
The Rosary features the four standard mysteries mapped according to traditional Roman Catholic liturgical guidance:

| Day of Week | Assigned Mystery (English) | Assigned Mystery (Indonesian) | Liturgical Notes |
| :--- | :--- | :--- | :--- |
| **Monday** | Joyful Mysteries | Peristiwa Gembira | Standard |
| **Tuesday** | Sorrowful Mysteries | Peristiwa Sedih | Standard |
| **Wednesday** | Glorious Mysteries | Peristiwa Mulia | Standard |
| **Thursday** | Luminous Mysteries | Peristiwa Terang | Mysteries of Light (St. JPII) |
| **Friday** | Sorrowful Mysteries | Peristiwa Sedih | Standard |
| **Saturday** | Joyful Mysteries | Peristiwa Gembira | Traditional Marian Saturday |
| **Sunday** | Glorious Mysteries | Peristiwa Mulia | Default (Ordinary Time / Easter) |
| *(Seasonal)* | *Joyful* (Advent & Christmas Sundays) / *Sorrowful* (Lent Sundays) | Manual override supported |

#### The Mysteries & Decades Detail:
1. **Joyful Mysteries (*Peristiwa Gembira*):**
   - 1st: The Annunciation (*Maria menerima kabar gembira dari Malaikat Gabriel*)
   - 2nd: The Visitation (*Maria mengunjungi Elisabet, saudarinya*)
   - 3rd: The Nativity (*Yesus dilahirkan di Betlehem*)
   - 4th: The Presentation (*Yesus dipersembahkan dalam Bait Allah*)
   - 5th: The Finding in the Temple (*Yesus diketemukan dalam Bait Allah*)
2. **Luminous Mysteries (*Peristiwa Terang*):**
   - 1st: The Baptism in the Jordan (*Yesus dibaptis di Sungai Yordan*)
   - 2nd: The Wedding at Cana (*Yesus menyatakan diri-Nya dalam pesta pernikahan di Kana*)
   - 3rd: The Proclamation of the Kingdom (*Yesus memberitakan Kerajaan Allah dan menyerukan bertobat*)
   - 4th: The Transfiguration (*Yesus menampakkan kemuliaan-Nya di atas gunung*)
   - 5th: The Institution of the Eucharist (*Yesus menetapkan Ekaristi Kudus*)
3. **Sorrowful Mysteries (*Peristiwa Sedih*):**
   - 1st: The Agony in the Garden (*Yesus berdoa kepada Bapa-Nya di taman Getsemani*)
   - 2nd: The Scourging at the Pillar (*Yesus didera*)
   - 3rd: The Crowning with Thorns (*Yesus dimahkotai duri*)
   - 4th: The Carrying of the Cross (*Yesus memanggul salib-Nya ke bukit Golgota*)
   - 5th: The Crucifixion and Death (*Yesus wafat di salib*)
4. **Glorious Mysteries (*Peristiwa Mulia*):**
   - 1st: The Resurrection (*Yesus bangkit dari antara orang mati*)
   - 2nd: The Ascension (*Yesus naik ke surga*)
   - 3rd: The Descent of the Holy Spirit (*Roh Kudus turun atas para Rasul*)
   - 4th: The Assumption (*Maria diangkat ke surga*)
   - 5th: The Coronation of Mary (*Maria dimahkotai di surga*)

- **Manual Override:**
  - Users must have the option to manually select any of the four mysteries regardless of the current day.
  - Quick badges showing "Today's Mystery" vs. selected mystery.

---

### 2.4 Geolocation & IP Date Detection
- **Objective:** Determine the user's real-time local date and day of the week to automatically select the matching Rosary mystery, accurately handling cross-border timezones, traveler contexts, and midnight transitions.
- **Detection Architecture & Hierarchy:**
  1. **Primary (IP-based Geolocation & Timezone lookup):**
     - Fetch client approximate location/timezone via lightweight IP lookup (e.g., Cloudflare trace `/cdn-cgi/trace`, `ipapi.co`, or ip-api service fallback).
     - Resolves canonical IANA Timezone (e.g., `Asia/Jakarta`, `America/New_York`).
  2. **Secondary (Browser Geolocation API):**
     - If requested or available, standard `navigator.geolocation` can verify device coordinates for timezone resolution.
  3. **Fallback (Device System Clock):**
     - Use client JavaScript `Intl.DateTimeFormat().resolvedOptions().timeZone` and `new Date()` as immediate offline fallback.
- **User Transparency:**
  - Subtle indicator in the UI: *"Today is [Day, Date] ([Timezone]) &bull; [Assigned Mystery]"*.
  - Manual mystery selector remains available at all times.

---

### 2.5 Typography, Legibility & Font Size Controls
- **Font Selection:**
  - Highly legible, elegant typography suited for liturgical readings (e.g., Serif: *Merriweather*, *Lora*, or *Literata* for prayer texts; Sans-Serif: *Plus Jakarta Sans* or *Inter* for interface controls).
  - High x-height, generous line-height (`1.6` to `1.85`), and optimal line length (55–75 characters per line) to prevent eye strain.
- **Font Size Adjustment Controls:**
  - Direct UI buttons: Decrease font size (`A-`), Reset to default (`A`), Increase font size (`A+`).
  - Supported scale levels:
    - **Small:** 14px base
    - **Medium (Default):** 16px–18px base
    - **Large:** 20px–22px base
    - **Extra Large (Elderly / Low-vision friendly):** 24px–28px base
  - Real-time instant preview without layout clipping.
  - Selected font size persisted in `localStorage`.

---

### 2.6 Interactive Prayer Experience & Guidance
- **Two Viewing Modes:**
  1. **Step-by-Step Guided Mode (Interactive Beads):**
     - Virtual Rosary decade progress ring / bead tracker (visual 10-bead progress bar).
     - Tap/click "Next Bead" / "Previous Bead" or keyboard arrow keys (`Right` / `Space` to advance).
     - Haptic feedback (on supported mobile devices via `navigator.vibrate`) when completing a bead or decade.
     - Full prayer text displayed clearly for each step with prominent title and biblical reflection.
  2. **Continuous Full-Text Reading Mode:**
     - Clean, continuous scrolling format containing the entire prayer from start to finish.
     - Collapsible or sticky table of contents / decade jump links.
- **Screen Wake Lock API:**
  - Option to prevent the device screen from turning off/sleeping during prayer sessions (`navigator.wakeLock`).
- **Visual Themes & Lighting:**
  - Light Mode (Crisp parchment / warm white).
  - Dark Mode (OLED-friendly dark gray / candlelit amber accents for dark churches or night prayer).
  - High contrast ratio adhering to WCAG 2.1 AA standards.

---

## 3. Non-Functional Requirements

### 3.1 Performance & Offline Capabilities
- **Load Time:** Initial load under 1.5 seconds on 4G networks.
- **PWA (Progressive Web App):**
  - Web App Manifest and Service Worker support for offline caching.
  - Once loaded, prayer texts, translations, and guides must work 100% offline (e.g., inside churches, pilgrimage sites, retreats without cellular reception).

### 3.2 Accessibility (a11y)
- WCAG 2.1 Level AA compliance.
- Full keyboard navigability (Tab, Enter, Space, Arrow keys).
- Screen-reader friendly semantic HTML (`<main>`, `<article>`, `<nav>`, `aria-live` for bead updates).

### 3.3 Privacy & Security
- Geolocation and IP lookups are performed solely on the client-side for timezone resolution; no location data or personal identifiers are stored or logged.
- HTTPS enforced throughout.

---

## 4. Technical Architecture Recommendations

- **Frontend Framework:** Next.js (App Router) or Vite + React with TypeScript.
- **Styling:** Tailwind CSS with `@tailwindcss/typography` for beautiful reading formats.
- **Icons:** Lucide React (serene, modern icons for crosses, audio, settings, fonts).
- **Internationalization:** `next-intl` or lightweight React Context-based i18n dictionary.
- **State Management:** Lightweight React Context or Zustand (handling: current step, active mystery, language, font size, theme).
- **Storage:** Browser `localStorage` for user preferences (language, font size, theme, last prayer step).

---

## 5. Acceptance Criteria & Verification Matrix

| ID | Requirement | Verification Method |
| :--- | :--- | :--- |
| **AC-01** | Bilingual Support | User can switch between Indonesian (default) and English; prayer text and UI instantly update. |
| **AC-02** | Complete Prayer Flow | Verification that all introductory, 5 decades, and concluding prayers are fully present with no omitted verses. |
| **AC-03** | Day & Mystery Matching | Opening the app on a given day assigns the correct Mystery according to Roman Catholic tradition. |
| **AC-04** | Manual Mystery Selection | User can switch to any other mystery (Joyful, Luminous, Sorrowful, Glorious) at any time. |
| **AC-05** | IP/Geolocation Timezone | Date is calculated against user's local timezone (IP / Geolocation fallback), verified via simulated timezones. |
| **AC-06** | Font Size Adjustment | User can scale prayer font size up and down with instant visual update; preference survives page reload. |
| **AC-07** | High-Legibility Typography | Texts use clean, high-contrast, distraction-free typography with comfortable line height. |
| **AC-08** | Offline Availability | Prayer texts and core navigation function seamlessly when offline. |
