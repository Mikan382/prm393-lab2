const fs = require('fs');
const path = require('path');

// 1. Read SVG sources
const src = fs.readFileSync(path.join(__dirname, 'create_full_screens_svg.js'), 'utf8');
const lines = src.split('\n');

const defs = `<defs>
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
</defs>`;

// Slice screens
const screenDefs = [
  { key: 'SCR_01_Onboarding', name: 'SCR-01: Onboarding', start: 22, end: 67 },
  { key: 'SCR_02_Home', name: 'SCR-02: Trang chủ (Home)', start: 70, end: 146 },
  { key: 'SCR_03_Menu', name: 'SCR-03: Thực đơn Campus', start: 149, end: 220 },
  { key: 'SCR_04_Detail', name: 'SCR-04: Chi tiết món ăn', start: 223, end: 271 },
  { key: 'SCR_05_Cart', name: 'SCR-05: Giỏ hàng & Voucher', start: 277, end: 353 },
  { key: 'SCR_06_Checkout', name: 'SCR-06: Cổng thanh toán', start: 356, end: 426 },
  { key: 'SCR_07_Tracking', name: 'SCR-07: Trạng thái & QR', start: 429, end: 509 },
  { key: 'SCR_08_History', name: 'SCR-08: Lịch sử đơn hàng', start: 512, end: 577 },
  { key: 'SCR_05_Empty_Cart', name: 'SCR-05-EMPTY: Giỏ trống', start: 583, end: 622 },
  { key: 'SCR_06_Error_Recovery', name: 'SCR-06-ERR: Báo lỗi MoMo', start: 625, end: 696 }
];

const screenSvgs = {};

for (const sc of screenDefs) {
  const slice = lines.slice(sc.start - 1, sc.end);
  let inner = slice.join('\n');
  inner = inner.replace(/^\s*<g id="[^"]+"[^>]*>/, '');
  inner = inner.replace(/<\/g>\s*$/, '');
  screenSvgs[sc.key] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 800" width="360" height="800">\n${defs}\n${inner}\n</svg>`;
}

// Dialog SVG
screenSvgs['Dialog_Cancel'] = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" width="320" height="180">
  <defs>
    <style>
      .t-bold { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 700; fill: #622B14; }
      .t-reg { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 400; fill: #966A55; font-size: 12px; }
      .t-white { font-family: 'Nunito', 'Segoe UI', sans-serif; font-weight: 700; fill: #FFFFFF; font-size: 13px; }
    </style>
    <filter id="f-shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#622B14" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="320" height="180" rx="16" fill="#FFFFFF" stroke="#EEDBCA" stroke-width="1.5" filter="url(#f-shadow)"/>
  <text x="24" y="38" class="t-bold" font-size="16">Xác nhận hủy đơn hàng?</text>
  <text x="24" y="65" class="t-reg">Bếp chưa chế biến. Số tiền thanh toán sẽ</text>
  <text x="24" y="85" class="t-reg">được hoàn lại ví của bạn trong 30 giây.</text>
  
  <rect x="24" y="115" width="125" height="42" rx="10" fill="#FFF5E5" stroke="#EEDBCA"/>
  <text x="86" y="141" class="t-bold" font-size="13" text-anchor="middle">Giữ đơn</text>

  <rect x="165" y="115" width="130" height="42" rx="10" fill="#DC2626"/>
  <text x="230" y="141" class="t-white" text-anchor="middle">Hủy đơn</text>
</svg>`;

const userflowSvg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'figma', 'ftacode_userflow_diagram.svg'), 'utf8');
const wireframesSvg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'figma', 'ftacode_wireframes_editable.svg'), 'utf8');
const componentsSvg = fs.readFileSync(path.join(__dirname, '..', 'assets', 'figma', 'ftacode_components_editable.svg'), 'utf8');

const codeContent = `// FtaCode PRM323 Lab 2 Figma Generator Plugin
// Đảm bảo: 6 Trang chuẩn thứ tự, 10 Màn hình độc lập (360x800dp), Design System, 9 Components
// ĐẶC BIỆT: Clickable Prototype Connections + 3 Flow Starting Points chính thức!

async function main() {
  figma.notify("⏳ Đang thiết lập 6 Trang, 10 Màn hình và Nối dây Prototype 3 Luồng...");

  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  const C = {
    primary: { r: 0.965, g: 0.616, b: 0.224 },
    primaryDark: { r: 0.878, g: 0.522, b: 0.122 },
    primaryContainer: { r: 1.0, g: 0.910, b: 0.800 },
    secondary: { r: 0.878, g: 0.765, b: 0.459 },
    bg: { r: 1.0, g: 0.961, b: 0.898 },
    surface: { r: 1.0, g: 1.0, b: 1.0 },
    textPrimary: { r: 0.384, g: 0.169, b: 0.078 },
    textSecondary: { r: 0.588, g: 0.416, b: 0.333 },
    border: { r: 0.933, g: 0.859, b: 0.792 },
    success: { r: 0.086, g: 0.639, b: 0.290 },
    error: { r: 0.863, g: 0.149, b: 0.149 },
    white: { r: 1.0, g: 1.0, b: 1.0 }
  };

  function createText(str, size = 14, isBold = false, color = C.textPrimary) {
    const t = figma.createText();
    t.fontName = { family: "Inter", style: isBold ? "Bold" : "Regular" };
    t.characters = str;
    t.fontSize = size;
    t.fills = [{ type: "SOLID", color: color }];
    return t;
  }

  // 1. Quản lý đúng 6 trang theo thứ tự đề bài yêu cầu
  const requiredPages = [
    "01 User Flow",
    "02 Wireframe",
    "03 Final UI",
    "04 Design System",
    "05 Components",
    "06 Prototype"
  ];

  const pageMap = {};
  const currentPages = [...figma.root.children];

  for (let i = 0; i < requiredPages.length; i++) {
    const name = requiredPages[i];
    let matchedPage = currentPages.find(p => p.name === name);
    if (!matchedPage && i < currentPages.length && !requiredPages.includes(currentPages[i].name)) {
      currentPages[i].name = name;
      matchedPage = currentPages[i];
    }
    if (!matchedPage) {
      try {
        matchedPage = figma.createPage();
        matchedPage.name = name;
      } catch (e) {
        console.warn("Could not create page: " + name, e);
      }
    }
    if (matchedPage) {
      pageMap[name] = matchedPage;
    }
  }

  // Reorder exactly index 0 to 5
  for (let i = 0; i < requiredPages.length; i++) {
    const p = pageMap[requiredPages[i]];
    if (p) {
      try { figma.root.insertChild(i, p); } catch (e) {}
    }
  }

  // Clear previous nodes
  for (const pageName of requiredPages) {
    const p = pageMap[pageName];
    if (p && p.children) {
      for (const child of [...p.children]) {
        try { child.remove(); } catch (e) {}
      }
    }
  }

  // Helper reaction chuẩn chỉnh Figma Plugin API schema: { trigger, actions: [...] }
  async function addReaction(fromNode, toFrame, navigation = "NAVIGATE") {
    if (!fromNode || !toFrame) return;
    const reaction = {
      trigger: { type: "ON_CLICK" },
      actions: [
        {
          type: "NODE",
          destinationId: toFrame.id,
          navigation: navigation,
          transition: {
            type: "DISSOLVE",
            easing: { type: "EASE_IN_AND_OUT" },
            duration: 0.25
          },
          preserveScrollPosition: false
        }
      ]
    };
    try {
      if (fromNode.setReactionsAsync) {
        await fromNode.setReactionsAsync([reaction]);
      }
    } catch (err) {
      console.warn("Could not set reaction on " + fromNode.name, err);
    }
  }

  async function createHotspot(parentFrame, name, x, y, width, height, targetFrame, navigation = "NAVIGATE") {
    if (!parentFrame || !targetFrame) return null;
    const hs = figma.createFrame();
    hs.name = name;
    hs.resize(width, height);
    hs.x = x;
    hs.y = y;
    hs.fills = [{ type: "SOLID", color: { r: 0.965, g: 0.616, b: 0.224 }, opacity: 0.005 }];
    parentFrame.appendChild(hs);
    await addReaction(hs, targetFrame, navigation);
    return hs;
  }

  const rawSvgs = ${JSON.stringify(screenSvgs)};

  // Screen placement coordinates
  const layoutCoords = {
    SCR_01_Onboarding: { x: 40, y: 150, name: "SCR-01: Onboarding" },
    SCR_02_Home: { x: 460, y: 150, name: "SCR-02: Trang chủ (Home)" },
    SCR_03_Menu: { x: 880, y: 150, name: "SCR-03: Thực đơn Campus" },
    SCR_04_Detail: { x: 1300, y: 150, name: "SCR-04: Chi tiết món ăn" },
    SCR_05_Cart: { x: 40, y: 1030, name: "SCR-05: Giỏ hàng & Voucher" },
    SCR_06_Checkout: { x: 460, y: 1030, name: "SCR-06: Cổng thanh toán" },
    SCR_07_Tracking: { x: 880, y: 1030, name: "SCR-07: Trạng thái & QR" },
    SCR_08_History: { x: 1300, y: 1030, name: "SCR-08: Lịch sử đơn hàng" },
    SCR_05_Empty_Cart: { x: 40, y: 1910, name: "SCR-05-EMPTY: Giỏ hàng trống" },
    SCR_06_Error_Recovery: { x: 460, y: 1910, name: "SCR-06-ERR: Báo lỗi MoMo (Giữ món)" },
    Dialog_Cancel: { x: 880, y: 2010, name: "Dialog: Xác nhận hủy đơn hàng" }
  };

  function instantiateScreens(targetPage, prefix = "") {
    const frameMap = {};
    for (const [key, coords] of Object.entries(layoutCoords)) {
      if (rawSvgs[key]) {
        try {
          const node = figma.createNodeFromSvg(rawSvgs[key]);
          node.name = prefix ? (prefix + " " + coords.name) : coords.name;
          node.x = coords.x;
          node.y = coords.y;
          targetPage.appendChild(node);
          frameMap[key] = node;
        } catch (e) {
          console.warn("Error creating frame for " + key, e);
        }
      }
    }
    return frameMap;
  }

  // ================= 01 USER FLOW =================
  if (pageMap["01 User Flow"]) {
    try {
      const ufSvg = ${JSON.stringify(userflowSvg)};
      const ufNode = figma.createNodeFromSvg(ufSvg);
      ufNode.name = "01 User Flows Overview (3 Complete Flows)";
      ufNode.x = 0; ufNode.y = 0;
      pageMap["01 User Flow"].appendChild(ufNode);
    } catch (e) {}
  }

  // ================= 02 WIREFRAME =================
  if (pageMap["02 Wireframe"]) {
    try {
      const wfSvg = ${JSON.stringify(wireframesSvg)};
      const wfNode = figma.createNodeFromSvg(wfSvg);
      wfNode.name = "02 Low-Fidelity Wireframes (4 Key Screens)";
      wfNode.x = 0; wfNode.y = 0;
      pageMap["02 Wireframe"].appendChild(wfNode);
    } catch (e) {}
  }

  // ================= 03 FINAL UI =================
  if (pageMap["03 Final UI"]) {
    instantiateScreens(pageMap["03 Final UI"], "");

    const descCard = figma.createFrame();
    descCard.name = "Final UI - 8 Main Screens + 2 Variants Specs";
    descCard.resize(1620, 100);
    descCard.x = 40; descCard.y = 20;
    descCard.cornerRadius = 14;
    descCard.fills = [{ type: "SOLID", color: C.surface }];
    descCard.strokes = [{ type: "SOLID", color: C.border }];
    descCard.paddingLeft = 24; descCard.paddingTop = 16; descCard.paddingRight = 24;
    descCard.layoutMode = "VERTICAL"; descCard.itemSpacing = 6;
    descCard.appendChild(createText("🎨 FtaCode Final UI — 8 Màn hình chính (360x800dp) + 2 Biến thể đặt cạnh màn cha", 16, true, C.textPrimary));
    descCard.appendChild(createText("Hàng 1: SCR-01 Onboarding → SCR-02 Home → SCR-03 Menu → SCR-04 Detail | Hàng 2: SCR-05 Cart → SCR-06 Checkout → SCR-07 Tracking → SCR-08 History | Hàng 3: SCR-05-EMPTY & SCR-06-ERR", 13, false, C.textSecondary));
    pageMap["03 Final UI"].appendChild(descCard);
  }

  // ================= 04 DESIGN SYSTEM =================
  if (pageMap["04 Design System"]) {
    try {
      if (figma.variables && figma.variables.createVariableCollection) {
        const collections = figma.variables.getLocalVariableCollections();
        let collection = collections.find(c => c.name === "FtaCode Design Tokens");
        if (!collection) {
          collection = figma.variables.createVariableCollection("FtaCode Design Tokens");
        }
        const modeId = collection.modes[0].modeId;
        const varMap = {
          "color/primary": C.primary,
          "color/primary-dark": C.primaryDark,
          "color/container": C.primaryContainer,
          "color/background": C.bg,
          "color/surface": C.surface,
          "color/text-primary": C.textPrimary,
          "color/text-secondary": C.textSecondary,
          "color/success": C.success,
          "color/error": C.error
        };
        for (const [vName, vVal] of Object.entries(varMap)) {
          try {
            const v = figma.variables.createVariable(vName, collection.id, "COLOR");
            v.setValueForMode(modeId, { r: vVal.r, g: vVal.g, b: vVal.b, a: 1 });
          } catch (e) {}
        }
      }
    } catch (err) {}

    const dsFrame = figma.createFrame();
    dsFrame.name = "Design System - FtaCode Tokens Board";
    dsFrame.resize(1000, 750);
    dsFrame.fills = [{ type: "SOLID", color: C.bg }];
    dsFrame.cornerRadius = 24;
    dsFrame.paddingLeft = 40; dsFrame.paddingRight = 40; dsFrame.paddingTop = 40; dsFrame.paddingBottom = 40;
    dsFrame.layoutMode = "VERTICAL"; dsFrame.itemSpacing = 24;

    dsFrame.appendChild(createText("FtaCode Design System (Tokens & Variables)", 24, true, C.textPrimary));
    dsFrame.appendChild(createText("PRM323 Lab 2 - Color Palette, Typography & 4-pt Spacing Grid", 15, false, C.textSecondary));

    const swatchesRow = figma.createFrame();
    swatchesRow.name = "Color Tokens Grid";
    swatchesRow.layoutMode = "HORIZONTAL";
    swatchesRow.itemSpacing = 16;
    swatchesRow.fills = [];

    const tokens = [
      { name: "Primary", hex: "#F69D39", color: C.primary, textColor: C.white },
      { name: "Primary Dark", hex: "#E0851F", color: C.primaryDark, textColor: C.white },
      { name: "Container", hex: "#FFE8CC", color: C.primaryContainer, textColor: C.textPrimary },
      { name: "Background", hex: "#FFF5E5", color: C.bg, textColor: C.textPrimary },
      { name: "Surface", hex: "#FFFFFF", color: C.surface, textColor: C.textPrimary },
      { name: "Text Primary", hex: "#622B14", color: C.textPrimary, textColor: C.white },
      { name: "Text Secondary", hex: "#966A55", color: C.textSecondary, textColor: C.white },
      { name: "Success", hex: "#16A34A", color: C.success, textColor: C.white },
      { name: "Error", hex: "#DC2626", color: C.error, textColor: C.white }
    ];

    tokens.forEach(tk => {
      const sw = figma.createFrame();
      sw.name = tk.name;
      sw.resize(90, 100);
      sw.cornerRadius = 12;
      sw.fills = [{ type: "SOLID", color: tk.color }];
      sw.strokes = [{ type: "SOLID", color: C.border }];
      sw.strokeWeight = 1;
      sw.layoutMode = "VERTICAL";
      sw.paddingLeft = 8; sw.paddingRight = 8; sw.paddingTop = 8; sw.paddingBottom = 8;
      sw.primaryAxisAlignItems = "MAX";
      sw.appendChild(createText(tk.name, 11, true, tk.textColor));
      sw.appendChild(createText(tk.hex, 10, false, tk.textColor));
      swatchesRow.appendChild(sw);
    });
    dsFrame.appendChild(swatchesRow);

    const infoRow = figma.createFrame();
    infoRow.name = "Spacing & Typography Specs";
    infoRow.layoutMode = "HORIZONTAL";
    infoRow.itemSpacing = 24;
    infoRow.fills = [];

    const spacingCard = figma.createFrame();
    spacingCard.resize(440, 260);
    spacingCard.cornerRadius = 16;
    spacingCard.fills = [{ type: "SOLID", color: C.surface }];
    spacingCard.paddingLeft = 24; spacingCard.paddingRight = 24; spacingCard.paddingTop = 20; spacingCard.paddingBottom = 20;
    spacingCard.layoutMode = "VERTICAL"; spacingCard.itemSpacing = 12;
    spacingCard.appendChild(createText("Spacing Grid Tokens (4pt base)", 16, true, C.textPrimary));
    spacingCard.appendChild(createText("• spacing-xxs: 4dp   (Micro gaps in chips)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-xs:  8dp   (Input padding, chip gaps)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-sm:  12dp  (Card internal stack spacing)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-md:  16dp  (Standard screen horizontal margin)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-lg:  24dp  (Section separation spacing)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-xl:  32dp  (Bottom action clearance)", 13, false, C.textSecondary));
    spacingCard.appendChild(createText("• spacing-xxl: 48dp  (Minimum touch target height)", 13, true, C.primaryDark));

    const typoCard = figma.createFrame();
    typoCard.resize(440, 260);
    typoCard.cornerRadius = 16;
    typoCard.fills = [{ type: "SOLID", color: C.surface }];
    typoCard.paddingLeft = 24; typoCard.paddingRight = 24; typoCard.paddingTop = 20; typoCard.paddingBottom = 20;
    typoCard.layoutMode = "VERTICAL"; typoCard.itemSpacing = 12;
    typoCard.appendChild(createText("Typography Scale Tokens (Nunito/Inter)", 16, true, C.textPrimary));
    typoCard.appendChild(createText("Display Large - 24sp Bold (#622B14)", 15, true, C.textPrimary));
    typoCard.appendChild(createText("Headline - 20sp Bold (App Bars & Sections)", 14, true, C.textPrimary));
    typoCard.appendChild(createText("Title Medium - 16sp SemiBold (Card Titles)", 13, true, C.textPrimary));
    typoCard.appendChild(createText("Body Large - 15sp Regular (Descriptions)", 13, false, C.textPrimary));
    typoCard.appendChild(createText("Body Medium - 14sp Regular (WCAG Compliant)", 13, false, C.textSecondary));
    typoCard.appendChild(createText("Button Label - 14sp Bold (All CTA Buttons)", 13, true, C.primaryDark));

    infoRow.appendChild(spacingCard);
    infoRow.appendChild(typoCard);
    dsFrame.appendChild(infoRow);

    pageMap["04 Design System"].appendChild(dsFrame);
  }

  // ================= 05 COMPONENTS =================
  if (pageMap["05 Components"]) {
    try {
      const compSvg = ${JSON.stringify(componentsSvg)};
      const compNode = figma.createNodeFromSvg(compSvg);
      compNode.name = "05 Components - 9 Reusable Groups with Auto Layout";
      compNode.x = 0; compNode.y = 0;
      pageMap["05 Components"].appendChild(compNode);
    } catch (e) {}
  }

  // ================= 06 PROTOTYPE (NỐI DÂY & ĐIỂM BẮT ĐẦU CHÍNH THỨC) =================
  if (pageMap["06 Prototype"]) {
    const protoPage = pageMap["06 Prototype"];

    // 1. Guide Header Card
    const guideCard = figma.createFrame();
    guideCard.name = "Prototype Instructions & Flow Legend";
    guideCard.resize(1620, 110);
    guideCard.x = 40; guideCard.y = 20;
    guideCard.cornerRadius = 14;
    guideCard.fills = [{ type: "SOLID", color: C.surface }];
    guideCard.strokes = [{ type: "SOLID", color: C.primary }];
    guideCard.strokeWeight = 2;
    guideCard.paddingLeft = 24; guideCard.paddingTop = 14; guideCard.paddingRight = 24;
    guideCard.layoutMode = "VERTICAL"; guideCard.itemSpacing = 5;

    guideCard.appendChild(createText("🚀 CÁCH CHẠY & BẤM PROTOTYPE (ĐÃ NỐI DÂY TOÀN BỘ 10 MÀN HÌNH):", 16, true, C.primaryDark));
    guideCard.appendChild(createText("👉 Cách 1 (Mở nhanh Inline): Chọn frame 'SCR-01: Onboarding' bên dưới -> Nhấn tổ hợp SHIFT + SPACE để mở điện thoại bấm thử trực tiếp!", 13, true, C.textPrimary));
    guideCard.appendChild(createText("👉 Cách 2 (Toàn màn hình): Bấm nút PLAY (▶ Present) ở góc phải trên thanh công cụ Figma -> Chọn Flow 1, 2, hoặc 3 ở cột trái để test!", 13, true, C.success));
    guideCard.appendChild(createText("⚠️ Lưu ý: Khi ở màn hình vẽ (Canvas), click chuột chỉ để chọn layer. Phải bật Play (▶) hoặc Shift + Space thì mới bấm chuyển trang được!", 12, false, C.error));
    protoPage.appendChild(guideCard);

    // 2. Instantiate standalone screen frames
    const pFrames = instantiateScreens(protoPage, "");

    // 3. Frame-Level Fallback Reactions (Bấm vào bất cứ đâu trên frame là chuyển trang mượt mà)
    if (pFrames.SCR_01_Onboarding && pFrames.SCR_02_Home) {
      await addReaction(pFrames.SCR_01_Onboarding, pFrames.SCR_02_Home);
    }
    if (pFrames.SCR_04_Detail && pFrames.SCR_05_Cart) {
      await addReaction(pFrames.SCR_04_Detail, pFrames.SCR_05_Cart);
    }
    if (pFrames.SCR_05_Cart && pFrames.SCR_06_Checkout) {
      await addReaction(pFrames.SCR_05_Cart, pFrames.SCR_06_Checkout);
    }
    if (pFrames.SCR_06_Checkout && pFrames.SCR_07_Tracking) {
      await addReaction(pFrames.SCR_06_Checkout, pFrames.SCR_07_Tracking);
    }
    if (pFrames.SCR_07_Tracking && pFrames.SCR_02_Home) {
      await addReaction(pFrames.SCR_07_Tracking, pFrames.SCR_02_Home);
    }
    if (pFrames.SCR_06_Error_Recovery && pFrames.SCR_07_Tracking) {
      await addReaction(pFrames.SCR_06_Error_Recovery, pFrames.SCR_07_Tracking);
    }
    if (pFrames.SCR_05_Empty_Cart && pFrames.SCR_03_Menu) {
      await addReaction(pFrames.SCR_05_Empty_Cart, pFrames.SCR_03_Menu);
    }
    if (pFrames.SCR_08_History && pFrames.SCR_07_Tracking) {
      await addReaction(pFrames.SCR_08_History, pFrames.SCR_07_Tracking);
    }

    // 4. Hotspot Button-Level Interactions (Nút bấm chuyên biệt)
    // Flow 1: SCR-01 -> SCR-02
    if (pFrames.SCR_01_Onboarding && pFrames.SCR_02_Home) {
      await createHotspot(pFrames.SCR_01_Onboarding, "Hotspot_CTA_Bắt_Đầu", 20, 680, 320, 52, pFrames.SCR_02_Home);
    }

    // Flow 1 & 2: SCR-02 -> SCR-04 & SCR-05 & SCR-03 & SCR-08
    if (pFrames.SCR_02_Home) {
      if (pFrames.SCR_04_Detail) {
        await createHotspot(pFrames.SCR_02_Home, "Hotspot_Card_Tacos_Bo", 16, 340, 260, 90, pFrames.SCR_04_Detail);
      }
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_02_Home, "Hotspot_Quick_Add_Tacos", 288, 385, 45, 45, pFrames.SCR_05_Cart);
        await createHotspot(pFrames.SCR_02_Home, "Hotspot_Top_Cart_Icon", 295, 40, 50, 45, pFrames.SCR_05_Cart);
      }
      if (pFrames.SCR_03_Menu) {
        await createHotspot(pFrames.SCR_02_Home, "Hotspot_Nav_Menu", 105, 736, 75, 64, pFrames.SCR_03_Menu);
      }
      if (pFrames.SCR_08_History) {
        await createHotspot(pFrames.SCR_02_Home, "Hotspot_Nav_Orders", 195, 736, 75, 64, pFrames.SCR_08_History);
      }
    }

    // SCR-03: Menu -> Detail, Cart, Home
    if (pFrames.SCR_03_Menu) {
      if (pFrames.SCR_04_Detail) {
        await createHotspot(pFrames.SCR_03_Menu, "Hotspot_Menu_Item_Detail", 16, 180, 260, 115, pFrames.SCR_04_Detail);
      }
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_03_Menu, "Hotspot_Menu_Cart_Icon", 295, 40, 50, 45, pFrames.SCR_05_Cart);
      }
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_03_Menu, "Hotspot_Menu_Nav_Home", 15, 736, 75, 64, pFrames.SCR_02_Home);
      }
    }

    // SCR-04: Detail -> Cart & Home Back
    if (pFrames.SCR_04_Detail) {
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_04_Detail, "Hotspot_Detail_Back", 18, 30, 45, 45, pFrames.SCR_02_Home);
      }
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_04_Detail, "Hotspot_Add_To_Cart_CTA", 118, 720, 226, 48, pFrames.SCR_05_Cart);
      }
    }

    // SCR-05: Cart -> Checkout, Home, Empty
    if (pFrames.SCR_05_Cart) {
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_05_Cart, "Hotspot_Cart_Back", 10, 40, 45, 45, pFrames.SCR_02_Home);
      }
      if (pFrames.SCR_06_Checkout) {
        await createHotspot(pFrames.SCR_05_Cart, "Hotspot_Cart_Confirm_Checkout", 16, 720, 328, 52, pFrames.SCR_06_Checkout);
      }
      if (pFrames.SCR_05_Empty_Cart) {
        await createHotspot(pFrames.SCR_05_Cart, "Hotspot_Trash_Empty_Cart", 300, 40, 45, 45, pFrames.SCR_05_Empty_Cart);
      }
    }

    // SCR-05-EMPTY: Empty cart -> Menu & Home
    if (pFrames.SCR_05_Empty_Cart) {
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_05_Empty_Cart, "Hotspot_Empty_Back", 10, 40, 45, 45, pFrames.SCR_02_Home);
      }
      if (pFrames.SCR_03_Menu) {
        await createHotspot(pFrames.SCR_05_Empty_Cart, "Hotspot_Empty_Explore_Menu", 50, 440, 260, 50, pFrames.SCR_03_Menu);
      }
    }

    // SCR-06: Checkout -> Tracking (Success) OR SCR-06-ERR (Error Flow 3)
    if (pFrames.SCR_06_Checkout) {
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_06_Checkout, "Hotspot_Checkout_Back", 10, 40, 45, 45, pFrames.SCR_05_Cart);
      }
      if (pFrames.SCR_07_Tracking) {
        await createHotspot(pFrames.SCR_06_Checkout, "Hotspot_Pay_MoMo_Success", 16, 720, 328, 52, pFrames.SCR_07_Tracking);
      }
      if (pFrames.SCR_06_Error_Recovery) {
        await createHotspot(pFrames.SCR_06_Checkout, "Hotspot_MoMo_Error_Trigger", 16, 210, 328, 60, pFrames.SCR_06_Error_Recovery);
      }
    }

    // SCR-06-ERR: Error Recovery -> Tracking (Success) OR Cart
    if (pFrames.SCR_06_Error_Recovery) {
      if (pFrames.SCR_07_Tracking) {
        await createHotspot(pFrames.SCR_06_Error_Recovery, "Hotspot_Retry_VNPAY_Cash", 16, 680, 328, 52, pFrames.SCR_07_Tracking);
      }
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_06_Error_Recovery, "Hotspot_Back_To_Cart", 60, 740, 240, 35, pFrames.SCR_05_Cart);
      }
    }

    // SCR-07: Tracking -> Home, History, Cancel Dialog
    if (pFrames.SCR_07_Tracking) {
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_07_Tracking, "Hotspot_Tracking_Home", 16, 708, 328, 48, pFrames.SCR_02_Home);
      }
      if (pFrames.SCR_08_History) {
        await createHotspot(pFrames.SCR_07_Tracking, "Hotspot_Tracking_Map_History", 16, 650, 328, 48, pFrames.SCR_08_History);
      }
      if (pFrames.Dialog_Cancel) {
        await createHotspot(pFrames.SCR_07_Tracking, "Hotspot_Cancel_Dialog_Trigger", 16, 40, 45, 45, pFrames.Dialog_Cancel);
      }
    }

    // Dialog_Cancel -> Keep or Cancel
    if (pFrames.Dialog_Cancel) {
      if (pFrames.SCR_07_Tracking) {
        await createHotspot(pFrames.Dialog_Cancel, "Hotspot_Dialog_Keep_Order", 24, 115, 125, 42, pFrames.SCR_07_Tracking);
      }
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.Dialog_Cancel, "Hotspot_Dialog_Confirm_Cancel", 165, 115, 130, 42, pFrames.SCR_02_Home);
      }
    }

    // SCR-08: History -> Tracking, Cart, Home
    if (pFrames.SCR_08_History) {
      if (pFrames.SCR_07_Tracking) {
        await createHotspot(pFrames.SCR_08_History, "Hotspot_History_View_QR", 16, 234, 296, 40, pFrames.SCR_07_Tracking);
      }
      if (pFrames.SCR_05_Cart) {
        await createHotspot(pFrames.SCR_08_History, "Hotspot_History_Reorder", 16, 396, 140, 32, pFrames.SCR_05_Cart);
      }
      if (pFrames.SCR_02_Home) {
        await createHotspot(pFrames.SCR_08_History, "Hotspot_History_Nav_Home", 15, 736, 75, 64, pFrames.SCR_02_Home);
      }
    }

    // 5. THIẾT LẬP FLOW STARTING POINTS
    try {
      const startingPoints = [];
      if (pFrames.SCR_01_Onboarding) {
        startingPoints.push({
          nodeId: pFrames.SCR_01_Onboarding.id,
          name: "⚡ Flow 1: Đặt nhanh (<35s) [Golden Path]"
        });
      }
      if (pFrames.SCR_02_Home) {
        startingPoints.push({
          nodeId: pFrames.SCR_02_Home.id,
          name: "🍲 Flow 2: Tùy chỉnh món (Cay & Topping)"
        });
      }
      if (pFrames.SCR_06_Error_Recovery) {
        startingPoints.push({
          nodeId: pFrames.SCR_06_Error_Recovery.id,
          name: "⚠️ Flow 3: Phục hồi lỗi MoMo & Giữ món 09:45"
        });
      }
      protoPage.flowStartingPoints = startingPoints;
    } catch (e) {
      console.warn("Could not set flowStartingPoints:", e);
    }
  }

  if (pageMap["06 Prototype"]) {
    figma.currentPage = pageMap["06 Prototype"];
    if (pageMap["06 Prototype"].children.length > 0) {
      figma.viewport.scrollAndZoomIntoView(pageMap["06 Prototype"].children);
    }
  }

  figma.notify("🎉 ĐÃ KẾT NỐI DÂY PROTOTYPE HOÀN TẤT! Bấm SHIFT + SPACE để trải nghiệm bấm thử!");
  figma.closePlugin();
}

main().catch(err => {
  figma.notify("Lỗi: " + err.message);
  figma.closePlugin();
});
`;

fs.writeFileSync(path.join(__dirname, '..', '..', 'figma-plugin', 'code.js'), codeContent, 'utf8');
console.log('Successfully generated updated code.js with corrected Figma reactions schema!');
