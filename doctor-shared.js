/* ==========================================================================
   TABABA DOCTOR PLATFORM - SHARED DATA ENGINE & NAVIGATION CONTROLLER
   ========================================================================== */

// ============================= CLINICS DATA MODEL =============================
const CLINICS = [
  {
    id: "clinic_mansoura",
    tag: "mansoura",
    name: "مركز طبابا الطبي",
    branchName: "فرع المنصورة",
    address: "حي الجامعة، المنصورة، الدقهلية",
    specialty: "باطنة عامة وجهاز هضمي",
    phone: "+20 50 234 5678",
    workingDays: ["الأحد", "الثلاثاء", "الخميس"],
    workingHours: "09:00 ص - 02:00 م",
    color: "var(--accent)",
    stats: { activePatients: 42, todayAppointments: 12, todayRevenue: 8500, unreadMessages: 7, aiAlerts: 3, consultations: 92, noShowRate: '4%' }
  },
  {
    id: "clinic_cairo",
    tag: "cairo",
    name: "عيادة النور التخصصية",
    branchName: "فرع القاهرة",
    address: "شارع عباس العقاد، مدينة نصر، القاهرة",
    specialty: "باطنة عامة وسكري",
    phone: "+20 2 2401 9876",
    workingDays: ["السبت", "الاثنين", "الأربعاء"],
    workingHours: "04:00 م - 09:00 م",
    color: "var(--info)",
    stats: { activePatients: 31, todayAppointments: 8, todayRevenue: 6200, unreadMessages: 4, aiAlerts: 2, consultations: 71, noShowRate: '6%' }
  },
  {
    id: "clinic_giza",
    tag: "giza",
    name: "عيادة فيوتشر كير",
    branchName: "فرع الجيزة",
    address: "هايبر وان، الشيخ زايد، الجيزة",
    specialty: "باطنة وقلب وقسطرة",
    phone: "+20 2 3855 4321",
    workingDays: ["الأحد", "الأربعاء"],
    workingHours: "01:00 م - 06:00 م",
    color: "var(--warn)",
    stats: { activePatients: 55, todayAppointments: 14, todayRevenue: 9800, unreadMessages: 5, aiAlerts: 3, consultations: 121, noShowRate: '5%' }
  }
];

const CLINIC_MAP = {
  clinic_mansoura: { name: "مركز طبابا الطبي — المنصورة", short: "المنصورة", tag: "mansoura", color: "var(--accent)" },
  clinic_cairo: { name: "عيادة النور التخصصية — القاهرة", short: "القاهرة", tag: "cairo", color: "var(--info)" },
  clinic_giza: { name: "عيادة فيوتشر كير — الجيزة", short: "الجيزة", tag: "giza", color: "var(--warn)" }
};

// ============================= MARKETING & LEADS ATTRIBUTION =============================
const MARKETING_SOURCES = {
  facebook_ads: { label: "إعلانات فيسبوك", icon: "brand-facebook", color: "#1877F2", bg: "rgba(24, 119, 242, 0.15)" },
  instagram_ads: { label: "إعلانات انستجرام", icon: "brand-instagram", color: "#E1306C", bg: "rgba(225, 48, 108, 0.15)" },
  google_ads: { label: "إعلانات جوجل", icon: "brand-google", color: "#EA4335", bg: "rgba(234, 67, 53, 0.15)" },
  whatsapp: { label: "واتساب مباشر", icon: "brand-whatsapp", color: "#25D366", bg: "rgba(37, 211, 102, 0.15)" },
  website_lead: { label: "الموقع الإلكتروني", icon: "world", color: "#1fe6a8", bg: "rgba(31, 230, 168, 0.15)" },
  phone_call: { label: "اتصال هاتفي وارد", icon: "phone-incoming", color: "#5b9cf5", bg: "rgba(91, 156, 245, 0.15)" }
};

// ============================= PATIENT DATA MODEL =============================
const PATIENTS = [
  {
    "id": 1,
    "name": "أحمد محمد",
    "age": 45,
    "gender": "ذكر",
    "phone": "+20 101 234 5678",
    "patientId": "TB-1045",
    "isFromLead": true,
    "leadSource": "facebook_ads",
    "sourceLabel": "إعلانات فيسبوك",
    "campaign": "حملة الجهاز الهضمي والقولون - المنصورة",
    "csAgent": "سارة محمود",
    "leadCode": "LD-601",
    "convertedDate": "2026-09-16",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "اضطراب في قراءات السكر الصباحية وإجهاد عام",
    "status": "waiting",
    "time": "10:00",
    "type": "clinic",
    "priority": "high",
    "waitMin": 8,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "تنميل بالأطراف",
      "إرهاق متكرر",
      "عطش شديد"
    ],
    "lastVisit": "2026-09-06",
    "nextFollowup": "2026-09-12",
    "followupOverdue": true,
    "followupOverdueDays": 6,
    "treatmentStatus": "at-risk",
    "aiScore": 95,
    "treatmentPlan": "خطة ضبط السكر التراكمي وتخفيض الجرعات تدريجياً",
    "unreadMessages": 2,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": true,
    "lastActivity": "منذ 10 دقائق",
    "lastActiveTime": "اليوم 10:42 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 2,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "اليوم 10:42 ص",
        "title": "المريض أرسل رسالة",
        "desc": "دكتور السكر عالي الصبح ومش عارف أزود الجرعة ولا لأ",
        "type": "msg"
      },
      {
        "time": "أمس 04:00 م",
        "title": "تأخر موعد المتابعة المحدد",
        "desc": "لم يتم تأكيد الحجز لموعد المتابعة الدوري (تأخر 6 أيام)",
        "type": "alert"
      },
      {
        "time": "06 سبتمبر 2026",
        "title": "كشف مكتمل (فرع المنصورة)",
        "desc": "طلب تحاليل HbA1c ووظائف كلى",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-09-06",
        "note": "السكر التراكمي 8.4%، تم طلب ضبط النظام الغذائي (فرع المنصورة)"
      }
    ]
  },
  {
    "id": 2,
    "name": "سلمى طارق",
    "age": 8,
    "gender": "أنثى",
    "phone": "+20 109 876 5432",
    "patientId": "TB-2088",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "حساسية صدر وسخونية",
    "diagnosis": "التهاب شعبي تحسسي حاد + اشتباه عدوى فيروسية",
    "complaint": "سخونية مستمرة 38.5 وكحة جافة متواصلة بالليل",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "high",
    "waitMin": 12,
    "chronic": [
      "حساسية صدر موسمية"
    ],
    "allergies": [
      "بنسلين ومشتقاته (حساسية شديدة)"
    ],
    "meds": [
      "خافض حرارة باراسيتامول",
      "بخاخ سالبيوتامول"
    ],
    "region": "chest",
    "painLevel": 7,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "تزييق في الصدر",
      "تسارع تنفس",
      "صعوبة في النوم"
    ],
    "lastVisit": "2026-09-08",
    "nextFollowup": "2026-09-13",
    "followupOverdue": true,
    "followupOverdueDays": 1,
    "treatmentStatus": "review-due",
    "aiScore": 90,
    "treatmentPlan": "بروتوكول موسعات الشعب ومضادات الحساسية مع تجنب البنسلين تماماً",
    "unreadMessages": 1,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": true,
    "lastActivity": "منذ 25 دقيقة",
    "lastActiveTime": "اليوم 09:15 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 1,
      "treatmentOverdue": false,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "اليوم 09:15 ص",
        "title": "رسالة من أم المريضة",
        "desc": "البنت سخونة نزلت الحمد لله بس الكحة لسه مضايقاها بالليل",
        "type": "msg"
      },
      {
        "time": "08 سبتمبر 2026",
        "title": "كشف مكتمل (فرع القاهرة)",
        "desc": "تشخيص التهاب شعبي تحسسي وطلب أشعة صدر",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-09-08",
        "note": "حساسية صدرية حادة مع حمى ونوبات كحة ليلية (فرع القاهرة)"
      }
    ]
  },
  {
    "id": 3,
    "name": "محمود سيد",
    "age": 45,
    "gender": "ذكر",
    "phone": "+20 102 345 6789",
    "patientId": "TB-3140",
    "isFromLead": true,
    "leadSource": "whatsapp",
    "sourceLabel": "واتساب مباشر",
    "campaign": "استفسارات واتساب السريعة للعيادة",
    "csAgent": "سارة محمود",
    "leadCode": "LD-604",
    "convertedDate": "2026-09-16",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم عن 200 وإرهاق",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "أسبوع",
    "painSymptoms": [
      "تعب عام",
      "عطش زائد"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-10-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "at-risk",
    "aiScore": 45,
    "treatmentPlan": "مراقبة سكر تراكمي كل 3 أشهر مع ضبط غذائي",
    "unreadMessages": 3,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "اليوم 08:30 ص",
    "lastActiveTime": "اليوم 08:30 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 3,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "اليوم 08:30 ص",
        "title": "رسالة من المريض",
        "desc": "أنا بعت لحضرتك 3 مرات بخصوص جرعة الدواء ومستني ردك",
        "type": "msg"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "السكر التراكمي 9.1%، تم تحويل لأخصائي تغذية (فرع الجيزة)"
      }
    ]
  },
  {
    "id": 4,
    "name": "كريم فتحي",
    "age": 52,
    "gender": "ذكر",
    "phone": "+20 106 789 0123",
    "patientId": "TB-4092",
    "isFromLead": true,
    "leadSource": "instagram_ads",
    "sourceLabel": "إعلانات انستجرام",
    "campaign": "حملة فحوصات القلب وضغط الدم - انستجرام",
    "csAgent": "سارة محمود",
    "leadCode": "LD-602",
    "convertedDate": "2026-09-15",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم بالصدر عند المجهود وضغط مرتفع",
    "status": "waiting",
    "time": "11:15",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "chest",
    "painLevel": 5,
    "painDuration": "أسبوعين",
    "painSymptoms": [
      "ألم صدري عند المجهود",
      "ضيق تنفس خفيف"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 40,
    "treatmentPlan": "رسم قلب دوري كل شهر ومتابعة ضغط يومياً",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "أمس 05:00 م",
    "lastActiveTime": "أمس 05:00 م",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "01 أغسطس 2026",
        "title": "كشف دوري (فرع المنصورة)",
        "desc": "رسم قلب طبيعي مع ارتفاع طفيف بالضغط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "متابعة ذبحة صدرية مع ارتفاع ضغط (فرع المنصورة)"
      }
    ]
  },
  {
    "id": 5,
    "name": "إيمان حسن",
    "age": 29,
    "gender": "أنثى",
    "phone": "+20 100 112 2334",
    "patientId": "TB-5120",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "11:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 3,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "head",
    "painLevel": 8,
    "painDuration": "أسبوع",
    "painSymptoms": [
      "هالة بصرية",
      "غثيان",
      "حساسية للضوء"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 15,
    "treatmentPlan": "بروفيلاكسي إندرال يومياً مع تسجيل نوبات الصداع",
    "unreadMessages": 1,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "اليوم 07:45 ص",
    "lastActiveTime": "اليوم 07:45 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 1,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "اليوم 07:45 ص",
        "title": "رسالة من المريضة",
        "desc": "حبيت أأكد موعد كشف الفيديو التابع لفرع القاهرة الساعة 11:30",
        "type": "msg"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "نوبة صداع نصفي حادة مع هالة - تعديل الجرعة (فرع القاهرة)"
      }
    ]
  },
  {
    "id": 6,
    "name": "شادي عبد السلام",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1061074070",
    "patientId": "TB-1090",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-07",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 16,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-07",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-07",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 7,
    "name": "سناء البستاني",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1071086415",
    "patientId": "TB-1105",
    "isFromLead": true,
    "leadSource": "google_ads",
    "sourceLabel": "إعلانات جوجل",
    "campaign": "حملة استشارات الباطنة العامة والسكري",
    "csAgent": "أحمد رشاد",
    "leadCode": "LD-603",
    "convertedDate": "2026-09-16",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "high",
    "waitMin": 12,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-08",
    "nextFollowup": "2026-09-17",
    "followupOverdue": true,
    "followupOverdueDays": 1,
    "treatmentStatus": "at-risk",
    "aiScore": 88,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 2,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": true,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 2,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-08",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-08",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 8,
    "name": "يوسف البحيري",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1081098760",
    "patientId": "TB-1120",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-09",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 43,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-09",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-09",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 9,
    "name": "عبير موسى",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1001111105",
    "patientId": "TB-1135",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-10",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 19,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-10",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-10",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 10,
    "name": "حازم البنا",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1011123450",
    "patientId": "TB-1150",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-11",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 20,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-11",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-11",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 11,
    "name": "فاطمة صلاح الدين",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1021135795",
    "patientId": "TB-1165",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "high",
    "waitMin": 16,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-12",
    "nextFollowup": "2026-09-21",
    "followupOverdue": true,
    "followupOverdueDays": 5,
    "treatmentStatus": "at-risk",
    "aiScore": 86,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-12",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-12",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 12,
    "name": "فوزي عامر",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1031148140",
    "patientId": "TB-1180",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-13",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 47,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-13",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-13",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 13,
    "name": "نجلاء الوزير",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1041160485",
    "patientId": "TB-1195",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "high",
    "waitMin": 18,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-14",
    "nextFollowup": "2026-09-23",
    "followupOverdue": true,
    "followupOverdueDays": 7,
    "treatmentStatus": "at-risk",
    "aiScore": 88,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-14",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-14",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 14,
    "name": "وليد حسن",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1051172830",
    "patientId": "TB-1210",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 24,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-15",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 15,
    "name": "إسراء الجندي",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1061185175",
    "patientId": "TB-1225",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "نقرس"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-16",
    "nextFollowup": "2026-09-25",
    "followupOverdue": true,
    "followupOverdueDays": 2,
    "treatmentStatus": "review-due",
    "aiScore": 65,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 1,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 1,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-16",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-16",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 16,
    "name": "شريف عبد العزيز",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1071197520",
    "patientId": "TB-1240",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "high",
    "waitMin": 6,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-17",
    "nextFollowup": "2026-09-26",
    "followupOverdue": true,
    "followupOverdueDays": 3,
    "treatmentStatus": "at-risk",
    "aiScore": 76,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-17",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-17",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 17,
    "name": "رانيا عبد الجليل",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1081209865",
    "patientId": "TB-1255",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-18",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 12,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-18",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-18",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 18,
    "name": "إبراهيم جمال",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1001222210",
    "patientId": "TB-1270",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-19",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 13,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-19",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-19",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 19,
    "name": "بسمة الألفي",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1011234555",
    "patientId": "TB-1285",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-20",
    "nextFollowup": "2026-09-11",
    "followupOverdue": true,
    "followupOverdueDays": 6,
    "treatmentStatus": "review-due",
    "aiScore": 69,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-20",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-20",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 20,
    "name": "كامل فؤاد",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1021246900",
    "patientId": "TB-1300",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-21",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 40,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-21",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-21",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 21,
    "name": "دعاء الدسوقي",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1031259245",
    "patientId": "TB-1315",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "high",
    "waitMin": 11,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-22",
    "nextFollowup": "2026-09-13",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "at-risk",
    "aiScore": 81,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-22",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-22",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 22,
    "name": "علي عثمان",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1041271590",
    "patientId": "TB-1330",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-23",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 17,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-23",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-23",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 23,
    "name": "إنجي فتحي",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1051283935",
    "patientId": "TB-1345",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-24",
    "nextFollowup": "2026-09-15",
    "followupOverdue": true,
    "followupOverdueDays": 3,
    "treatmentStatus": "review-due",
    "aiScore": 53,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-24",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-24",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 24,
    "name": "أشرف المهدي",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1061296280",
    "patientId": "TB-1360",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 44,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-25",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 25,
    "name": "مي بهاء الدين",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1071308625",
    "patientId": "TB-1375",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-17",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 20,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-01",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 26,
    "name": "بهاء الصياد",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1081320970",
    "patientId": "TB-1390",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-02",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 21,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-02",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-02",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 27,
    "name": "نادية زكي",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1001333315",
    "patientId": "TB-1405",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-03",
    "nextFollowup": "2026-09-19",
    "followupOverdue": true,
    "followupOverdueDays": 7,
    "treatmentStatus": "review-due",
    "aiScore": 57,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-03",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-03",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 28,
    "name": "مروان النجار",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1011345660",
    "patientId": "TB-1420",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "high",
    "waitMin": 18,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-04",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "at-risk",
    "aiScore": 88,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": true,
      "symptomsWorsened": true,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-04",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-04",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 29,
    "name": "داليا مراد",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1021358005",
    "patientId": "TB-1435",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-05",
    "nextFollowup": "2026-09-21",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 24,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-05",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-05",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 30,
    "name": "هشام عاشور",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1031370350",
    "patientId": "TB-1450",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-06",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 10,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-06",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-06",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 31,
    "name": "آية عبد ربه",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1041382695",
    "patientId": "TB-1465",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-07",
    "nextFollowup": "2026-09-23",
    "followupOverdue": true,
    "followupOverdueDays": 4,
    "treatmentStatus": "review-due",
    "aiScore": 61,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-07",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-07",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 32,
    "name": "زياد سيد",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1051395040",
    "patientId": "TB-1480",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-08",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 37,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-08",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-08",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 33,
    "name": "دينا إسماعيل",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1061407385",
    "patientId": "TB-1495",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "نقرس"
    ],
    "allergies": [],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-09",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 13,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-09",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-09",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 34,
    "name": "توفيق المنشاوي",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1071419730",
    "patientId": "TB-1510",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-10",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 14,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-10",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-10",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 35,
    "name": "لمياء العريان",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1081432075",
    "patientId": "TB-1525",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-11",
    "nextFollowup": "2026-09-27",
    "followupOverdue": true,
    "followupOverdueDays": 1,
    "treatmentStatus": "review-due",
    "aiScore": 65,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-11",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-11",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 36,
    "name": "محمود منصور",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1001444420",
    "patientId": "TB-1540",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-12",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 41,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-12",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-12",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 37,
    "name": "سلمى خليل",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1011456765",
    "patientId": "TB-1555",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-13",
    "nextFollowup": "2026-09-11",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 17,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-13",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-13",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 38,
    "name": "ماجد غانم",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1021469110",
    "patientId": "TB-1570",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-14",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 18,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-14",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-14",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 39,
    "name": "لبنى القاضي",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1031481455",
    "patientId": "TB-1585",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-09-13",
    "followupOverdue": true,
    "followupOverdueDays": 5,
    "treatmentStatus": "review-due",
    "aiScore": 69,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-15",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 40,
    "name": "نبيل البارودي",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1041493800",
    "patientId": "TB-1600",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-16",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 45,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-16",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-16",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 41,
    "name": "مروة طارق",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1051506145",
    "patientId": "TB-1615",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-17",
    "nextFollowup": "2026-09-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 21,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-17",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-17",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 42,
    "name": "أمير بركات",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1061518490",
    "patientId": "TB-1630",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-18",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 22,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-18",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-18",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 43,
    "name": "مريم كمال الدين",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1071530835",
    "patientId": "TB-1645",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-19",
    "nextFollowup": "2026-09-17",
    "followupOverdue": true,
    "followupOverdueDays": 2,
    "treatmentStatus": "review-due",
    "aiScore": 53,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-19",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-19",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 44,
    "name": "خالد درويش",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1081543180",
    "patientId": "TB-1660",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-20",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 49,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-20",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-20",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 45,
    "name": "ميرفت السيد",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1001555525",
    "patientId": "TB-1675",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-21",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 10,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-21",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-21",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 46,
    "name": "أيمن علي",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1011567870",
    "patientId": "TB-1690",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-22",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 11,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-22",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-22",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 47,
    "name": "ولاء سليم",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1021580215",
    "patientId": "TB-1705",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-23",
    "nextFollowup": "2026-09-21",
    "followupOverdue": true,
    "followupOverdueDays": 6,
    "treatmentStatus": "review-due",
    "aiScore": 57,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-23",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-23",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 48,
    "name": "سمير الشناوي",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1031592560",
    "patientId": "TB-1720",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-24",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 38,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-24",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-24",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 49,
    "name": "نهى عبد الحق",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1041604905",
    "patientId": "TB-1735",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-23",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 14,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-25",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 50,
    "name": "أحمد محمد",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1051617250",
    "patientId": "TB-1750",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 15,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-01",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 51,
    "name": "أمل رضوان",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1061629595",
    "patientId": "TB-1765",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "نقرس"
    ],
    "allergies": [],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-02",
    "nextFollowup": "2026-09-25",
    "followupOverdue": true,
    "followupOverdueDays": 3,
    "treatmentStatus": "review-due",
    "aiScore": 61,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-02",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-02",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 52,
    "name": "مصطفى عبد الغني",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1071641940",
    "patientId": "TB-1780",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-03",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 42,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-03",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-03",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 53,
    "name": "إيمان خفاجة",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1081654285",
    "patientId": "TB-1795",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-04",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 18,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-04",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-04",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 54,
    "name": "مدحت الحداد",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1001666630",
    "patientId": "TB-1810",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-05",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 19,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-05",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-05",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 55,
    "name": "ريهام الشربيني",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1011678975",
    "patientId": "TB-1825",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-06",
    "nextFollowup": "2026-09-11",
    "followupOverdue": true,
    "followupOverdueDays": 7,
    "treatmentStatus": "review-due",
    "aiScore": 65,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": true,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": true,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-06",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-06",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 56,
    "name": "شادي عبد السلام",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1021691320",
    "patientId": "TB-1840",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-07",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 46,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-07",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-07",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 57,
    "name": "نرمين البستاني",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1031703665",
    "patientId": "TB-1855",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-08",
    "nextFollowup": "2026-09-13",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 22,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-08",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-08",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 58,
    "name": "يوسف البحيري",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1041716010",
    "patientId": "TB-1870",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-09",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 23,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-09",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-09",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 59,
    "name": "هبة موسى",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1051728355",
    "patientId": "TB-1885",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-10",
    "nextFollowup": "2026-09-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 24,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-10",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-10",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 60,
    "name": "حازم البنا",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1061740700",
    "patientId": "TB-1900",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-11",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 35,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-11",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-11",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 61,
    "name": "شيرين صلاح الدين",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1071753045",
    "patientId": "TB-1915",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-12",
    "nextFollowup": "2026-09-17",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 11,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-12",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-12",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 62,
    "name": "فوزي عامر",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1081765390",
    "patientId": "TB-1930",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-13",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 12,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-13",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-13",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 63,
    "name": "هند الوزير",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1001777735",
    "patientId": "TB-1945",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-14",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 13,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-14",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-14",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 64,
    "name": "وليد حسن",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1011790080",
    "patientId": "TB-1960",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 39,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-15",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 65,
    "name": "ياسمين الجندي",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1021802425",
    "patientId": "TB-1975",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-16",
    "nextFollowup": "2026-09-21",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 15,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-16",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-16",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 66,
    "name": "شريف عبد العزيز",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1031814770",
    "patientId": "TB-1990",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-17",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 16,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-17",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-17",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 67,
    "name": "رحاب عبد الجليل",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1041827115",
    "patientId": "TB-2005",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-18",
    "nextFollowup": "2026-09-23",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 17,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-18",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-18",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 68,
    "name": "إبراهيم جمال",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1051839460",
    "patientId": "TB-2020",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-19",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 43,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-19",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-19",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 69,
    "name": "سارة الألفي",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1061851805",
    "patientId": "TB-2035",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "نقرس"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-20",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 19,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-20",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-20",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 70,
    "name": "كامل فؤاد",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1071864150",
    "patientId": "TB-2050",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-21",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 20,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-21",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-21",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 71,
    "name": "سوزان الدسوقي",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1081876495",
    "patientId": "TB-2065",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-22",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 21,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-22",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-22",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 72,
    "name": "علي عثمان",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1001888840",
    "patientId": "TB-2080",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-23",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 47,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-23",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-23",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 73,
    "name": "رضوى فتحي",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1011901185",
    "patientId": "TB-2095",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-24",
    "nextFollowup": "2026-09-11",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 23,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-24",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-24",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 74,
    "name": "أشرف المهدي",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1021913530",
    "patientId": "TB-2110",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 24,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-25",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 75,
    "name": "منى بهاء الدين",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1031925875",
    "patientId": "TB-2125",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-13",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 10,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-01",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 76,
    "name": "بهاء الصياد",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1041938220",
    "patientId": "TB-2140",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-02",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 36,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-02",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-02",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 77,
    "name": "هالة زكي",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1051950565",
    "patientId": "TB-2155",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-03",
    "nextFollowup": "2026-09-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 12,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-03",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-03",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 78,
    "name": "مروان النجار",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1061962910",
    "patientId": "TB-2170",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-04",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 13,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-04",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-04",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 79,
    "name": "غادة مراد",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1071975255",
    "patientId": "TB-2185",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-05",
    "nextFollowup": "2026-09-17",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 14,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-05",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-05",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 80,
    "name": "هشام عاشور",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1081987600",
    "patientId": "TB-2200",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-06",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 40,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-06",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-06",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 81,
    "name": "سناء عبد ربه",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1001999945",
    "patientId": "TB-2215",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-07",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 16,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-07",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-07",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 82,
    "name": "زياد سيد",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1012012290",
    "patientId": "TB-2230",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-08",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 17,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-08",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-08",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 83,
    "name": "عبير إسماعيل",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1022024635",
    "patientId": "TB-2245",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-09",
    "nextFollowup": "2026-09-21",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 18,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-09",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-09",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 84,
    "name": "توفيق المنشاوي",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1032036980",
    "patientId": "TB-2260",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-10",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 44,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-10",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-10",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 85,
    "name": "فاطمة العريان",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1042049325",
    "patientId": "TB-2275",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-11",
    "nextFollowup": "2026-09-23",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 20,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-11",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-11",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 86,
    "name": "محمود منصور",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1052061670",
    "patientId": "TB-2290",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-12",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 21,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-12",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-12",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 87,
    "name": "نجلاء خليل",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1062074015",
    "patientId": "TB-2305",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "نقرس"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-13",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 22,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-13",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-13",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 88,
    "name": "ماجد غانم",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1072086360",
    "patientId": "TB-2320",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-14",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 48,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-14",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-14",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 89,
    "name": "إسراء القاضي",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1082098705",
    "patientId": "TB-2335",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 24,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-15",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 90,
    "name": "نبيل البارودي",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1002111050",
    "patientId": "TB-2350",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-16",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 10,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-16",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-16",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 91,
    "name": "رانيا طارق",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1012123395",
    "patientId": "TB-2365",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-17",
    "nextFollowup": "2026-09-11",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 11,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-17",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-17",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 92,
    "name": "أمير بركات",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1022135740",
    "patientId": "TB-2380",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-18",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 37,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-18",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-18",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 93,
    "name": "بسمة كمال الدين",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1032148085",
    "patientId": "TB-2395",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-19",
    "nextFollowup": "2026-09-13",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 13,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-19",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-19",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 94,
    "name": "خالد درويش",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1042160430",
    "patientId": "TB-2410",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-20",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 14,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-20",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-20",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 95,
    "name": "دعاء السيد",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1052172775",
    "patientId": "TB-2425",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-21",
    "nextFollowup": "2026-09-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 15,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-21",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-21",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 96,
    "name": "أيمن علي",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1062185120",
    "patientId": "TB-2440",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-22",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 41,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-22",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-22",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 97,
    "name": "إنجي سليم",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1072197465",
    "patientId": "TB-2455",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-23",
    "nextFollowup": "2026-09-17",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 17,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-23",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-23",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 98,
    "name": "سمير الشناوي",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1082209810",
    "patientId": "TB-2470",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-24",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 18,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-24",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-24",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 99,
    "name": "مي عبد الحق",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1002222155",
    "patientId": "TB-2485",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 19,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-25",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 100,
    "name": "أحمد محمد",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1012234500",
    "patientId": "TB-2500",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 45,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-01",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 101,
    "name": "نادية رضوان",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1022246845",
    "patientId": "TB-2515",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-02",
    "nextFollowup": "2026-09-21",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 21,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-02",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-02",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 102,
    "name": "مصطفى عبد الغني",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1032259190",
    "patientId": "TB-2530",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-03",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 22,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-03",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-03",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 103,
    "name": "داليا خفاجة",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1042271535",
    "patientId": "TB-2545",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-04",
    "nextFollowup": "2026-09-23",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 23,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-04",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-04",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 104,
    "name": "مدحت الحداد",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1052283880",
    "patientId": "TB-2560",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-05",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 49,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-05",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-05",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 105,
    "name": "آية الشربيني",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1062296225",
    "patientId": "TB-2575",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "نقرس"
    ],
    "allergies": [],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-06",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 10,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-06",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-06",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 106,
    "name": "شادي عبد السلام",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1072308570",
    "patientId": "TB-2590",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-07",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 11,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-07",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-07",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 107,
    "name": "دينا البستاني",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1082320915",
    "patientId": "TB-2605",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-08",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 12,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-08",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-08",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 108,
    "name": "يوسف البحيري",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1002333260",
    "patientId": "TB-2620",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-09",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 38,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-09",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-09",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 109,
    "name": "لمياء موسى",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1012345605",
    "patientId": "TB-2635",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-10",
    "nextFollowup": "2026-09-11",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 14,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-10",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-10",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 110,
    "name": "حازم البنا",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1022357950",
    "patientId": "TB-2650",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "11:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-11",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 15,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-11",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-11",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  },
  {
    "id": 111,
    "name": "سلمى صلاح الدين",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1032370295",
    "patientId": "TB-2665",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ألم في الصدر وضغط مرتفع",
    "diagnosis": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
    "complaint": "ألم صدري عند المجهود",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "ضغط دم مرتفع",
      "قصور شرايين"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Concor 5mg",
      "Aspocid 75mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-12",
    "nextFollowup": "2026-09-13",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 16,
    "treatmentPlan": "ألم في الصدر وضغط مرتفع — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-12",
        "title": "آخر كشف",
        "desc": "ذبحة صدرية مستقرة + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-12",
        "note": "ألم في الصدر وضغط مرتفع — فحص دوري"
      }
    ]
  },
  {
    "id": 112,
    "name": "فوزي عامر",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1042382640",
    "patientId": "TB-2680",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "صداع نصفي متكرر",
    "diagnosis": "صداع نصفي كلاسيكي (with aura)",
    "complaint": "نوبات صداع شديدة مع هالة بصرية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "صداع نصفي"
    ],
    "allergies": [],
    "meds": [
      "Imigran 50mg",
      "Inderal 40mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-13",
    "nextFollowup": "2026-09-14",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "review-due",
    "aiScore": 42,
    "treatmentPlan": "صداع نصفي متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-13",
        "title": "آخر كشف",
        "desc": "صداع نصفي كلاسيكي (with aura)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-13",
        "note": "صداع نصفي متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 113,
    "name": "لبنى الوزير",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1052394985",
    "patientId": "TB-2695",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "التهاب المعدة المزمن",
    "diagnosis": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
    "complaint": "حرقان معدة مستمر وألم فم المعدة",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "قرحة معدة"
    ],
    "allergies": [],
    "meds": [
      "Esomeprazole 40mg",
      "Clarimax 500mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-14",
    "nextFollowup": "2026-09-15",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 18,
    "treatmentPlan": "التهاب المعدة المزمن — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-14",
        "title": "آخر كشف",
        "desc": "التهاب جدار المعدة التآكلي النشط مع H. Pylori",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-14",
        "note": "التهاب المعدة المزمن — فحص دوري"
      }
    ]
  },
  {
    "id": 114,
    "name": "وليد حسن",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1062407330",
    "patientId": "TB-2710",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متلازمة الشريان التاجي",
    "diagnosis": "قصور تروية الشريان التاجي بعد القسطرة",
    "complaint": "ألم صدري ودوخة عند المجهود",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 14,
    "chronic": [
      "أمراض قلب"
    ],
    "allergies": [],
    "meds": [
      "Plavix 75mg",
      "Atorvastatin 40mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-15",
    "nextFollowup": "2026-09-16",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "regular",
    "aiScore": 19,
    "treatmentPlan": "متلازمة الشريان التاجي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": false,
    "needsFollowup": false,
    "isNew": false,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-15",
        "title": "آخر كشف",
        "desc": "قصور تروية الشريان التاجي بعد القسطرة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-15",
        "note": "متلازمة الشريان التاجي — فحص دوري"
      }
    ]
  },
  {
    "id": 115,
    "name": "مروة الجندي",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1072419675",
    "patientId": "TB-2725",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "هشاشة عظام وقصور كلوي",
    "diagnosis": "قصور كلوي مزمن (CKD Stage 3)",
    "complaint": "آلام مفاصل وتعب وضعف عام",
    "status": "waiting",
    "time": "12:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 15,
    "chronic": [
      "قصور كلوي",
      "هشاشة عظام"
    ],
    "allergies": [],
    "meds": [
      "Calcium D3",
      "Ketosteril"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-16",
    "nextFollowup": "2026-09-17",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 20,
    "treatmentPlan": "هشاشة عظام وقصور كلوي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-16",
        "title": "آخر كشف",
        "desc": "قصور كلوي مزمن (CKD Stage 3)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-16",
        "note": "هشاشة عظام وقصور كلوي — فحص دوري"
      }
    ]
  },
  {
    "id": 116,
    "name": "شريف عبد العزيز",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1082432020",
    "patientId": "TB-2740",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "القولون العصبي الإسهالي",
    "diagnosis": "متلازمة القولون العصبي الوظيفي النشط",
    "complaint": "آلام بطنية وإسهال متقطع مع انتفاخ",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 16,
    "chronic": [
      "قولون عصبي"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Colona",
      "Spasmocanulase"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-17",
    "nextFollowup": "2026-09-18",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 21,
    "treatmentPlan": "القولون العصبي الإسهالي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-17",
        "title": "آخر كشف",
        "desc": "متلازمة القولون العصبي الوظيفي النشط",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-17",
        "note": "القولون العصبي الإسهالي — فحص دوري"
      }
    ]
  },
  {
    "id": 117,
    "name": "مريم عبد الجليل",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1002444365",
    "patientId": "TB-2755",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "كبد دهني واضطراب دهون",
    "diagnosis": "كبد دهني غير كحولي (NAFLD)",
    "complaint": "ثقل بالجانب الأيمن وارتفاع إنزيمات كبد",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 17,
    "chronic": [
      "كبد دهني",
      "كوليسترول"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Lipanthyl 145mg",
      "Ursofalk 250mg"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-18",
    "nextFollowup": "2026-09-19",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 22,
    "treatmentPlan": "كبد دهني واضطراب دهون — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-18",
        "title": "آخر كشف",
        "desc": "كبد دهني غير كحولي (NAFLD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-18",
        "note": "كبد دهني واضطراب دهون — فحص دوري"
      }
    ]
  },
  {
    "id": 118,
    "name": "إبراهيم جمال",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1012456710",
    "patientId": "TB-2770",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "خمول الغدة الدرقية",
    "diagnosis": "قصور نشاط الغدة الدرقية الأولي",
    "complaint": "زيادة وزن وخمول وتساقط شعر",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 18,
    "chronic": [
      "خمول غدة درقية"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Eltroxin 50mcg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-19",
    "nextFollowup": "2026-09-20",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 23,
    "treatmentPlan": "خمول الغدة الدرقية — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-19",
        "title": "آخر كشف",
        "desc": "قصور نشاط الغدة الدرقية الأولي",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-19",
        "note": "خمول الغدة الدرقية — فحص دوري"
      }
    ]
  },
  {
    "id": 119,
    "name": "ميرفت الألفي",
    "age": 70,
    "gender": "أنثى",
    "phone": "+20 1022469055",
    "patientId": "TB-2785",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ربو شعبي حاد متكرر",
    "diagnosis": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
    "complaint": "نوبات ضيق تنفس بالليل خصوصاً",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 19,
    "chronic": [
      "ربو شعبي"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "Symbicort Turbuhaler",
      "Singulair 10mg"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-20",
    "nextFollowup": "2026-09-21",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 24,
    "treatmentPlan": "ربو شعبي حاد متكرر — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 10 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-20",
        "title": "آخر كشف",
        "desc": "ربو تحسسي مع نوبات ضيق تنفس ليلية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-20",
        "note": "ربو شعبي حاد متكرر — فحص دوري"
      }
    ]
  },
  {
    "id": 120,
    "name": "كامل فؤاد",
    "age": 18,
    "gender": "ذكر",
    "phone": "+20 1032481400",
    "patientId": "TB-2800",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "ارتفاع ضغط دم غير منضبط",
    "diagnosis": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
    "complaint": "صداع خلفي عند الاستيقاظ وقراءات عالية",
    "status": "waiting",
    "time": "9:00",
    "type": "video",
    "priority": "normal",
    "waitMin": 5,
    "chronic": [
      "ضغط دم مرتفع"
    ],
    "allergies": [],
    "meds": [
      "Exforge 10/160mg",
      "Natrilix SR"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-21",
    "nextFollowup": "2026-09-22",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 10,
    "treatmentPlan": "ارتفاع ضغط دم غير منضبط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 1 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-21",
        "title": "آخر كشف",
        "desc": "ارتفاع ضغط الدم الأساسي الدرجة الثانية",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-21",
        "note": "ارتفاع ضغط دم غير منضبط — فحص دوري"
      }
    ]
  },
  {
    "id": 121,
    "name": "ولاء الدسوقي",
    "age": 31,
    "gender": "أنثى",
    "phone": "+20 1042493745",
    "patientId": "TB-2815",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "فقر دم نقص الحديد",
    "diagnosis": "أنيميا نقص الحديد المتقدمة",
    "complaint": "دوخة وإرهاق شديد وشحوب",
    "status": "waiting",
    "time": "10:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 6,
    "chronic": [
      "فقر دم"
    ],
    "allergies": [],
    "meds": [
      "Feroglobin B12",
      "Vitamin C 500mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-22",
    "nextFollowup": "2026-09-23",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 11,
    "treatmentPlan": "فقر دم نقص الحديد — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 2 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-22",
        "title": "آخر كشف",
        "desc": "أنيميا نقص الحديد المتقدمة",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-22",
        "note": "فقر دم نقص الحديد — فحص دوري"
      }
    ]
  },
  {
    "id": 122,
    "name": "علي عثمان",
    "age": 44,
    "gender": "ذكر",
    "phone": "+20 1052506090",
    "patientId": "TB-2830",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "التهاب مفاصل روماتويدي",
    "diagnosis": "روماتويد مفصلي نشط بالأطراف",
    "complaint": "تورم وتيبس صباحي بمفاصل اليدين",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 7,
    "chronic": [
      "روماتويد"
    ],
    "allergies": [],
    "meds": [
      "Methotrexate 10mg",
      "Folic Acid"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "4 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-23",
    "nextFollowup": "2026-09-24",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 12,
    "treatmentPlan": "التهاب مفاصل روماتويدي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 3 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-23",
        "title": "آخر كشف",
        "desc": "روماتويد مفصلي نشط بالأطراف",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-23",
        "note": "التهاب مفاصل روماتويدي — فحص دوري"
      }
    ]
  },
  {
    "id": 123,
    "name": "نهى فتحي",
    "age": 57,
    "gender": "أنثى",
    "phone": "+20 1062518435",
    "patientId": "TB-2845",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "نقرس وارتفاع حمض اليوريك",
    "diagnosis": "التهاب مفاصل نقرسي حاد",
    "complaint": "ألم حاد وتورم بإصبع القدم الكبير",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 8,
    "chronic": [
      "نقرس"
    ],
    "allergies": [],
    "meds": [
      "Zyloric 300mg",
      "Colchicine 0.5mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "5 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-24",
    "nextFollowup": "2026-09-25",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 13,
    "treatmentPlan": "نقرس وارتفاع حمض اليوريك — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 4 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-24",
        "title": "آخر كشف",
        "desc": "التهاب مفاصل نقرسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-24",
        "note": "نقرس وارتفاع حمض اليوريك — فحص دوري"
      }
    ]
  },
  {
    "id": 124,
    "name": "أشرف المهدي",
    "age": 70,
    "gender": "ذكر",
    "phone": "+20 1072530780",
    "patientId": "TB-2860",
    "clinics": [
      "clinic_cairo",
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "ارتجاع مريئي والتهاب مريء",
    "diagnosis": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
    "complaint": "حرقة بالصدر بعد الأكل وكحة ليلية",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 9,
    "chronic": [
      "ارتجاع مريء"
    ],
    "allergies": [
      "بنسلين ومشتقاته"
    ],
    "meds": [
      "Controloc 40mg",
      "Gaviscon"
    ],
    "region": "abdomen",
    "painLevel": 7,
    "painDuration": "6 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-25",
    "nextFollowup": "2026-09-26",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 14,
    "treatmentPlan": "ارتجاع مريئي والتهاب مريء — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 5 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-25",
        "title": "آخر كشف",
        "desc": "ارتجاع معدي مريئي حمضي متقدم (GERD)",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-25",
        "note": "ارتجاع مريئي والتهاب مريء — فحص دوري"
      }
    ]
  },
  {
    "id": 125,
    "name": "أمل بهاء الدين",
    "age": 18,
    "gender": "أنثى",
    "phone": "+20 1082543125",
    "patientId": "TB-2875",
    "clinics": [
      "clinic_mansoura"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "تكيس مبايض ومقاومة إنسولين",
    "diagnosis": "متلازمة تكيس المبايض مع مقاومة إنسولين",
    "complaint": "اضطراب دورة شهرية وزيادة وزن",
    "status": "waiting",
    "time": "10:30",
    "type": "video",
    "priority": "normal",
    "waitMin": 10,
    "chronic": [
      "مقاومة إنسولين"
    ],
    "allergies": [
      "سلفوناميد"
    ],
    "meds": [
      "Cidophage 850mg"
    ],
    "region": "abdomen",
    "painLevel": 3,
    "painDuration": "7 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-01",
    "nextFollowup": "2026-09-27",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 15,
    "treatmentPlan": "تكيس مبايض ومقاومة إنسولين — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 6 ساعات",
    "lastActiveTime": "اليوم 9:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-01",
        "title": "آخر كشف",
        "desc": "متلازمة تكيس المبايض مع مقاومة إنسولين",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-01",
        "note": "تكيس مبايض ومقاومة إنسولين — فحص دوري"
      }
    ]
  },
  {
    "id": 126,
    "name": "بهاء الصياد",
    "age": 31,
    "gender": "ذكر",
    "phone": "+20 1002555470",
    "patientId": "TB-2890",
    "clinics": [
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_cairo",
    "condition": "متابعة السكري والضغط",
    "diagnosis": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
    "complaint": "ارتفاع قراءات السكر مع إجهاد عام",
    "status": "waiting",
    "time": "11:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 11,
    "chronic": [
      "سكري نوع 2",
      "ضغط دم مرتفع"
    ],
    "allergies": [
      "أسبرين ومسكنات NSAIDs"
    ],
    "meds": [
      "Metformin 1000mg",
      "Amlodipine 5mg"
    ],
    "region": "abdomen",
    "painLevel": 4,
    "painDuration": "1 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-02",
    "nextFollowup": "2026-09-10",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 16,
    "treatmentPlan": "متابعة السكري والضغط — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 7 ساعات",
    "lastActiveTime": "اليوم 10:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-02",
        "title": "آخر كشف",
        "desc": "داء السكري من النوع الثاني + ارتفاع ضغط الدم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-02",
        "note": "متابعة السكري والضغط — فحص دوري"
      }
    ]
  },
  {
    "id": 127,
    "name": "إيمان زكي",
    "age": 44,
    "gender": "أنثى",
    "phone": "+20 1012567815",
    "patientId": "TB-2905",
    "clinics": [
      "clinic_giza"
    ],
    "appointmentClinicId": "clinic_giza",
    "condition": "حساسية صدر وضيق تنفس",
    "diagnosis": "التهاب شعبي تحسسي حاد",
    "complaint": "كحة متواصلة وضيق بالتنفس",
    "status": "waiting",
    "time": "12:30",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 12,
    "chronic": [
      "حساسية صدر"
    ],
    "allergies": [
      "أرتيكاريا ضد اللاكتوز"
    ],
    "meds": [
      "بخاخ سالبيوتامول",
      "باراسيتامول"
    ],
    "region": "abdomen",
    "painLevel": 5,
    "painDuration": "2 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-03",
    "nextFollowup": "2026-09-11",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 17,
    "treatmentPlan": "حساسية صدر وضيق تنفس — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 8 ساعات",
    "lastActiveTime": "اليوم 11:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-03",
        "title": "آخر كشف",
        "desc": "التهاب شعبي تحسسي حاد",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-03",
        "note": "حساسية صدر وضيق تنفس — فحص دوري"
      }
    ]
  },
  {
    "id": 128,
    "name": "مروان النجار",
    "age": 57,
    "gender": "ذكر",
    "phone": "+20 1022580160",
    "patientId": "TB-2920",
    "clinics": [
      "clinic_mansoura",
      "clinic_cairo"
    ],
    "appointmentClinicId": "clinic_mansoura",
    "condition": "متابعة السكري التراكمي",
    "diagnosis": "سكري النوع الثاني غير منتظم",
    "complaint": "ارتفاع متكرر في السكر الصائم",
    "status": "waiting",
    "time": "9:00",
    "type": "clinic",
    "priority": "normal",
    "waitMin": 13,
    "chronic": [
      "سكري نوع 2"
    ],
    "allergies": [],
    "meds": [
      "Glimepiride 2mg",
      "Januvia 100mg"
    ],
    "region": "abdomen",
    "painLevel": 6,
    "painDuration": "3 أيام",
    "painSymptoms": [
      "أعراض عامة"
    ],
    "lastVisit": "2026-08-04",
    "nextFollowup": "2026-09-12",
    "followupOverdue": false,
    "followupOverdueDays": 0,
    "treatmentStatus": "new",
    "aiScore": 18,
    "treatmentPlan": "متابعة السكري التراكمي — متابعة دورية",
    "unreadMessages": 0,
    "isActive": true,
    "needsFollowup": false,
    "isNew": true,
    "needsAttention": false,
    "lastActivity": "منذ 9 ساعات",
    "lastActiveTime": "اليوم 8:00 ص",
    "signals": {
      "followupOverdue": false,
      "unansweredMessages": 0,
      "treatmentOverdue": false,
      "symptomsWorsened": false,
      "missedAppointment": false
    },
    "timeline": [
      {
        "time": "2026-08-04",
        "title": "آخر كشف",
        "desc": "سكري النوع الثاني غير منتظم",
        "type": "consult"
      }
    ],
    "visits": [
      {
        "date": "2026-08-04",
        "note": "متابعة السكري التراكمي — فحص دوري"
      }
    ]
  }
];

// Helper to add new patient dynamically to the session
function addNewPatientToRegistry(data) {
  const newId = PATIENTS.length ? Math.max(...PATIENTS.map(p => p.id)) + 1 : 1;
  const newMRN = 'TB-' + (2000 + newId);
  const patient = {
    id: newId,
    name: data.name || 'مريض جديد',
    age: parseInt(data.age) || 30,
    gender: data.gender || 'ذكر',
    phone: data.phone || '+20 100 000 0000',
    patientId: newMRN,
    clinics: [data.clinicId || 'clinic_mansoura'],
    appointmentClinicId: data.clinicId || 'clinic_mansoura',
    condition: data.condition || 'كشف ومتابعة أولية',
    diagnosis: data.diagnosis || data.condition || 'قيد التشخيص السريري',
    complaint: data.complaint || 'فحص أولي بالعيادة',
    status: 'waiting', time: '12:00', type: 'clinic',
    priority: data.priority || 'normal', waitMin: 5,
    chronic: data.chronic ? data.chronic.split(',').map(s => s.trim()).filter(Boolean) : [],
    allergies: data.allergies ? data.allergies.split(',').map(s => s.trim()).filter(Boolean) : [],
    meds: data.meds ? data.meds.split(',').map(s => s.trim()).filter(Boolean) : [],
    region: 'abdomen', painLevel: 3, painDuration: 'يومين',
    painSymptoms: ['أعراض عامة'],
    lastVisit: 'اليوم', nextFollowup: 'بعد أسبوعين',
    followupOverdue: false, followupOverdueDays: 0,
    treatmentStatus: 'on-track', aiScore: 10,
    treatmentPlan: data.treatmentPlan || 'خطة علاج أولية',
    unreadMessages: 0, isActive: true, needsFollowup: false, isNew: true, needsAttention: false,
    lastActivity: 'الآن', lastActiveTime: 'الآن',
    signals: { followupOverdue: false, unansweredMessages: 0, treatmentOverdue: false, symptomsWorsened: false, missedAppointment: false },
    timeline: [{ time: 'الآن', title: 'فتح ملف طبي جديد', desc: 'تم تسجيل المريض في السجل الإلكتروني', type: 'consult' }],
    visits: [{ date: 'اليوم', note: 'كشف أولي وفتح ملف جديد' }]
  };
  PATIENTS.unshift(patient);
  return patient;
}

// ============================= REALISTIC CHAT DATA =============================
const PATIENT_MESSAGES = {
  1: [
    { sender: "doctor", text: "أهلاً يا أحمد، طمني إزاي قراءات السكر الصباحية معاك؟", time: "أمس 02:30 م" },
    { sender: "patient", text: "دكتور أنا حاسس إن الإجهاد رجع تاني وقراءات الصبح عدت 210.", time: "اليوم 10:40 ص" },
    { sender: "patient", text: "هل أزود جرعة الميتفورمين ولا أعمل تحليل تراكمي الأول؟", time: "اليوم 10:42 ص" }
  ],
  2: [
    { sender: "doctor", text: "مساء الخير يا أم سلمى، طمنيني على حرارة سلمى النهارده؟", time: "أمس 08:00 م" },
    { sender: "patient", text: "السلام عليكم دكتور، البنت سخونة نزلت بس الكحة لسه مضايقاها بالليل.", time: "اليوم 09:15 ص" }
  ],
  3: [
    { sender: "patient", text: "السلام عليكم دكتور، بعت لحضرتك 3 مرات بخصوص جرعة الدواء ومستني ردك.", time: "اليوم 08:15 ص" },
    { sender: "patient", text: "هل أوقف الميتفورمين لو حسيت بمغص في المعدة؟", time: "اليوم 08:30 ص" }
  ],
  4: [
    { sender: "doctor", text: "حمد الله على سلامتك يا أستاذ كريم، جاري تحضير ملفك.", time: "اليوم 09:05 ص" },
    { sender: "patient", text: "شكراً يا دكتور، الألم كان شادد الصبح بس مستريح دلوقتي.", time: "اليوم 09:10 ص" }
  ],
  5: [
    { sender: "patient", text: "صباح الخير دكتور، حبيت أأكد موعد كشف الفيديو الساعة 11:30.", time: "اليوم 07:45 ص" },
    { sender: "doctor", text: "صباح النور يا إيمان، الموعد مؤكد وهكون جاهز.", time: "اليوم 08:00 ص" }
  ]
};

// ============================= AI ATTENTION SCORING ENGINE =============================
function calculateAttentionScore(p) {
  if (p && p.aiScore !== undefined) {
    const score = p.aiScore;
    let level = "low";
    let levelText = "حالة مستقرة";
    let pillClass = "stable";
    let color = "var(--accent)";
    let action = "متابعة دورية حسب الخطة الحالية";
    if (score >= 75) {
      level = "critical";
      levelText = "أولوية قصوى";
      pillClass = "critical";
      color = "var(--danger)";
      action = "التواصل الفوري مع المريض ومراجعة خطة العلاج وتعديل الجرعات";
    } else if (score >= 50) {
      level = "high";
      levelText = "يحتاج انتباه";
      pillClass = "high";
      color = "var(--warn)";
      action = "الرد على استفسارات المريض وحجز موعد متابعة قريب بالفرع";
    } else if (score >= 25) {
      level = "medium";
      levelText = "مراقبة دورية";
      pillClass = "medium";
      color = "var(--info)";
      action = "مراجعة المؤشرات الحيوية في الزيارة القادمة";
    }
    return { score, level, levelText, pillClass, color, reasons: p.reasons || [], signals: p.signals || [], action };
  }
  let score = 0;
  let reasons = [];
  let signals = [];

  if (p.signals.followupOverdue) {
    score += 30;
    reasons.push(`تأخر موعد المتابعة المحدد (${p.followupOverdueDays || 5} أيام)`);
    signals.push({ label: "تأخر موعد المتابعة", points: "+30", icon: "ti-calendar-time", cat: "مخاطر المتابعة" });
  }
  if (p.unreadMessages > 0) {
    const pts = p.unreadMessages >= 2 ? 25 : 15;
    score += pts;
    reasons.push(`${p.unreadMessages} رسائل غير مجاب عليها من المريض`);
    signals.push({ label: `رسائل معلقة (${p.unreadMessages})`, points: `+${pts}`, icon: "ti-message-dots", cat: "مخاطر التواصل" });
  }
  if (p.signals.missedAppointment) {
    score += 25;
    reasons.push("تغيب عن موعد كشف محدد دون إلغاء مسبق");
    signals.push({ label: "تغيب عن كشف مجدول", points: "+25", icon: "ti-calendar-x", cat: "مخاطر الحضور" });
  }
  if (p.signals.treatmentOverdue || p.treatmentStatus === "at-risk") {
    score += 20;
    reasons.push("خطة العلاج الحالية معرضة للتعثر وتتطلب مراجعة فورية");
    signals.push({ label: "خطة علاج معرضة للخطر", points: "+20", icon: "ti-alert-triangle", cat: "مخاطر العلاج" });
  }
  if (p.signals.symptomsWorsened) {
    score += 20;
    reasons.push("المريض أبلغ عن زيادة في حدة الأعراض المسجلة");
    signals.push({ label: "تفاقم الأعراض المبلغ عنها", points: "+20", icon: "ti-activity", cat: "انتباه سريري" });
  }

  score = Math.min(score, 100);

  let level = "low";
  let levelText = "حالة مستقرة";
  let pillClass = "stable";
  let color = "var(--accent)";
  let action = "متابعة دورية حسب الخطة الحالية";

  if (score >= 75) {
    level = "critical";
    levelText = "أولوية قصوى";
    pillClass = "critical";
    color = "var(--danger)";
    action = "التواصل الفوري مع المريض ومراجعة خطة العلاج وتعديل الجرعات";
  } else if (score >= 50) {
    level = "high";
    levelText = "يحتاج انتباه";
    pillClass = "high";
    color = "var(--warn)";
    action = "الرد على استفسارات المريض وحجز موعد متابعة قريب بالفرع";
  } else if (score >= 25) {
    level = "medium";
    levelText = "مراقبة دورية";
    pillClass = "medium";
    color = "var(--info)";
    action = "مراجعة المؤشرات الحيوية في الزيارة القادمة";
  }

  return { score, level, levelText, pillClass, color, reasons, signals, action };
}

// Global lookup labels
const STATUS_LABEL = { waiting: 'في الانتظار', upcoming: 'قادم', done: 'تم الكشف' };
const REGION_LABEL = {
  head: 'الرأس', neck: 'الرقبة', chest: 'الصدر', abdomen: 'البطن', back: 'أسفل الظهر',
  'left-arm': 'الذراع الأيسر', 'right-arm': 'الذراع الأيمن', knee: 'الركبة', legs: 'الساقين', hands: 'اليدين', feet: 'القدمين'
};

const CLINIC_FIN_DATA = {
  all: {
    today: { revenue: 24500, net: 21200, count: 12, avg: 2041, pending: 1500, refunds: 0,
      chart: [{l:'09:00',v:3500},{l:'11:00',v:5200},{l:'13:00',v:4800},{l:'15:00',v:3900},{l:'17:00',v:4200},{l:'19:00',v:2900}],
      breakdown: [{label:'المنصورة',pct:35,color:'var(--accent)'},{label:'الجيزة',pct:40,color:'var(--warn)'},{label:'القاهرة',pct:25,color:'var(--info)'}],
      trendRev:'+15%',trendCount:'+4',trendAvg:'+3%' },
    week: { revenue: 125400, net: 109200, count: 284, avg: 441, pending: 8500, refunds: 1200,
      chart: [{l:'سبت',v:16500},{l:'حد',v:24500},{l:'اتنين',v:18200},{l:'تلات',v:21400},{l:'أربع',v:19800},{l:'خميس',v:25000}],
      breakdown: [{label:'المنصورة',pct:36,color:'var(--accent)'},{label:'الجيزة',pct:39,color:'var(--warn)'},{label:'القاهرة',pct:25,color:'var(--info)'}],
      trendRev:'+18%',trendCount:'+22%',trendAvg:'+5%' },
    month: { revenue: 512000, net: 445000, count: 1140, avg: 449, pending: 28000, refunds: 4000,
      chart: [{l:'أسبوع 1',v:120000},{l:'أسبوع 2',v:128000},{l:'أسبوع 3',v:131000},{l:'أسبوع 4',v:133000}],
      breakdown: [{label:'المنصورة',pct:35,color:'var(--accent)'},{label:'الجيزة',pct:40,color:'var(--warn)'},{label:'القاهرة',pct:25,color:'var(--info)'}],
      trendRev:'+20%',trendCount:'+25%',trendAvg:'+4%' },
    quarter: { revenue: 1540000, net: 1340000, count: 3450, avg: 446, pending: 65000, refunds: 9000,
      chart: [{l:'يوليو',v:480000},{l:'أغسطس',v:520000},{l:'سبتمبر',v:540000}],
      breakdown: [{label:'المنصورة',pct:35,color:'var(--accent)'},{label:'الجيزة',pct:40,color:'var(--warn)'},{label:'القاهرة',pct:25,color:'var(--info)'}],
      trendRev:'+24%',trendCount:'+28%',trendAvg:'+3%' }
  },
  clinic_mansoura: {
    today: { revenue: 8500, net: 7400, count: 5, avg: 1700, pending: 600, refunds: 0,
      chart: [{l:'09:00',v:1800},{l:'10:00',v:2100},{l:'11:00',v:1900},{l:'12:00',v:1500},{l:'13:00',v:1200}],
      breakdown: [{label:'كشف عيادة',pct:70,color:'var(--accent)'},{label:'متابعات',pct:20,color:'var(--info)'},{label:'خدمات',pct:10,color:'var(--warn)'}],
      trendRev:'+12%',trendCount:'+2',trendAvg:'+4%' },
    week: { revenue: 45000, net: 39150, count: 92, avg: 489, pending: 3200, refunds: 400,
      chart: [{l:'سبت',v:6000},{l:'حد',v:8500},{l:'اتنين',v:6500},{l:'تلات',v:7800},{l:'أربع',v:7200},{l:'خميس',v:9000}],
      breakdown: [{label:'كشف عيادة',pct:68,color:'var(--accent)'},{label:'متابعات',pct:22,color:'var(--info)'},{label:'خدمات',pct:10,color:'var(--warn)'}],
      trendRev:'+14%',trendCount:'+18%',trendAvg:'+2%' },
    month: { revenue: 182000, net: 158000, count: 375, avg: 485, pending: 9500, refunds: 1200,
      chart: [{l:'أسبوع 1',v:42000},{l:'أسبوع 2',v:46000},{l:'أسبوع 3',v:47000},{l:'أسبوع 4',v:47000}],
      breakdown: [{label:'كشف عيادة',pct:65,color:'var(--accent)'},{label:'متابعات',pct:25,color:'var(--info)'},{label:'خدمات',pct:10,color:'var(--warn)'}],
      trendRev:'+16%',trendCount:'+20%',trendAvg:'+3%' },
    quarter: { revenue: 540000, net: 470000, count: 1120, avg: 482, pending: 22000, refunds: 3000,
      chart: [{l:'يوليو',v:170000},{l:'أغسطس',v:182000},{l:'سبتمبر',v:188000}],
      breakdown: [{label:'كشف عيادة',pct:65,color:'var(--accent)'},{label:'متابعات',pct:25,color:'var(--info)'},{label:'خدمات',pct:10,color:'var(--warn)'}],
      trendRev:'+22%',trendCount:'+24%',trendAvg:'+2%' }
  },
  clinic_cairo: {
    today: { revenue: 6200, net: 5400, count: 3, avg: 2066, pending: 400, refunds: 0,
      chart: [{l:'16:00',v:2200},{l:'17:30',v:1800},{l:'19:00',v:2200}],
      breakdown: [{label:'كشف عيادة',pct:55,color:'var(--info)'},{label:'فيديو أونلاين',pct:35,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--warn)'}],
      trendRev:'+8%',trendCount:'+1',trendAvg:'+5%' },
    week: { revenue: 32000, net: 27840, count: 71, avg: 450, pending: 2400, refunds: 300,
      chart: [{l:'سبت',v:5500},{l:'حد',v:6200},{l:'اتنين',v:5100},{l:'تلات',v:5300},{l:'أربع',v:4900},{l:'خميس',v:5000}],
      breakdown: [{label:'كشف عيادة',pct:50,color:'var(--info)'},{label:'فيديو أونلاين',pct:40,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--warn)'}],
      trendRev:'+10%',trendCount:'+12%',trendAvg:'+3%' },
    month: { revenue: 135000, net: 117000, count: 300, avg: 450, pending: 7200, refunds: 800,
      chart: [{l:'أسبوع 1',v:32000},{l:'أسبوع 2',v:34000},{l:'أسبوع 3',v:35000},{l:'أسبوع 4',v:34000}],
      breakdown: [{label:'كشف عيادة',pct:52,color:'var(--info)'},{label:'فيديو أونلاين',pct:38,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--warn)'}],
      trendRev:'+12%',trendCount:'+15%',trendAvg:'+4%' },
    quarter: { revenue: 410000, net: 356000, count: 910, avg: 450, pending: 18000, refunds: 2500,
      chart: [{l:'يوليو',v:130000},{l:'أغسطس',v:138000},{l:'سبتمبر',v:142000}],
      breakdown: [{label:'كشف عيادة',pct:50,color:'var(--info)'},{label:'فيديو أونلاين',pct:40,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--warn)'}],
      trendRev:'+18%',trendCount:'+20%',trendAvg:'+3%' }
  },
  clinic_giza: {
    today: { revenue: 9800, net: 8520, count: 4, avg: 2450, pending: 500, refunds: 0,
      chart: [{l:'13:00',v:2400},{l:'14:30',v:2600},{l:'16:00',v:2800},{l:'17:30',v:2000}],
      breakdown: [{label:'كشف عيادة',pct:60,color:'var(--warn)'},{label:'فحوصات قلب',pct:30,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--info)'}],
      trendRev:'+18%',trendCount:'+2',trendAvg:'+8%' },
    week: { revenue: 48400, net: 42100, count: 121, avg: 400, pending: 2900, refunds: 500,
      chart: [{l:'سبت',v:7500},{l:'حد',v:9800},{l:'اتنين',v:6600},{l:'تلات',v:8300},{l:'أربع',v:7700},{l:'خميس',v:8500}],
      breakdown: [{label:'كشف عيادة',pct:58,color:'var(--warn)'},{label:'فحوصات قلب',pct:32,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--info)'}],
      trendRev:'+20%',trendCount:'+26%',trendAvg:'+6%' },
    month: { revenue: 195000, net: 170000, count: 465, avg: 419, pending: 11300, refunds: 2000,
      chart: [{l:'أسبوع 1',v:46000},{l:'أسبوع 2',v:48000},{l:'أسبوع 3',v:49000},{l:'أسبوع 4',v:52000}],
      breakdown: [{label:'كشف عيادة',pct:60,color:'var(--warn)'},{label:'فحوصات قلب',pct:30,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--info)'}],
      trendRev:'+24%',trendCount:'+30%',trendAvg:'+5%' },
    quarter: { revenue: 590000, net: 514000, count: 1420, avg: 415, pending: 25000, refunds: 3500,
      chart: [{l:'يوليو',v:180000},{l:'أغسطس',v:200000},{l:'سبتمبر',v:210000}],
      breakdown: [{label:'كشف عيادة',pct:60,color:'var(--warn)'},{label:'فحوصات قلب',pct:30,color:'var(--accent)'},{label:'متابعات',pct:10,color:'var(--info)'}],
      trendRev:'+28%',trendCount:'+32%',trendAvg:'+4%' }
  }
};

const NOTIFICATIONS = [
  {icon:'danger',text:'⚠ حساسية بنسلين شديدة - سلمى طارق (فرع القاهرة)',time:'منذ 10 دقائق',type:'danger',pid:2,clinicId:'clinic_cairo'},
  {icon:'warn',text:'كريم فتحي ينتظر بالعيادة منذ 15 دقيقة (فرع المنصورة)',time:'منذ 15 دقيقة',type:'warn',pid:4,clinicId:'clinic_mansoura'},
  {icon:'danger',text:'أحمد محمد: تأخر موعد المتابعة 6 أيام (فرع المنصورة)',time:'منذ 20 دقيقة',type:'danger',pid:1,clinicId:'clinic_mansoura'},
  {icon:'info',text:'3 رسائل غير مجاب عليها من محمود سيد (فرع الجيزة)',time:'منذ 35 دقيقة',type:'info',pid:3,clinicId:'clinic_giza'},
  {icon:'accent',text:'تقرير الكشف لنورهان علي تم حفظه بنجاح (فرع المنصورة)',time:'منذ ساعة',type:'accent',pid:7,clinicId:'clinic_mansoura'}
];

// ============================= APPLICATION STATE =============================
let currentClinicId = localStorage.getItem("tababa_doctor_active_clinic") || "all"; // 'all' | 'clinic_mansoura' | 'clinic_cairo' | 'clinic_giza'
let selectedId = 1;
let currentQueueFilter = 'all';
let currentFinPeriod = 'today';
let currentFinChart = 'revenue';
let currentWsTab = 'overview';
let prescriptions = [];
let recState = 'ready';
let recTimer = 0;
let recInterval = null;

// Patient Management State
let pmFilter = 'all';
let pmSearch = '';
let pmSort = 'recent';
let activeChatPatientId = null;
let reviewedAiIds = new Set();

// ============================= UTILITIES =============================
function initials(name) { return name ? name.split(" ")[0][0] : "م"; }
function fmt(n) { return (n || 0).toLocaleString("en-US"); }

function showToast(msg, type = "success") {
  let box = document.getElementById("toastBox");
  if (!box) {
    box = document.createElement("div");
    box.id = "toastBox";
    box.className = "toast-box";
    document.body.appendChild(box);
  }
  const t = document.createElement("div");
  t.className = "toast " + type;
  const icon = type === "danger" ? "alert-circle" : (type === "info" ? "info-circle" : "check");
  t.innerHTML = '<i class="ti ti-' + icon + '"></i><span>' + msg + '</span>';
  box.appendChild(t);
  setTimeout(() => {
    t.style.animation = "toastOut .3s ease forwards";
    setTimeout(() => t.remove(), 300);
  }, 3500);
}

// ============================= CLINIC SWITCHER =============================
function toggleClinicDropdown() {
  const d = document.getElementById("clinicDropdown");
  if (d) d.classList.toggle("show");
}

function selectClinic(clinicId) {
  currentClinicId = clinicId;
  localStorage.setItem("tababa_doctor_active_clinic", clinicId);

  // Close dropdown
  const d = document.getElementById("clinicDropdown");
  if (d) d.classList.remove("show");

  // Update dropdown active options
  document.querySelectorAll(".clinic-option").forEach(el => {
    el.classList.toggle("active", el.dataset.id === clinicId);
  });

  // Update switcher trigger displays across page
  updateClinicSwitcherUI();

  // Notify active page if it defines onClinicChanged
  if (typeof window.onClinicChanged === "function") {
    window.onClinicChanged(clinicId);
  }

  const cInfo = clinicId === "all" ? null : CLINICS.find(c => c.id === clinicId);
  const label = cInfo ? cInfo.name + " (" + cInfo.branchName + ")" : "جميع العيادات والفروع";
  showToast("تم تحويل نطاق العمل إلى: " + label, "info");
}

function updateClinicSwitcherUI() {
  const nameDisplay = document.getElementById("currentClinicNameDisplay");
  const iconDisplay = document.getElementById("currentClinicIcon");
  const mNameDisplay = document.getElementById("mCurrentClinicName");

  if (currentClinicId === "all") {
    if (nameDisplay) nameDisplay.textContent = "جميع العيادات (All Clinics)";
    if (iconDisplay) iconDisplay.innerHTML = '<i class="ti ti-world"></i>';
    if (mNameDisplay) mNameDisplay.textContent = "جميع العيادات";
  } else {
    const c = CLINICS.find(x => x.id === currentClinicId);
    if (c) {
      if (nameDisplay) nameDisplay.textContent = c.branchName;
      if (iconDisplay) {
        const iconName = c.id === "clinic_mansoura" ? "building-hospital" : (c.id === "clinic_cairo" ? "building-community" : "heart-rate-monitor");
        iconDisplay.innerHTML = '<i class="ti ti-' + iconName + '" style="color:' + c.color + '"></i>';
      }
      if (mNameDisplay) mNameDisplay.textContent = c.branchName;
    }
  }
}

function getClinicPatients() {
  if (currentClinicId === "all") return PATIENTS;
  return PATIENTS.filter(p => p.clinics && p.clinics.includes(currentClinicId));
}

function getClinicAppointments() {
  if (currentClinicId === "all") return PATIENTS.filter(p => p.appointmentClinicId).slice(0, 8);
  return PATIENTS.filter(p => p.appointmentClinicId === currentClinicId).slice(0, 8);
}

// ============================= NOTIFICATIONS =============================
function toggleNotifications() {
  const d = document.getElementById("notifDropdown");
  if (!d) return;
  d.classList.toggle("show");
  if (d.classList.contains("show")) renderNotifications();
}

function clearNotifications() {
  NOTIFICATIONS.length = 0;
  const dot = document.getElementById("notifDot");
  const mDot = document.getElementById("mNotifDot");
  if (dot) dot.style.display = "none";
  if (mDot) mDot.style.display = "none";
  renderNotifications();
  showToast("تم تحديد كافة التنبيهات كمقروءة");
}

function renderNotifications() {
  const list = document.getElementById("notifList");
  if (!list) return;
  if (!NOTIFICATIONS.length) {
    list.innerHTML = '<div class="empty-state" style="padding:20px;text-align:center;color:var(--text-muted)"><i class="ti ti-bell-off" style="font-size:24px;display:block;margin-bottom:6px"></i>لا توجد إشعارات جديدة</div>';
    return;
  }
  list.innerHTML = NOTIFICATIONS.map(n => 
    '<div class="notif-item" onclick="handleNotifClick(' + (n.patientId || "null") + ')">' +
      '<div class="notif-icon ' + n.type + '"><i class="ti ti-' + n.icon + '"></i></div>' +
      '<div style="flex:1">' +
        '<div class="notif-text">' + n.text + '</div>' +
        '<div class="notif-time">' + n.time + '</div>' +
      '</div>' +
    '</div>'
  ).join("");
}

function handleNotifClick(pid) {
  const d = document.getElementById("notifDropdown");
  if (d) d.classList.remove("show");
  if (pid) {
    if (window.location.pathname.includes("doctor-patients.html")) {
      if (typeof openPatientProfile === "function") openPatientProfile(pid);
    } else {
      window.location.href = "doctor-patients.html?patient=" + pid;
    }
  }
}

// ============================= AI ATTENTION MODAL =============================
function openAiRecomModal() {
  const modal = document.getElementById("aiRecomModal");
  if (!modal) return;
  modal.classList.add("open");
  renderAiModalContent();
}

function closeAiRecomModal() {
  const modal = document.getElementById("aiRecomModal");
  if (modal) modal.classList.remove("open");
}

function renderAiModalContent() {
  const body = document.getElementById("aiModalBody");
  if (!body) return;
  const pts = getClinicPatients()
    .map(p => ({ ...p, aiScoreData: calculateAttentionScore(p) }))
    .sort((a, b) => b.aiScoreData.score - a.aiScoreData.score);

  const urgentPatients = pts.filter(p => p.aiScoreData.score >= 50);

  let html = 
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px">' +
      '<div>' +
        '<div style="font-weight:700;font-size:14px;color:var(--text-primary)">' +
          'تحليل الحالات المستعجلة (' + urgentPatients.length + ' حالات)' +
        '</div>' +
        '<div class="tiny" style="color:var(--text-muted)">' +
          'مرتبة تنازلياً حسب خوارزمية المخاطر السريرية واستجابة المريض' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:6px">' +
        '<span class="ai-att-pill crit">🔴 ' + pts.filter(p => p.aiScoreData.score >= 75).length + ' قصوى</span>' +
        '<span class="ai-att-pill high">🟠 ' + pts.filter(p => p.aiScoreData.score >= 50 && p.aiScoreData.score < 75).length + ' انتباه</span>' +
      '</div>' +
    '</div>' +
    '<div style="display:flex;flex-direction:column;gap:10px">';

  urgentPatients.forEach(p => {
    const s = p.aiScoreData;
    const cInfo = CLINIC_MAP[p.appointmentClinicId] || CLINIC_MAP.clinic_mansoura;
    html += 
      '<div class="card" style="background:var(--bg-panel);border:1px solid ' + s.color + ';padding:12px;display:flex;flex-direction:column;gap:8px">' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span style="font-size:16px">' + s.icon + '</span>' +
            '<span style="font-weight:700;font-size:13.5px;color:var(--text-primary)">' + p.name + ' (' + p.age + ' سنة)</span>' +
            '<span class="clinic-badge ' + cInfo.tag + '">' + cInfo.short + '</span>' +
            '<span class="tiny" style="color:var(--text-muted)">' + p.patientId + '</span>' +
          '</div>' +
          '<div style="display:flex;align-items:center;gap:8px">' +
            '<span class="pill sm solid" style="background:' + s.color + ';color:#000;font-size:11px">' + s.label + ': ' + s.score + ' نقطة</span>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap">' +
          s.breakdown.map(b => '<span class="tag danger" style="font-size:10.5px"><i class="ti ti-alert-triangle"></i> ' + b.reason + '</span>').join("") +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border);padding-top:8px;margin-top:2px;flex-wrap:wrap;gap:8px">' +
          '<span class="tiny" style="color:var(--text-secondary)"><i class="ti ti-arrow-right"></i> الإجراء المقترح: ' + s.recommendedAction + '</span>' +
          '<div style="display:flex;gap:6px">' +
            '<button class="pill xs ghost" onclick="navigateFromAiModal(1,' + p.id + ')"><i class="ti ti-message"></i>محادثة</button>' +
            '<button class="pill xs ghost" onclick="navigateFromAiModal(2,' + p.id + ')"><i class="ti ti-id"></i>الملف</button>' +
            '<button class="pill xs solid" onclick="navigateFromAiModal(3,' + p.id + ')"><i class="ti ti-stethoscope"></i>بدء كشف</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  });

  html += '</div>';
  body.innerHTML = html;
}

function navigateFromAiModal(type, pid) {
  closeAiRecomModal();
  if (type === 1) window.location.href = "doctor-patients.html?chat=" + pid;
  else if (type === 2) window.location.href = "doctor-patients.html?patient=" + pid;
  else if (type === 3) window.location.href = "doctor-consultation.html?patient=" + pid;
}

// ============================= MOBILE NAVIGATION =============================
function toggleMobileNav() {
  const d = document.getElementById("mobileNavDrawer");
  if (!d) return;
  d.classList.toggle("open");
}

function toggleAvail() {
  const s = document.getElementById("availSwitch");
  const ms = document.getElementById("mAvailSwitch");
  const isOn = s ? s.classList.contains("on") : (ms ? ms.classList.contains("on") : true);
  if (s) s.classList.toggle("on", !isOn);
  if (ms) ms.classList.toggle("on", !isOn);
  showToast(!isOn ? "أنت الآن متاح لكشوفات الفيديو عن بعد ✓" : "تم تعيين الحالة إلى غير متاح لكشف الفيديو", !isOn ? "success" : "info");
}

function onMobileBottomNav(tab) {
  if (tab === "home") window.location.href = "tababa-doctor-dashboard.html";
  else if (tab === "patients") window.location.href = "doctor-patients.html";
  else if (tab === "workspace") window.location.href = "doctor-consultation.html";
  else if (tab === "clinics") window.location.href = "doctor-clinics.html";
  else if (tab === "fin") window.location.href = "doctor-financial.html";
  else if (tab === "chat") window.location.href = "doctor-patients.html?tab=chat";
  else if (tab === "more") toggleMobileNav();
}

function closeAllDrawers() {
  const pDrawer = document.getElementById("patientProfileDrawer");
  const cDrawer = document.getElementById("patientChatDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const mNav = document.getElementById("mobileNavDrawer");
  const aiModal = document.getElementById("aiRecomModal");

  if (pDrawer) pDrawer.classList.remove("open");
  if (cDrawer) cDrawer.classList.remove("open");
  if (backdrop) backdrop.classList.remove("open");
  if (mNav) mNav.classList.remove("open");
  if (aiModal) aiModal.classList.remove("open");
}

// ============================= AUTO INITIALIZATION =============================
document.addEventListener("DOMContentLoaded", () => {
  updateClinicSwitcherUI();

  // Close dropdown on outside click
  document.addEventListener("click", e => {
    const sw = document.getElementById("clinicSwitcherWrap");
    const mSw = document.getElementById("mClinicSwitcherBtn");
    const drop = document.getElementById("clinicDropdown");
    if (drop && drop.classList.contains("show")) {
      if ((!sw || !sw.contains(e.target)) && (!mSw || !mSw.contains(e.target))) {
        drop.classList.remove("show");
      }
    }
    const notifWrap = document.querySelector(".notif-wrapper");
    const mNotifBtn = document.getElementById("mNotifDot") ? document.getElementById("mNotifDot").parentElement : null;
    const notifDrop = document.getElementById("notifDropdown");
    if (notifDrop && notifDrop.classList.contains("show")) {
      if ((!notifWrap || !notifWrap.contains(e.target)) && (!mNotifBtn || !mNotifBtn.contains(e.target))) {
        notifDrop.classList.remove("show");
      }
    }
  });

  // Highlight current active navigation links
  const path = window.location.pathname.split("/").pop() || "tababa-doctor-dashboard.html";
  
  // Desktop sidebar links
  document.querySelectorAll(".mainnav .navitem").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.includes(path)) {
      a.classList.add("active");
    } else if (path === "" || path === "/" || path === "tababa-doctor-dashboard.html") {
      if (href && (href.includes("tababa-doctor-dashboard") || href === "#")) a.classList.add("active");
    }
  });

  // Mobile drawer links
  document.querySelectorAll(".m-nav-list .m-nav-item").forEach(a => {
    const href = a.getAttribute("href");
    if (href && href.includes(path)) {
      a.classList.add("active");
    }
  });

  // Mobile bottom nav buttons
  if (path.includes("tababa-doctor-dashboard") || path === "") {
    const btn = document.getElementById("mbNavHome");
    if (btn) btn.classList.add("active");
  } else if (path.includes("doctor-patients")) {
    const btn = document.getElementById("mbNavPatients");
    if (btn) btn.classList.add("active");
  } else if (path.includes("doctor-consultation")) {
    const btn = document.getElementById("mbNavWorkspace");
    if (btn) btn.classList.add("active");
  } else if (path.includes("doctor-clinics")) {
    const btn = document.getElementById("mbNavClinics");
    if (btn) btn.classList.add("active");
  } else if (path.includes("doctor-financial")) {
    const btn = document.getElementById("mbNavFin");
    if (btn) btn.classList.add("active");
  }
});

// ============================= MARKETING & LEADS CONVERSION HELPERS =============================
function getDoctorLeadsAcquisitionSummary(clinicId = "all") {
  let pts = PATIENTS.filter(p => p.isFromLead);
  if (clinicId !== "all") {
    pts = pts.filter(p => p.appointmentClinicId === clinicId || (p.clinics && p.clinics.includes(clinicId)));
  }

  const bySource = {
    facebook_ads: 0,
    instagram_ads: 0,
    google_ads: 0,
    whatsapp: 0,
    phone_call: 0
  };

  const campaigns = [];

  pts.forEach(p => {
    const src = p.leadSource || 'facebook_ads';
    bySource[src] = (bySource[src] || 0) + 1;
    if (p.campaign) {
      const existing = campaigns.find(c => c.name === p.campaign);
      if (existing) {
        existing.count++;
      } else {
        campaigns.push({ name: p.campaign, source: src, count: 1 });
      }
    }
  });

  return {
    totalConverted: pts.length,
    bySource,
    campaigns,
    patients: pts
  };
}

