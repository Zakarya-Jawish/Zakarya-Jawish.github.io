/* =====================================================================
   محتوى الموقع — هذا هو الملف الوحيد الذي تحتاج لتعديله لتحديث الموقع.
   Site content — the only file you need to edit to update the site.

   - كل نص له نسختان: en للإنجليزية و ar للعربية.
   - لإضافة مشروع جديد: انسخ أي عنصر داخل projects وعدّل قيمه.
   - لإضافة صور شاشات لمشروع: ضع الصور في assets/projects/
     ثم اكتب مساراتها داخل images، مثل:
     images: ["assets/projects/doctor-1.png", "assets/projects/doctor-2.png"]
   ===================================================================== */

window.SITE = {
  name: { en: "Zakarya Jawish", ar: "زكريا جاويش" },
  role: { en: "Flutter Developer · Mobile Applications", ar: "مطور Flutter · تطبيقات الجوال" },
  tagline: {
    en: "I build and ship production mobile apps end-to-end — from clean architecture and API integration to real-time features and the Play Store release.",
    ar: "أبني تطبيقات جوال إنتاجية وأطلقها من البداية حتى النهاية: من البنية النظيفة وربط الواجهات البرمجية، إلى الميزات اللحظية والنشر على Google Play.",
  },
  location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },

  // صورتك الشخصية (اختياري) — مثال: "assets/photo.jpg"
  photo: "",

  meta: {
    title: { en: "Zakarya Jawish — Flutter Developer", ar: "زكريا جاويش — مطور Flutter" },
    description: {
      en: "Flutter developer in Damascus building production mobile apps — a clinic platform live on Google Play across 30+ clinics.",
      ar: "مطور Flutter من دمشق يبني تطبيقات جوال إنتاجية — منصة عيادات منشورة على Google Play وتعمل في أكثر من 30 عيادة.",
    },
  },

  links: {
    email: "zakaryajawish@gmail.com",
    phone: "+963956623945",
    phoneDisplay: "+963 956 623 945",
    // رقم واتساب بدون + أو مسافات — مثال: "963956623945" (اتركه فارغاً لإخفائه)
    whatsapp: "",
    github: "https://github.com/Zakarya-Jawish",
    linkedin: "https://linkedin.com/in/zakarya-jawish",
    codeforces: "https://codeforces.com/profile/JAWISH",
    cv: "assets/Zakarya_Jawish_CV.pdf",
  },

  stats: [
    { value: "1.5+", label: { en: "Years building production apps", ar: "سنة خبرة في تطبيقات إنتاجية" } },
    { value: "30+", label: { en: "Clinics using my apps", ar: "عيادة تستخدم تطبيقاتي" } },
    { value: "60+", label: { en: "Screens in the doctor app", ar: "شاشة في تطبيق الطبيب" } },
    { value: "1,200+", label: { en: "Codeforces problems solved", ar: "مسألة محلولة على Codeforces" } },
  ],

  about: [
    {
      en: "I'm a Flutter developer based in Damascus with 1.5 years of production experience. At VARX I'm the primary developer of a multi-tenant clinic management platform — a doctor app of 60+ screens and a patient companion app, both live on Google Play and used by 30+ clinics.",
      ar: "أنا مطور Flutter من دمشق، لديّ سنة ونصف من الخبرة في بيئة العمل الفعلية. في شركة VARX أنا المطور الرئيسي لمنصة إدارة عيادات متعددة المستأجرين (Multi-tenant): تطبيق للأطباء يضم أكثر من 60 شاشة، وتطبيق مرافق للمرضى، وكلاهما منشور على Google Play وتستخدمه أكثر من 30 عيادة.",
    },
    {
      en: "I care about structure as much as screens: Cubit/BLoC with Clean Architecture, a shared core of reusable services, and an in-house component library that keeps two products consistent. I'm comfortable owning a feature from API integration all the way to the Play Store release.",
      ar: "أهتم ببنية الكود بقدر اهتمامي بالواجهات: Cubit/BLoC مع Clean Architecture، وطبقة أساسية مشتركة من الخدمات القابلة لإعادة الاستخدام، ومكتبة مكونات داخلية تحافظ على تناسق منتجين مختلفين. وأستطيع تولّي الميزة كاملة، من ربط الـ API حتى إصدار التطبيق على المتجر.",
    },
    {
      en: "My competitive programming background shapes how I think about performance and edge cases in everyday code: 1,200+ problems on Codeforces, three university programming contests (2023–2025), and qualification for the national SCPC in 2025.",
      ar: "خلفيتي في البرمجة التنافسية تنعكس على طريقة تفكيري في الأداء والحالات الحدّية في الكود اليومي: أكثر من 1,200 مسألة على Codeforces، وثلاث مشاركات في المسابقة البرمجية على مستوى الجامعة (2023–2025)، والتأهل إلى المسابقة على مستوى سوريا (SCPC) عام 2025.",
    },
  ],

  highlights: [
    {
      icon: "layers",
      title: { en: "Clean Architecture", ar: "بنية نظيفة" },
      text: {
        en: "Cubit/BLoC, MVVM and dependency injection over a shared core layer.",
        ar: "Cubit/BLoC وMVVM وحقن الاعتماديات فوق طبقة أساسية مشتركة.",
      },
    },
    {
      icon: "zap",
      title: { en: "Real-time features", ar: "ميزات لحظية" },
      text: {
        en: "SignalR live updates and FCM push notifications that deep-link into the right screen.",
        ar: "تحديثات مباشرة عبر SignalR وإشعارات FCM تفتح الشاشة المطلوبة مباشرة.",
      },
    },
    {
      icon: "languages",
      title: { en: "Arabic & English", ar: "عربي وإنجليزي" },
      text: {
        en: "Full localisation with RTL layouts and a persisted language choice.",
        ar: "دعم كامل للغتين مع واجهات من اليمين لليسار وحفظ اللغة المختارة.",
      },
    },
    {
      icon: "rocket",
      title: { en: "End-to-end delivery", ar: "تسليم متكامل" },
      text: {
        en: "From API integration to Play Store release builds.",
        ar: "من ربط الـ API حتى إصدار النسخة على Google Play.",
      },
    },
  ],

  experience: [
    {
      role: { en: "Flutter Developer", ar: "مطور Flutter" },
      company: { en: "VARX", ar: "VARX" },
      location: { en: "Damascus, Syria", ar: "دمشق، سوريا" },
      from: "05/2025",
      to: null, // null = حتى الآن
      summary: {
        en: "Primary developer of the company's clinic platform, plus projects in e-commerce and HR.",
        ar: "المطور الرئيسي لمنصة العيادات في الشركة، إضافة إلى مشاريع في التجارة الإلكترونية والموارد البشرية.",
      },
      points: [
        {
          en: "Built the doctor and patient apps of a multi-tenant clinic platform, in production across 30+ clinics.",
          ar: "بناء تطبيقي الطبيب والمريض لمنصة عيادات متعددة المستأجرين، تعمل فعلياً في أكثر من 30 عيادة.",
        },
        {
          en: "Built a shared core of 18 services and an in-house component library reused across both apps.",
          ar: "بناء طبقة أساسية من 18 خدمة ومكتبة مكونات داخلية يُعاد استخدامها في التطبيقين.",
        },
        {
          en: "Delivered features for Treema (e-commerce & delivery) and built an HR management app.",
          ar: "تنفيذ ميزات في تطبيق Treema للتجارة الإلكترونية والتوصيل، وبناء تطبيق لإدارة الموارد البشرية.",
        },
      ],
    },
    {
      role: { en: "Flutter Developer Intern", ar: "متدرب مطور Flutter" },
      company: { en: "Darrebni", ar: "دربني" },
      location: { en: "Remote", ar: "عن بُعد" },
      from: "03/2024",
      to: "07/2024",
      points: [
        {
          en: "Awarded first place in the training programme and a STEM certificate for outstanding performance.",
          ar: "حصلت على المركز الأول في البرنامج التدريبي وشهادة STEM تقديراً للأداء المتميز.",
        },
        {
          en: "Built Flutter apps covering responsive UI, navigation, REST APIs, local databases, localisation, exception handling and state management.",
          ar: "بناء تطبيقات Flutter شملت الواجهات المتجاوبة، والتنقل، وربط REST APIs، وقواعد البيانات المحلية، وتعدد اللغات، ومعالجة الأخطاء، وإدارة الحالة.",
        },
      ],
      links: [
        {
          icon: "award",
          label: { en: "STEM Certificate", ar: "شهادة STEM" },
          url: "https://drive.google.com/file/d/1X97s6IfkmTjd-uQ6yjtzKoMvcBfle7u3/view?usp=sharing",
        },
        {
          icon: "file",
          label: { en: "Recommendation Letter", ar: "رسالة التوصية" },
          url: "https://drive.google.com/file/d/1s_E4V1UQv38CKZttQCtHlVUs0MXOf7_-/view?usp=sharing",
        },
      ],
    },
  ],

  // hue: لون المشروع (0–360) — icon: أيقونة المشروع
  // links.type: play | github | demo | video
  projects: [
    {
      featured: true,
      hue: 172,
      icon: "stethoscope",
      title: { en: "Clinic System — Doctor App", ar: "نظام العيادات — تطبيق الطبيب" },
      type: { en: "Production · Healthcare · VARX", ar: "منتج فعلي · رعاية صحية · VARX" },
      from: "05/2025",
      to: null,
      live: true,
      summary: {
        en: "The doctor-facing side of a multi-tenant clinic platform: patient records, appointments, a live queue, prescriptions, invoicing and subscriptions — in production across 30+ clinics.",
        ar: "الجزء الخاص بالأطباء في منصة عيادات متعددة المستأجرين: سجلات المرضى، والمواعيد، وقائمة الانتظار المباشرة، والوصفات الطبية، والفواتير، والاشتراكات — يعمل فعلياً في أكثر من 30 عيادة.",
      },
      metrics: [
        { value: "60+", label: { en: "Screens", ar: "شاشة" } },
        { value: "30+", label: { en: "Clinics", ar: "عيادة" } },
        { value: "18", label: { en: "Core services", ar: "خدمة أساسية" } },
      ],
      points: [
        {
          en: "Multi-tenant client with role-based permissions, subscription plans and tenant-scoped data.",
          ar: "تطبيق متعدد المستأجرين بصلاحيات حسب الدور، وخطط اشتراك، وبيانات معزولة لكل عيادة.",
        },
        {
          en: "Live patient queue and appointment status over SignalR, with FCM push notifications that deep-link into the target screen.",
          ar: "قائمة انتظار وحالة مواعيد محدّثة لحظياً عبر SignalR، مع إشعارات FCM تفتح الشاشة المطلوبة مباشرة.",
        },
        {
          en: "A core layer of 18 services: Dio client with centralised error handling, JWT sessions, Google Sign-In, uploads and runtime permissions.",
          ar: "طبقة أساسية من 18 خدمة: عميل Dio بمعالجة مركزية للأخطاء، وجلسات JWT، وتسجيل الدخول بحساب Google، ورفع الملفات، وأذونات التشغيل.",
        },
        {
          en: "An in-house component library reused across 60+ screens: paginated searchable dropdowns, an infinite-scroll mixin and skeleton loaders.",
          ar: "مكتبة مكونات داخلية مستخدمة في أكثر من 60 شاشة: قوائم منسدلة قابلة للبحث مع ترقيم من الخادم، وآلية تمرير لا نهائي، وهياكل تحميل (Skeleton).",
        },
        {
          en: "Statistics dashboards with fl_chart, Excel export of clinic reports, and full Arabic/English RTL support.",
          ar: "لوحات إحصائيات باستخدام fl_chart، وتصدير تقارير العيادة إلى Excel، ودعم كامل للعربية والإنجليزية مع RTL.",
        },
      ],
      tags: ["Flutter", "Cubit/BLoC", "Clean Architecture", "SignalR", "FCM", "Dio", "fl_chart"],
      links: [{ type: "play", url: "https://play.google.com/store/apps/details?id=com.clinic.code.doctor" }],
      images: [
        "assets/projects/clinic-doctor-1.jpg",
        "assets/projects/clinic-doctor-2.jpg",
        "assets/projects/clinic-doctor-3.jpg",
        "assets/projects/clinic-doctor-4.jpg",
        "assets/projects/clinic-doctor-5.jpg",
        "assets/projects/clinic-doctor-6.jpg",
        "assets/projects/clinic-doctor-7.jpg",
        "assets/projects/clinic-doctor-8.jpg",
      ],
    },
    {
      hue: 168,
      icon: "heartPulse",
      title: { en: "Clinic System — Patient App", ar: "نظام العيادات — تطبيق المريض" },
      type: { en: "Production · Healthcare · VARX", ar: "منتج فعلي · رعاية صحية · VARX" },
      from: "08/2025",
      to: null,
      live: true,
      summary: {
        en: "The patient companion app: book service and surgery appointments, follow prescribed medicines and keep personal medical records.",
        ar: "التطبيق المرافق للمرضى: حجز مواعيد الخدمات والعمليات الجراحية، ومتابعة الأدوية الموصوفة، والاحتفاظ بالسجل الطبي الشخصي.",
      },
      points: [
        {
          en: "Medical records covering allergies, lab analyses, radiology and procedures.",
          ar: "سجل طبي يشمل الحساسية، والتحاليل المخبرية، والأشعة، والإجراءات الطبية.",
        },
        {
          en: "Scheduled local reminders for upcoming appointments, plus doctor search, filters and favourites.",
          ar: "تذكيرات محلية مجدولة قبل المواعيد، مع البحث عن الأطباء والتصفية والمفضلة.",
        },
        {
          en: "Built on the doctor app's design system and core services — one consistent product, no duplicated work.",
          ar: "مبني على نظام التصميم والخدمات الأساسية لتطبيق الطبيب، ما يضمن تناسق المنتج ويمنع تكرار العمل.",
        },
      ],
      tags: ["Flutter", "Cubit/BLoC", "Local notifications", "Design system"],
      links: [{ type: "play", url: "https://play.google.com/store/apps/details?id=com.clinic.code.patient" }],
      images: [
        "assets/projects/clinic-patient-1.jpg",
        "assets/projects/clinic-patient-2.jpg",
        "assets/projects/clinic-patient-3.jpg",
        "assets/projects/clinic-patient-4.jpg",
        "assets/projects/clinic-patient-5.jpg",
        "assets/projects/clinic-patient-6.jpg",
        "assets/projects/clinic-patient-7.jpg",
        "assets/projects/clinic-patient-8.jpg",
      ],
    },
    {
      hue: 24,
      icon: "cart",
      title: { en: "Treema — E-commerce & Delivery", ar: "Treema — تجارة إلكترونية وتوصيل" },
      type: { en: "E-commerce · VARX", ar: "تجارة إلكترونية · VARX" },
      from: "05/2025",
      to: "06/2025",
      summary: {
        en: "Key shopping and delivery flows for an e-commerce app, delivered in a one-month engagement.",
        ar: "مسارات أساسية للتسوق والتوصيل في تطبيق تجارة إلكترونية، نُفّذت خلال شهر واحد.",
      },
      points: [
        {
          en: "Quick-cart checkout and order summary with discount handling and final-price calculation.",
          ar: "إتمام الشراء السريع من السلة وملخص الطلب، مع معالجة الخصومات وحساب السعر النهائي.",
        },
        {
          en: "SKU browsing with lazy image loading, paginated order history and shareable product links.",
          ar: "تصفح المنتجات مع تحميل كسول للصور، وسجل طلبات مقسّم إلى صفحات، وروابط منتجات قابلة للمشاركة.",
        },
        {
          en: "A delivery-agent module with status transitions, and the product returns flow.",
          ar: "وحدة خاصة بمندوب التوصيل مع انتقالات حالة الطلب، ومسار إرجاع المنتجات.",
        },
      ],
      tags: ["Flutter", "E-commerce", "Pagination", "Deep links"],
      links: [],
      images: [],
    },
    {
      hue: 262,
      icon: "clock",
      title: { en: "HR Management App", ar: "تطبيق إدارة الموارد البشرية" },
      type: { en: "HR · VARX", ar: "موارد بشرية · VARX" },
      from: "04/2026",
      to: "05/2026",
      summary: {
        en: "Attendance and employee management for an HR platform.",
        ar: "إدارة الحضور والموظفين ضمن منصة للموارد البشرية.",
      },
      points: [
        {
          en: "Check-in / check-out with the working state persisted locally, so an active shift survives app restarts.",
          ar: "تسجيل الحضور والانصراف مع حفظ حالة الدوام محلياً، فتبقى الوردية النشطة حتى بعد إعادة تشغيل التطبيق.",
        },
        {
          en: "Working-hours tracking and attendance history.",
          ar: "تتبّع ساعات العمل وسجل الحضور.",
        },
        {
          en: "Employment-status handling, an employee permissions module and Arabic error messaging.",
          ar: "معالجة الحالة الوظيفية، ووحدة لأذونات الموظفين، ورسائل أخطاء باللغة العربية.",
        },
      ],
      tags: ["Flutter", "Local persistence", "Permissions"],
      links: [],
      images: [],
    },
    {
      hue: 345,
      icon: "note",
      title: { en: "Dawwen — Notes App", ar: "دوّن — تطبيق ملاحظات" },
      type: { en: "Personal · Open source", ar: "مشروع شخصي · مفتوح المصدر" },
      from: "11/2024",
      to: "01/2025",
      summary: {
        en: "A notes app with full CRUD, dark mode and multi-screen navigation.",
        ar: "تطبيق ملاحظات يدعم الإضافة والتعديل والحذف، مع الوضع الداكن والتنقل بين عدة شاشات.",
      },
      points: [
        {
          en: "Hive local database with Cubit state management.",
          ar: "قاعدة بيانات محلية Hive مع إدارة الحالة عبر Cubit.",
        },
        {
          en: "Structured with Clean Architecture.",
          ar: "مبني وفق مبادئ Clean Architecture.",
        },
      ],
      tags: ["Flutter", "Hive", "Cubit", "Clean Architecture"],
      links: [{ type: "github", url: "https://github.com/Zakarya-Jawish/dawwen" }],
      images: [],
    },
  ],

  skills: [
    {
      icon: "code",
      title: { en: "Languages & databases", ar: "اللغات وقواعد البيانات" },
      items: ["Dart", "C++", "C#", "SQL", "MySQL"],
    },
    {
      icon: "smartphone",
      title: { en: "Framework & UI", ar: "إطار العمل والواجهات" },
      items: [
        "Flutter (Android & iOS)",
        "Material Design",
        { en: "Responsive & adaptive layouts", ar: "واجهات متجاوبة ومتكيفة" },
        { en: "Reusable component libraries", ar: "مكتبات مكونات قابلة لإعادة الاستخدام" },
        "fl_chart",
        { en: "Skeleton loaders", ar: "هياكل التحميل (Skeleton)" },
        { en: "Localisation & RTL", ar: "تعدد اللغات و RTL" },
      ],
    },
    {
      icon: "layers",
      title: { en: "State & architecture", ar: "إدارة الحالة والبنية" },
      items: [
        "Cubit / BLoC",
        "GetX",
        "Provider",
        "Clean Architecture",
        "MVVM",
        "OOP",
        "Clean Code",
        { en: "Dependency injection", ar: "حقن الاعتماديات" },
        { en: "Role-based permissions", ar: "صلاحيات حسب الدور" },
      ],
    },
    {
      icon: "plug",
      title: { en: "Networking & APIs", ar: "الشبكات والواجهات البرمجية" },
      items: [
        "REST APIs",
        "Dio",
        { en: "JWT authentication", ar: "مصادقة JWT" },
        "Google Sign-In",
        { en: "Multipart upload", ar: "رفع الملفات (Multipart)" },
        { en: "Centralised error handling", ar: "معالجة مركزية للأخطاء" },
        { en: "Server-side pagination", ar: "ترقيم الصفحات من الخادم" },
      ],
    },
    {
      icon: "zap",
      title: { en: "Real-time & messaging", ar: "الاتصال اللحظي والإشعارات" },
      items: [
        "SignalR",
        "Firebase Cloud Messaging",
        { en: "Deep linking", ar: "الروابط العميقة (Deep links)" },
        { en: "Local & scheduled notifications", ar: "إشعارات محلية ومجدولة" },
        { en: "Connectivity handling", ar: "إدارة حالة الاتصال" },
      ],
    },
    {
      icon: "database",
      title: { en: "Storage & data", ar: "التخزين والبيانات" },
      items: [
        "SharedPreferences",
        "Hive",
        "SQFLite",
        { en: "Image caching", ar: "تخزين الصور مؤقتاً" },
        { en: "File storage", ar: "تخزين الملفات" },
        { en: "Excel export", ar: "التصدير إلى Excel" },
      ],
    },
    {
      icon: "wrench",
      title: { en: "Tools & delivery", ar: "الأدوات والنشر" },
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "FVM",
        "Postman",
        "Firebase",
        "Figma",
        "Adobe XD",
        { en: "Play Store releases", ar: "النشر على Google Play" },
      ],
    },
    {
      icon: "sparkles",
      title: { en: "AI-assisted development", ar: "التطوير بمساعدة الذكاء الاصطناعي" },
      items: [
        "Claude",
        "Gemini",
        { en: "Prompt engineering", ar: "هندسة الأوامر" },
        { en: "Code review", ar: "مراجعة الكود" },
        { en: "Refactoring", ar: "إعادة هيكلة الكود" },
        { en: "Rapid prototyping", ar: "النماذج الأولية السريعة" },
      ],
    },
  ],

  education: [
    {
      degree: {
        en: "B.Sc. in Information Technology Engineering — Software Engineering",
        ar: "بكالوريوس في هندسة تقانة المعلومات — هندسة البرمجيات",
      },
      school: { en: "Syrian Virtual University, Damascus", ar: "الجامعة الافتراضية السورية، دمشق" },
      from: "04/2021",
      to: "2026",
      expected: true,
    },
    {
      degree: { en: "Technical Diploma in Software Engineering", ar: "دبلوم تقني في هندسة البرمجيات" },
      school: {
        en: "Damascus University — Technology Computer College",
        ar: "جامعة دمشق — المعهد التقاني للحاسوب",
      },
      from: "10/2020",
      to: "02/2023",
    },
  ],

  achievements: [
    {
      icon: "trophy",
      title: { en: "1st place — Darrebni Flutter training programme", ar: "المركز الأول — برنامج دربني التدريبي في Flutter" },
      text: { en: "Plus a STEM certificate for outstanding performance.", ar: "مع شهادة STEM تقديراً للأداء المتميز." },
      links: [
        {
          icon: "award",
          label: { en: "STEM Certificate", ar: "شهادة STEM" },
          url: "https://drive.google.com/file/d/1X97s6IfkmTjd-uQ6yjtzKoMvcBfle7u3/view?usp=sharing",
        },
        {
          icon: "file",
          label: { en: "Recommendation Letter", ar: "رسالة التوصية" },
          url: "https://drive.google.com/file/d/1s_E4V1UQv38CKZttQCtHlVUs0MXOf7_-/view?usp=sharing",
        },
      ],
    },
    {
      icon: "award",
      title: { en: "Qualified for SCPC 2025 — national level", ar: "التأهل إلى SCPC 2025 على مستوى سوريا" },
      text: {
        en: "Competed in the university-level programming contest three times, and in 2025 qualified for the Syrian Collegiate Programming Contest at national level.",
        ar: "شاركت في المسابقة البرمجية على مستوى الجامعة ثلاث مرات، وتأهلت عام 2025 إلى المسابقة البرمجية الجامعية السورية على مستوى سوريا.",
      },
      // highlight: يميّز السنة التي تأهلت فيها
      years: [
        { year: "2023", label: { en: "University", ar: "الجامعة" } },
        { year: "2024", label: { en: "University", ar: "الجامعة" } },
        { year: "2025", label: { en: "National", ar: "سوريا" }, highlight: true },
      ],
    },
    {
      icon: "chart",
      title: { en: "1,200+ problems solved on Codeforces", ar: "أكثر من 1,200 مسألة محلولة على Codeforces" },
      text: {
        en: "Algorithms, data structures and complexity analysis applied to production code.",
        ar: "خوارزميات وبنى معطيات وتحليل تعقيد أطبّقها في الكود الإنتاجي.",
      },
      links: [{ icon: "external", label: { en: "Codeforces profile", ar: "ملفي على Codeforces" }, url: "https://codeforces.com/profile/JAWISH" }],
    },
  ],

  courses: {
    provider: { en: "Udemy · 2024–2025", ar: "Udemy · 2024–2025" },
    items: ["Flutter Advanced — BLoC & MVVM Pattern", "Complete Flutter & Dart Development", "Master Git & GitHub"],
  },
};

/* نصوص الواجهة الثابتة — Interface strings */
window.UI = {
  en: {
    skip: "Skip to content",
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_label: "Main navigation",
    menu: "Menu",
    lang_switch: "التبديل إلى العربية",
    theme_dark: "Switch to dark mode",
    theme_light: "Switch to light mode",
    cta_contact: "Get in touch",
    cta_cv: "Download CV",
    present: "Present",
    expected: "Expected",
    live_play: "Live on Google Play",
    view_play: "Google Play",
    view_code: "Source code",
    view_demo: "Live demo",
    view_video: "Watch video",
    view_shots: "Screenshots",
    shots_count: "screenshots",
    gallery_prev: "Previous",
    gallery_next: "Next",
    close: "Close",
    featured: "Featured",
    about_eyebrow: "About",
    about_title: "Building apps people rely on every day",
    exp_eyebrow: "Experience",
    exp_title: "Professional experience",
    proj_eyebrow: "Projects",
    proj_title: "Selected work",
    proj_intro: "Production apps used by real clinics, product work at VARX, and personal projects.",
    skills_eyebrow: "Skills",
    skills_title: "Skills & tools",
    skills_intro: "From UI and state management to real-time messaging and release.",
    edu_eyebrow: "Education",
    edu_title: "Education & achievements",
    edu_col: "Education",
    ach_col: "Achievements",
    courses_col: "Continuous learning",
    contact_eyebrow: "Contact",
    contact_title: "Let's build something together",
    contact_text: "Have a project or a role in mind? Reach out — I'd be glad to talk.",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    copy: "Copy",
    copied: "Copied",
    rights: "All rights reserved.",
    back_top: "Back to top",
    mock_title: "Live queue",
    mock_live: "Live",
    mock_now: "Now serving",
    mock_in: "In session",
    mock_next: "Next",
    mock_wait: "Waiting",
    mock_notif: "New appointment booked",
    mock_notif_sub: "Push notification · now",
    mock_chip: "SignalR connected",
    noscript: "Please enable JavaScript to view this site.",
  },
  ar: {
    skip: "انتقل إلى المحتوى",
    nav_about: "نبذة",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_skills: "المهارات",
    nav_education: "التعليم",
    nav_contact: "تواصل",
    nav_label: "القائمة الرئيسية",
    menu: "القائمة",
    lang_switch: "Switch to English",
    theme_dark: "التبديل إلى الوضع الداكن",
    theme_light: "التبديل إلى الوضع الفاتح",
    cta_contact: "تواصل معي",
    cta_cv: "تحميل السيرة الذاتية",
    present: "حتى الآن",
    expected: "متوقع",
    live_play: "متاح على Google Play",
    view_play: "Google Play",
    view_code: "الكود المصدري",
    view_demo: "تجربة مباشرة",
    view_video: "شاهد الفيديو",
    view_shots: "صور التطبيق",
    shots_count: "صور",
    gallery_prev: "السابق",
    gallery_next: "التالي",
    close: "إغلاق",
    featured: "مشروع مميز",
    about_eyebrow: "نبذة عني",
    about_title: "أبني تطبيقات يعتمد عليها الناس يومياً",
    exp_eyebrow: "الخبرات",
    exp_title: "الخبرة العملية",
    proj_eyebrow: "المشاريع",
    proj_title: "أبرز أعمالي",
    proj_intro: "تطبيقات تعمل فعلياً في عيادات حقيقية، وأعمال ضمن شركة VARX، ومشاريع شخصية.",
    skills_eyebrow: "المهارات",
    skills_title: "المهارات والأدوات",
    skills_intro: "من الواجهات وإدارة الحالة إلى الاتصال اللحظي والنشر.",
    edu_eyebrow: "التعليم",
    edu_title: "التعليم والإنجازات",
    edu_col: "التعليم",
    ach_col: "الإنجازات",
    courses_col: "التعلّم المستمر",
    contact_eyebrow: "تواصل",
    contact_title: "لنبنِ شيئاً معاً",
    contact_text: "لديك مشروع أو فرصة عمل؟ تواصل معي، يسعدني الحديث معك.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    whatsapp: "واتساب",
    copy: "نسخ",
    copied: "تم النسخ",
    rights: "جميع الحقوق محفوظة.",
    back_top: "العودة للأعلى",
    mock_title: "قائمة الانتظار",
    mock_live: "مباشر",
    mock_now: "الدور الحالي",
    mock_in: "قيد المعاينة",
    mock_next: "التالي",
    mock_wait: "بالانتظار",
    mock_notif: "تم حجز موعد جديد",
    mock_notif_sub: "إشعار فوري · الآن",
    mock_chip: "SignalR متصل",
    noscript: "يرجى تفعيل JavaScript لعرض الموقع.",
  },
};
