const fs = require('fs');
const path = require('path');

const fullScreensSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1660 2580" width="1660" height="2580">
  <defs>
    <style>
      .t-bold { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 700; fill: #622B14; }
      .t-med { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 600; fill: #622B14; }
      .t-reg { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 400; fill: #622B14; }
      .t-sub { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 400; fill: #966A55; font-size: 12px; }
      .t-white { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 700; fill: #FFFFFF; }
      .badge-lbl { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 700; font-size: 11px; }
    </style>
    <filter id="f-shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#622B14" flood-opacity="0.08"/>
    </filter>
  </defs>

  <!-- ================= ROW 1: SCREENS 01, 02, 03, 04 ================= -->

  <!-- SCR-01: ONBOARDING -->
  <g id="SCR_01_Onboarding" transform="translate(40, 40)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>
    
    <!-- Top info -->
    <g transform="translate(20, 45)">
      <rect width="180" height="28" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="90" y="19" class="t-bold" font-size="11" text-anchor="middle">📍 FPT Uni • Tòa Alpha</text>
      <text x="320" y="19" class="t-sub" font-size="13" text-anchor="end">Bỏ qua →</text>
    </g>

    <!-- Hero Card -->
    <g transform="translate(20, 90)">
      <rect width="320" height="220" rx="20" fill="#FFE8CC"/>
      <text x="160" y="110" font-size="70" text-anchor="middle">🌮</text>
      <rect x="20" y="170" width="130" height="26" rx="8" fill="#FFFFFF"/>
      <text x="85" y="187" class="t-bold" font-size="11" fill="#F69D39" text-anchor="middle">⚡ Lấy sau 3-5 phút</text>
    </g>

    <!-- Headlines -->
    <g transform="translate(20, 335)">
      <text x="0" y="24" class="t-bold" font-size="22">Nạp năng lượng tức thì</text>
      <text x="0" y="52" class="t-bold" font-size="22" fill="#F69D39">trong 15p giải lao!</text>
      <text x="0" y="82" class="t-sub" font-size="13">Đặt trước từ lớp học, lấy ngay tại Kiosk Tòa Alpha</text>
      <text x="0" y="102" class="t-sub" font-size="13">không lo xếp hàng trễ tiết tiếp theo.</text>
    </g>

    <!-- 3 Value Props -->
    <g transform="translate(20, 470)">
      <rect width="320" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="26" class="t-bold" font-size="13">⚡ Chuẩn bị thần tốc 3–5 phút</text>

      <rect y="52" width="320" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="78" class="t-bold" font-size="13">📱 Đặt trước, quét mã nhận món</text>

      <rect y="104" width="320" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="130" class="t-bold" font-size="13">💳 Thanh toán sinh viên 1 chạm</text>
    </g>

    <!-- CTA Area -->
    <g transform="translate(20, 680)">
      <rect width="320" height="52" rx="14" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="160" y="32" class="t-white" font-size="15" text-anchor="middle">Bắt đầu đặt món ngay →</text>
      <text x="160" y="74" class="t-sub" font-size="12" text-anchor="middle">Đăng nhập email @fpt.edu.vn</text>
    </g>
  </g>

  <!-- SCR-02: HOME DISCOVERY -->
  <g id="SCR_02_Home" transform="translate(440, 40)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- App Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFE8CC"/><text x="20" y="25" font-size="16" text-anchor="middle">🌮</text>
      <text x="48" y="18" class="t-bold" font-size="15">Kiosk Tòa Alpha</text>
      <text x="48" y="32" class="t-sub" font-size="11">🟢 Sẵn sàng (5-7 phút)</text>
      <circle cx="312" cy="20" r="16" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="312" y="24" font-size="13" text-anchor="middle">🛒</text>
      <circle cx="322" cy="10" r="7" fill="#F69D39"/><text x="322" y="14" class="t-white" font-size="9" text-anchor="middle">2</text>
    </g>

    <!-- Search -->
    <g transform="translate(16, 95)">
      <rect width="328" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="14" y="26" font-size="14">🔍</text><text x="40" y="26" class="t-sub" font-size="13">Tìm Tacos, Mì trộn, Đồ uống…</text>
    </g>

    <!-- Banner -->
    <g transform="translate(16, 148)">
      <rect width="328" height="105" rx="14" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="18" y="32" class="t-white" font-size="16">Combo Giờ Vàng -15%</text>
      <text x="18" y="52" class="t-white" font-size="12" fill-opacity="0.9">Kíp nghỉ giải lao (10:15 - 10:30)</text>
      <rect x="18" y="66" width="90" height="26" rx="6" fill="#FFFFFF"/>
      <text x="63" y="83" class="t-bold" font-size="11" fill="#F69D39" text-anchor="middle">Đặt ngay →</text>
      <text x="280" y="70" font-size="44" text-anchor="middle">🌮</text>
    </g>

    <!-- Category Pills -->
    <g transform="translate(16, 268)">
      <rect width="65" height="30" rx="15" fill="#F69D39"/><text x="32" y="19" class="t-white" font-size="12" text-anchor="middle">Tất cả</text>
      <rect x="73" width="85" height="30" rx="15" fill="#FFFFFF" stroke="#EEDBCA"/><text x="115" y="19" class="t-bold" font-size="12" text-anchor="middle">Tacos giòn</text>
      <rect x="166" width="85" height="30" rx="15" fill="#FFFFFF" stroke="#EEDBCA"/><text x="208" y="19" class="t-bold" font-size="12" text-anchor="middle">Mì trộn cay</text>
      <rect x="259" width="65" height="30" rx="15" fill="#FFFFFF" stroke="#EEDBCA"/><text x="291" y="19" class="t-bold" font-size="12" text-anchor="middle">Nước</text>
    </g>

    <!-- Food Cards -->
    <text x="16" y="325" class="t-bold" font-size="15">Món nhanh dưới 5p ⚡</text>
    <g transform="translate(16, 340)">
      <rect width="328" height="90" rx="14" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="10" y="10" width="70" height="70" rx="8" fill="#FFE8CC"/><text x="45" y="52" font-size="28" text-anchor="middle">🌮</text>
      <text x="90" y="30" class="t-bold" font-size="14">Combo Tacos Bò Phô Mai</text>
      <text x="90" y="48" class="t-sub">⚡ 4 phút • Tacos giòn bò xào</text>
      <text x="90" y="72" class="t-bold" font-size="15" fill="#F69D39">39.000đ</text>
      <circle cx="304" cy="62" r="16" fill="#F69D39"/><text x="304" y="67" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <g transform="translate(16, 440)">
      <rect width="328" height="90" rx="14" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="10" y="10" width="70" height="70" rx="8" fill="#FFE8CC"/><text x="45" y="52" font-size="28" text-anchor="middle">🍜</text>
      <text x="90" y="30" class="t-bold" font-size="14">Mì Trộn Gà Cay Hàn Quốc</text>
      <text x="90" y="48" class="t-sub">⚡ 5 phút • Xúc xích, trứng</text>
      <text x="90" y="72" class="t-bold" font-size="15" fill="#F69D39">35.000đ</text>
      <circle cx="304" cy="62" r="16" fill="#F69D39"/><text x="304" y="67" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <g transform="translate(16, 540)">
      <rect width="328" height="90" rx="14" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="10" y="10" width="70" height="70" rx="8" fill="#FFE8CC"/><text x="45" y="52" font-size="28" text-anchor="middle">🍹</text>
      <text x="90" y="30" class="t-bold" font-size="14">Trà Đào Chanh Sả</text>
      <text x="90" y="48" class="t-sub">⚡ 2 phút • Đào giòn mát lạnh</text>
      <text x="90" y="72" class="t-bold" font-size="15" fill="#F69D39">20.000đ</text>
      <circle cx="304" cy="62" r="16" fill="#F69D39"/><text x="304" y="67" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <!-- Bottom Nav -->
    <g transform="translate(0, 736)">
      <rect width="360" height="64" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="15" y="10" width="70" height="44" rx="12" fill="#FFE8CC"/>
      <text x="50" y="28" font-size="14" text-anchor="middle">🏠</text><text x="50" y="44" class="t-bold" font-size="10" fill="#F69D39" text-anchor="middle">Trang chủ</text>
      <text x="140" y="28" font-size="14" text-anchor="middle">📋</text><text x="140" y="44" class="t-sub" font-size="10" text-anchor="middle">Thực đơn</text>
      <text x="230" y="28" font-size="14" text-anchor="middle">📦</text><text x="230" y="44" class="t-sub" font-size="10" text-anchor="middle">Đơn hàng</text>
      <text x="315" y="28" font-size="14" text-anchor="middle">👤</text><text x="315" y="44" class="t-sub" font-size="10" text-anchor="middle">Cá nhân</text>
    </g>
  </g>

  <!-- SCR-03: FULL MENU -->
  <g id="SCR_03_Menu" transform="translate(840, 40)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- App Bar -->
    <g transform="translate(16, 42)">
      <text x="0" y="22" class="t-bold" font-size="18">Thực đơn Campus Alpha</text>
      <circle cx="312" cy="16" r="16" fill="#FFFFFF" stroke="#EEDBCA"/><text x="312" y="20" font-size="13" text-anchor="middle">🛒</text>
    </g>

    <!-- Search & Filters -->
    <g transform="translate(16, 85)">
      <rect width="328" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="14" y="26" font-size="14">🔍</text><text x="40" y="26" class="t-sub" font-size="13">Tìm món nhanh...</text>
    </g>
    <g transform="translate(16, 138)">
      <rect width="125" height="28" rx="14" fill="#FFE8CC" stroke="#F69D39"/><text x="62" y="19" class="t-bold" font-size="11" fill="#F69D39" text-anchor="middle">⚡ Chuẩn bị &lt; 5p</text>
      <rect x="133" width="95" height="28" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/><text x="180" y="19" class="t-bold" font-size="11" text-anchor="middle">🔥 Giảm giá</text>
      <rect x="236" width="90" height="28" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/><text x="281" y="19" class="t-bold" font-size="11" text-anchor="middle">🌱 Món chay</text>
    </g>

    <!-- Menu Cards -->
    <g transform="translate(16, 180)">
      <rect width="328" height="115" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="12" y="12" width="90" height="90" rx="8" fill="#FFE8CC"/><text x="57" y="65" font-size="34" text-anchor="middle">🌮</text>
      <text x="112" y="32" class="t-bold" font-size="14">Combo Tacos Bò Phô Mai</text>
      <text x="112" y="52" class="t-sub">4.9⭐ (128) • ⏱ 4 phút</text>
      <text x="112" y="74" class="t-sub">Vỏ giòn, bò xào phô mai</text>
      <text x="112" y="98" class="t-bold" font-size="15" fill="#F69D39">39.000đ</text>
      <circle cx="304" cy="92" r="16" fill="#F69D39"/><text x="304" y="97" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <g transform="translate(16, 305)">
      <rect width="328" height="115" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="12" y="12" width="90" height="90" rx="8" fill="#FFE8CC"/><text x="57" y="65" font-size="34" text-anchor="middle">🌮</text>
      <text x="112" y="32" class="t-bold" font-size="14">Tacos Gà Giòn Sốt Cay</text>
      <text x="112" y="52" class="t-sub">4.8⭐ (86) • ⏱ 4 phút</text>
      <text x="112" y="74" class="t-sub">Gà giòn sốt mayo cay</text>
      <text x="112" y="98" class="t-bold" font-size="15" fill="#F69D39">35.000đ</text>
      <circle cx="304" cy="92" r="16" fill="#F69D39"/><text x="304" y="97" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <g transform="translate(16, 430)">
      <rect width="328" height="115" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="12" y="12" width="90" height="90" rx="8" fill="#FFE8CC"/><text x="57" y="65" font-size="34" text-anchor="middle">🍜</text>
      <text x="112" y="32" class="t-bold" font-size="14">Mì Trộn Sa Tế Bò Trứng</text>
      <text x="112" y="52" class="t-sub">4.9⭐ (154) • ⏱ 5 phút</text>
      <text x="112" y="74" class="t-sub">Mì cay nồng trứng lòng đào</text>
      <text x="112" y="98" class="t-bold" font-size="15" fill="#F69D39">42.000đ</text>
      <circle cx="304" cy="92" r="16" fill="#F69D39"/><text x="304" y="97" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <g transform="translate(16, 555)">
      <rect width="328" height="115" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="12" y="12" width="90" height="90" rx="8" fill="#FFE8CC"/><text x="57" y="65" font-size="34" text-anchor="middle">🍹</text>
      <text x="112" y="32" class="t-bold" font-size="14">Trà Đào Cam Sả 500ml</text>
      <text x="112" y="52" class="t-sub">4.9⭐ (210) • ⏱ 2 phút</text>
      <text x="112" y="74" class="t-sub">Trà tươi, giải nhiệt thần tốc</text>
      <text x="112" y="98" class="t-bold" font-size="15" fill="#F69D39">20.000đ</text>
      <circle cx="304" cy="92" r="16" fill="#F69D39"/><text x="304" y="97" class="t-white" font-size="18" text-anchor="middle">+</text>
    </g>

    <!-- Bottom Nav -->
    <g transform="translate(0, 736)">
      <rect width="360" height="64" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="50" y="28" font-size="14" text-anchor="middle">🏠</text><text x="50" y="44" class="t-sub" font-size="10" text-anchor="middle">Trang chủ</text>
      <rect x="105" y="10" width="70" height="44" rx="12" fill="#FFE8CC"/>
      <text x="140" y="28" font-size="14" text-anchor="middle">📋</text><text x="140" y="44" class="t-bold" font-size="10" fill="#F69D39" text-anchor="middle">Thực đơn</text>
      <text x="230" y="28" font-size="14" text-anchor="middle">📦</text><text x="230" y="44" class="t-sub" font-size="10" text-anchor="middle">Đơn hàng</text>
      <text x="315" y="28" font-size="14" text-anchor="middle">👤</text><text x="315" y="44" class="t-sub" font-size="10" text-anchor="middle">Cá nhân</text>
    </g>
  </g>

  <!-- SCR-04: FOOD DETAIL -->
  <g id="SCR_04_Detail" transform="translate(1240, 40)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <rect x="0" y="0" width="360" height="220" rx="24" fill="#FFE8CC"/><text x="180" y="125" font-size="64" text-anchor="middle">🌮</text>
    <circle cx="36" cy="45" r="18" fill="#FFFFFF" filter="url(#f-shadow)"/><text x="36" y="50" class="t-bold" font-size="16" text-anchor="middle">←</text>
    <circle cx="324" cy="45" r="18" fill="#FFFFFF" filter="url(#f-shadow)"/><text x="324" y="51" font-size="15" text-anchor="middle">🤍</text>

    <!-- Info -->
    <g transform="translate(20, 240)">
      <text x="0" y="20" class="t-bold" font-size="19">Combo Tacos Bò Phô Mai</text>
      <rect x="0" y="32" width="70" height="24" rx="6" fill="#DCFCE7"/><text x="35" y="48" class="t-bold" font-size="11" fill="#166534" text-anchor="middle">⏱ 4 phút</text>
      <text x="315" y="48" class="t-bold" font-size="19" fill="#F69D39" text-anchor="end">39.000đ</text>
      <text x="0" y="78" class="t-sub" font-size="13">2 bánh tacos vỏ giòn, thịt bò xào phô mai kèm sốt</text>
      <text x="0" y="96" class="t-sub" font-size="13">salsa cay nhẹ. Phục vụ nhanh chuẩn 15p giờ nghỉ.</text>

      <text x="0" y="130" class="t-bold" font-size="14">Mức độ cay (Bắt buộc):</text>
      <rect y="142" width="95" height="34" rx="8" fill="#FFFFFF" stroke="#EEDBCA"/><text x="47" y="164" class="t-reg" font-size="12" text-anchor="middle">Không cay</text>
      <rect x="105" y="142" width="95" height="34" rx="8" fill="#FFE8CC" stroke="#F69D39" stroke-width="1.5"/><text x="152" y="164" class="t-bold" font-size="12" fill="#F69D39" text-anchor="middle">Cay vừa ✓</text>
      <rect x="210" y="142" width="95" height="34" rx="8" fill="#FFFFFF" stroke="#EEDBCA"/><text x="257" y="164" class="t-reg" font-size="12" text-anchor="middle">Cay nhiều 🌶️</text>

      <text x="0" y="205" class="t-bold" font-size="14">Thêm Topping (Tùy chọn):</text>
      <g transform="translate(0, 218)">
        <rect width="320" height="42" rx="8" fill="#FFFFFF" stroke="#F69D39" stroke-width="1.5"/>
        <rect x="12" y="13" width="16" height="16" rx="4" fill="#F69D39"/><text x="20" y="25" class="t-white" font-size="11" text-anchor="middle">✓</text>
        <text x="38" y="26" class="t-bold" font-size="13">Thêm phô mai kéo sợi</text>
        <text x="308" y="26" class="t-bold" font-size="13" fill="#F69D39" text-anchor="end">+5.000đ</text>
      </g>
      <g transform="translate(0, 268)">
        <rect width="320" height="42" rx="8" fill="#FFFFFF" stroke="#EEDBCA"/>
        <rect x="12" y="13" width="16" height="16" rx="4" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="38" y="26" class="t-reg" font-size="13">Thêm sốt bơ trứng</text>
        <text x="308" y="26" class="t-sub" font-size="13" text-anchor="end">+3.000đ</text>
      </g>

      <text x="0" y="335" class="t-bold" font-size="14">Ghi chú cho bếp:</text>
      <rect y="348" width="320" height="42" rx="8" fill="#FFF9F0" stroke="#EEDBCA"/>
      <text x="14" y="374" class="t-sub" font-size="12">Ví dụ: Không để hành tây, nhiều tương ớt...</text>
    </g>

    <!-- Sticky Bottom Bar -->
    <g transform="translate(0, 720)">
      <rect width="360" height="80" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="16" y="16" width="90" height="48" rx="12" fill="#FFF5E5" stroke="#EEDBCA"/>
      <text x="32" y="45" class="t-bold" font-size="18" text-anchor="middle">−</text>
      <text x="61" y="45" class="t-bold" font-size="15" text-anchor="middle">1</text>
      <text x="90" y="45" class="t-bold" font-size="18" text-anchor="middle">+</text>
      <rect x="118" y="16" width="226" height="48" rx="12" fill="#F69D39"/>
      <text x="231" y="45" class="t-white" font-size="14" text-anchor="middle">Thêm vào giỏ • 44.000đ</text>
    </g>
  </g>


  <!-- ================= ROW 2: SCREENS 05, 06, 07, 08 ================= -->

  <!-- SCR-05: CART & CHECKOUT -->
  <g id="SCR_05_Cart" transform="translate(40, 880)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#EEDBCA"/><text x="20" y="25" class="t-bold" font-size="16" text-anchor="middle">←</text>
      <text x="50" y="26" class="t-bold" font-size="17">Giỏ hàng &amp; Thanh toán</text>
      <text x="320" y="26" font-size="18" text-anchor="end">🗑️</text>
    </g>

    <!-- Pickup Info Banner -->
    <g transform="translate(16, 92)">
      <rect width="328" height="52" rx="12" fill="#FFE8CC" stroke="#F69D39"/>
      <text x="14" y="24" class="t-bold" font-size="13">📍 Nhận tại Kiosk Tòa Alpha</text>
      <text x="14" y="42" class="t-sub" font-size="11">⏱ Dự kiến: 10:20 (Kịp giờ giải lao 15p)</text>
    </g>

    <!-- Cart Item 1 -->
    <g transform="translate(16, 155)">
      <rect width="328" height="85" rx="14" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="10" y="10" width="65" height="65" rx="8" fill="#FFE8CC"/><text x="42" y="48" font-size="24" text-anchor="middle">🌮</text>
      <text x="86" y="30" class="t-bold" font-size="14">Combo Tacos Bò</text>
      <text x="86" y="46" class="t-sub">Cay vừa, Thêm phô mai</text>
      <text x="86" y="68" class="t-bold" font-size="14" fill="#F69D39">44.000đ</text>
      <rect x="230" y="46" width="84" height="28" rx="6" fill="#FFF5E5"/>
      <text x="245" y="65" class="t-bold" font-size="16" text-anchor="middle">−</text>
      <text x="272" y="65" class="t-bold" font-size="13" text-anchor="middle">1</text>
      <text x="299" y="65" class="t-bold" font-size="16" text-anchor="middle">+</text>
    </g>

    <!-- Cart Item 2 -->
    <g transform="translate(16, 250)">
      <rect width="328" height="85" rx="14" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <rect x="10" y="10" width="65" height="65" rx="8" fill="#FFE8CC"/><text x="42" y="48" font-size="24" text-anchor="middle">🍹</text>
      <text x="86" y="30" class="t-bold" font-size="14">Trà Đào Chanh Sả</text>
      <text x="86" y="46" class="t-sub">Ít đường, Nhiều đá</text>
      <text x="86" y="68" class="t-bold" font-size="14" fill="#F69D39">20.000đ</text>
      <rect x="230" y="46" width="84" height="28" rx="6" fill="#FFF5E5"/>
      <text x="245" y="65" class="t-bold" font-size="16" text-anchor="middle">−</text>
      <text x="272" y="65" class="t-bold" font-size="13" text-anchor="middle">1</text>
      <text x="299" y="65" class="t-bold" font-size="16" text-anchor="middle">+</text>
    </g>

    <!-- Promo Code -->
    <g transform="translate(16, 348)">
      <rect width="328" height="44" rx="10" fill="#FFFFFF" stroke="#16A34A" stroke-width="1.5"/>
      <text x="14" y="27" class="t-bold" font-size="13" fill="#16A34A">🏷️ FTASTUDENT (-10.000đ)</text>
      <text x="314" y="27" class="t-bold" font-size="12" fill="#16A34A" text-anchor="end">Đã áp dụng ✓</text>
    </g>

    <!-- Payment Radios Preview -->
    <g transform="translate(16, 405)">
      <text x="0" y="16" class="t-bold" font-size="14">Phương thức thanh toán:</text>
      <rect y="26" width="328" height="42" rx="10" fill="#FFE8CC" stroke="#F69D39" stroke-width="1.5"/>
      <text x="14" y="52" font-size="16">🟣</text><text x="40" y="52" class="t-bold" font-size="13">Ví điện tử MoMo (Khuyên dùng)</text><text x="314" y="52" class="t-bold" font-size="13" fill="#F69D39" text-anchor="end">●</text>
      
      <rect y="74" width="328" height="42" rx="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="14" y="100" font-size="16">🔵</text><text x="40" y="100" class="t-reg" font-size="13">VNPAY-QR</text><text x="314" y="100" class="t-sub" font-size="13" text-anchor="end">○</text>
    </g>

    <!-- Price Breakdown -->
    <g transform="translate(16, 545)">
      <rect width="328" height="150" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="28" class="t-sub" font-size="13">Tạm tính (2 món):</text><text x="312" y="28" class="t-reg" font-size="13" text-anchor="end">64.000đ</text>
      <text x="16" y="54" class="t-sub" font-size="13">Ưu đãi sinh viên:</text><text x="312" y="54" class="t-bold" font-size="13" fill="#16A34A" text-anchor="end">−10.000đ</text>
      <text x="16" y="80" class="t-sub" font-size="13">Phí Kiosk:</text><text x="312" y="80" class="t-reg" font-size="13" text-anchor="end">0đ (Miễn phí)</text>
      <line x1="16" y1="96" x2="312" y2="96" stroke="#EEDBCA"/>
      <text x="16" y="126" class="t-bold" font-size="15">Tổng thanh toán:</text><text x="312" y="126" class="t-bold" font-size="18" fill="#622B14" text-anchor="end">54.000đ</text>
    </g>

    <!-- Bottom CTA -->
    <g transform="translate(16, 720)">
      <rect width="328" height="52" rx="14" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="164" y="32" class="t-white" font-size="15" text-anchor="middle">Xác nhận thanh toán • 54.000đ</text>
    </g>
  </g>

  <!-- SCR-06: PAYMENT GATEWAY SELECTION -->
  <g id="SCR_06_Checkout" transform="translate(440, 880)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#EEDBCA"/><text x="20" y="25" class="t-bold" font-size="16" text-anchor="middle">←</text>
      <text x="50" y="26" class="t-bold" font-size="17">Cổng thanh toán sinh viên</text>
    </g>

    <!-- Order Total Banner -->
    <g transform="translate(16, 92)">
      <rect width="328" height="70" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="20" y="30" class="t-sub" font-size="12">Số tiền thanh toán</text>
      <text x="20" y="55" class="t-bold" font-size="22" fill="#F69D39">54.000đ</text>
      <text x="308" y="42" class="t-bold" font-size="12" fill="#16A34A" text-anchor="end">Đã giảm 10k</text>
    </g>

    <!-- 4 Methods -->
    <g transform="translate(16, 180)">
      <text x="0" y="16" class="t-bold" font-size="15">Chọn 1 phương thức:</text>

      <!-- MoMo -->
      <g transform="translate(0, 30)">
        <rect width="328" height="60" rx="12" fill="#FFE8CC" stroke="#F69D39" stroke-width="2"/>
        <text x="20" y="36" font-size="22">🟣</text>
        <text x="56" y="28" class="t-bold" font-size="14">Ví điện tử MoMo</text>
        <text x="56" y="46" class="t-sub">Hoàn tiền 5% cho sinh viên</text>
        <circle cx="305" cy="30" r="10" fill="#F69D39"/><circle cx="305" cy="30" r="4" fill="#FFFFFF"/>
      </g>

      <!-- VNPAY -->
      <g transform="translate(0, 100)">
        <rect width="328" height="60" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="20" y="36" font-size="22">🔵</text>
        <text x="56" y="28" class="t-bold" font-size="14">VNPAY-QR</text>
        <text x="56" y="46" class="t-sub">Quét mã app mọi ngân hàng</text>
        <circle cx="305" cy="30" r="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      </g>

      <!-- FtaPay -->
      <g transform="translate(0, 170)">
        <rect width="328" height="60" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="20" y="36" font-size="22">💳</text>
        <text x="56" y="28" class="t-bold" font-size="14">Thẻ sinh viên / Ví FtaPay</text>
        <text x="56" y="46" class="t-sub">Số dư ví: 120.000đ (Khả dụng)</text>
        <circle cx="305" cy="30" r="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      </g>

      <!-- Cash -->
      <g transform="translate(0, 240)">
        <rect width="328" height="60" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="20" y="36" font-size="22">💵</text>
        <text x="56" y="28" class="t-bold" font-size="14">Tiền mặt tại Kiosk</text>
        <text x="56" y="46" class="t-sub">Quầy số 2 Tòa Alpha</text>
        <circle cx="305" cy="30" r="10" fill="#FFFFFF" stroke="#EEDBCA"/>
      </g>
    </g>

    <!-- Security badge -->
    <g transform="translate(16, 520)">
      <rect width="328" height="40" rx="8" fill="#F0FDF4"/>
      <text x="164" y="25" class="t-bold" font-size="12" fill="#16A34A" text-anchor="middle">🔒 Mã hóa 256-bit bảo mật chuẩn ngân hàng</text>
    </g>

    <!-- Bottom CTA -->
    <g transform="translate(16, 720)">
      <rect width="328" height="52" rx="14" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="164" y="32" class="t-white" font-size="15" text-anchor="middle">Tiến hành thanh toán MoMo →</text>
    </g>
  </g>

  <!-- SCR-07: ORDER TRACKING & QR -->
  <g id="SCR_07_Tracking" transform="translate(840, 880)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#EEDBCA"/><text x="20" y="25" class="t-bold" font-size="16" text-anchor="middle">✕</text>
      <text x="50" y="26" class="t-bold" font-size="17">Trạng thái đơn hàng</text>
      <text x="320" y="26" font-size="16" text-anchor="end">💬</text>
    </g>

    <!-- Token Code & ETA Card -->
    <g transform="translate(16, 92)">
      <rect width="328" height="120" rx="16" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <text x="20" y="32" class="t-sub" font-size="12">MÃ NHẬN TẠI KIOSK TÒA ALPHA</text>
      <text x="20" y="70" class="t-bold" font-size="32" fill="#622B14">#A-204</text>
      <rect x="200" y="44" width="112" height="28" rx="8" fill="#DCFCE7"/>
      <text x="256" y="62" class="t-bold" font-size="11" fill="#166534" text-anchor="middle">Đang chế biến</text>
      <text x="20" y="102" class="t-bold" font-size="13" fill="#F69D39">⏱ Dự kiến sẵn sàng: 10:20 (Còn 3 phút)</text>
    </g>

    <!-- Stepper 4 Steps -->
    <g transform="translate(20, 230)">
      <line x1="30" y1="18" x2="290" y2="18" stroke="#EEDBCA" stroke-width="2"/>
      <line x1="30" y1="18" x2="116" y2="18" stroke="#16A34A" stroke-width="2"/>
      
      <!-- 1 -->
      <circle cx="30" cy="18" r="12" fill="#16A34A"/><text x="30" y="22" class="t-white" font-size="10" text-anchor="middle">✓</text>
      <text x="30" y="42" class="t-bold" font-size="10" text-anchor="middle">Đã nhận</text>

      <!-- 2 (Active) -->
      <circle cx="116" cy="18" r="12" fill="#F69D39"/><text x="116" y="22" class="t-white" font-size="10" text-anchor="middle">2</text>
      <text x="116" y="42" class="t-bold" font-size="10" fill="#F69D39" text-anchor="middle">Đang làm</text>

      <!-- 3 -->
      <circle cx="203" cy="18" r="12" fill="#FFFFFF" stroke="#EEDBCA"/><text x="203" y="22" class="t-sub" font-size="10" text-anchor="middle">3</text>
      <text x="203" y="42" class="t-sub" font-size="10" text-anchor="middle">Sẵn sàng</text>

      <!-- 4 -->
      <circle cx="290" cy="18" r="12" fill="#FFFFFF" stroke="#EEDBCA"/><text x="290" y="22" class="t-sub" font-size="10" text-anchor="middle">4</text>
      <text x="290" y="42" class="t-sub" font-size="10" text-anchor="middle">Hoàn tất</text>
    </g>

    <!-- High-Contrast QR Code Card -->
    <g transform="translate(16, 295)">
      <rect width="328" height="250" rx="16" fill="#FFFFFF" stroke="#EEDBCA" filter="url(#f-shadow)"/>
      <text x="164" y="32" class="t-bold" font-size="14" text-anchor="middle">Quét tại đầu đọc Kiosk để nhận món</text>
      
      <!-- QR Graphic Mockup -->
      <rect x="74" y="50" width="180" height="150" rx="12" fill="#FFF9F0" stroke="#622B14" stroke-width="2"/>
      <rect x="94" y="70" width="40" height="40" fill="#622B14"/>
      <rect x="102" y="78" width="24" height="24" fill="#FFFFFF"/>
      <rect x="110" y="86" width="8" height="8" fill="#622B14"/>

      <rect x="194" y="70" width="40" height="40" fill="#622B14"/>
      <rect x="202" y="78" width="24" height="24" fill="#FFFFFF"/>
      <rect x="210" y="86" width="8" height="8" fill="#622B14"/>

      <rect x="94" y="130" width="40" height="40" fill="#622B14"/>
      <rect x="102" y="138" width="24" height="24" fill="#FFFFFF"/>
      <rect x="110" y="146" width="8" height="8" fill="#622B14"/>

      <text x="164" y="225" class="t-sub" font-size="11" text-anchor="middle">Mã tự động tăng độ sáng tối đa</text>
    </g>

    <!-- Details Box -->
    <g transform="translate(16, 560)">
      <rect width="328" height="70" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="28" class="t-bold" font-size="13">Combo Tacos Bò x1, Trà Đào x1</text>
      <text x="16" y="48" class="t-sub" font-size="12">Tổng tiền: 54.000đ • Đã thanh toán MoMo</text>
    </g>

    <!-- Actions -->
    <g transform="translate(16, 650)">
      <rect width="328" height="48" rx="12" fill="#FFE8CC" stroke="#F69D39"/>
      <text x="164" y="30" class="t-bold" font-size="13" fill="#F69D39" text-anchor="middle">📍 Chỉ đường tới Kiosk Tòa Alpha</text>

      <rect y="58" width="328" height="48" rx="12" fill="#F69D39"/>
      <text x="164" y="88" class="t-white" font-size="14" text-anchor="middle">Về trang chủ</text>
    </g>
  </g>

  <!-- SCR-08: ORDER HISTORY -->
  <g id="SCR_08_History" transform="translate(1240, 880)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <text x="0" y="22" class="t-bold" font-size="18">Đơn hàng của tôi</text>
      <text x="320" y="22" font-size="16" text-anchor="end">🔔</text>
    </g>

    <!-- Tabs -->
    <g transform="translate(16, 85)">
      <rect width="160" height="36" rx="10" fill="#FFFFFF" stroke="#F69D39" stroke-width="1.5"/>
      <text x="80" y="23" class="t-bold" font-size="12" fill="#F69D39" text-anchor="middle">Đang xử lý (1)</text>

      <rect x="168" width="160" height="36" rx="10" fill="#FFF5E5" stroke="#EEDBCA"/>
      <text x="248" y="23" class="t-sub" font-size="12" text-anchor="middle">Lịch sử (5)</text>
    </g>

    <!-- Active Card -->
    <g transform="translate(16, 138)">
      <rect width="328" height="150" rx="16" fill="#FFFFFF" stroke="#F69D39" stroke-width="1.5" filter="url(#f-shadow)"/>
      <text x="16" y="30" class="t-bold" font-size="15">#A-204 • Kiosk Tòa Alpha</text>
      <rect x="230" y="14" width="82" height="24" rx="6" fill="#DCFCE7"/><text x="271" y="30" class="t-bold" font-size="11" fill="#166534" text-anchor="middle">Đang làm</text>
      <text x="16" y="56" class="t-sub">Combo Tacos Bò x1, Trà Đào x1 (54k)</text>
      <text x="16" y="78" class="t-bold" font-size="13" fill="#F69D39">⏱ Khoảng 3 phút nữa sẵn sàng</text>
      
      <rect x="16" y="96" width="296" height="40" rx="10" fill="#F69D39"/>
      <text x="164" y="121" class="t-white" font-size="13" text-anchor="middle">Xem mã QR nhận món →</text>
    </g>

    <!-- Past Orders List -->
    <text x="16" y="315" class="t-bold" font-size="15">Đơn hàng gần đây:</text>

    <!-- Past Order 1 -->
    <g transform="translate(16, 330)">
      <rect width="328" height="110" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="28" class="t-bold" font-size="14">#A-189 • 14/10/2026</text>
      <text x="312" y="28" class="t-bold" font-size="11" fill="#16A34A" text-anchor="end">Đã nhận 10:22 ✓</text>
      <text x="16" y="50" class="t-sub">Combo Tacos Bò Phô Mai + Trà Đào (54.000đ)</text>
      
      <rect x="16" y="66" width="140" height="32" rx="8" fill="#FFE8CC"/>
      <text x="86" y="87" class="t-bold" font-size="12" fill="#622B14" text-anchor="middle">Đặt lại món này ↻</text>
    </g>

    <!-- Past Order 2 -->
    <g transform="translate(16, 455)">
      <rect width="328" height="110" rx="14" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="28" class="t-bold" font-size="14">#A-142 • 12/10/2026</text>
      <text x="312" y="28" class="t-bold" font-size="11" fill="#16A34A" text-anchor="end">Đã nhận 14:15 ✓</text>
      <text x="16" y="50" class="t-sub">Mì Trộn Gà Cay Hàn Quốc (35.000đ)</text>
      
      <rect x="16" y="66" width="140" height="32" rx="8" fill="#FFE8CC"/>
      <text x="86" y="87" class="t-bold" font-size="12" fill="#622B14" text-anchor="middle">Đặt lại món này ↻</text>
    </g>

    <!-- Bottom Nav -->
    <g transform="translate(0, 736)">
      <rect width="360" height="64" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="50" y="28" font-size="14" text-anchor="middle">🏠</text><text x="50" y="44" class="t-sub" font-size="10" text-anchor="middle">Trang chủ</text>
      <text x="140" y="28" font-size="14" text-anchor="middle">📋</text><text x="140" y="44" class="t-sub" font-size="10" text-anchor="middle">Thực đơn</text>
      <rect x="195" y="10" width="70" height="44" rx="12" fill="#FFE8CC"/>
      <text x="230" y="28" font-size="14" text-anchor="middle">📦</text><text x="230" y="44" class="t-bold" font-size="10" fill="#F69D39" text-anchor="middle">Đơn hàng</text>
      <text x="315" y="28" font-size="14" text-anchor="middle">👤</text><text x="315" y="44" class="t-sub" font-size="10" text-anchor="middle">Cá nhân</text>
    </g>
  </g>


  <!-- ================= ROW 3: 2 STATE VARIANTS (PLACED BESIDE PARENT SCREENS) ================= -->

  <!-- SCR-05-EMPTY: EMPTY CART STATE (PLACED BELOW SCR-05) -->
  <g id="SCR_05_Empty_Cart" transform="translate(40, 1720)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#EEDBCA"/><text x="20" y="25" class="t-bold" font-size="16" text-anchor="middle">←</text>
      <text x="50" y="26" class="t-bold" font-size="17">Giỏ hàng &amp; Thanh toán</text>
    </g>

    <!-- Empty Graphic & Message -->
    <g transform="translate(20, 140)">
      <circle cx="160" cy="80" r="60" fill="#FFE8CC"/>
      <text x="160" y="95" font-size="54" text-anchor="middle">🍽️</text>
      
      <text x="160" y="180" class="t-bold" font-size="20" text-anchor="middle">Giỏ hàng của bạn đang đói!</text>
      <text x="160" y="210" class="t-sub" font-size="13" text-anchor="middle">Bạn chưa chọn món nào cho giờ giải lao 15 phút.</text>
      <text x="160" y="230" class="t-sub" font-size="13" text-anchor="middle">Hãy lướt menu để nạp năng lượng kịp giờ vào lớp nhé!</text>

      <rect x="30" y="260" width="260" height="48" rx="12" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="160" y="290" class="t-white" font-size="14" text-anchor="middle">Khám phá thực đơn Kiosk Alpha</text>
    </g>

    <!-- Quick Picks Recommendation -->
    <g transform="translate(16, 480)">
      <text x="0" y="20" class="t-bold" font-size="14">Gợi ý món siêu tốc hôm nay (&lt;5p):</text>
      
      <rect y="32" width="328" height="65" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="10" y="42" width="45" height="45" rx="6" fill="#FFE8CC"/><text x="32" y="72" font-size="20" text-anchor="middle">🌮</text>
      <text x="65" y="58" class="t-bold" font-size="13">Combo Tacos Bò Phô Mai</text>
      <text x="65" y="76" class="t-bold" font-size="13" fill="#F69D39">39.000đ • ⏱ 4p</text>
      <circle cx="305" cy="65" r="14" fill="#F69D39"/><text x="305" y="70" class="t-white" font-size="16" text-anchor="middle">+</text>

      <rect y="107" width="328" height="65" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
      <rect x="10" y="117" width="45" height="45" rx="6" fill="#FFE8CC"/><text x="32" y="147" font-size="20" text-anchor="middle">🍹</text>
      <text x="65" y="133" class="t-bold" font-size="13">Trà Đào Chanh Sả</text>
      <text x="65" y="151" class="t-bold" font-size="13" fill="#F69D39">20.000đ • ⏱ 2p</text>
      <circle cx="305" cy="140" r="14" fill="#F69D39"/><text x="305" y="145" class="t-white" font-size="16" text-anchor="middle">+</text>
    </g>
  </g>

  <!-- SCR-07-ERR: PAYMENT ERROR & RECOVERY (PLACED BELOW SCR-06) -->
  <g id="SCR_07_Error_Recovery" transform="translate(440, 1720)">
    <rect width="360" height="800" rx="24" fill="#FFF5E5" stroke="#EEDBCA" stroke-width="1.5"/>
    <text x="24" y="28" class="t-bold" font-size="12">09:41</text><text x="336" y="28" class="t-sub" font-size="11" text-anchor="end">📶 🔋 100%</text>

    <!-- Top Bar -->
    <g transform="translate(16, 42)">
      <circle cx="20" cy="20" r="18" fill="#FFFFFF" stroke="#EEDBCA"/><text x="20" y="25" class="t-bold" font-size="16" text-anchor="middle">←</text>
      <text x="50" y="26" class="t-bold" font-size="17">Thanh toán chưa thành công</text>
    </g>

    <!-- Error Alert Banner -->
    <g transform="translate(16, 92)">
      <rect width="328" height="150" rx="16" fill="#FFFFFF" stroke="#DC2626" stroke-width="1.5" filter="url(#f-shadow)"/>
      <circle cx="164" cy="45" r="22" fill="#FEE2E2"/><text x="164" y="53" font-size="24" text-anchor="middle">⚠️</text>
      <text x="164" y="88" class="t-bold" font-size="18" fill="#DC2626" text-anchor="middle">Thanh toán gián đoạn</text>
      <text x="164" y="110" class="t-sub" font-size="12" text-anchor="middle">Giao dịch MoMo bị từ chối do số dư ví hoặc mạng</text>
      <text x="164" y="128" class="t-sub" font-size="11" text-anchor="middle">(Mã lỗi: #PAY_402)</text>
    </g>

    <!-- Hold Order Reassurance Box -->
    <g transform="translate(16, 255)">
      <rect width="328" height="60" rx="12" fill="#FFE8CC" stroke="#F69D39"/>
      <text x="16" y="28" class="t-bold" font-size="13" fill="#622B14">⏱ Đơn hàng của bạn vẫn được giữ:</text>
      <text x="16" y="48" class="t-bold" font-size="14" fill="#F69D39">Thời gian giữ món: 09:45 (Kịp giờ vào lớp!)</text>
    </g>

    <!-- Order Items Recap -->
    <g transform="translate(16, 330)">
      <rect width="328" height="70" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
      <text x="16" y="28" class="t-bold" font-size="13">Combo Tacos Bò + Trà Đào</text>
      <text x="16" y="50" class="t-bold" font-size="14" fill="#F69D39">Tổng thanh toán: 54.000đ</text>
    </g>

    <!-- 1-Tap Recovery Radios -->
    <g transform="translate(16, 420)">
      <text x="0" y="16" class="t-bold" font-size="14">Chọn cách xử lý nhanh:</text>

      <!-- Option 1: VNPAY (Selected) -->
      <g transform="translate(0, 26)">
        <rect width="328" height="56" rx="12" fill="#FFE8CC" stroke="#F69D39" stroke-width="2"/>
        <text x="18" y="34" font-size="20">🔵</text>
        <text x="48" y="26" class="t-bold" font-size="13">Đổi sang VNPAY-QR (Khuyên dùng)</text>
        <text x="48" y="44" class="t-sub">Quét mã tức thì qua App Ngân hàng</text>
        <circle cx="308" cy="28" r="8" fill="#F69D39"/>
      </g>

      <!-- Option 2: Student Card -->
      <g transform="translate(0, 92)">
        <rect width="328" height="56" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="18" y="34" font-size="20">💳</text>
        <text x="48" y="26" class="t-bold" font-size="13">Thẻ sinh viên / Ví FtaPay</text>
        <text x="48" y="44" class="t-sub">Số dư 120.000đ (Đủ thanh toán)</text>
        <circle cx="308" cy="28" r="8" fill="#FFFFFF" stroke="#EEDBCA"/>
      </g>

      <!-- Option 3: Cash -->
      <g transform="translate(0, 158)">
        <rect width="328" height="56" rx="12" fill="#FFFFFF" stroke="#EEDBCA"/>
        <text x="18" y="34" font-size="20">💵</text>
        <text x="48" y="26" class="t-bold" font-size="13">Trả tiền mặt tại Kiosk Tòa Alpha</text>
        <text x="48" y="44" class="t-sub">Quầy số 2 • Lấy đồ ăn rồi thanh toán</text>
        <circle cx="308" cy="28" r="8" fill="#FFFFFF" stroke="#EEDBCA"/>
      </g>
    </g>

    <!-- Recovery CTAs -->
    <g transform="translate(16, 680)">
      <rect width="328" height="52" rx="14" fill="#F69D39" filter="url(#f-shadow)"/>
      <text x="164" y="32" class="t-white" font-size="15" text-anchor="middle">Thử lại bằng phương thức khác →</text>
      <text x="164" y="74" class="t-sub" font-size="13" text-anchor="middle">Quay lại giỏ hàng</text>
    </g>
  </g>
</svg>
`;

fs.writeFileSync(path.join(__dirname, '..', 'assets', 'figma', 'ftacode_screens_editable.svg'), fullScreensSvg, 'utf8');
console.log('Created full 8 screens + 2 variants SVG!');
