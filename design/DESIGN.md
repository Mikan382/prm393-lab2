# Design Brief & Token System

> **Tài liệu:** `design/DESIGN.md`  
> **Dự án:** FtaCode Mobile App — Campus Quick Food Ordering  
> **Môn học:** PRM323 — Lab 2  
> **Mục đích:** Bản mô tả thiết kế quy chuẩn định nghĩa toàn bộ Tokens (Màu sắc, Typography, Spacing, Bo góc, Elevation) và quy tắc Component làm tài liệu cơ sở gửi cho Google Stitch và thiết lập Figma Variables.

---

## 1. Phong cách thiết kế & Giọng điệu thương hiệu (Design Tone & Aesthetics)

* **Tên ứng dụng:** FtaCode Mobile (Trực thuộc hệ sinh thái ẩm thực nhanh FtaCode).
* **Định vị & Cảm xúc:** Trẻ trung, tràn đầy năng lượng, ấm áp và thân thiện với đời sống sinh viên năng động.
* **Nguyên tắc thẩm mỹ (Visual Principles):**
  1. **Ấm cúng & Kích thích vị giác:** Sử dụng tông màu cam ấm `#F69D39` kết hợp màu nâu cacao trầm `#622B14` và nền kem sữa `#FFF5E5`.
  2. **Rõ ràng & Tối giản (Clutter-free):** Bố cục thẻ (Card-based layout) với khoảng trắng thoáng đãng, phân cấp thị giác mạch lạc giúp sinh viên quét nhanh món ăn trong 3 giây.
  3. **Công thái học di động (Mobile Ergonomics):** Mọi nút bấm tương tác chính đều tập trung ở nửa dưới màn hình (Thumb zone), kích thước chạm tối thiểu đạt chuẩn $48 \times 48\text{ dp}$.

---

## 2. Hệ thống Design Tokens (Token-based Design System)

Toàn bộ các giá trị bên dưới được thiết lập làm **Figma Variables** và là căn cứ để ánh xạ sang Flutter `ThemeData`. Cấm gán cứng giá trị tùy ý trong các component.

### 2.1 Bảng màu quy chuẩn (Color Tokens)

| Token Name | Hex Code | Giá trị RGB | Vai trò & Cách áp dụng |
| :--- | :---: | :---: | :--- |
| `color-primary` | `#F69D39` | `246, 157, 57` | Màu chủ đạo thương hiệu: Dùng cho nút CTA chính, badge nổi bật, tab đang chọn. |
| `color-primary-dark` | `#E0851F` | `224, 133, 31` | Trạng thái Pressed / Hover của nút chính. |
| `color-primary-container`| `#FFE8CC` | `255, 232, 204` | Màu nền phụ cho chip danh mục đang chọn, container nổi bật. |
| `color-secondary` | `#E0C375` | `224, 195, 117` | Màu vàng cát ấm: Dùng cho icon ngôi sao đánh giá, tag khuyến mãi. |
| `color-background` | `#FFF5E5` | `255, 245, 229` | Màu nền chung toàn bộ màn hình (Warm Creamy Ivory) giảm chói mắt. |
| `color-surface` | `#FFFFFF` | `255, 255, 255` | Nền các thẻ sản phẩm (Food Cards), Bottom Sheet, Modal Dialog. |
| `color-surface-subtle` | `#FFF9F0` | `255, 249, 240` | Nền ô nhập liệu TextField, nền thẻ tóm tắt thanh toán. |
| `color-text-primary` | `#622B14` | `98, 43, 20` | Màu chữ chính: Nâu đậm espresso, tương phản 8.2:1 trên nền kem (Đạt WCAG AAA). |
| `color-text-secondary` | `#966A55` | `150, 106, 85` | Màu chữ phụ: Mô tả món ăn, giá phụ, nhãn phụ (Đạt WCAG AA 4.6:1). |
| `color-text-disabled` | `#C8B3A6` | `200, 179, 166` | Màu chữ vô hiệu hóa hoặc placeholder ô nhập. |
| `color-border` | `#EEDBCA` | `238, 219, 202` | Màu viền thẻ, viền ô nhập Text field, đường kẻ phân cách (Divider). |
| `color-success` | `#16A34A` | `22, 163, 74` | Trạng thái đơn hoàn tất, áp dụng voucher thành công, thanh toán thành công. |
| `color-error` | `#DC2626` | `220, 38, 38` | Báo lỗi nhập sai, hết món, cảnh báo lỗi thanh toán. |
| `color-white` | `#FFFFFF` | `255, 255, 255` | Chữ trắng trên nền nút cam Primary. |

---

### 2.2 Thang kiểu chữ (Typography Tokens)

* **Font gia đình:** `Nunito` (Google Fonts: tròn trịa, hiện đại, dễ đọc trên màn hình điện thoại).

| Token Name | Cỡ chữ (Size) | Độ đậm (Weight) | Chiều cao dòng (Line-height) | Ứng dụng |
| :--- | :---: | :---: | :---: | :--- |
| `type-display-large` | 24 sp | Bold (700) | 32 dp | Tiêu đề màn hình chính Onboarding, Mã số nhận đơn #A-28 |
| `type-headline` | 20 sp | Bold (700) | 28 dp | Tiêu đề App bar, Tiêu đề mục "Món ngon hôm nay" |
| `type-title-medium` | 16 sp | SemiBold (600) | 24 dp | Tên món ăn trong Card, Tiêu đề Dialog |
| `type-title-small` | 14 sp | SemiBold (600) | 20 dp | Tiêu đề nhóm Topping, Nhãn phương thức thanh toán |
| `type-body-large` | 15 sp | Regular (400) | 22 dp | Mô tả nguyên liệu món ăn, hướng dẫn lấy đồ |
| `type-body-medium` | 14 sp | Regular (400) | 20 dp | Văn bản nội dung cơ bản toàn app (Tối thiểu 14sp theo rubric) |
| `type-label-large` | 14 sp | Bold (700) | 20 dp | Chữ trên nút bấm CTA (Button text) |
| `type-label-small` | 12 sp | Medium (500) | 16 dp | Tag thể loại món, nhãn tab Bottom Navigation |

---

### 2.3 Thang khoảng cách (Spacing & Layout Grid Tokens)

Dựa trên hệ thống lưới cơ sở $4\text{ dp}$ (4-point base grid):

| Token Name | Giá trị (dp) | Ứng dụng |
| :--- | :---: | :--- |
| `spacing-xxs` | 4 dp | Khoảng cách giữa icon và chữ trong badge, khoảng cách nhỏ |
| `spacing-xs` | 8 dp | Khoảng cách giữa các chip danh mục, padding trong input |
| `spacing-sm` | 12 dp | Khoảng cách giữa các dòng thông tin trong Card |
| `spacing-md` | 16 dp | Padding lề chuẩn màn hình mobile (Screen horizontal padding), khoảng cách giữa các Card |
| `spacing-lg` | 24 dp | Khoảng cách giữa các khối nội dung lớn (Sections) |
| `spacing-xl` | 32 dp | Khoảng cách trước nút CTA ghim đáy, margin tiêu đề trang |
| `spacing-xxl` | 48 dp | Vùng chạm tối thiểu (Minimum touch target) cho nút bấm icon và button |

---

### 2.4 Bo góc & Đổ bóng (Border Radius & Elevation Tokens)

* **Corner Radius Tokens:**
  * `radius-sm` (8 dp): Bo góc ô nhập Text field, chip lọc danh mục.
  * `radius-md` (12 dp): Bo góc nút bấm chính (Button), thẻ thông tin nhỏ.
  * `radius-lg` (16 dp): Bo góc thẻ món ăn (Food Item Card), Popup Dialog.
  * `radius-xl` (24 dp): Bo góc Bottom Sheet giỏ hàng, thẻ tóm tắt thanh toán.
  * `radius-full` (999 dp): Nút tròn tăng giảm số lượng (+/-), badge thông báo.
* **Elevation / Shadow Tokens:**
  * `elevation-none`: `0px 0px 0px rgba(0,0,0,0)` (Flat style cho ô nhập liệu).
  * `elevation-1`: `0px 2px 8px rgba(98, 43, 20, 0.08)` (Card món ăn, App bar nổi nhẹ).
  * `elevation-2`: `0px 4px 16px rgba(98, 43, 20, 0.12)` (Nút CTA ghim đáy, Bottom Navigation Bar).
  * `elevation-3`: `0px 8px 24px rgba(98, 43, 20, 0.18)` (Modal Dialog, Thông báo Toast).

---

## 3. Quy tắc cấu thành Component (Component Construction Rules)

1. **Quy tắc Auto Layout 100%:** Mọi component và màn hình bắt buộc sử dụng Figma Auto Layout (Direction, Spacing, Padding, Fill container / Hug contents). Nghiêm cấm đặt vị trí tọa độ tuyệt đối tự do.
2. **Quy tắc Vùng chạm cảm ứng (Touch Target Rule):** Mọi nút bấm, icon bấm được đều phải bọc trong khung tối thiểu $48 \times 48\text{ dp}$.
3. **Quy tắc Biến thể trạng thái (Variants & States):** Mỗi component phải có đầy đủ các variant bắt buộc trong Section 7 của đề bài (Default, Pressed, Disabled, Loading, Error...).
4. **Quy tắc Không dựa vào màu sắc đơn thuần (Accessibility Non-color Rule):**
   * Trạng thái thành công/thất bại luôn phải đi kèm biểu tượng (Checkmark hoặc Cảnh báo X) bên cạnh màu xanh/đỏ.
   * Text field báo lỗi luôn có đường viền đỏ kèm dòng chữ mô tả lỗi cụ thể bên dưới.
