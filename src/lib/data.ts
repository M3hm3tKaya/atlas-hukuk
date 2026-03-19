// ============================================================
// Atlas Hukuk - Site Data
// ============================================================

export const siteConfig = {
  name: "Atlas Hukuk",
  title: "Atlas Hukuk | Kurumsal Hukuk Danışmanlığı",
  description: "25 yıllık deneyimle ticaret, iş, gayrimenkul, aile, ceza ve fikri mülkiyet hukuku alanlarında profesyonel hukuki danışmanlık.",
  address: "Levent Mah. Büyükdere Cad. No: 128, Kat: 12, Beşiktaş, İstanbul",
  phone: "+90 212 555 0100",
  email: "info@atlashukuk.com.tr",
  workHours: "Pazartesi - Cuma: 09:00 - 18:00",
};

export const navLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Uzmanlık Alanları", href: "/uzmanlik" },
  { label: "Ekibimiz", href: "/ekip" },
  { label: "Başarı Hikayeleri", href: "/basari-hikayeleri" },
  { label: "Yayınlar", href: "/yayinlar" },
  { label: "Medya", href: "/medya" },
  { label: "Kariyer", href: "/kariyer" },
  { label: "İletişim", href: "/iletisim" },
];

export const expertiseAreas = [
  {
    id: "ticaret",
    title: "Ticaret Hukuku",
    icon: "scale",
    shortDesc: "Şirket kuruluşları, birleşme ve devir, ortaklık uyuşmazlıkları ve ticari sözleşmeler.",
    fullDesc: "Şirketlerin ticari faaliyetlerinden doğan her türlü hukuki meselede deneyimli kadromuzla yanınızdayız. Şirket kuruluşları, birleşme ve devirler, ortaklık uyuşmazlıkları, ticari sözleşmeler, haksız rekabet davaları ve iflas işlemleri gibi konularda kapsamlı hizmet sunuyoruz.",
    features: ["Şirket Kuruluşu ve Yapılandırma", "Birleşme ve Devirler (M&A)", "Ticari Sözleşmeler", "Haksız Rekabet", "İflas ve Konkordato"],
  },
  {
    id: "is",
    title: "İş Hukuku",
    icon: "briefcase",
    shortDesc: "İşe iade davaları, kıdem tazminatı, toplu iş sözleşmeleri ve işveren danışmanlığı.",
    fullDesc: "İşçi ve işveren ilişkilerinden kaynaklanan uyuşmazlıklarda her iki taraf için de etkin çözümler üretiyoruz. İş sözleşmelerinin hazırlanmasından fesih işlemlerine, kıdem ve ihbar tazminatından işe iade davalarına kadar geniş bir yelpazede hizmet veriyoruz.",
    features: ["İşe İade Davaları", "Kıdem ve İhbar Tazminatı", "Toplu İş Sözleşmeleri", "İşveren Danışmanlığı", "İş Kazası Davaları"],
  },
  {
    id: "gayrimenkul",
    title: "Gayrimenkul Hukuku",
    icon: "building",
    shortDesc: "Tapu işlemleri, kira uyuşmazlıkları, inşaat hukuku ve kentsel dönüşüm.",
    fullDesc: "Gayrimenkul sektörünün hızla gelişen yapısında, mülkiyet haklarınızın korunması ve uyuşmazlıkların çözümü için profesyonel hukuki destek sağlıyoruz. Tapu işlemlerinden kira uyuşmazlıklarına, inşaat hukukundan kentsel dönüşüm projelerine kadar her alanda yanınızdayız.",
    features: ["Tapu İşlemleri", "Kira Uyuşmazlıkları", "İnşaat Hukuku", "Kentsel Dönüşüm", "Kamulaştırma Davaları"],
  },
  {
    id: "aile",
    title: "Aile Hukuku",
    icon: "users",
    shortDesc: "Boşanma davaları, velayet, nafaka, mal paylaşımı ve miras uyuşmazlıkları.",
    fullDesc: "Aile hukuku alanında hassas ve gizlilik odaklı yaklaşımımızla müvekkillerimizin haklarını savunuyoruz. Boşanma davalarından velayet uyuşmazlıklarına, nafaka taleplerinden mal paylaşımı davalarında kadar her konuda deneyimli ekibimizle yanınızdayız.",
    features: ["Boşanma Davaları", "Velayet ve Nafaka", "Mal Paylaşımı", "Miras Uyuşmazlıkları", "Evlilik Sözleşmeleri"],
  },
  {
    id: "ceza",
    title: "Ceza Hukuku",
    icon: "shield",
    shortDesc: "Ceza davaları, savunma, soruşturma süreçleri ve infaz hukuku.",
    fullDesc: "Ceza hukuku alanında güçlü savunma stratejileriyle müvekkillerimizin haklarını koruyoruz. Soruşturma aşamasından yargılama sürecine, istinaf ve temyiz aşamalarına kadar her noktada etkin hukuki temsil sağlıyoruz.",
    features: ["Ceza Savunması", "Soruşturma Süreçleri", "Ekonomik Suçlar", "İnfaz Hukuku", "Mağdur Hakları"],
  },
  {
    id: "fikri-mulkiyet",
    title: "Fikri Mülkiyet Hukuku",
    icon: "lightbulb",
    shortDesc: "Patent, marka tescili, telif hakları ve fikri mülkiyet ihlali davaları.",
    fullDesc: "Yaratıcı çalışmaların ve buluş haklarının korunması için kapsamlı hukuki destek sunuyoruz. Patent ve marka tescil işlemlerinden telif hakları ihlali davalarına, lisans sözleşmelerinden ticari sır korumaya kadar geniş bir alanda hizmet veriyoruz.",
    features: ["Patent Tescili", "Marka Tescili", "Telif Hakları", "Lisans Sözleşmeleri", "Fikri Mülkiyet İhlali Davaları"],
  },
];

export const stats = [
  { value: "25+", label: "Yıllık Deneyim" },
  { value: "500+", label: "Başarılı Dava" },
  { value: "12", label: "Uzman Avukat" },
  { value: "%97", label: "Başarı Oranı" },
];

export const coreValues = [
  {
    title: "Güvenilirlik",
    description: "Müvekkillerimizle kurduğumuz güven ilişkisi, başarılı sonuçların temelidir. Her davada şeffaf ve dürüst yaklaşımımızla yanınızdayız.",
  },
  {
    title: "Uzmanlık",
    description: "Her alanda derin bilgi ve deneyime sahip kadromuzla en karmaşık hukuki meselelere bile etkili çözümler üretiyoruz.",
  },
  {
    title: "Sonuç Odaklılık",
    description: "Stratejik yaklaşımımız ve titiz çalışmamızla müvekkillerimizin haklarını en etkili şekilde savunuyor, somut sonuçlar elde ediyoruz.",
  },
];

export const caseStudies = [
  {
    id: 1,
    category: "Ticaret Hukuku",
    title: "Çok Uluslu Şirket Birleşmesi",
    problem: "İki büyük teknoloji şirketi arasındaki birleşme sürecinde rekabet hukuku engelleri ve ortaklık uyuşmazlıkları ortaya çıkmıştı.",
    solution: "Detaylı rekabet analizi ve müvekkilimizin çıkarlarını koruyan özel birleşme sözleşmesi hazırlanmıştır.",
    result: "Birleşme 8 ay içinde başarıyla tamamlandı, müvekkilimiz %40 pazar payı kazandı.",
  },
  {
    id: 2,
    category: "İş Hukuku",
    title: "Toplu İşe İade Davası",
    problem: "150 çalışanın haklı neden gösterilmeden işten çıkarılması üzerine toplu işe iade davası açılmıştır.",
    solution: "Her çalışanın durumu bireysel olarak değerlendirilmiş, güçlü delil dosyaları oluşturulmuştur.",
    result: "Çalışanların %92'si işe iade edilmiş, geri kalanlar için yüksek tazminat alınmıştır.",
  },
  {
    id: 3,
    category: "Gayrimenkul Hukuku",
    title: "Kentsel Dönüşüm Projesi Uyuşmazlığı",
    problem: "200 daireli bir sitede müteahhit ile kat maliklerinin kentsel dönüşüm anlaşmazlığı ciddi boyutlara ulaşmıştı.",
    solution: "Arabuluculuk süreci başlatılmış, kat maliklerinin haklarını koruyan yeni sözleşme şartları belirlenmiştir.",
    result: "Proje yeniden yapılandırılmış, kat malikleri %30 daha fazla metrekare hakkı elde etmiştir.",
  },
  {
    id: 4,
    category: "Ceza Hukuku",
    title: "Ekonomik Suç Savunması",
    problem: "Bir şirket yöneticisi, yanlış vergi beyannamesi sebebiyle ağır ceza talebiyle yargılandı.",
    solution: "Kapsamlı mali analiz yapılmış, muhasebe hataları ile kasıtlı suç arasındaki fark ortaya konmuştur.",
    result: "Müvekkilimiz tüm suçlamalardan beraat etmiştir.",
  },
  {
    id: 5,
    category: "Aile Hukuku",
    title: "Uluslararası Velayet Uyuşmazlığı",
    problem: "Farklı ülkelerde yaşayan ebeveynler arasında çocuğun velayeti konusunda uluslararası hukuki uyuşmazlık çıkmıştı.",
    solution: "Lahey Sözleşmesi kapsamında uluslararası işbirliği mekanizmaları devreye sokulmuştur.",
    result: "Çocuğun üstün yararı gözetilerek ortak velayet kararı alınmış, ziyaret hakları düzenli hale getirilmiştir.",
  },
  {
    id: 6,
    category: "Fikri Mülkiyet Hukuku",
    title: "Patent İhlali Davası",
    problem: "Bir teknoloji şirketinin patentli buluşu, rakip firma tarafından izinsiz kullanılmıştır.",
    solution: "Teknik bilirkişi raporları ve uluslararası patent araştırmasıyla güçlü bir dava dosyası hazırlanmıştır.",
    result: "Mahkeme ihlali tescil etmiş, müvekkilimize 2.5 milyon TL tazminat ödenmesine karar vermiştir.",
  },
];

export const teamMembers = {
  founders: [
    {
      name: "Av. Kerem Atlas",
      title: "Kurucu Ortak",
      specialty: "Ticaret Hukuku & Birleşme-Devir",
      experience: "25 Yıl",
      education: "İstanbul Üniversitesi Hukuk Fakültesi",
      bio: "İstanbul Barosu üyesi, 25 yılı aşkın deneyimiyle ticaret hukuku ve şirket birleşmelerinde Türkiye'nin öncü avukatları arasında yer almaktadır.",
    },
    {
      name: "Av. Selin Deniz",
      title: "Kurucu Ortak",
      specialty: "Ceza Hukuku & İnsan Hakları",
      experience: "22 Yıl",
      education: "Ankara Üniversitesi Hukuk Fakültesi",
      bio: "Ceza hukuku ve insan hakları alanında ulusal ve uluslararası düzeyde tanınan bir hukukçu olup, pek çok emsal karara imza atmıştır.",
    },
  ],
  seniors: [
    {
      name: "Av. Burak Yılmaz",
      title: "Kıdemli Ortak",
      specialty: "İş Hukuku",
      experience: "18 Yıl",
    },
    {
      name: "Av. Elif Kara",
      title: "Kıdemli Ortak",
      specialty: "Gayrimenkul Hukuku",
      experience: "15 Yıl",
    },
    {
      name: "Av. Cem Öztürk",
      title: "Kıdemli Avukat",
      specialty: "Aile Hukuku",
      experience: "14 Yıl",
    },
    {
      name: "Av. Ayşe Demir",
      title: "Kıdemli Avukat",
      specialty: "Fikri Mülkiyet Hukuku",
      experience: "12 Yıl",
    },
  ],
  juniors: [
    { name: "Av. Tolga Arslan", specialty: "Ticaret Hukuku", experience: "5 Yıl" },
    { name: "Av. Merve Şahin", specialty: "İş Hukuku", experience: "4 Yıl" },
    { name: "Av. Can Erdoğan", specialty: "Ceza Hukuku", experience: "3 Yıl" },
    { name: "Av. Zeynep Koç", specialty: "Gayrimenkul Hukuku", experience: "3 Yıl" },
    { name: "Av. Emre Yıldız", specialty: "Aile Hukuku", experience: "2 Yıl" },
    { name: "Av. İrem Çelik", specialty: "Fikri Mülkiyet Hukuku", experience: "2 Yıl" },
  ],
};

export const testimonials = [
  {
    name: "Mehmet K.",
    company: "TechVenture A.Ş.",
    text: "Atlas Hukuk, şirketimizin birleşme sürecinde gösterdiği profesyonellik ve stratejik yaklaşımla beklentilerimizin çok ötesinde bir hizmet sundu.",
  },
  {
    name: "Aylin T.",
    company: "Kişisel Müvekkil",
    text: "Boşanma davasında hem hukuki hem de insani yaklaşımla yanımda oldular. Sonuca odaklı ve şeffaf bir süreç yönettiler.",
  },
  {
    name: "Hasan R.",
    company: "İnşaat Holding",
    text: "Gayrimenkul uyuşmazlıklarında Atlas Hukuk'un deneyimi gerçekten fark yaratıyor. Yıllarca sürmesi beklenen davamızı 6 ayda çözüme kavuşturdular.",
  },
];

export const publications = [
  {
    id: 1,
    title: "Yeni Türk Ticaret Kanunu'nda Şirket Birleşmeleri",
    author: "Av. Kerem Atlas",
    date: "15 Ocak 2026",
    category: "Ticaret Hukuku",
    excerpt: "Türk Ticaret Kanunu'nda yapılan son değişikliklerle şirket birleşme süreçlerinde dikkat edilmesi gereken yeni düzenlemeler ve uygulamadaki etkileri.",
  },
  {
    id: 2,
    title: "Uzaktan Çalışmada İş Hukuku Boyutları",
    author: "Av. Burak Yılmaz",
    date: "28 Şubat 2026",
    category: "İş Hukuku",
    excerpt: "Pandemi sonrası kalıcı hale gelen uzaktan çalışma modelinde işveren ve çalışanların hakları, yükümlülükleri ve hukuki çerçeve.",
  },
  {
    id: 3,
    title: "Kentsel Dönüşüm Projelerinde Kat Maliklerinin Hakları",
    author: "Av. Elif Kara",
    date: "10 Mart 2026",
    category: "Gayrimenkul Hukuku",
    excerpt: "Kentsel dönüşüm kanunundaki son değişiklikler ışığında kat maliklerinin hakları, müteahhit seçimi ve sözleşme süreci.",
  },
  {
    id: 4,
    title: "Yapay Zeka ve Fikri Mülkiyet Hakkı",
    author: "Av. Ayşe Demir",
    date: "22 Şubat 2026",
    category: "Fikri Mülkiyet Hukuku",
    excerpt: "Yapay zeka tarafından oluşturulan eserlerin telif hakkı statüsü ve yapay zeka patentleri konusundaki güncel hukuki tartışmalar.",
  },
  {
    id: 5,
    title: "Aile İçi Şiddet ve Koruma Tedbirleri",
    author: "Av. Cem Öztürk",
    date: "05 Ocak 2026",
    category: "Aile Hukuku",
    excerpt: "6284 sayılı kanun kapsamında şiddet mağdurlarının hakları, koruma kararlarının alınma süreci ve uygulamadaki sorunlar.",
  },
  {
    id: 6,
    title: "Ekonomik Suçlarda Etkin Pişmanlık",
    author: "Av. Selin Deniz",
    date: "18 Aralik 2025",
    category: "Ceza Hukuku",
    excerpt: "Ekonomik suçlar kapsamında etkin pişmanlık müessesesinin uygulanma koşulları ve Yargıtay'ın güncel kararları.",
  },
  {
    id: 7,
    title: "Uluslararası Tahkim Süreçlerinde Türkiye",
    author: "Av. Kerem Atlas",
    date: "30 Kasim 2025",
    category: "Ticaret Hukuku",
    excerpt: "ICC ve ISTAC kapsamında uluslararası ticari tahkim süreçlerinde Türkiye'nin konumu ve uygulamada karşılaşılan meseleler.",
  },
  {
    id: 8,
    title: "Kişisel Verilerin Korunması ve KVKK Uyum Süreci",
    author: "Av. Tolga Arslan",
    date: "12 Kasim 2025",
    category: "Ticaret Hukuku",
    excerpt: "KVKK kapsamında şirketlerin uyum süreçleri, veri sorumlusu yükümlülükleri ve idari para cezaları.",
  },
];

export const mediaItems = [
  {
    id: 1,
    outlet: "Hurriyet Gazetesi",
    title: "Atlas Hukuk'tan Birleşme Rekoru",
    date: "Mart 2026",
    excerpt: "Atlas Hukuk, 2025 yılında gerçekleştirdiği 12 büyük şirket birleşmesiyle sektörde rekor kırmıştır.",
  },
  {
    id: 2,
    outlet: "Bloomberg HT",
    title: "Av. Kerem Atlas ile Ticaret Hukuku Sohbeti",
    date: "Şubat 2026",
    excerpt: "Kurucu ortak Av. Kerem Atlas, Bloomberg HT'de yeni ticaret kanunu düzenlemelerini değerlendirdi.",
  },
  {
    id: 3,
    outlet: "Ekonomist Dergisi",
    title: "Yılın Hukuk Bürosu Ödülü",
    date: "Ocak 2026",
    excerpt: "Atlas Hukuk, Ekonomist dergisi tarafından 'Yılın Ticaret Hukuku Bürosu' seçildi.",
  },
  {
    id: 4,
    outlet: "NTV",
    title: "İş Hukuku Paneli",
    date: "Aralık 2025",
    excerpt: "Av. Burak Yılmaz, NTV'de düzenlenen iş hukuku panelinde uzaktan çalışmanın hukuki boyutlarını tartıştı.",
  },
  {
    id: 5,
    outlet: "Dunya Gazetesi",
    title: "Kentsel Dönüşüm ve Hukuk",
    date: "Kasım 2025",
    excerpt: "Av. Elif Kara, Dünya Gazetesi'ne verdiği röportajda kentsel dönüşüm projelerinde hukuki süreçleri anlattı.",
  },
  {
    id: 6,
    outlet: "TRT Haber",
    title: "Fikri Mülkiyet Haftası Özel Programı",
    date: "Ekim 2025",
    excerpt: "Av. Ayşe Demir, Dünya Fikri Mülkiyet Günü kapsamında TRT Haber'de yapay zeka ve patent haklarını değerlendirdi.",
  },
];

export const careerValues = [
  {
    title: "Sürekli Gelişim",
    description: "Hukuk dünyasındaki gelişmeleri yakından takip eder, ekibimize düzenli eğitim ve seminer imkanları sağlıyoruz.",
  },
  {
    title: "Mentorlük Programı",
    description: "Deneyimli avukatlarımız, genç meslektaşlarımıza bire bir mentorlük yaparak kariyer gelişimlerini destekler.",
  },
  {
    title: "Dengeli Yaşam",
    description: "Çalışma ve özel yaşam dengesine önem verir, esnek çalışma saatleri ve uzaktan çalışma imkanları sunuyoruz.",
  },
];

export const openPositions = [
  {
    title: "Kıdemli Avukat - Ticaret Hukuku",
    type: "Tam Zamanlı",
    experience: "7+ Yıl",
    description: "Ticaret hukuku departmanımızda artan iş hacmi sebebiyle deneyimli bir avukat arıyoruz.",
    requirements: ["Hukuk fakültesi mezunu", "7+ yıl ticaret hukuku deneyimi", "İstanbul Barosu üyesi", "İngilizce (İleri)"],
  },
  {
    title: "Avukat - İş Hukuku",
    type: "Tam Zamanlı",
    experience: "3-5 Yıl",
    description: "İş hukuku alanında büyüyen ekibimize katılacak, motivasyonu yüksek bir avukat arıyoruz.",
    requirements: ["Hukuk fakültesi mezunu", "3-5 yıl iş hukuku deneyimi", "Baro üyesi", "Takım çalışmasına yatkın"],
  },
  {
    title: "Stajyer Avukat",
    type: "Staj",
    experience: "Yeni Mezun",
    description: "Hukuk fakültesi mezunu, stajını büromuzda tamamlamak isteyen adayları bekliyoruz.",
    requirements: ["Hukuk fakültesi mezunu veya son sınıf öğrencisi", "Akademik başarı", "Araştırma becerisi", "İletişim yeteneği"],
  },
];
