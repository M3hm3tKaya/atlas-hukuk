// ============================================================
// Atlas Hukuk - Site Data
// ============================================================

export const siteConfig = {
  name: "Atlas Hukuk",
  title: "Atlas Hukuk | Kurumsal Hukuk Danismanligi",
  description: "25 yillik deneyimle ticaret, is, gayrimenkul, aile, ceza ve fikri mulkiyet hukuku alanlarinda profesyonel hukuki danismanlik.",
  address: "Levent Mah. Buyukdere Cad. No: 128, Kat: 12, Besiktas, Istanbul",
  phone: "+90 212 555 0100",
  email: "info@atlashukuk.com.tr",
  workHours: "Pazartesi - Cuma: 09:00 - 18:00",
};

export const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Uzmanlik Alanlari", href: "/uzmanlik" },
  { label: "Ekibimiz", href: "/ekip" },
  { label: "Basari Hikayeleri", href: "/basari-hikayeleri" },
  { label: "Yayinlar", href: "/yayinlar" },
  { label: "Medya", href: "/medya" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "Iletisim", href: "/iletisim" },
];

export const expertiseAreas = [
  {
    id: "ticaret",
    title: "Ticaret Hukuku",
    icon: "scale",
    shortDesc: "Sirket kuruluslari, birlesme ve devir, ortaklik uyusmazliklari ve ticari sozlesmeler.",
    fullDesc: "Sirketlerin ticari faaliyetlerinden dogan her turlu hukuki meselede deneyimli kadromuzla yaninizdayiz. Sirket kuruluslari, birlesme ve devirler, ortaklik uyusmazliklari, ticari sozlesmeler, haksiz rekabet davalari ve iflas islemleri gibi konularda kapsamli hizmet sunuyoruz.",
    features: ["Sirket Kurulusu ve Yapilandirma", "Birlesme ve Devirler (M&A)", "Ticari Sozlesmeler", "Haksiz Rekabet", "Iflas ve Konkordato"],
  },
  {
    id: "is",
    title: "Is Hukuku",
    icon: "briefcase",
    shortDesc: "Ise iade davalari, kidem tazminati, toplu is sozlesmeleri ve isveren danismanligi.",
    fullDesc: "Isci ve isveren iliskilerinden kaynaklanan uyusmazliklarda her iki taraf icin de etkin cozumler uretiyoruz. Is sozlesmelerinin hazirlanmasindan fesih islemlerine, kidem ve ihbar tazminatindan ise iade davalarina kadar genis bir yelpazede hizmet veriyoruz.",
    features: ["Ise Iade Davalari", "Kidem ve Ihbar Tazminati", "Toplu Is Sozlesmeleri", "Isveren Danismanligi", "Is Kazasi Davalari"],
  },
  {
    id: "gayrimenkul",
    title: "Gayrimenkul Hukuku",
    icon: "building",
    shortDesc: "Tapu islemleri, kira uyusmazliklari, insaat hukuku ve kentsel donusum.",
    fullDesc: "Gayrimenkul sektorunun hizla gelisen yapisinda, mulkiyet haklarinizin korunmasi ve uyusmazliklarin cozumu icin profesyonel hukuki destek sagliyoruz. Tapu islemlerinden kira uyusmazliklarina, insaat hukukundan kentsel donusum projelerine kadar her alanda yaninizdayiz.",
    features: ["Tapu Islemleri", "Kira Uyusmazliklari", "Insaat Hukuku", "Kentsel Donusum", "Kamulastirma Davalari"],
  },
  {
    id: "aile",
    title: "Aile Hukuku",
    icon: "users",
    shortDesc: "Bosanma davalari, velayet, nafaka, mal paylasimi ve miras uyusmazliklari.",
    fullDesc: "Aile hukuku alaninda hassas ve gizlilik odakli yaklasimimizla muvekkillerimizin haklarini savunuyoruz. Bosanma davalarindan velayet uyusmazliklarina, nafaka taleplerinden mal paylasimi davalarinda kadar her konuda deneyimli ekibimizle yaninizdayiz.",
    features: ["Bosanma Davalari", "Velayet ve Nafaka", "Mal Paylasimi", "Miras Uyusmazliklari", "Evlilik Sozlesmeleri"],
  },
  {
    id: "ceza",
    title: "Ceza Hukuku",
    icon: "shield",
    shortDesc: "Ceza davalari, savunma, sorusturma surecleri ve infaz hukuku.",
    fullDesc: "Ceza hukuku alaninda guclu savunma stratejileriyle muvekkillerimizin haklarini koruyoruz. Sorusturma asamasindan yargilama surecine, istinaf ve temyiz asamalarina kadar her noktada etkin hukuki temsil sagliyoruz.",
    features: ["Ceza Savunmasi", "Sorusturma Surecleri", "Ekonomik Suclar", "Infaz Hukuku", "Magdur Haklari"],
  },
  {
    id: "fikri-mulkiyet",
    title: "Fikri Mulkiyet Hukuku",
    icon: "lightbulb",
    shortDesc: "Patent, marka tescili, telif haklari ve fikri mulkiyet ihlali davalari.",
    fullDesc: "Yaratici calismalarin ve bulus haklarinin korunmasi icin kapsamli hukuki destek sunuyoruz. Patent ve marka tescil islemlerinden telif haklari ihlali davalarina, lisans sozlesmelerinden ticari sir korumaya kadar genis bir alanda hizmet veriyoruz.",
    features: ["Patent Tescili", "Marka Tescili", "Telif Haklari", "Lisans Sozlesmeleri", "Fikri Mulkiyet Ihlali Davalari"],
  },
];

export const stats = [
  { value: "25+", label: "Yillik Deneyim" },
  { value: "500+", label: "Basarili Dava" },
  { value: "12", label: "Uzman Avukat" },
  { value: "%97", label: "Basari Orani" },
];

export const coreValues = [
  {
    title: "Guvenilirlik",
    description: "Muvekkillerimizle kurdugumuz guven iliskisi, basarili sonuclarin temelidir. Her davada seffaf ve durust yaklasimimizla yaninizdayiz.",
  },
  {
    title: "Uzmanlik",
    description: "Her alanda derin bilgi ve deneyime sahip kadromuzla en karmasik hukuki meselelere bile etkili cozumler uretiyoruz.",
  },
  {
    title: "Sonuc Odaklilik",
    description: "Stratejik yaklasimimiz ve titiz calismamizla muvekkillerimizin haklarini en etkili sekilde savunuyor, somut sonuclar elde ediyoruz.",
  },
];

export const caseStudies = [
  {
    id: 1,
    category: "Ticaret Hukuku",
    title: "Cok Uluslu Sirket Birlesmesi",
    problem: "Iki buyuk teknoloji sirketi arasindaki birlesme surecinde rekabet hukuku engelleri ve ortaklik uyusmazliklari ortaya cikmisti.",
    solution: "Detayli rekabet analizi ve muvekkilimizin cikarlarini koruyan ozel birlesme sozlesmesi hazirlanmistir.",
    result: "Birlesme 8 ay icinde basariyla tamamlandi, muvekkilimiz %40 pazar payi kazandi.",
  },
  {
    id: 2,
    category: "Is Hukuku",
    title: "Toplu Ise Iade Davasi",
    problem: "150 calisanin hakli neden gosterilmeden isten cikarilmasi uzerine toplu ise iade davasi acilmistir.",
    solution: "Her calisanin durumu bireysel olarak degerlendirilmis, guclu delil dosyalari olusturulmustur.",
    result: "Calisanlarin %92'si ise iade edilmis, geri kalanlar icin yuksek tazminat alinmistir.",
  },
  {
    id: 3,
    category: "Gayrimenkul Hukuku",
    title: "Kentsel Donusum Projesi Uyusmazligi",
    problem: "200 daireli bir sitede muteahhit ile kat maliklerinin kentsel donusum anlasmazligi ciddi boyutlara ulasmisti.",
    solution: "Arabuluculuk sureci baslatilmis, kat maliklerinin haklarini koruyan yeni sozlesme sartlari belirlenmistir.",
    result: "Proje yeniden yapilandirilmis, kat malikleri %30 daha fazla metrekare hakki elde etmistir.",
  },
  {
    id: 4,
    category: "Ceza Hukuku",
    title: "Ekonomik Suc Savunmasi",
    problem: "Bir sirket yoneticisi, yanlis vergi beyannamesi sebebiyle agir ceza talebiyle yargilandi.",
    solution: "Kapsamli mali analiz yapilmis, muhasebe hatalari ile kasitli suc arasindaki fark ortaya konmustur.",
    result: "Muvekkilimiz tum suclamalardan beraat etmistir.",
  },
  {
    id: 5,
    category: "Aile Hukuku",
    title: "Uluslararasi Velayet Uyusmazligi",
    problem: "Farkli ulkelerde yasayan ebeveynler arasinda cocugun velayeti konusunda uluslararasi hukuki uyusmazlik cikmisti.",
    solution: "Lahey Sozlesmesi kapsaminda uluslararasi isbirligi mekanizmalari devreye sokulmamistir.",
    result: "Cocugun ustun yarari gozetilerek ortak velayet karari alinmis, ziyaret haklari duzenli hale getirilmistir.",
  },
  {
    id: 6,
    category: "Fikri Mulkiyet Hukuku",
    title: "Patent Ihlali Davasi",
    problem: "Bir teknoloji sirketinin patentli bulus, rakip firma tarafindan izinsiz kullanilmistir.",
    solution: "Teknik bilirkisi raporlari ve uluslararasi patent arasmalasiyla guclu bir dava dosyasi hazirlanmistir.",
    result: "Mahkeme ihlali tescil etmis, muvekkilimize 2.5 milyon TL tazminat odenmesine karar vermistir.",
  },
];

export const teamMembers = {
  founders: [
    {
      name: "Av. Kerem Atlas",
      title: "Kurucu Ortak",
      specialty: "Ticaret Hukuku & Birlesme-Devir",
      experience: "25 Yil",
      education: "Istanbul Universitesi Hukuk Fakultesi",
      bio: "Istanbul Barosu uyesi, 25 yili askin deneyimiyle ticaret hukuku ve sirket birlesmelerinde Turkiye'nin oncu avukatlari arasinda yer almaktadir.",
    },
    {
      name: "Av. Selin Deniz",
      title: "Kurucu Ortak",
      specialty: "Ceza Hukuku & Insan Haklari",
      experience: "22 Yil",
      education: "Ankara Universitesi Hukuk Fakultesi",
      bio: "Ceza hukuku ve insan haklari alaninda ulusal ve uluslararasi duzeyde taninan bir hukukcu olup, pek cok emsal karara imza atmistir.",
    },
  ],
  seniors: [
    {
      name: "Av. Burak Yilmaz",
      title: "Kidemli Ortak",
      specialty: "Is Hukuku",
      experience: "18 Yil",
    },
    {
      name: "Av. Elif Kara",
      title: "Kidemli Ortak",
      specialty: "Gayrimenkul Hukuku",
      experience: "15 Yil",
    },
    {
      name: "Av. Cem Ozturk",
      title: "Kidemli Avukat",
      specialty: "Aile Hukuku",
      experience: "14 Yil",
    },
    {
      name: "Av. Ayse Demir",
      title: "Kidemli Avukat",
      specialty: "Fikri Mulkiyet Hukuku",
      experience: "12 Yil",
    },
  ],
  juniors: [
    { name: "Av. Tolga Arslan", specialty: "Ticaret Hukuku", experience: "5 Yil" },
    { name: "Av. Merve Sahin", specialty: "Is Hukuku", experience: "4 Yil" },
    { name: "Av. Can Erdogan", specialty: "Ceza Hukuku", experience: "3 Yil" },
    { name: "Av. Zeynep Koc", specialty: "Gayrimenkul Hukuku", experience: "3 Yil" },
    { name: "Av. Emre Yildiz", specialty: "Aile Hukuku", experience: "2 Yil" },
    { name: "Av. Irem Celik", specialty: "Fikri Mulkiyet Hukuku", experience: "2 Yil" },
  ],
};

export const testimonials = [
  {
    name: "Mehmet K.",
    company: "TechVenture A.S.",
    text: "Atlas Hukuk, sirketimizin birlesme surecinde gosterdigi profesyonellik ve stratejik yaklasimla beklentilerimizin cok otesinde bir hizmet sundu.",
  },
  {
    name: "Aylin T.",
    company: "Kisisel Muvekkil",
    text: "Bosanma davasinda hem hukuki hem de insani yaklasimla yaninda oldular. Sonuca odakli ve seffaf bir surecc yonettiler.",
  },
  {
    name: "Hasan R.",
    company: "Insaat Holding",
    text: "Gayrimenkul uyusmazliklarinda Atlas Hukuk'un deneyimi gercekten fark yaratiyor. Yillarca surmesi beklenen davamizi 6 ayda cozume kavusturdular.",
  },
];

export const publications = [
  {
    id: 1,
    title: "Yeni Turk Ticaret Kanunu'nda Sirket Birlesmeleri",
    author: "Av. Kerem Atlas",
    date: "15 Ocak 2026",
    category: "Ticaret Hukuku",
    excerpt: "Turk Ticaret Kanunu'nda yapilan son degisikliklerle sirket birlesme sureclerinde dikkat edilmesi gereken yeni duzenlemeler ve uygulamadaki etkileri.",
  },
  {
    id: 2,
    title: "Uzaktan Calismada Is Hukuku Boyutlari",
    author: "Av. Burak Yilmaz",
    date: "28 Subat 2026",
    category: "Is Hukuku",
    excerpt: "Pandemi sonrasi kalici hale gelen uzaktan calisma modelinde isveren ve calisanlarin haklari, yukumlulukleri ve hukuki cerceve.",
  },
  {
    id: 3,
    title: "Kentsel Donusum Projelerinde Kat Maliklerinin Haklari",
    author: "Av. Elif Kara",
    date: "10 Mart 2026",
    category: "Gayrimenkul Hukuku",
    excerpt: "Kentsel donusum kanunundaki son degisiklikler isiginda kat maliklerinin haklari, muteahhit secimi ve sozlesme sureci.",
  },
  {
    id: 4,
    title: "Yapay Zeka ve Fikri Mulkiyet Hakki",
    author: "Av. Ayse Demir",
    date: "22 Subat 2026",
    category: "Fikri Mulkiyet Hukuku",
    excerpt: "Yapay zeka tarafindan olusturulan eserlerin telif hakki statusu ve yapay zeka patentleri konusundaki guncel hukuki tartismalar.",
  },
  {
    id: 5,
    title: "Aile Ici Siddet ve Koruma Tedbirleri",
    author: "Av. Cem Ozturk",
    date: "05 Ocak 2026",
    category: "Aile Hukuku",
    excerpt: "6284 sayili kanun kapsaminda siddet magdurlarinin haklari, koruma kararlarinin alinma sureci ve uygulamadaki sorunlar.",
  },
  {
    id: 6,
    title: "Ekonomik Suclarda Etkin Pismanlik",
    author: "Av. Selin Deniz",
    date: "18 Aralik 2025",
    category: "Ceza Hukuku",
    excerpt: "Ekonomik suclar kapsaminda etkin pismanlik mussesesinin uygulanma kosullari ve Yargitay'in guncel kararlari.",
  },
  {
    id: 7,
    title: "Uluslararasi Tahkim Sureclerinde Turkiye",
    author: "Av. Kerem Atlas",
    date: "30 Kasim 2025",
    category: "Ticaret Hukuku",
    excerpt: "ICC ve ISTAC kapsaminda uluslararasi ticari tahkim sureclerinde Turkiye'nin konumu ve uygulamada karsilasilan meseleler.",
  },
  {
    id: 8,
    title: "Kisisel Verilerin Korunmasi ve KVKK Uyum Sureci",
    author: "Av. Tolga Arslan",
    date: "12 Kasim 2025",
    category: "Ticaret Hukuku",
    excerpt: "KVKK kapsaminda sirketlerin uyum surecleri, veri sorumlusu yukumlulukleri ve idari para cezalari.",
  },
];

export const mediaItems = [
  {
    id: 1,
    outlet: "Hurriyet Gazetesi",
    title: "Atlas Hukuk'tan Birlesme Rekoru",
    date: "Mart 2026",
    excerpt: "Atlas Hukuk, 2025 yilinda gerceklestirdigi 12 buyuk sirket birlesmesiyle sektorde rekor kirmistir.",
  },
  {
    id: 2,
    outlet: "Bloomberg HT",
    title: "Av. Kerem Atlas ile Ticaret Hukuku Sohbeti",
    date: "Subat 2026",
    excerpt: "Kurucu ortak Av. Kerem Atlas, Bloomberg HT'de yeni ticaret kanunu duzenlemelerini degerlendirdi.",
  },
  {
    id: 3,
    outlet: "Ekonomist Dergisi",
    title: "Yilin Hukuk Burosu Odulu",
    date: "Ocak 2026",
    excerpt: "Atlas Hukuk, Ekonomist dergisi tarafindan 'Yilin Ticaret Hukuku Burosu' secildi.",
  },
  {
    id: 4,
    outlet: "NTV",
    title: "Is Hukuku Paneli",
    date: "Aralik 2025",
    excerpt: "Av. Burak Yilmaz, NTV'de duzenlenen is hukuku panelinde uzaktan calismanin hukuki boyutlarini tartisti.",
  },
  {
    id: 5,
    outlet: "Dunya Gazetesi",
    title: "Kentsel Donusum ve Hukuk",
    date: "Kasim 2025",
    excerpt: "Av. Elif Kara, Dunya Gazetesi'ne verdigi roportajda kentsel donusum projelerinde hukuki surecleri anlatti.",
  },
  {
    id: 6,
    outlet: "TRT Haber",
    title: "Fikri Mulkiyet Haftasi Ozel Programi",
    date: "Ekim 2025",
    excerpt: "Av. Ayse Demir, Dunya Fikri Mulkiyet Gunu kapsaminda TRT Haber'de yapay zeka ve patent haklarini degerlendirdi.",
  },
];

export const careerValues = [
  {
    title: "Surekli Gelisim",
    description: "Hukuk dunyasindaki gelismeleri yakindan takip eder, ekibimize duzenli egitim ve seminer imkanlari sagliyoruz.",
  },
  {
    title: "Mentorlik Programi",
    description: "Deneyimli avukatlarimiz, genc meslektaslarimiza bire bir mentorlik yaparak kariyer gelisimlerini destekler.",
  },
  {
    title: "Dengeli Yasam",
    description: "Calisma ve ozel yasam dengesine onem verir, esnek calisma saatleri ve uzaktan calisma imkanlari sunuyoruz.",
  },
];

export const openPositions = [
  {
    title: "Kidemli Avukat - Ticaret Hukuku",
    type: "Tam Zamanli",
    experience: "7+ Yil",
    description: "Ticaret hukuku departmanimizda artan is hacmi sebebiyle deneyimli bir avukat ariyoruz.",
    requirements: ["Hukuk fakultesi mezunu", "7+ yil ticaret hukuku deneyimi", "Istanbul Barosu uyesi", "Ingilizce (Ileri)"],
  },
  {
    title: "Avukat - Is Hukuku",
    type: "Tam Zamanli",
    experience: "3-5 Yil",
    description: "Is hukuku alaninda buyuyen ekibimize katilacak, motivasyonu yuksek bir avukat ariyoruz.",
    requirements: ["Hukuk fakultesi mezunu", "3-5 yil is hukuku deneyimi", "Baro uyesi", "Takim calismasina yatkin"],
  },
  {
    title: "Stajyer Avukat",
    type: "Staj",
    experience: "Yeni Mezun",
    description: "Hukuk fakultesi mezunu, stajini buromuzda tamamlamak isteyen adaylari bekliyoruz.",
    requirements: ["Hukuk fakultesi mezunu veya son sinif ogrencisi", "Akademik basari", "Arastirma becerisi", "Iletisim yetenegi"],
  },
];
