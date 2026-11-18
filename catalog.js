const marketProducts = [
  {
    "id": "redbull",
    "name": "ڕێد بوول",
    "en": "Red Bull",
    "size": "250 ml",
    "price": 2000,
    "url": "https://www.lezzoo.com/erbil/m/teammart-hiwa-city-9946/red-bull-energy-drink-arabic-250ml-2259806",
    "img": "img/redbull.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "action",
    "name": "ئاکشن",
    "en": "Action",
    "size": "250 ml",
    "price": 1500,
    "url": "https://www.lezzoo.com/zakho/m/safen-bazar-5148/action-energy-drink-250-ml-1376553",
    "img": "img/action.webp",
    "category": "ڤەخوارن",
    "city": "زاخۆ"
  },
  {
    "id": "smart",
    "name": "سمارت بابڵگام",
    "en": "Smart Bubblegum",
    "size": "330 ml",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/smart-energy-drink-bubblegum-330ml-2229297",
    "img": "img/smart.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "pling",
    "name": "پلینگ",
    "en": "Pling Energy",
    "size": "330 ml",
    "price": 1350,
    "url": "https://www.lezzoo.com/ar/erbil/m/sarwaran-market-6748/pling-energy-drink-330ml-1110634",
    "img": "img/pling.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "tiger",
    "name": "تایگەر",
    "en": "Tiger",
    "size": "250 ml",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/tiger-energy-drink-250ml-1110709",
    "img": "img/tiger.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "white",
    "name": "وایت تایگەر",
    "en": "White Tiger",
    "size": "330 ml",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/teammart-mufti-8440/white-tiger-energy-drink-330ml-1676767",
    "img": "img/white.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "kinder",
    "name": "کیندەر بوێنۆ سپی",
    "en": "Kinder Bueno White",
    "size": "39 g",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/teammart-sarbasty-8441/kinder-bueno-white-39gm-1672107",
    "img": "img/kinder.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "snickers",
    "name": "سنیکەرز",
    "en": "Snickers",
    "size": "40 g",
    "price": 1000,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/snickers-peanuts-filled-milk-chocolate-bar-40g-2244133",
    "img": "img/snickers.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "wafe",
    "name": "ویف ئەپ شکۆلاتە",
    "en": "ETİ Wafe Up",
    "size": "30 g",
    "price": 250,
    "url": "https://www.lezzoo.com/erbil/m/teammart-ganmwjo-8626/eti-wafe-up-wafer-chocolate-30gm-1780138",
    "img": "img/wafe.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "coco",
    "name": "بسکویتا جۆزی هندێ",
    "en": "Alvita Coconut",
    "size": "315 g",
    "price": 1000,
    "url": "https://www.lezzoo.com/erbil/m/teammart-mufti-8440/alvita-petit-beurre-coconut-315-gm-2364382",
    "img": "img/coco.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "twix",
    "name": "تویکس سپی",
    "en": "Twix White",
    "size": "46 g",
    "price": 750,
    "url": "https://www.lezzoo.com/erbil/m/teammart-bakhtyari-8433/twix-white-chocolate-bar-46-gm-1784342",
    "img": "img/twix.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "kitkat",
    "name": "کیت کات",
    "en": "Kit Kat",
    "size": "36.5 g",
    "price": 950,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/kit-kat-36-5g-1413203",
    "img": "img/kitkat.webp",
    "category": "شیرینی",
    "city": "هەولێر"
  },
  {
    "id": "asan",
    "name": "ئاسان ئەکتیڤ",
    "en": "Asan Active",
    "size": "250 ml",
    "price": 650,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/asan-active-energy-drink-250ml-2264820",
    "img": "img/asan.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "kratus",
    "name": "کراتوس",
    "en": "Kratus Original",
    "size": "250 ml",
    "price": 650,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/kratus-energy-drink-original-taste-250ml-2388771",
    "img": "img/kratus.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "smartblue",
    "name": "سمارت بلووبێری",
    "en": "Smart Blueberry",
    "size": "330 ml",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/smart-energy-drink-blueberry-330ml-2229288",
    "img": "img/smartblue.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  },
  {
    "id": "plingred",
    "name": "پلینگ میوەیێن سۆر",
    "en": "Pling Red Fruit",
    "size": "330 ml",
    "price": 1250,
    "url": "https://www.lezzoo.com/erbil/m/sarwaran-market-6748/pling-energy-drink-red-fruit-330ml-2229287",
    "img": "img/plingred.webp",
    "category": "ڤەخوارن",
    "city": "هەولێر"
  }
];
