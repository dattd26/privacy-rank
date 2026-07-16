# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.5] - 2026-07-16

### Fixed
- Sửa lỗi layout của nút Show More / Show Less trong `ComparisonTable.tsx` khiến icon mũi tên bị xuống hàng trên một số kích thước màn hình.
- Chuyển đổi component `Button` sang sử dụng `inline-flex` làm kiểu hiển thị mặc định để căn chỉnh hoàn hảo các phần tử con (text và icon).

### Changed
- Thiết kế lại phong cách nút Show More / Show Less lấy cảm hứng từ NEVERHACK với border-radius dạng viên thuốc hoàn toàn (`rounded-full`), bóng đổ inset tinh tế và hiệu ứng hover nhấc nhẹ (`-translate-y-2px`) kèm bóng đổ mượt mà.

## [1.0.4] - 2026-07-16

### Changed
- Thiết kế lại các nhãn năng lực (capability tags) trong bảng so sánh VPN (`ComparisonTable.tsx`) lấy cảm hứng từ ngôn ngữ thiết kế tối giản của ExpressVPN.
- Tạo tệp CSS riêng `src/sections/ComparisonTable.css` định nghĩa chi tiết nhãn capability với các cặp màu lục/đỏ sẫm và nền nhạt đạt chỉ số tương phản cao của chuẩn WCAG 2.2 AA.
- Bổ sung hiệu ứng di chuột (micro-animations) mượt mà giúp giao diện sống động và trực quan hơn.

## [1.0.3] - 2026-07-16

### Changed
- Đổi hướng nội dung website từ phong cách "Security Lab" nặng về kỹ thuật sang phong cách "Top VPN Services" thân thiện với người dùng phổ thông.
- Cập nhật phần Hero (`Hero.tsx`): Đổi tiêu đề và đoạn mô tả tập trung vào lợi ích cho người dùng (streaming, gaming, privacy). Thay thế widget phân tích bảo mật cũ bằng Thẻ xếp hạng VPN số #1 (NordVPN) trực quan với điểm số, số sao, các tính năng chính và nút xem đánh giá đi kèm hiệu ứng đếm số & hiện dần bằng GSAP.
- Cập nhật phần Bento Grid (`BentoFeatures.tsx`): Thay thế các tính năng mã hóa chuyên sâu bằng 4 lợi ích thiết thực nhất (One-Click Privacy, Global Streaming, Fast Speeds, và No-Logs Policy).
- Cập nhật Header (`Header.tsx`): Đổi các liên kết điều hướng sang các cụm từ phổ thông hơn (VPN Reviews, Best VPNs, Guides, About Us).

## [1.0.2] - 2026-07-16

### Added
- Bổ sung thêm 7 VPN mới vào dữ liệu so sánh (CyberGhost, Proton VPN, PIA, IPVanish, Mullvad, Windscribe, VyprVPN) nâng tổng số dịch vụ hỗ trợ lên 10 VPN.
- Thêm cơ chế Show More / Show Less giúp giới hạn hiển thị mặc định 5 VPN đầu tiên và mở rộng danh sách khi click, đi kèm hiệu ứng trượt/mờ dần bằng GSAP.
- Thêm nhãn tên VPN dạng văn bản ngay bên dưới logo để tăng độ nhận diện.
- Tích hợp Premium Popup/Modal "Get Deal" ngẫu nhiên ưu đãi 40% - 70%, tự động copy Coupon và chuyển hướng đến trang chủ chính thức của VPN.

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
