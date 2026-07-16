# VPN Review Platform UI/UX Research — PrivacyRank

This document analyzes leading cybersecurity platforms and VPN review sites, focusing on **NEVERHACK** and **ExpressVPN** design references, to inform the identity of **PrivacyRank**.

---

## 1. Competitive Analysis

We analyzed the design systems and layouts of two premier references provided: **NEVERHACK** (sovereign cybersecurity feel) and **ExpressVPN** (friendly authority).

### A. NEVERHACK — Clinical Tech & Sovereign Security
*   **Vibe & Aesthetic**: Stark, clinical, and operator-grade. It feels like an encrypted terminal on cold marble.
*   **Color Strategy**: Light theme. A near-white canvas (#f6f7fc) paired with deep navy charcoal type (#0a0f1f). A single **Sovereign Violet** (#6b2bea) is reserved exclusively for AI atmospheres and interactive surfaces, and **Alert Crimson** (#dc2626) is strictly reserved for critical threat warnings.
*   **Typography**: Single geometric-humanist font family (Roobert) handling everything from 11px captions to 72px display headings. Tight tracking on headings (-0.03em).
*   **Key Learnings**: 
    *   **Color Scarcity**: Restricting colors to 95% neutrals and 5% accents makes the color choice extremely meaningful.
    *   **Shape Discipline**: Pill buttons (9999px radius) for interactive items vs. precise rounded corners (14px radius) for content cards.

### B. ExpressVPN — Fortress Garden at Dawn
*   **Vibe & Aesthetic**: Spacious, trusted, and approachable authority.
*   **Color Strategy**: Light theme. Midnight Navy (#001d2f) typography on a Soft Canvas (#f7f8f9) backdrop. A single decision color — **Forest Teal** (#0f866c) — acts as the primary CTA trigger, creating high-converting buttons.
*   **Typography**: Proprietary serif FS Kim for strong display headings, paired with Inter for all functional UI and body elements.
*   **Key Learnings**:
    *   **Decision Accent**: Single decisive action color for transactional buttons (Teal) ensures users know exactly what action to take next.
    *   **Soft Materiality**: Large border radii (24px to 34px) on cards paired with diffuse, center-anchored shadows create a soft, protective feel.

---

## 2. PrivacyRank Identity & Applied Decisions

By combining NEVERHACK’s clinical precision with ExpressVPN’s clean layout authority, we define the identity of **PrivacyRank** as the **"Analytic laboratory of digital sovereignty."**

We will apply the following core rules:

1.  **Light, Clinical Theme**:
    *   Canvas: **Frost Canvas** (`#f8fafc`) to keep the page clean and airy.
    *   Surfaces: White cards (`#ffffff`) with 1px slate-hairline borders (`#e2e8f0`) to stand out clearly.
2.  **Electric Cobalt Decision Color**:
    *   Instead of NEVERHACK's violet or ExpressVPN's teal, **PrivacyRank** uses **Electric Cobalt** (`#1d4ed8`) as its primary CTA driver. This represents digital strength and high-speed data tunnels.
3.  **Strict Semantic Badge Feedback**:
    *   We use **Cyber Jade** (`#10b981`) for positive traits (Pros, high speed) and **Signal Crimson** (`#ef4444`) for negatives (Cons, IP leaks).
4.  **Shape Consistency Lock**:
    *   Interactive controls (buttons, input fields) are locked at `8px` (`rounded-lg`) to evoke stability and cryptographic structure. Cards are locked at `16px` (`rounded-2xl`).
5.  **Data-First Visuals**:
    *   Use monospace font (**JetBrains Mono**) for ratings, server counts, pings, and ranking indices. This reinforces the analytical, tested laboratory vibe.
