# Bài Test Thiết Kế UI/UX – Trang Top VPN
## Thông tin ứng viên:
**Đơn vị tuyển dụng:** Công ty TNHH Truyền thông và Quảng cáo H2T  
**Vị trí ứng tuyển:** Thực tập sinh Fullstack  
**Họ và tên ứng viên:** Trần Đức Đạt  
**Thời gian thực hiện:** < 48 giờ  

Dự án **PrivacyRank** là một nền tảng xếp hạng và đánh giá VPN dành cho thị trường global.

---

## 1. Kết quả Nghiên cứu UI/UX (UI Research)

Tôi đã phân tích sâu các tài liệu phong cách thiết kế và trải nghiệm người dùng hàng đầu từ các thương hiệu uy tín: **NEVERHACK**, **ExpressVPN**, và **SafetyDetectives**.

*   **[NEVERHACK](https://neverhack.com/) (Sovereign Cybersecurity)**: Bố cục được chia bằng các đường kẻ mảnh thay vì dùng nhiều card có bóng đổ, kết hợp với font sans-serif đơn giản để tạo cảm giác hiện đại và chuyên nghiệp.
*   **[ExpressVPN](https://www.expressvpn.com/) (Spacious Authority)**: Tham khảo cách sắp xếp thông tin so sánh VPN rõ ràng và dễ theo dõi. Bảng xếp hạng được trình bày trực quan, kết hợp các mục ưu điểm/nhược điểm (Pros & Cons), giá khuyến mãi và nhãn như "Editor's Choice", giúp người dùng nhanh chóng so sánh và lựa chọn VPN phù hợp.
*   **[SafetyDetectives](https://www.safetydetectives.com/) (Audited Knowledge & Rich Readability)**: Nghiên cứu cách tổ chức hệ thống bài viết đánh giá chi tiết (Reviews Blog) chuẩn SEO. Đặc trưng bởi cấu trúc layout 2 cột khoa học: Cột chính rộng tập trung vào nội dung đọc có tính thuyết phục cao; cột phụ (Sticky Sidebar) chứa tóm tắt thông số kỹ thuật nhanh (Quick Specs) cùng mục lục liên kết nhanh(giúp di chuyển giữa các phần trong trang) giúp người đọc không bị lạc lối. Sử dụng cỡ chữ lớn dễ đọc (base 17px, line-height 27.2px) và các khối Ưu điểm và Nhược điểm trực quan màu sắc, FAQ Accordion tương tác.

**Quyết định áp dụng cho PrivacyRank**:
*   Xây dựng giao diện lai hợp giữa **Top VPN Services** (Thân thiện, hiện đại) và **Security Lab** (Kỹ thuật, minh bạch).
*   Sử dụng nền phẳng sáng **Frost Canvas** (`#f8fafc`) và các card thông tin màu trắng (`#ffffff`) với viền hairline Slate mỏng (`#e2e8f0`) để tạo không gian sạch sẽ, định hình tính bảo mật.
*   Sử dụng màu **Electric Cobalt** (`#1d4ed8`) làm màu nhấn hành động chính (primary CTA) để định hướng hành vi bấm nút một cách rõ rệt.
*   **Thiết kế trang Review chi tiết**: Áp dụng layout 2 cột của **SafetyDetectives** cho `/reviews/[slug]` (NordVPN) với sidebar sticky chứa Quick Specs và Table of Contents sử dụng `IntersectionObserver` tự động bắt vị trí cuộn trang. Tối ưu kích thước chữ đọc chính lên `text-base md:text-[17px] leading-relaxed` để tăng cường readability và giảm tỷ lệ thoát trang. Tích hợp Pagination phân trang và Breadcrumbs định hướng để người dùng không rơi vào ngõ cụt.


---

## 2. Hệ thống Thiết kế (Design System)

Chi tiết thiết kế được ghi nhận tại [docs/design.md](file:///d:/CNPM/TopVPNServices2026/privacy-rank/docs/design.md):

*   **Bảng màu (Colors)**:
    *   **Midnight Slate** (`--color-midnight-slate`):
        *   Light Mode: ![](https://placehold.co/15x15/090d16/090d16.png) `Midnight Slate` (`#090d16`) - Màu chữ chính và các đường nét điều hướng cốt lõi.
        *   Dark Mode: ![](https://placehold.co/15x15/f1f5f9/f1f5f9.png) `Slate Light` (`#f1f5f9`) - Chữ phản cực (inverted text).
    *   **Frost Canvas** (`--color-frost-canvas`):
        *   Light Mode: ![](https://placehold.co/15x15/f8fafc/f8fafc.png) `Frost Canvas` (`#f8fafc`) - Nền trang web mát lạnh.
        *   Dark Mode: ![](https://placehold.co/15x15/0a0e1a/0a0e1a.png) `Deep Navy-Black` (`#0a0e1a`) - Nền trang web tối.
    *   **Pure White** (`--color-pure-white`):
        *   Light Mode: ![](https://placehold.co/15x15/ffffff/ffffff.png) `Pure White` (`#ffffff`) - Nền card, menu điều hướng và footer.
        *   Dark Mode: ![](https://placehold.co/15x15/111827/111827.png) `Slate Dark` (`#111827`) - Nền card chế độ tối.
    *   **Electric Cobalt** (`--color-electric-cobalt`):
        *   Light Mode: ![](https://placehold.co/15x15/1d4ed8/1d4ed8.png) `Electric Cobalt` (`#1d4ed8`) - Màu hành động chính, nút bấm, liên kết tích cực.
        *   Dark Mode: ![](https://placehold.co/15x15/3b82f6/3b82f6.png) `Bright Cobalt` (`#3b82f6`) - Màu hành động làm nổi bật trên nền tối.
    *   **Cyber Jade** (`--color-cyber-jade`): ![](https://placehold.co/15x15/10b981/10b981.png) `Cyber Jade` (`#10b981`) - Giữ nguyên ở cả hai chế độ (Điểm cộng - Pros, chỉ số tốc độ tốt, badge an toàn).
    *   **Signal Crimson** (`--color-signal-crimson`): ![](https://placehold.co/15x15/ef4444/ef4444.png) `Signal Crimson` (`#ef4444`) - Giữ nguyên ở cả hai chế độ (Điểm trừ - Cons, rò rỉ bảo mật, IP leaks).
    *   **Wash Backgrounds** (Màu nền phụ nhạt):
        *   *Ice Wash* (`--color-ice-wash`): Light `#eff6ff` | Dark `#172554` (Nền xanh nhạt cho tag/badge).
        *   *Jade Wash* (`--color-jade-wash`): Light `#ecfdf5` | Dark `#052e16` (Nền pros/verified).
        *   *Crimson Wash* (`--color-crimson-wash`): Light `#fef2f2` | Dark `#450a0a` (Nền cons/security leak).
        *   *Amber Wash* (`--color-amber-wash`): Light `#fffbeb` | Dark `#451a03` (Nền rating/medium stats).

*   **Quy tắc Bo góc đồng nhất (Shape Consistency Lock)**:
    *   Nút bấm (buttons) và ô nhập liệu (inputs) được khóa ở góc bo tròn **8px** (`rounded-btn`/`rounded-inner`) để tạo cảm giác vững chãi, chắc chắn của công cụ an ninh.
    *   Các thẻ container (cards) được bo góc **16px** (`rounded-card`).
*   **Typography**:
    *   *Headings*: Sử dụng phông chữ **`Plus Jakarta Sans`** hình học, sắc nét.
    *   *Body*: Sử dụng phông chữ **`Inter`** tối ưu hóa khả năng đọc.
    *   *Metrics/Technical Data*: Sử dụng phông chữ monospace **`JetBrains Mono`** cho toàn bộ số liệu xếp hạng, ping, tốc độ và giá cả để tăng độ tin cậy và chính xác của phòng thí nghiệm kiểm định.

---

## 3. Giải thích Quyết định Thiết kế

### 3.1. Vì sao chọn bảng màu này?
*   Tôi chọn **Electric Cobalt** ![](https://placehold.co/15x15/1d4ed8/1d4ed8.png) kết hợp với **Midnight Slate** ![](https://placehold.co/15x15/090d16/090d16.png) trên nền **Frost Canvas** ![](https://placehold.co/15x15/f8fafc/f8fafc.png) vì đây là bảng màu đặc trưng của các tổ chức kiểm định an ninh mạng độc lập. Nó mang tính trung lập, đáng tin cậy và khoa học.
*   Việc hạn chế màu sắc sặc sỡ và chỉ dùng màu Cobalt ![](https://placehold.co/15x15/1d4ed8/1d4ed8.png) cho CTA chính giúp tăng tỷ lệ nhấp chuột (CTR) tối đa, vì nút mua hàng sẽ là điểm thu hút thị giác duy nhất trên màn hình phẳng.
*   Màu xanh ngọc (Cyber Jade) ![](https://placehold.co/15x15/10b981/10b981.png) và đỏ (Signal Crimson) ![](https://placehold.co/15x15/ef4444/ef4444.png) được dùng rất tiết chế để phân cấp rõ ràng giữa các điểm cộng và điểm trừ của dịch vụ.


### 3.2. Vì sao chọn typography này?
*   `Plus Jakarta Sans` mang lại nét hiện đại, công nghệ cao nhưng không quá thô cứng nhờ các đường bo góc chữ tinh tế.
*   `Inter` là phông chữ tiêu chuẩn quốc tế cho giao diện người dùng, giúp văn bản dài không bị rối và hiển thị sắc nét trên cả màn hình di động độ phân giải thấp.
*   `JetBrains Mono` đóng vai trò cực kỳ quan trọng trong việc truyền tải thông điệp "Dữ liệu được kiểm chứng". Khi người dùng nhìn thấy điểm số `9.8` hay tốc độ `984 Mbps` dưới dạng font monospace, họ sẽ liên tưởng ngay đến các báo cáo kỹ thuật từ các kỹ sư mạng, nâng cao tính trung thực của bài viết review.

### 3.3. Bạn lấy cảm hứng từ những nguồn nào?
*   *NEVERHACK*: Cảm hứng về bố cục bất đối xứng, đường kẻ mỏng chia cắt không gian, và sự tiết chế tối đa việc đổ bóng card.
*   *ExpressVPN*: Thông tin so sánh VPN, cách trình bày điểm tốt/điểm không tốt của các VPN và việc thiết lập nhãn "Editor's Choice" tạo sự tin cậy.

### 3.4. Nếu có thêm thời gian, bạn sẽ cải thiện gì?
*   **Deep-dive Comparison**: Triển khai thêm trang so sánh chi tiết, cho phép người dùng tick chọn 2-3 VPN và hiển thị một bảng so sánh kỹ thuật kéo dài (gồm loại server, giao thức mã hóa cụ thể, hỗ trợ thanh toán crypto, v.v.).
*   **Interactive Performance Graphs**: Thay vì các thanh tiến trình tĩnh, tôi sẽ sử dụng GSAP để vẽ biểu đồ đường SVG thể hiện biến thiên tốc độ thực tế của VPN theo các khung giờ trong ngày.
*   **Dark Mode Toggle**: Triển khai hệ thống chuyển đổi Dark/Light mode mượt mà bằng GSAP.
---

## 4. Tư duy Triển khai & Cấu trúc (Dev Thinking)

Mã nguồn được triển khai bằng **Next.js (App Router)** và **Tailwind CSS v4** kết hợp với **GSAP (và `@gsap/react`)** cho các chuyển động tương tác.

### Cấu trúc Component
Chi tiết tại [docs/architecture.md](file:///d:/CNPM/TopVPNServices2026/privacy-rank/docs/architecture.md):
*   `Header`: Thanh điều hướng cố định (72px), co giãn nhẹ và thêm bóng khi cuộn trang. Hỗ trợ hamburger menu trên thiết bị di động và các liên kết thân thiện với người dùng (VPN Reviews, Best VPNs, Guides, About Us).
*   `Hero`: Sử dụng bố cục bất đối xứng (asymmetric). Cột trái là tiêu đề H1 và CTA. Cột phải là một "Thẻ xếp hạng VPN số #1 (NordVPN)" trực quan với điểm số, số sao, các tính năng chính và nút xem đánh giá đi kèm hiệu ứng đếm số & hiện dần bằng GSAP.
*   `ComparisonTable`: Xếp hạng 10 VPN hàng đầu. Hiển thị mặc định 5 VPN đầu tiên và hỗ trợ ẩn/hiện danh sách bằng nút "Show More / Show Less" thiết kế kiểu capsule cao cấp. Thẻ ngang tự động responsive sang dạng dọc trên di động. Tích hợp Popup Modal "Get Deal" tặng coupon ngẫu nhiên và hỗ trợ copy tự động.
*   `BentoFeatures`: Bento Grid 4 ô giới thiệu 4 lợi ích thiết thực nhất (One-Click Privacy, Global Streaming, Fast Speeds, và No-Logs Policy) với chuyển động mượt mà bằng GSAP.
*   `FAQ`: Accordion các câu hỏi thường gặp, sử dụng GSAP animate chiều cao `height` mượt mà khi mở/đóng.
*   `Footer`: Thông tin bản quyền và tuyên bố miễn trừ trách nhiệm (Affiliate Disclosure).


---

## 5. Hướng dẫn Khởi chạy Dự án Local

Dự án Next.js nằm tại thư mục gốc của repository (thư mục chứa tệp `package.json` này).

1.  **Cài đặt thư viện phụ thuộc**:
    ```bash
    npm install
    ```
2.  **Khởi chạy môi trường Phát triển (Development)**:
    ```bash
    npm run dev
    ```
    *Giao diện sẽ chạy tại địa chỉ: [http://localhost:3000](http://localhost:3000)*
3.  **Kiểm tra Build Production**:
    ```bash
    npm run build
    ```

