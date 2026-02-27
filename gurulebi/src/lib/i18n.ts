"use client";
import { create } from "zustand";

export type Language = "en" | "ka" | "ru";

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "ka",
  setLanguage: (lang) => set({ language: lang }),
}));

export const languageLabels: Record<Language, string> = {
  en: "English",
  ka: "ქართული",
  ru: "Русский",
};

export const languageFlags: Record<Language, string> = {
  en: "🇬🇧",
  ka: "🇬🇪",
  ru: "🇷🇺",
};

type TranslationKeys = {
  nav: {
    home: string;
    about: string;
    rooms: string;
    gallery: string;
    video: string;
    services: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    welcome: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
    p3: string;
    familyTitle: string;
    familyDesc: string;
    locationTitle: string;
    locationDesc: string;
    experienceTitle: string;
    experienceDesc: string;
  };
  rooms: {
    title: string;
    subtitle: string;
    room1Title: string;
    room1Desc: string;
    room2Title: string;
    room2Desc: string;
    room3Title: string;
    room3Desc: string;
    room4Title: string;
    room4Desc: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    all: string;
    rooms: string;
    nature: string;
    food: string;
    activities: string;
    prev: string;
    next: string;
    close: string;
  };
  video: {
    title: string;
    subtitle: string;
    tourTitle: string;
    tourDesc: string;
    regionTitle: string;
    regionDesc: string;
  };
  services: {
    title: string;
    subtitle: string;
    cuisine: string;
    cuisineDesc: string;
    wine: string;
    wineDesc: string;
    hiking: string;
    hikingDesc: string;
    culture: string;
    cultureDesc: string;
    beach: string;
    beachDesc: string;
    crafts: string;
    craftsDesc: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    phone: string;
    address: string;
    addressValue: string;
    followUs: string;
    sent: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms",
      gallery: "Gallery",
      video: "Video Tour",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      title: "Guria Family Hostel",
      subtitle: "Experience authentic Georgian hospitality in the heart of Guria",
      cta: "Explore Our Hostel",
      welcome: "Welcome to",
    },
    about: {
      title: "About Our Hostel",
      subtitle: "A home away from home in beautiful Guria",
      p1: "Nestled in the lush green hills of Guria, our family hostel offers a unique blend of traditional Georgian warmth and modern comfort. For over three generations, our family has welcomed travelers from around the world.",
      p2: "Guria is one of Georgia's most beautiful and least explored regions, known for its subtropical climate, tea plantations, pristine nature, and the famous Gurian sense of humor and hospitality.",
      p3: "Stay with us and experience the real Georgia — homemade food, local wine, breathtaking nature, and stories that will stay with you forever.",
      familyTitle: "Family Tradition",
      familyDesc: "Three generations of Georgian hospitality, welcoming guests since 1985",
      locationTitle: "Perfect Location",
      locationDesc: "Surrounded by tea plantations, mountains, and the Black Sea coast",
      experienceTitle: "Authentic Experience",
      experienceDesc: "Traditional cuisine, wine tasting, and cultural immersion",
    },
    rooms: {
      title: "Our Home",
      subtitle: "A traditional Georgian house with spacious rooms and a beautiful garden by the river",
      room1Title: "Master Bedroom",
      room1Desc: "Elegant master bedroom with traditional wooden furniture, handcrafted details, private bathroom, and a balcony overlooking the lush garden and river.",
      room2Title: "Family Apartment",
      room2Desc: "Spacious family apartment with a cozy living area, bedroom, kitchenette, and traditional Georgian textiles. Perfect for families seeking comfort and privacy.",
      room3Title: "Guest Bedrooms",
      room3Desc: "Warm and inviting guest bedrooms furnished with handmade wooden beds, colorful Georgian quilts, and windows opening to mountain views.",
      room4Title: "Garden & River",
      room4Desc: "Our beautiful garden stretches down to the river, with fruit trees, a vine-covered terrace, outdoor dining area, and a peaceful riverside spot for relaxation.",
    },
    gallery: {
      title: "Photo Gallery",
      subtitle: "Explore our hostel and the beautiful Guria region",
      all: "All",
      rooms: "Rooms",
      nature: "Nature",
      food: "Food",
      activities: "Activities",
      prev: "Previous",
      next: "Next",
      close: "Close",
    },
    video: {
      title: "Video Tour",
      subtitle: "Take a virtual tour of our hostel and surroundings",
      tourTitle: "Hostel Tour",
      tourDesc: "Walk through our cozy rooms, beautiful garden, and traditional Georgian kitchen.",
      regionTitle: "Discover Guria",
      regionDesc: "Explore the breathtaking landscapes, ancient churches, and vibrant culture of Guria.",
    },
    services: {
      title: "Services & Activities",
      subtitle: "Make your stay unforgettable",
      cuisine: "Georgian Cuisine",
      cuisineDesc: "Enjoy homemade khachapuri, khinkali, and traditional Gurian dishes prepared by our family.",
      wine: "Wine Tasting",
      wineDesc: "Sample local wines from family vineyards, including rare Gurian varieties made in qvevri.",
      hiking: "Hiking & Nature",
      hikingDesc: "Guided hikes through subtropical forests, waterfalls, and scenic mountain trails.",
      culture: "Cultural Tours",
      cultureDesc: "Visit ancient churches, traditional villages, and learn about Gurian folk traditions.",
      beach: "Beach Access",
      beachDesc: "Easy access to the Black Sea coast beaches, just 30 minutes from our hostel.",
      crafts: "Traditional Crafts",
      craftsDesc: "Learn traditional Georgian crafts — pottery, weaving, and wood carving workshops.",
    },
    contact: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
      phone: "Phone",
      address: "Address",
      addressValue: "Ozurgeti, Guria, Georgia",
      followUs: "Follow Us",
      sent: "Message sent! We'll get back to you soon.",
    },
    footer: {
      rights: "All rights reserved",
      madeWith: "Made with ♥ in Guria, Georgia",
    },
  },
  ka: {
    nav: {
      home: "მთავარი",
      about: "ჩვენ შესახებ",
      rooms: "ოთახები",
      gallery: "გალერეა",
      video: "ვიდეო ტური",
      services: "სერვისები",
      contact: "კონტაქტი",
    },
    hero: {
      title: "გურიის საოჯახო სასტუმრო",
      subtitle: "გაიცანით ნამდვილი ქართული სტუმართმოყვარეობა გურიის გულში",
      cta: "გაეცანით ჩვენს სასტუმროს",
      welcome: "კეთილი იყოს თქვენი მობრძანება",
    },
    about: {
      title: "ჩვენ შესახებ",
      subtitle: "სახლი სახლიდან მოშორებით მშვენიერ გურიაში",
      p1: "გურიის მწვანე მთებში ჩაფლული, ჩვენი საოჯახო სასტუმრო გთავაზობთ ტრადიციული ქართული სითბოსა და თანამედროვე კომფორტის უნიკალურ შერწყმას. სამი თაობის განმავლობაში ჩვენი ოჯახი მთელი მსოფლიოდან მოგზაურებს იღებს.",
      p2: "გურია საქართველოს ერთ-ერთი ულამაზესი და ნაკლებად შესწავლილი რეგიონია, რომელიც ცნობილია სუბტროპიკული კლიმატით, ჩაის პლანტაციებით, ხელუხლებელი ბუნებით და გურული იუმორითა და სტუმართმოყვარეობით.",
      p3: "დარჩით ჩვენთან და გაიცანით ნამდვილი საქართველო — სახლში მომზადებული საჭმელი, ადგილობრივი ღვინო, თვალწარმტაცი ბუნება და ისტორიები, რომლებიც სამუდამოდ დაგამახსოვრდებათ.",
      familyTitle: "საოჯახო ტრადიცია",
      familyDesc: "ქართული სტუმართმოყვარეობის სამი თაობა, სტუმრებს 1985 წლიდან ვიღებთ",
      locationTitle: "შესანიშნავი მდებარეობა",
      locationDesc: "ჩაის პლანტაციებით, მთებითა და შავი ზღვის სანაპიროთი გარშემორტყმული",
      experienceTitle: "ავთენტური გამოცდილება",
      experienceDesc: "ტრადიციული სამზარეულო, ღვინის დეგუსტაცია და კულტურული ჩაძირვა",
    },
    rooms: {
      title: "ჩვენი სახლი",
      subtitle: "ტრადიციული ქართული სახლი ფართო ოთახებით და ლამაზი ბაღით მდინარესთან",
      room1Title: "მთავარი საძინებელი",
      room1Desc: "ელეგანტური მთავარი საძინებელი ტრადიციული ხის ავეჯით, ხელნაკეთი დეტალებით, კერძო აბაზანით და აივნით ბაღისა და მდინარის ხედით.",
      room2Title: "საოჯახო აპარტამენტი",
      room2Desc: "ფართო საოჯახო აპარტამენტი მყუდრო მისაღებით, საძინებლით, სამზარეულოთი და ტრადიციული ქართული ტექსტილით. იდეალურია ოჯახებისთვის.",
      room3Title: "სტუმრის საძინებლები",
      room3Desc: "თბილი და მიმზიდველი სტუმრის საძინებლები ხელნაკეთი ხის საწოლებით, ფერადი ქართული საბნებით და მთის ხედის ფანჯრებით.",
      room4Title: "ბაღი და მდინარე",
      room4Desc: "ჩვენი ლამაზი ბაღი მდინარემდე ვრცელდება, ხეხილით, ვაზით დაფარული ტერასით, გარე სასადილოთი და მშვიდი მდინარისპირა ადგილით დასასვენებლად.",
    },
    gallery: {
      title: "ფოტო გალერეა",
      subtitle: "გაეცანით ჩვენს სასტუმროს და მშვენიერ გურიის რეგიონს",
      all: "ყველა",
      rooms: "ოთახები",
      nature: "ბუნება",
      food: "საჭმელი",
      activities: "აქტივობები",
      prev: "წინა",
      next: "შემდეგი",
      close: "დახურვა",
    },
    video: {
      title: "ვიდეო ტური",
      subtitle: "გაიარეთ ვირტუალური ტური ჩვენს სასტუმროსა და მიმდებარე ტერიტორიაზე",
      tourTitle: "სასტუმროს ტური",
      tourDesc: "გაიარეთ ჩვენი მყუდრო ოთახები, ლამაზი ბაღი და ტრადიციული ქართული სამზარეულო.",
      regionTitle: "აღმოაჩინე გურია",
      regionDesc: "გაეცანით გურიის თვალწარმტაც ლანდშაფტებს, უძველეს ეკლესიებსა და ცოცხალ კულტურას.",
    },
    services: {
      title: "სერვისები და აქტივობები",
      subtitle: "გახადეთ თქვენი ყოფნა დაუვიწყარი",
      cuisine: "ქართული სამზარეულო",
      cuisineDesc: "ისიამოვნეთ სახლში მომზადებული ხაჭაპურით, ხინკლით და ტრადიციული გურული კერძებით.",
      wine: "ღვინის დეგუსტაცია",
      wineDesc: "გასინჯეთ ადგილობრივი ღვინოები საოჯახო ვენახებიდან, მათ შორის იშვიათი გურული ჯიშები ქვევრში.",
      hiking: "ლაშქრობა და ბუნება",
      hikingDesc: "გიდიანი ლაშქრობები სუბტროპიკულ ტყეებში, ჩანჩქერებთან და მთის ბილიკებზე.",
      culture: "კულტურული ტურები",
      cultureDesc: "ეწვიეთ უძველეს ეკლესიებს, ტრადიციულ სოფლებს და გაეცანით გურულ ხალხურ ტრადიციებს.",
      beach: "სანაპიროზე წვდომა",
      beachDesc: "მარტივი წვდომა შავი ზღვის სანაპირო პლაჟებზე, ჩვენი სასტუმროდან მხოლოდ 30 წუთში.",
      crafts: "ტრადიციული ხელობა",
      craftsDesc: "ისწავლეთ ტრადიციული ქართული ხელობა — კერამიკა, ქსოვა და ხის კვეთა.",
    },
    contact: {
      title: "დაგვიკავშირდით",
      subtitle: "სიამოვნებით მოვისმენთ თქვენგან",
      name: "თქვენი სახელი",
      email: "თქვენი ელფოსტა",
      message: "თქვენი შეტყობინება",
      send: "გაგზავნა",
      phone: "ტელეფონი",
      address: "მისამართი",
      addressValue: "ოზურგეთი, გურია, საქართველო",
      followUs: "გამოგვყევით",
      sent: "შეტყობინება გაიგზავნა! მალე დაგიკავშირდებით.",
    },
    footer: {
      rights: "ყველა უფლება დაცულია",
      madeWith: "შექმნილია ♥-ით გურიაში, საქართველო",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      rooms: "Номера",
      gallery: "Галерея",
      video: "Видео тур",
      services: "Услуги",
      contact: "Контакты",
    },
    hero: {
      title: "Семейный хостел в Гурии",
      subtitle: "Ощутите настоящее грузинское гостеприимство в сердце Гурии",
      cta: "Познакомьтесь с нашим хостелом",
      welcome: "Добро пожаловать в",
    },
    about: {
      title: "О нашем хостеле",
      subtitle: "Дом вдали от дома в прекрасной Гурии",
      p1: "Расположенный среди зелёных холмов Гурии, наш семейный хостел предлагает уникальное сочетание традиционного грузинского тепла и современного комфорта. Уже три поколения наша семья принимает путешественников со всего мира.",
      p2: "Гурия — один из самых красивых и малоизученных регионов Грузии, известный субтропическим климатом, чайными плантациями, нетронутой природой и знаменитым гурийским юмором и гостеприимством.",
      p3: "Останьтесь у нас и познайте настоящую Грузию — домашнюю еду, местное вино, захватывающую природу и истории, которые останутся с вами навсегда.",
      familyTitle: "Семейная традиция",
      familyDesc: "Три поколения грузинского гостеприимства, принимаем гостей с 1985 года",
      locationTitle: "Идеальное расположение",
      locationDesc: "В окружении чайных плантаций, гор и побережья Чёрного моря",
      experienceTitle: "Аутентичный опыт",
      experienceDesc: "Традиционная кухня, дегустация вин и культурное погружение",
    },
    rooms: {
      title: "Наш дом",
      subtitle: "Традиционный грузинский дом с просторными комнатами и красивым садом у реки",
      room1Title: "Главная спальня",
      room1Desc: "Элегантная главная спальня с традиционной деревянной мебелью, ручной работой, собственной ванной и балконом с видом на сад и реку.",
      room2Title: "Семейная квартира",
      room2Desc: "Просторная семейная квартира с уютной гостиной, спальней, кухней и традиционным грузинским текстилем. Идеально для семей.",
      room3Title: "Гостевые спальни",
      room3Desc: "Тёплые и уютные гостевые спальни с деревянными кроватями ручной работы, красочными грузинскими одеялами и окнами с видом на горы.",
      room4Title: "Сад и река",
      room4Desc: "Наш прекрасный сад простирается до реки, с фруктовыми деревьями, увитой виноградом террасой, обеденной зоной на открытом воздухе и тихим местом у реки для отдыха.",
    },
    gallery: {
      title: "Фотогалерея",
      subtitle: "Исследуйте наш хостел и прекрасный регион Гурия",
      all: "Все",
      rooms: "Номера",
      nature: "Природа",
      food: "Еда",
      activities: "Активности",
      prev: "Назад",
      next: "Вперёд",
      close: "Закрыть",
    },
    video: {
      title: "Видео тур",
      subtitle: "Совершите виртуальную экскурсию по нашему хостелу и окрестностям",
      tourTitle: "Тур по хостелу",
      tourDesc: "Пройдитесь по нашим уютным номерам, красивому саду и традиционной грузинской кухне.",
      regionTitle: "Откройте Гурию",
      regionDesc: "Исследуйте захватывающие пейзажи, древние церкви и яркую культуру Гурии.",
    },
    services: {
      title: "Услуги и активности",
      subtitle: "Сделайте ваше пребывание незабываемым",
      cuisine: "Грузинская кухня",
      cuisineDesc: "Наслаждайтесь домашним хачапури, хинкали и традиционными гурийскими блюдами от нашей семьи.",
      wine: "Дегустация вин",
      wineDesc: "Попробуйте местные вина из семейных виноградников, включая редкие гурийские сорта из квеври.",
      hiking: "Походы и природа",
      hikingDesc: "Пешие прогулки с гидом по субтропическим лесам, водопадам и живописным горным тропам.",
      culture: "Культурные туры",
      cultureDesc: "Посетите древние церкви, традиционные деревни и узнайте о гурийских народных традициях.",
      beach: "Доступ к пляжу",
      beachDesc: "Лёгкий доступ к пляжам Чёрного моря, всего 30 минут от нашего хостела.",
      crafts: "Традиционные ремёсла",
      craftsDesc: "Освойте традиционные грузинские ремёсла — гончарное дело, ткачество и резьбу по дереву.",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Мы будем рады услышать вас",
      name: "Ваше имя",
      email: "Ваш email",
      message: "Ваше сообщение",
      send: "Отправить",
      phone: "Телефон",
      address: "Адрес",
      addressValue: "Озургети, Гурия, Грузия",
      followUs: "Подписывайтесь",
      sent: "Сообщение отправлено! Мы скоро свяжемся с вами.",
    },
    footer: {
      rights: "Все права защищены",
      madeWith: "Сделано с ♥ в Гурии, Грузия",
    },
  },
};

export function useTranslation() {
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];
  return { t, language, setLanguage };
}