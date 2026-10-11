# UX Analysis: Persona & Problem Statement

> **Tài liệu:** `ux/persona.md`  
> **Dự án:** FtaCode Mobile App — Campus Quick Food Ordering  
> **Môn học:** PRM323 — Lab 2  

---

## 1. Primary Persona (Chân dung người dùng mục tiêu)

```mermaid
mindmap
  root((Nguyễn Minh Quân<br/>20 tuổi - Sinh viên K18))
    Bối cảnh
      Học 6 ca/tuần tại campus Hòa Lạc / ĐH Quốc Gia
      Giờ giải lao giữa 2 tiết chỉ có 15 phút
      Thường xuyên di chuyển giữa các tòa nhà (tòa Alpha sang tòa Beta)
    Mục tiêu
      Đặt bữa phụ/đồ uống nhanh để kịp ca học kế tiếp
      Biết trước thời gian quầy hoàn thành món để căn giờ xuống lấy
      Tùy chỉnh topping và ghi chú độ cay/ngọt không bị nhầm lẫn
    Nỗi đau Pain Points
      Xếp hàng chờ tại quầy căn tin mất 12-15 phút dẫn đến trễ giờ vào lớp
      Nhiều lần tới quầy thì món yêu thích đã hết hàng (hết Tacos bò, hết trân châu)
      Ứng dụng giao hàng ngoài (Grab/ShopeeFood) không thể giao sâu vào phòng học và tốn phí ship cao
    Thói quen thiết bị
      Sử dụng iPhone 13 (màn hình 6.1 inch, độ rộng tương đương 390-412dp)
      Thường xuyên dùng điện thoại bằng MỘT TAY (One-handed thumb zone) khi đang cầm tập tài liệu hoặc balo
      Thường dùng mạng 4G/Wifi trường học đôi khi chập chờn khi di chuyển trong thang máy
    Nhu cầu Accessibility
      Thường xuyên sử dụng ngoài trời dưới ánh nắng sân trường (cần tỷ lệ tương phản contrast cao, tối thiểu WCAG AA 4.5:1)
      Vùng bấm phím cảm ứng phải đủ lớn (tối thiểu 48×48 dp) để không bị bấm nhầm khi đang đi bộ nhanh
```

### Thông tin chi tiết Persona

* **Họ và tên:** Nguyễn Minh Quân
* **Độ tuổi:** 20 tuổi (Sinh viên năm 2, chuyên ngành Kỹ thuật phần mềm).
* **Vai trò:** Sinh viên học tập toàn thời gian tại khuôn viên trường đại học; thành viên câu lạc bộ học thuật.
* **Bối cảnh hằng ngày:**
  * Quân có thời khóa biểu học tập dày đặc với các ca học kéo dài 2 tiếng. Giờ nghỉ giải lao chuyển tiết chỉ kéo dài đúng **15 phút**.
  * Căn tin trung tâm và các Kiosk ăn vặt FtaCode luôn trong tình trạng quá tải vào khung giờ 09:15–09:30 và 11:30–12:00.
  * Quân chỉ có khoảng 5–7 phút để di chuyển giữa các tòa nhà và lấy thức ăn mang lên phòng học tiếp theo.
* **Mục tiêu chính (Goals):**
  1. Đặt nhanh 1 combo đồ ăn (ví dụ: Tacos phô mai + Trà chanh) ngay từ cuối tiết học trước.
  2. Nhận được thông báo chính xác số thứ tự nhận món và thời điểm món sẵn sàng tại quầy Kiosk để chỉ cần ghé ngang quẹt mã lấy đồ trong 30 giây.
  3. Thanh toán linh hoạt qua mã QR ngân hàng hoặc ví điện tử không cần tiền mặt lẻ.
* **Nỗi đau & Trở ngại (Pain Points):**
  1. **Tắc nghẽn giờ cao điểm:** Xếp hàng mua đồ trực tiếp mất 12–18 phút $\rightarrow$ Quân đành nhịn đói hoặc vào lớp muộn bị điểm danh vắng.
  2. **Bất an về tình trạng hết món:** Đến lượt order tại quầy thì nhân viên báo món đã hết nguyên liệu, làm mất toàn bộ thời gian xếp hàng vô ích.
  3. **Thao tác khó khăn khi di chuyển:** Đang vừa đi vừa vác balo, nếu ứng dụng yêu cầu bấm vào các nút nhỏ li ti ở góc trên cùng màn hình sẽ rất dễ làm rơi điện thoại hoặc thao tác hỏng.
* **Thói quen sử dụng thiết bị (Device Habits):**
  * Thiết bị: Smartphone tầm trung/cao cấp (Màn hình 360 – 412 dp width).
  * Chế độ sử dụng: Thao tác bằng ngón tay cái của tay thuận (Bottom-oriented navigation).
  * Kết nối: Chuyển đổi liên tục giữa Wifi campus và 4G (cần xử lý tốt trạng thái rớt mạng và lỗi thanh toán).
* **Nhu cầu Accessibility & Công thái học:**
  * Độ tương phản màu sắc rõ ràng (chữ màu nâu đậm `#622B14` trên nền sáng `#FFF5E5`, nút bấm màu cam đậm `#F69D39`).
  * Tất cả các nút bấm quan trọng (CTA) phải nằm ở nửa dưới màn hình (Thumb zone) với chiều cao tối thiểu 48 dp.
  * Phản hồi trạng thái (Feedback) phải kết hợp cả biểu tượng icon và nhãn chữ, không truyền đạt trạng thái chỉ bằng màu sắc đơn thuần (hỗ trợ người dùng khiếm sắc/mù màu).

---

## 2. Câu phát biểu vấn đề (One-sentence Problem Statement)

> **"Sinh viên đại học có lịch học dày đặc cần một giải pháp đặt trước món ăn nhanh và nhận ngay tại quầy trong khuôn viên trường mà không phải xếp hàng chờ đợi trong 15 phút nghỉ giải lao ngắn ngủi giữa các ca học."**

---

## 3. Tiêu chí thành công đo lường được (Measurable Success Criterion)

> **"Một sinh viên có thể hoàn tất việc chọn món yêu thích, tùy chỉnh topping và đặt hàng thành công với thời gian dưới 35 giây (hoàn tất luồng trong tối đa 4 bước chạm từ màn hình chính)."**
