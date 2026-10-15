# PRM323 - Lab 2: Thiết kế UI/UX có hỗ trợ AI (Google Stitch → Figma)

> **Dự án:** FtaCode Mobile App — Ứng dụng đặt đồ ăn nhanh & đồ uống trong khuôn viên trường đại học  
> **Khóa học:** PRM323 — Lập trình ứng dụng đa nền tảng (Cross-Platform Application Development)  
> **Sinh viên thực hiện:** PRM393-Lab2 Team / Student  
> **Figma Design Link:** [FtaCode Figma Project (View Access)](https://www.figma.com/design/7PHZ75SvS5tH9vvY1TFy7E/Untitled) *(Mở quyền View cho tất cả những ai có link)*  
> **Cấu trúc Repository:** Tuân thủ 100% chuẩn quy định của đề bài Lab 2 PRM323  

---

## 1. Giới thiệu tổng quan (Project Overview)
**FtaCode Mobile** là ứng dụng di động hỗ trợ sinh viên và giảng viên đặt món ăn nhanh (Tacos, Mì trộn cay, đồ uống) tại các Kiosk/Căn tin trong khuôn viên trường đại học. Ứng dụng giải quyết triệt để vấn đề chen lấn, xếp hàng dài trong 15 phút giải lao giữa các ca học thông qua tính năng đặt trước, hẹn giờ nhận tại quầy (Campus Pickup) và thanh toán một chạm.

* **Đối tượng mục tiêu (Persona một dòng):** Sinh viên đại học có lịch học dày đặc, thời gian nghỉ giải lao ngắn (10–15 phút), thường xuyên dùng điện thoại một tay khi di chuyển giữa các phòng học.
* **Quy mô thiết kế:** 8 màn hình di động chuẩn (kích thước khung 360 × 800 dp), 3 luồng người dùng hoàn chỉnh (bao gồm 1 luồng xử lý lỗi và phục hồi thanh toán), hệ thống Design System token-based và 9 nhóm component tái sử dụng.
* **Lưu ý kỹ thuật:** Theo quy định đề bài Lab 2, bài nộp không bao gồm mã nguồn Flutter (`Coding: None`). Toàn bộ quy trình thiết kế, nhật ký AI và tài liệu Handoff được lưu trữ đầy đủ trong repository này.

---

## 2. Danh sách công cụ AI sử dụng (AI Tools Disclosure)
Theo yêu cầu mục 5 của đề bài, toàn bộ công cụ AI được sử dụng trong dự án đều được khai báo minh bạch:

| Công cụ AI | Mục đích sử dụng | Bằng chứng / Vết lưu |
| :--- | :--- | :--- |
| **Google Stitch** (`stitch.withgoogle.com`) | Sinh giao diện ban đầu (Generative UI) cho mobile app từ bản mô tả thiết kế `DESIGN.md`. | Lưu ảnh chụp tại `assets/stitch/` và nhật ký tại `ai/ai-design-log.md` |
| **Gemini / AI Critique Assistant** | Đóng vai trò chuyên gia phản biện UI/UX theo 10 Usability Heuristics của Nielsen và tiêu chuẩn khả năng tiếp cận WCAG 2.1 AA. | Chi tiết 5 phát hiện và bảng quyết định tại `ai/ai-design-log.md` |
| **Claude / Antigravity AI** | Hỗ trợ phân tích Information Architecture, xây dựng kịch bản Flutter Handoff và tự động hóa Design System plugin. | Toàn bộ tài liệu trong `ux/`, `design/`, `handoff/` |

---

## 3. Bản đồ vị trí sản phẩm bàn giao (Deliverables Map)

Tất cả các sản phẩm bắt buộc theo barem điểm của Lab 2 được tổ chức và liên kết như sau:

| STT | Giai đoạn | Tên tệp / Thư mục | Nội dung bàn giao |
| :---: | :--- | :--- | :--- |
| 1 | **Phân tích UX & Persona** | [`ux/persona.md`](./ux/persona.md) | Chân dung người dùng chi tiết, bối cảnh, pain point, problem statement và chỉ số đo lường thành công. |
| 2 | **Kiến trúc & Luồng người dùng** | [`ux/user-flow.md`](./ux/user-flow.md) | Information Architecture 8 màn hình, 3 sơ đồ Flow (Mermaid), bảng ánh xạ luồng sang màn hình. |
| 3 | **Bản mô tả thiết kế** | [`design/DESIGN.md`](./design/DESIGN.md) | Design brief gửi cho AI: Bảng màu FtaCode, kiểu chữ Nunito, thang khoảng cách 4-8-16, quy tắc bo góc. |
| 4 | **Đặc tả màn hình** | [`design/screen-spec.md`](./design/screen-spec.md) | Ý đồ thiết kế, phân cấp thị giác và nội dung hiển thị của từng màn hình. |
| 5 | **Quyết định & Accessibility** | [`design/design-decisions.md`](./design/design-decisions.md) | 10 quyết định thiết kế quan trọng nhất kèm lập luận + Bảng kiểm chứng Accessibility (WCAG contrast, touch target 48dp, kiểm tra 360/412dp). |
| 6 | **Nhật ký AI & Phản biện** | [`ai/ai-design-log.md`](./ai/ai-design-log.md) | Prompt nguyên văn, kết quả ban đầu, 3 vòng lặp cải tiến có ảnh Before/After, 5 phát hiện AI phản biện và bảng quyết định. |
| 7 | **Tài liệu Flutter Handoff** | [`handoff/flutter-handoff.md`](./handoff/flutter-handoff.md) | Hướng dẫn triển khai cho lập trình viên Flutter: 6 mục cho từng màn hình + Bảng ánh xạ Token $\to$ `ThemeData` và Component $\to$ Widget. |
| 8 | **Thư mục hình ảnh Asset** | [`assets/`](./assets/) | `assets/stitch/` (ảnh AI Stitch) và `assets/figma/` (ảnh export từ Figma). |

---

## 4. Tóm tắt 6 Trang trong File Figma

File thiết kế Figma được tổ chức chuẩn xác theo cấu trúc 6 trang bắt buộc của đề bài:
* **`01 User Flow`**: Toàn bộ sơ đồ luồng người dùng được ánh xạ trực quan đến từng màn hình di động.
* **`02 Wireframe`**: Khung bố cục mộc (low-fidelity) của toàn bộ 8 màn hình giúp thẩm định phân cấp thông tin trước khi lên màu.
* **`03 Final UI`**: 8 màn hình hoàn chỉnh kích thước 360 × 800 dp, hiển thị trạng thái thực tế cùng các biến thể bên cạnh.
* **`04 Design System`**: Toàn bộ Design Tokens được định nghĩa bằng Figma Variables (Colors, Typography, Spacing, Radius, Elevation).
* **`05 Components`**: Thư viện 9 nhóm Reusable Components dựng bằng Auto Layout và Variants có đầy đủ trạng thái (Button, TextField, Card, BottomNav, AppBar, Dialog, Loading, Empty, Error).
* **`06 Prototype`**: Bản mẫu tương tác clickable 3 flows hoàn chỉnh, không có ngõ cụt, có dialog overlay và hiệu ứng loading chuyển cảnh.
