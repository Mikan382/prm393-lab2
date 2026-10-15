# AI Design Log: Prompts, Iterations, Critique & Decisions

> **Tài liệu:** `ai/ai-design-log.md`  
> **Dự án:** FtaCode Mobile App — Campus Quick Food Ordering  
> **Môn học:** PRM323 — Lab 2  

---

## 1. Khai báo công cụ AI (AI Disclosure)

Theo đúng quy định mục 5 của đề bài Lab 2, danh sách các công cụ AI được sử dụng trong suốt quá trình thiết kế giao diện được công bố minh bạch:

1. **Google Stitch (`stitch.withgoogle.com`):** Sử dụng để tạo bản phác thảo giao diện ban đầu (Generative UI) cho các màn hình chính dựa trên bản mô tả thiết kế `DESIGN.md`.
2. **Google Gemini (Advanced / Flash) & Claude:** Đóng vai trò Trợ lý AI Phản biện Độc lập (AI Critique Assistant), đánh giá giao diện dựa trên 10 Usability Heuristics của Jakob Nielsen và WCAG 2.1 AA.
3. **Antigravity AI Assistant:** Hỗ trợ cấu trúc tài liệu đặc tả, kiểm tra logic User Flows và sinh mã tự động hóa Figma.

---

## 2. Giai đoạn 1: Prompt sinh UI ban đầu trên Google Stitch (Initial UI Generation)

### 2.1 Câu Prompt nguyên văn (Verbatim Prompt)
Câu prompt dưới đây được thiết kế tỉ mỉ, đưa đầy đủ thông tin về Persona, Nhiệm vụ, Nền tảng di động, Ràng buộc và Phong cách thiết kế từ `DESIGN.md`:

```text
Act as a Principal Mobile Product Designer. Design a modern, appetizing mobile food ordering application named "FtaCode" tailored specifically for university students with short 15-minute breaks on campus.

Platform & Canvas:
- Mobile App UI, Screen resolution 360 x 800 dp (compact portrait layout).
- Follow Material Design 3 guidelines with comfortable thumb-zone reachability.

Primary Screens to Generate:
1. Home / Discovery Screen (SCR-02): Top app bar showing campus kiosk location "Kiosk Tòa Alpha", search bar with placeholder "Tìm Tacos, Mì trộn, Nước...", quick horizontal category pills ("Tất cả", "Tacos giòn", "Mì trộn cay", "Đồ uống"), promotional hero banner "Combo Giờ Vàng - Giảm 15%", and vertical list of food cards with appetizing images, cook time badge ("⚡ 3-5m"), price, and quick add (+) button. Bottom navigation bar with 4 tabs: Trang chủ, Thực đơn, Đơn hàng, Cá nhân.
2. Product Detail Screen (SCR-04): Large hero food image for "Combo Tacos Bò Phô Mai", price 39.000đ, preparation time "~4m", description, spice level selector (3 radio options: Không cay, Cay vừa, Siêu cay), topping checkboxes (Thêm Phô mai +8k, Trứng ốp la +5k), chef note input, and a sticky bottom bar with quantity counter (+/-) and a bold CTA button "Thêm vào giỏ hàng • 39.000đ".
3. Cart & Order Summary (SCR-05): List of selected items with quantity adjusters, Campus Pickup time selector dropdown ("Lấy ngay (~7m)" or "Hẹn giờ 09:20"), student voucher input field with "Áp dụng" button, cost summary breakdown, and bottom CTA button "Tiến hành thanh toán".
4. Pickup Status / Order Tracking (SCR-07): Large bold pickup pass token "#A-28", dynamic QR code for kiosk scanner, 4-step progress tracker (Đã nhận đơn -> Đang chuẩn bị -> Sẵn sàng -> Hoàn tất), and kiosk hotline button.

Design System & Aesthetics:
- Color Palette: Warm creamy background (#FFF5E5), Primary warm energetic orange (#F69D39), Deep espresso brown text for maximum contrast (#622B14), secondary golden yellow (#E0C375), crisp white surface cards (#FFFFFF).
- Typography: Rounded friendly modern sans-serif (Nunito style).
- Layout: Generous whitespace, clean card elevation, touch targets strictly minimum 48x48 dp.
```

### 2.2 Kết quả ban đầu từ Stitch (Initial Stitch Output)
* **Google Stitch Project ID:** `18314376874619200698` ("FtaCode - Campus Quick Food Ordering")
* **AI Model Engine:** Google Stitch with `GEMINI_3_8_FLASH`
* **Ngày tạo:** 15/10/2026.
* **Đánh giá ban đầu:** AI sinh ra được bố cục màn hình chuẩn Mobile 360x800dp với màu sắc ấm áp, thẻ sản phẩm bắt mắt, tuân thủ Material Design 3 và Design Tokens từ `DESIGN.md`.
* **Minh chứng ảnh chụp:** Được lưu trữ tại thư mục:  
  * [`assets/stitch/01_initial_stitch_home.png`](../assets/stitch/01_initial_stitch_home.png)
  * [`assets/stitch/02_initial_stitch_detail.png`](../assets/stitch/02_initial_stitch_detail.png)
  * [`assets/stitch/03_initial_stitch_cart.png`](../assets/stitch/03_initial_stitch_cart.png)
  * [`assets/stitch/04_initial_stitch_tracking.png`](../assets/stitch/04_initial_stitch_tracking.png)
* **Mã nguồn HTML/CSS gốc do Stitch biên dịch:**
  * [`assets/stitch/html/01_home_screen.html`](../assets/stitch/html/01_home_screen.html)
  * [`assets/stitch/html/02_food_detail.html`](../assets/stitch/html/02_food_detail.html)
  * [`assets/stitch/html/03_cart_checkout.html`](../assets/stitch/html/03_cart_checkout.html)
  * [`assets/stitch/html/04_order_tracking.html`](../assets/stitch/html/04_order_tracking.html)
  * [`assets/stitch/html/05_payment_error.html`](../assets/stitch/html/05_payment_error.html)
  * [`assets/stitch/html/06_empty_cart.html`](../assets/stitch/html/06_empty_cart.html)

---

## 3. Giai đoạn 2: Ba vòng lặp tinh chỉnh có ý nghĩa (3 Meaningful AI Iterations)

Theo quy định nghiêm ngặt của đề bài, mỗi vòng lặp dưới đây đều nhắm vào một vấn đề UX cụ thể có tên gọi rõ ràng, tuyệt đối không yêu cầu "làm đẹp hơn" chung chung.

---

### Vòng lặp 1 (Iteration 1): Khắc phục độ tương phản thấp & Phân cấp thị giác nút CTA yếu
* **Tên vấn đề UX cụ thể:** *Low Contrast & Weak Visual Hierarchy on Primary Action Button*.
* **Phân tích vấn đề:** Ở phiên bản ban đầu, nút "Thêm vào giỏ hàng" và nút "Tiến hành thanh toán" sử dụng chữ màu trắng trên nền cam nhạt (#FFB366), tỷ lệ tương phản chỉ đạt $2.3:1$ (không đạt chuẩn WCAG AA). Ngoài ra, nút CTA bị chìm lẫn vào danh sách nội dung cuộn bên dưới thay vì ghim cố định ở đáy màn hình.
* **Prompt tinh chỉnh đưa vào AI:**
  ```text
  Iteration 1 Refinement:
  Fix low contrast and visual hierarchy on SCR-04 (Product Detail) and SCR-05 (Cart):
  1. Increase the primary orange button color to a rich saturated #F69D39 and use bold white text (Nunito Bold, 15sp) with an elevation drop shadow to ensure WCAG AA compliance.
  2. Pin the CTA button inside a sticky bottom navigation bar with a solid white background (#FFFFFF) and top border (#EEDBCA), ensuring it stays fixed above the fold while content scrolls behind it.
  3. Update dynamic price feedback directly on the button text: "Thêm vào giỏ hàng • 47.000đ".
  ```
* **Kết quả cải tiến:** Nút CTA được ghim đáy vững chắc, màu sắc nổi bật, độ tương phản đạt chuẩn kiểm thử, sinh viên cầm 1 tay có thể bấm ngay lập tức.
* **Minh chứng ảnh Before / After:**  
  * Ảnh trước (Before): [`assets/stitch/iteration1_before_cta_contrast.png`](../assets/stitch/iteration1_before_cta_contrast.png)  
  * Ảnh sau (After): [`assets/stitch/iteration1_after_cta_contrast.png`](../assets/stitch/iteration1_after_cta_contrast.png)

---

### Vòng lặp 2 (Iteration 2): Xử lý trạng thái rỗng và phòng ngừa lỗi thao tác trong Giỏ hàng
* **Tên vấn đề UX cụ thể:** *Missing Empty State & Lack of Error Prevention during Cart Operations*.
* **Phân tích vấn đề:** Phiên bản ban đầu của Stitch không có màn hình khi giỏ hàng trống (Empty State) khiến màn hình trắng trơn nếu người dùng xóa hết món. Ngoài ra, khi người dùng bấm giảm số lượng về 0 thì món ăn lập tức biến mất mà không có cảnh báo xác nhận, dễ gây xóa nhầm.
* **Prompt tinh chỉnh đưa vào AI:**
  ```text
  Iteration 2 Refinement:
  Address missing empty state and accidental item deletion in SCR-05 (Cart):
  1. Design an engaging Empty State variant: Display a friendly illustration of an empty lunch plate, clear headline "Giỏ hàng của bạn đang đói 🌮", supportive body text "Hãy chọn món ăn yêu thích để nạp năng lượng cho ca học tiếp theo nhé!", and a prominent Primary Button "Khám phá thực đơn ngay" navigating back to SCR-02.
  2. Implement an error prevention pattern: When quantity decreases from 1 to 0, trigger a confirmation micro-dialog "Bạn có chắc chắn muốn xóa món này khỏi giỏ hàng?" with distinct Cancel and Confirm Destructive buttons.
  ```
* **Kết quả cải tiến:** Giỏ hàng có trải nghiệm liền mạch, không bị rơi vào ngõ cụt; phòng ngừa triệt để việc sinh viên bấm nhầm nút trừ khi đang đi bộ.
* **Minh chứng ảnh Before / After:**  
  * Ảnh trước (Before): [`assets/stitch/iteration2_before_empty_state.png`](../assets/stitch/iteration2_before_empty_state.png)  
  * Ảnh sau (After): [`assets/stitch/iteration2_after_empty_state.png`](../assets/stitch/iteration2_after_empty_state.png)

---

### Vòng lặp 3 (Iteration 3): Bổ sung màn hình phục hồi lỗi thanh toán (Error & Recovery Path)
* **Tên vấn đề UX cụ thể:** *Dead-end Error State during Network & Payment Failure (Flow 3)*.
* **Phân tích vấn đề:** Khi giả lập tình huống mất mạng hoặc ví MoMo/Ngân hàng bị timeout, phiên bản ban đầu chỉ hiển thị 1 thông báo toast màu đỏ "Thanh toán thất bại" rồi đưa người dùng về lại trang chủ và XÓA SẠCH giỏ hàng. Đây là lỗi UX nghiêm trọng (Dead-end) gây ức chế tột độ cho sinh viên.
* **Prompt tinh chỉnh đưa vào AI:**
  ```text
  Iteration 3 Refinement:
  Design a dedicated Error Recovery Screen (SCR-06-ERR) for Payment & Connectivity Failures:
  1. Do NOT discard user cart data. Show an empathetic headline "Chưa thể hoàn tất thanh toán" with plain language explanation: "Giao dịch qua ví điện tử tạm thời bị gián đoạn hoặc hết thời gian chờ (60s). Giỏ hàng của bạn vẫn được giữ nguyên."
  2. Provide two clear action paths:
     - Secondary Button: "Thử lại thanh toán online" (Retries gateway connection).
     - Primary Button: "Chuyển sang trả tiền mặt tại quầy Kiosk" (Instant conversion to Cash on Pickup so order is preserved and student can proceed immediately to class).
  ```
* **Kết quả cải tiến:** Đáp ứng 100% yêu cầu của Flow 3 (Error & Recovery Path), người dùng không bao giờ bị mất dữ liệu đặt món.
* **Minh chứng ảnh Before / After:**  
  * Ảnh trước (Before): [`assets/stitch/iteration3_before_error_handling.png`](../assets/stitch/iteration3_before_error_handling.png)  
  * Ảnh sau (After): [`assets/stitch/iteration3_after_error_handling.png`](../assets/stitch/iteration3_after_error_handling.png)

---

## 4. Giai đoạn 3: Phản biện UX độc lập bằng AI (AI-based UX Critique)

Chúng tôi đã sử dụng Trợ lý AI đóng vai trò Chuyên gia đánh giá Heuristic độc lập với câu lệnh kiểm thử:
> *"Hãy đánh giá nghiêm khắc toàn bộ thiết kế giao diện của FtaCode Mobile dựa trên 10 Usability Heuristics của Jakob Nielsen, tiêu chuẩn tiếp cận WCAG 2.1 và đặc điểm của Persona sinh viên bận rộn."*

### 5 Phát hiện phản biện cụ thể gắn với từng màn hình:

1. **Phát hiện 1 (Màn hình SCR-02 - Heuristic #1: Visibility of system status):**
   * *Đánh giá của AI:* Màn hình chính hiển thị tên quán nhưng không hiển thị trạng thái quầy Kiosk đang "Mở cửa" hay "Đang tạm dừng nhận đơn vì quá tải". Sinh viên có thể chọn món xong xuôi mới phát hiện quầy đóng cửa.
2. **Phát hiện 2 (Màn hình SCR-04 - Heuristic #6: Recognition rather than recall):**
   * *Đánh giá của AI:* Khi chọn các loại topping có tính phí (ví dụ: Trứng non +8k), số tiền không tự động cộng dồn vào giá nút bấm bên dưới, buộc sinh viên phải tự làm phép tính cộng trong đầu.
3. **Phát hiện 3 (Màn hình SCR-05 - Heuristic #9: Help users recognize & recover from errors):**
   * *Đánh giá của AI:* Ô nhập mã giảm giá khi nhập sai mã chỉ đổi viền sang màu đỏ mà không có câu thông báo nguyên nhân cụ thể (ví dụ: "Mã đã hết hạn" hay "Mã chỉ áp dụng cho đơn trên 50k").
4. **Phát hiện 4 (Màn hình SCR-07 - Heuristic #3: User control and freedom):**
   * *Đánh giá của AI:* Màn hình theo dõi đơn hàng không có nút Hủy đơn nhanh hoặc chỉnh sửa trong vòng 60 giây đầu sau khi đặt. Nếu sinh viên lỡ tay bấm nhầm địa điểm Kiosk thì không có cách nào can thiệp.
5. **Phát hiện 5 (Màn hình SCR-03 - WCAG 2.5.5: Target Size):**
   * *Đánh giá của AI:* Các icon lọc danh mục ở góc nhỏ chỉ có kích thước $20 \times 20\text{ dp}$, quá nhỏ để sinh viên vừa đi bộ vừa bấm chính xác.

---

## 5. Giai đoạn 4: Bảng quyết định của sinh viên (Decision Record)

Theo đúng quy định của rubric: Mỗi quyết định đều ghi rõ Chấp nhận (Accept), Chỉnh sửa (Modify) hoặc Từ chối (Reject) kèm lý do gắn với Persona, Heuristic hoặc Ràng buộc kỹ thuật thực tế:

| # | Đề xuất từ bản AI Critique | Quyết định của nhóm | Lý do & Lập luận giải thích chi tiết |
| :---: | :--- | :---: | :--- |
| **01** | Bổ sung Banner trạng thái Kiosk (Mở cửa / Đóng cửa) tại `SCR-02`. | **CHẤP NHẬN (Accept)** | **Căn cứ Heuristic #1:** Rất cần thiết. Tránh việc sinh viên tốn thời gian chọn món khi quầy bếp đang quá tải. Đã bổ sung badge "🟢 Kiosk Tòa Alpha: Đang nhận món (Lấy trong 5-7p)". |
| **02** | Cộng dồn giá tiền động trực tiếp lên nút CTA `SCR-04`. | **CHẤP NHẬN (Accept)** | **Căn cứ Heuristic #6 & Persona:** Sinh viên có ngân sách giới hạn cần biết chính xác mình sẽ trả bao nhiêu tiền ngay khi tích chọn topping phô mai/trứng. |
| **03** | Thêm nhãn lỗi giải thích rõ lý do không dùng được mã voucher tại `SCR-05`. | **CHẤP NHẬN (Accept)** | **Căn cứ Heuristic #9 & WCAG 1.4.1:** Không dùng màu đỏ đơn thuần. Đã thêm icon `(!)` và text cảnh báo cụ thể: *"Mã FTASV20 chỉ áp dụng cho đơn từ 40.000đ"*. |
| **04** | Cho phép hủy đơn hàng vô điều kiện bất kỳ lúc nào tại `SCR-07`. | **CHỈNH SỬA (Modify)** | **Căn cứ Ràng buộc Nghiệp vụ Kiosk:** Nếu khách hủy đơn khi bếp đã làm xong thức ăn nóng thì quán sẽ bị tổn thất chi phí. Nhóm quyết định: **Chỉ cho phép hủy trong vòng 60 giây đầu tiên** (khi bếp chưa bấm "Bắt đầu nấu") kèm popup cảnh báo xác nhận. |
| **05** | Tăng kích thước icon lọc danh mục lên $48 \times 48\text{ dp}$ tại `SCR-03`. | **CHẤP NHẬN (Accept)** | **Căn cứ WCAG 2.5.5 & Công thái học:** Đảm bảo toàn bộ touch target đạt chuẩn $48\text{ dp}$ để sinh viên thao tác bằng 1 tay khi đang di chuyển. |
