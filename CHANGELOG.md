# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.0] - 2026-07-17

### Added
- Tạo route mới `/reviews` hiển thị danh sách các VPN đánh giá, tích hợp Breadcrumbs điều hướng, bộ lọc hệ điều hành trực quan (All, Windows, Mac, Android, iOS), thông tin tóm tắt và nút mở Deal Modal lấy ưu đãi.
- Tạo route động `/reviews/[slug]` hỗ trợ hiển thị bài đánh giá chuyên sâu. Viết nội dung đánh giá chi tiết chuẩn chuyên gia (American English) cho NordVPN bao gồm: Quick Verdict, Pros & Cons trực quan hóa bằng màu Jade/Crimson, thanh tiến trình rating các hạng mục (Speed, Security, v.v.), bảng thông số kỹ thuật đầy đủ và FAQ Accordion tương tác.
- Tạo component `Breadcrumbs` (`src/components/Breadcrumbs.tsx`) hỗ trợ điều hướng phân cấp giữa các trang con để tránh người dùng bị rơi vào ngõ cụt.
- Tích hợp Table of Contents (mục lục) động trong sidebar của trang chi tiết bài viết, tự động theo dõi và đánh dấu phần đang đọc khi cuộn trang nhờ hook `IntersectionObserver`.
- Tạo component `DealModal` (`src/components/DealModal.tsx`) dùng chung để đóng gói toàn bộ giao diện và logic tương tác của popup nhận Coupon (bao gồm copy coupon, tự động chuyển hướng và quản lý trạng thái sao chép), loại bỏ hoàn toàn các khối mã nguồn trùng lặp trong `ComparisonTable`, trang danh sách `/reviews` và trang chi tiết `/reviews/[slug]` để đảm bảo tính nhất quán (DRY).
- Thêm giao diện "Under Audit / Detailed Review Coming Soon" thiết kế cao cấp cho các VPN khác trong danh sách (Surfshark, ExpressVPN) khi người dùng truy cập trang chi tiết của chúng.

### Changed
- Tái cấu trúc cấu trúc Next.js App Router bằng cách di chuyển `Header` và `Footer` vào `RootLayout` (`src/app/layout.tsx`) để dùng chung cho tất cả các trang.
- Cập nhật `Header.tsx` sử dụng Next.js `Link` và hook `usePathname` để tự động bôi màu active tương ứng cho link "Home" hoặc "VPN Reviews".
- Chuyển các anchor link nội bộ trên Header sang dạng `/ #features`, `/ #faq`, v.v. để tự động chuyển về trang chủ và cuộn đến đúng phần khi người dùng click từ trang con.
- Cập nhật `PROJECT_CONTEXT.md` mô tả cấu trúc đa trang mới.

## [1.1.0] - 2026-07-16

### Added
- Tích hợp **Dark Mode** toàn trang sử dụng chiến lược CSS custom property override — tất cả components tự động chuyển đổi theme mà không cần sửa đổi riêng lẻ.
- Tạo `ThemeProvider` context (`src/components/ThemeProvider.tsx`) với `useTheme` hook, hỗ trợ persist theme vào `localStorage` và auto-detect `prefers-color-scheme` hệ thống.
- Tạo `ThemeToggle` button (`src/components/ThemeToggle.tsx`) với **GSAP radial ripple animation** ấn tượng: vòng tròn phóng to từ nút bấm phủ toàn viewport → theme chuyển giữa animation → ripple fade out → page elements stagger-settle. Icon Sun/Moon xoay 360° + scale bounce.
- Thêm inline script anti-FOUC trong `<head>` đọc `localStorage` và set class `dark` trước first paint, loại bỏ flash trắng khi load trang.
- Bổ sung dark mode overrides cho capability tags (ComparisonTable.css) và NEVERHACK button styles.
- Cập nhật `docs/design.md` với bảng Dark Mode Palette đầy đủ token mapping và Theme Toggle Component specification.

### Changed
- Cập nhật tài liệu `README.md` phần Bảng màu (Colors) thể hiện chi tiết các mã màu tương ứng cho cả Light Mode và Dark Mode (Midnight Slate, Frost Canvas, Pure White, Electric Cobalt, các màu Wash) để đồng bộ với `docs/design.md`.
- Cập nhật `globals.css` với dark mode token overrides cho tất cả surfaces, borders, text, accents, wash backgrounds, và shadows.
- Cập nhật `layout.tsx` wrap `ThemeProvider` và thêm `suppressHydrationWarning`.
- Cập nhật `Header.tsx` tích hợp `ThemeToggle` component (desktop: bên trái nút Compare Deals; mobile: bên cạnh hamburger menu).
- Sửa BentoFeatures Cell 2 (dark card) — hardcode white text colors thay vì dùng semantic tokens để tránh invisible text khi dark mode.
- Sửa Hero logo container dùng theme-aware tokens thay vì hardcoded `bg-slate-50`.
- Sửa ComparisonTable modal overlay dùng `bg-black/60` thay vì `bg-midnight-slate/60` để hoạt động đúng ở cả 2 themes.
- Đổi `hover:border-slate-300` thành `hover:border-cool-gray/40` trong VPN comparison cards.

### Fixed
- Sửa lỗi vỡ và tràn bố cục (layout breaking) trên di động cho bảng so sánh `ComparisonTable.tsx`:
  - Giảm padding ngoài cùng từ `px-8` thành `px-4 md:px-8` và padding trong card từ `p-6` thành `p-4 sm:p-6` để tăng diện tích hiển thị trên màn hình nhỏ.
  - Chuyển đổi hệ thống lưới hiển thị 4 thông số (speed, privacy, security, unblocking) từ 2 cột tĩnh thành 1 cột trên mobile và 2 cột trên tablet/desktop (`grid-cols-1 sm:grid-cols-2`) để tránh đè chữ.
  - Đổi chiều rộng nút "Get Deal" từ `w-full sm:w-auto` thành `w-auto` trên mobile để nằm cân đối trong hàng flex-row chứa giá tiền mà không đẩy lùi phần tử khác.
  - Thu nhỏ Rank Badge (vòng tròn số thứ tự) thành `w-10 h-10` và Logo ảnh thành `w-24` trên màn hình di động để tiết kiệm không gian.
  - Khắc phục lỗi tràn văn bản của mã coupon dài trong Exclusive Deal Modal bằng cách chuyển sang dạng xếp chồng dọc (`flex-col`) trên di động và thêm thuộc tính `break-all` cho coupon code text.

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
- Completed core source code implementation for the **PrivacyRank** homepage at the root directory using Next.js (App Router), Tailwind CSS v4, and GSAP.
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
