// ============================================================
//  DANDOOSH — CONFIG
//  Where Arabic Meets Desi
// ============================================================

const DANDOOSH = window.DANDOOSH = {

  // ── IDENTITY ──────────────────────────────────────────────
  name:        "Tempura Potato",
  nameArabic:  " ٹمپورا پوٹیٹو 
  tagline:     "Quality Food Best price",
  description: "Experience the fusion of authentic Pakisani flavors with the bold spices of desi cuisine. Every bite tells a story of two cultures, one legendary taste.",
  established: "2022",
  city:        "Lahore, Pakistan",

  // ── CONTACT ───────────────────────────────────────────────
  whatsapp: "923090090123",
  phone:    "0309 009 0123",
  address:  "Lahore, Pakistan",
  mapsUrl:  "https://maps.google.com/?q=Lahore+Pakistan",
  email:    "info@dandoosh.pk",
  foodpanda: "https://www.foodpanda.pk",

  // ── HOURS ─────────────────────────────────────────────────
  hours: {
    "Mon – Thu": "12:00 PM – 11:00 PM",
    "Friday":    "1:00 PM – 11:30 PM",
    "Sat – Sun": "12:00 PM – 12:00 AM",
  },

  // ── SOCIAL ────────────────────────────────────────────────
  social: {
    facebook:  "https://facebook.com/",
    instagram: "https://instagram.com/",
    tiktok:    "https://tiktok.com/",
  },

  // ── COLORS ────────────────────────────────────────────────
  colors: {
    red:        "#D42B2B",
    redDeep:    "#A01E1E",
    redGlow:    "rgba(212,43,43,.35)",
    dark:       "#0A0404",
    surface:    "#140808",
    surfaceAlt: "#1E0C0C",
    card:       "#1A0A0A",
    text:       "#FFF5F0",
    muted:      "#8A6060",
    gold:       "#E8B84B",
    border:     "rgba(212,43,43,.2)",
  },

  // ── ADMIN ─────────────────────────────────────────────────
  adminPassword: "dandoosh2024",
  imgbbKey:      "ab7a51eaed988c67582fc8bcc877df5a",

  // ── LOYALTY ───────────────────────────────────────────────
  loyaltyDivisor: 100,
  loyaltyPerUnit: 1,
  loyaltyRedeem:  10,

  // ── FIREBASE ──────────────────────────────────────────────
  firebase: {
    apiKey:            "AIzaSyAjttUsOACKZP6SEQWPFReQTH2OTA9-ih8",
    authDomain:        "dandoosh-e0738.firebaseapp.com",
    databaseURL:       "https://dandoosh-e0738-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId:         "dandoosh-e0738",
    storageBucket:     "dandoosh-e0738.firebasestorage.app",
    messagingSenderId: "972226913996",
    appId:             "1:972226913996:web:38caf4dd8f5aa63e7c4469",
  },

  // ── HERO SLIDES ───────────────────────────────────────────
  heroSlides: [
    { emoji:"🥙", label:"Signature Sandwich", headline:"Arabic Meets", sub:"Desi.",      desc:"The fusion you never knew you needed. Bold Arabic flavors, desi soul.",         bg:"linear-gradient(135deg,#2A0808 0%,#0A0404 100%)" },
    { emoji:"🔥", label:"The Royal Smoke",    headline:"Royally",     sub:"Smoked.",    desc:"Shish Tawook, Afghani Chicken & Turkish Kebab. BBQ sauce & jalapeños.",          bg:"linear-gradient(135deg,#1E0505 0%,#0A0404 100%)" },
    { emoji:"🫔", label:"Afghani Dandoosh",   headline:"Afghan",      sub:"Flavor.",    desc:"Tender Afghani chicken in our signature bread. Rs. 580 only.",                   bg:"linear-gradient(135deg,#200808 0%,#0A0404 100%)" },
    { emoji:"🌮", label:"Mexici Loaded",      headline:"Mexici",      sub:"Loaded.",    desc:"Mexican-masala fries, glazed chicken, garlic sauce & spicy jalapeños. Rs. 749.", bg:"linear-gradient(135deg,#1A0608 0%,#0A0404 100%)" },
    { emoji:"🧆", label:"Sheesh Tau",         headline:"Sheesh",      sub:"Tau.",       desc:"Charcoal grilled kebabs in our signature Dandoosh bread. Rs. 580.",              bg:"linear-gradient(135deg,#200A05 0%,#0A0404 100%)" },
  ],

  // ── MENU DATA ─────────────────────────────────────────────
  menuData: {
    categories: ["Dandoosh", "Loaded Trays", "Sides & Drinks"],
    items: [
      // DANDOOSH SANDWICHES
      { id:"d1",  name:"Afghani Dandoosh",       category:"Dandoosh",       price:580,  oldPrice:null, desc:"Tender Afghani-style chicken marinated in our secret blend, served in signature bread with fresh veggies.",  emoji:"🥙", badge:"bestseller" },
      { id:"d2",  name:"Sheesh Tau Dandoosh",    category:"Dandoosh",       price:580,  oldPrice:null, desc:"Charcoal-grilled sheesh kebab with creamy sauces and crispy toppings in our signature Dandoosh bread.",     emoji:"🫔", badge:"" },
      { id:"d3",  name:"Mexici Dandoosh",        category:"Dandoosh",       price:580,  oldPrice:null, desc:"Mexican-spiced chicken with jalapeños, cheese sauce and a hint of desi masala.",                           emoji:"🌮", badge:"spicy" },
      { id:"d4",  name:"Beef Kebab Dandoosh",    category:"Dandoosh",       price:690,  oldPrice:null, desc:"Juicy hand-formed beef kebabs with our signature garlic mayo and fresh toppings.",                         emoji:"🥩", badge:"" },
      { id:"d5",  name:"Turkish Kebab Dandoosh", category:"Dandoosh",       price:580,  oldPrice:null, desc:"Authentic Turkish-style köfte kebab with herbs and spices in our signature bread.",                        emoji:"🧆", badge:"" },
      // LOADED TRAYS
      { id:"l1",  name:"The Royal Smoke",        category:"Loaded Trays",   price:849,  oldPrice:null, desc:"Shish Tawook, Afghani Chicken & Turkish Kebab loaded over fries with BBQ sauce and jalapeños. A royal feast.", emoji:"👑", badge:"premium" },
      { id:"l2",  name:"The Mexici Loaded",      category:"Loaded Trays",   price:749,  oldPrice:null, desc:"Mexican-masala fries, glazed chicken, garlic sauce, Arabic ranch and spicy jalapeños.",                    emoji:"🌶", badge:"spicy" },
      // SIDES & DRINKS
      { id:"s1",  name:"Fries",                  category:"Sides & Drinks", price:295,  oldPrice:null, desc:"Crispy golden fries seasoned with our signature spice blend.",                                             emoji:"🍟", badge:"" },
      { id:"s2",  name:"Make It a Meal",         category:"Sides & Drinks", price:349,  oldPrice:null, desc:"Add fries + drink to any Dandoosh sandwich and save! Best combo deal.",                                   emoji:"🎯", badge:"deal" },
      { id:"s3",  name:"Water",                  category:"Sides & Drinks", price:50,   oldPrice:null, desc:"Chilled mineral water.",                                                                                   emoji:"💧", badge:"" },
      { id:"s4",  name:"Soft Drink",             category:"Sides & Drinks", price:70,   oldPrice:null, desc:"Chilled soft drink. Ask for available flavors.",                                                           emoji:"🥤", badge:"" },
      { id:"s5",  name:"Large Drink",            category:"Sides & Drinks", price:100,  oldPrice:null, desc:"Large chilled soft drink.",                                                                                emoji:"🧃", badge:"" },
    ]
  },

  // ── SEASONAL THEMES ───────────────────────────────────────
  themes: {
    "":             { name:"Default",        emoji:"🔥", primary:"#D42B2B", accent:"#E8B84B", banner:"" },
    "eid_fitr":     { name:"Eid ul-Fitr",    emoji:"🌙", primary:"#1B6B3A", accent:"#E8B84B", banner:"🌙 Eid Mubarak! Special combo deals all week — dine in or order now!" },
    "eid_adha":     { name:"Eid ul-Adha",    emoji:"🐑", primary:"#7A1A1A", accent:"#E8B84B", banner:"🐑 Eid ul-Adha Mubarak! Celebrate with our special BBQ platters!" },
    "ramadan":      { name:"Ramadan",        emoji:"🌙", primary:"#1B3A6B", accent:"#E8B84B", banner:"🌙 Ramadan Mubarak! Iftar deals available. Order now for delivery!" },
    "independence": { name:"Independence",   emoji:"🇵🇰", primary:"#01411C", accent:"#FFFFFF", banner:"🇵🇰 Happy Independence Day! 14% off all orders today only!" },
    "winter":       { name:"Winter Special", emoji:"❄️",  primary:"#1E2A4A", accent:"#E8B84B", banner:"❄️ Stay warm — hot deals on all Dandoosh loaded trays this winter!" },
  },

  // ── SURVEY ────────────────────────────────────────────────
  survey: {
    enabled: true,
    questions: [
      { id:"visit",    type:"select",   label:"Is this your first time ordering from us?",  options:["First time!", "I'm a regular 🔥", "Second or third time"] },
      { id:"found",    type:"select",   label:"How did you find Dandoosh?",                  options:["Instagram","TikTok","Facebook","Friend recommended","Google","FoodPanda","Walked past the shop"] },
      { id:"item",     type:"select",   label:"What did you order today?",                   options:["Afghani Dandoosh","Sheesh Tau","Mexici Dandoosh","Beef Kebab","Turkish Kebab","Royal Smoke","Mexici Loaded","Sides / Drinks"] },
      { id:"rating",   type:"stars",    label:"How would you rate your experience?" },
      { id:"feedback", type:"textarea", label:"Any feedback? We read every single one! 🙏" },
    ]
  }
};

// ── AUTO APPLY CSS VARS ───────────────────────────────────────
(function(){
  const c = DANDOOSH.colors;
  const r = document.documentElement.style;
  r.setProperty('--red',         c.red);
  r.setProperty('--red-deep',    c.redDeep);
  r.setProperty('--red-glow',    c.redGlow);
  r.setProperty('--dark',        c.dark);
  r.setProperty('--surface',     c.surface);
  r.setProperty('--surface-alt', c.surfaceAlt);
  r.setProperty('--card',        c.card);
  r.setProperty('--text',        c.text);
  r.setProperty('--muted',       c.muted);
  r.setProperty('--gold',        c.gold);
  r.setProperty('--border',      c.border);
})();
