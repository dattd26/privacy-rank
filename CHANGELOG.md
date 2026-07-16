# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.1] - 2026-07-16

### Fixed
- Sửa lỗi kẹt opacity trên các card so sánh và bento grid bằng cách chuyển đổi từ `gsap.from` sang `gsap.fromTo`. Lỗi xảy ra do React 18 Strict Mode chạy setup hooks hai lần, khiến GSAP chụp lại trạng thái opacity 0 (của các phần tử bị stagger) làm giá trị đích. Việc dùng `fromTo` đã cố định rõ ràng điểm bắt đầu (`opacity: 0`) và kết thúc (`opacity: 1`), loại bỏ hiện tượng các card phía sau bị mờ hoặc ẩn hẳn.
- Áp dụng tương tự cho animation tại phần Hero (`Hero.tsx`) để tăng độ tin cậy và chống lỗi kẹt trạng thái khi remount.

## [1.0.0] - 2026-07-16

### Added
- Completed core source code implementation for the **PrivacyRank** homepage in the `privacy-rank/` directory using Next.js (App Router), Tailwind CSS v4, and GSAP.
- Added `@phosphor-icons/react` and `@gsap/react` dependencies for premium icons and high-performance React animations.
- Created reusable components and layout sections:
  - `src/components/Button.tsx`: reusable button with transitions and contrast standards.
  - `src/sections/Header.tsx`: navigation bar with scroll state shrinking and mobile slide-over menu.
  - `src/sections/Hero.tsx`: asymmetric layout showing digital index value-prop and a real-time security stress-testing widget powered by GSAP.
  - `src/sections/ComparisonTable.tsx`: land-grade ranking rows with custom progress bars and pros/cons highlights.
  - `src/sections/BentoFeatures.tsx`: bento grid with custom details (verified log stamp, encryption specs, speed column charts, and connection switch diagnostic logs).
  - `src/sections/FAQ.tsx`: transparent accordion rows with GSAP height toggle animations.
  - `src/sections/Footer.tsx`: copyright and affiliate disclaimer footer.
- Added master `README.md` at root workspace containing candidate details, competitive analysis, design system answers, technical implementation logic, and local run instructions.

### Changed
- Rebranded the project name from "Top VPN Services 2026" to **PrivacyRank** based on user decision.
- Overhauled `docs/design.md` with new style tokens, CSS variables, and component guidelines inspired by NEVERHACK and ExpressVPN style references.
- Updated `docs/research.md` to analyze NEVERHACK and ExpressVPN styling, incorporating key takeaways into the PrivacyRank design decisions.
- Updated `docs/architecture.md` to reflect actual Next.js folder layout and component hierarchy.
- Updated `PROJECT_CONTEXT.md` to reflect the new PrivacyRank branding and font stacks.
