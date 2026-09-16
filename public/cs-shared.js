/* ==========================================================================
   TABABA PLATFORM - CUSTOMER SERVICE & LEADS DATA ENGINE (cs-shared.js)
   ========================================================================== */

// Available Clinics Definition
const CS_CLINICS = [
  { id: "clinic_mansoura", name: "مركز طبابا الطبي", branchName: "فرع المنصورة", address: "حي الجامعة، المنصورة", color: "#1fe6a8", phone: "+20 50 234 5678" },
  { id: "clinic_cairo", name: "عيادة النور التخصصية", branchName: "فرع القاهرة", address: "شارع عباس العقاد، مدينة نصر", color: "#5b9cf5", phone: "+20 2 2401 9876" },
  { id: "clinic_giza", name: "عيادة فيوتشر كير", branchName: "فرع الجيزة", address: "هايبر وان، الشيخ زايد", color: "#f2b84b", phone: "+20 2 3855 4321" }
];

// Available Doctors for Fast CS Booking
const CS_DOCTORS = [
  { id: 1, name: "د. أحمد سامي", specialty: "باطنة عامة وجهاز هضمي", clinicId: "clinic_mansoura", price: 350, rating: 4.9 },
  { id: 2, name: "د. سارة عبد الله", specialty: "أمراض القلب والأوعية الدموية", clinicId: "clinic_cairo", price: 450, rating: 4.8 },
  { id: 3, name: "د. كريم النجار", specialty: "جراحة العظام والمفاصل والعمود الفقري", clinicId: "clinic_giza", price: 400, rating: 4.9 },
  { id: 4, name: "د. هبة فؤاد", specialty: "طب الأطفال وحديثي الولادة", clinicId: "clinic_mansoura", price: 300, rating: 4.7 }
];

// Marketing Sources Definition
const CS_SOURCES = {
  facebook_ads: { label: "إعلانات فيسبوك", icon: "brand-facebook", color: "#1877F2", bg: "rgba(24, 119, 242, 0.15)" },
  instagram_ads: { label: "إعلانات انستجرام", icon: "brand-instagram", color: "#E1306C", bg: "rgba(225, 48, 108, 0.15)" },
  google_ads: { label: "إعلانات جوجل", icon: "brand-google", color: "#EA4335", bg: "rgba(234, 67, 53, 0.15)" },
  whatsapp: { label: "واتساب مباشر", icon: "brand-whatsapp", color: "#25D366", bg: "rgba(37, 211, 102, 0.15)" },
  phone_call: { label: "اتصال هاتفي وارد", icon: "phone-incoming", color: "#5b9cf5", bg: "rgba(91, 156, 245, 0.15)" },
  website_lead: { label: "الموقع الإلكتروني", icon: "world", color: "#1fe6a8", bg: "rgba(31, 230, 168, 0.15)" },
  referral: { label: "ترشيح من مريض", icon: "user-share", color: "#a855f7", bg: "rgba(168, 85, 247, 0.15)" }
};

// Lead Pipeline Statuses Definition
const CS_STATUSES = {
  NEW: { key: "NEW", label: "جديد (لم يتم التواصل)", icon: "sparkles", color: "#f2665c", bg: "rgba(242, 102, 92, 0.12)", order: 1 },
  CONTACTED: { key: "CONTACTED", label: "تم التواصل (جاري الفهم)", icon: "phone-call", color: "#5b9cf5", bg: "rgba(91, 156, 245, 0.12)", order: 2 },
  FOLLOW_UP: { key: "FOLLOW_UP", label: "متابعة محددة", icon: "clock-hour-4", color: "#f2b84b", bg: "rgba(242, 184, 75, 0.12)", order: 3 },
  INTERESTED: { key: "INTERESTED", label: "مهتم وجاهز للحجز", icon: "thumb-up", color: "#10b981", bg: "rgba(16, 185, 129, 0.12)", order: 4 },
  BOOKING_PENDING: { key: "BOOKING_PENDING", label: "قيد تأكيد الموعد", icon: "calendar-event", color: "#a855f7", bg: "rgba(168, 85, 247, 0.12)", order: 5 },
  CONVERTED: { key: "CONVERTED", label: "تم الحجز بنجاح ✅", icon: "circle-check", color: "#1fe6a8", bg: "rgba(31, 230, 168, 0.15)", order: 6 },
  LOST: { key: "LOST", label: "غير مهتم / ملغي", icon: "circle-x", color: "#8a95aa", bg: "rgba(138, 149, 170, 0.12)", order: 7 }
};

// Initial Seed Dataset for Realistic Healthcare CS Simulation
const INITIAL_LEADS = [
  {
    id: "lead-101",
    leadNumber: "LD-601",
    createdAt: "2026-09-16T14:40:00Z",
    name: "محمود عبد الرحمن الشناوي",
    phone: "01098765432",
    city: "المنصورة",
    preferredBranchId: "clinic_mansoura",
    source: "facebook_ads",
    campaign: "حملة الجهاز الهضمي والقولون - المنصورة",
    specialty: "باطنة عامة وجهاز هضمي",
    preferredDoctorId: 1,
    complaint: "يعاني من حموضة مزمنة وآلام بالبطن منذ شهرين ويطلب استشارة أخصائي باطنة بأسرع وقت.",
    status: "NEW",
    urgency: "high",
    assignedAgent: "سارة محمود",
    nextFollowUp: null,
    lossReason: null,
    notes: [
      { id: "n1", author: "النظام", text: "تم استقبال البيانات عبر نموذج إعلان فيسبوك (حملة المنصورة)", time: "منذ 20 دقيقة" }
    ],
    timeline: [
      { id: "t1", title: "وصول عميل محتمل جديد", desc: "سجل العميل بياناته في إعلان فيسبوك", time: "14:40", type: "new" }
    ]
  },
  {
    id: "lead-102",
    leadNumber: "LD-602",
    createdAt: "2026-09-16T13:15:00Z",
    name: "نهى سامي مصطفى",
    phone: "01123456789",
    city: "القاهرة - مدينة نصر",
    preferredBranchId: "clinic_cairo",
    source: "instagram_ads",
    campaign: "حملة فحوصات القلب الشاملة - القاهرة",
    specialty: "أمراض القلب والأوعية الدموية",
    preferredDoctorId: 2,
    complaint: "ضربات قلب سريعة وإجهاد مع المجهود الخفيف وترغب في حجز د. سارة عبد الله.",
    status: "FOLLOW_UP",
    urgency: "critical",
    assignedAgent: "سارة محمود",
    nextFollowUp: "2026-09-16T16:30:00Z", // Due Today!
    lossReason: null,
    notes: [
      { id: "n2", author: "سارة محمود", text: "تحدثت معها هاتفياً، طلبت مهلة حتى 4:30 عصراً لمراجعة مواعيد عمل زوجها لتأكيد الحجز في فرع القاهرة.", time: "منذ ساعتين" }
    ],
    timeline: [
      { id: "t1", title: "وصول الـ Lead", desc: "مصدر الإعلان: انستجرام", time: "13:15", type: "new" },
      { id: "t2", title: "مكالمة هاتفية", desc: "تم التحدث وتحديد موعد متابعة اليوم الساعة 4:30 م", time: "13:30", type: "call" }
    ]
  },
  {
    id: "lead-103",
    leadNumber: "LD-603",
    createdAt: "2026-09-15T18:00:00Z",
    name: "طارق إبراهيم خليل",
    phone: "01234567890",
    city: "الجيزة - الشيخ زايد",
    preferredBranchId: "clinic_giza",
    source: "google_ads",
    campaign: "حملة علاج خشونة الركبة والمفاصل",
    specialty: "جراحة العظام والمفاصل والعمود الفقري",
    preferredDoctorId: 3,
    complaint: "ألم شديد في الركبة اليمنى وصعوبة في صعود السلالم، يحتاج كشف مع استشاري عظام.",
    status: "FOLLOW_UP",
    urgency: "high",
    assignedAgent: "أحمد رشاد",
    nextFollowUp: "2026-09-16T11:00:00Z", // Overdue!
    lossReason: null,
    notes: [
      { id: "n3", author: "أحمد رشاد", text: "تم الاتصال به بالأمس ولم يرد، تم جدولة متابعة صباح اليوم ويجب معاودة الاتصال فوراً.", time: "أمس" }
    ],
    timeline: [
      { id: "t1", title: "وصول عبر بحث جوجل", desc: "بحث عن: أفضل دكتور عظام الشيخ زايد", time: "أمس 18:00", type: "new" },
      { id: "t2", title: "محاولة اتصال أولى", desc: "لم يرد، تم إرسال رسالة واتساب ترحيبية", time: "أمس 18:30", type: "call" }
    ]
  },
  {
    id: "lead-104",
    leadNumber: "LD-604",
    createdAt: "2026-09-16T11:20:00Z",
    name: "أمينة كمال الجيار",
    phone: "01011223344",
    city: "المنصورة",
    preferredBranchId: "clinic_mansoura",
    source: "whatsapp",
    campaign: "استفسارات واتساب المباشرة",
    specialty: "طب الأطفال وحديثي الولادة",
    preferredDoctorId: 4,
    complaint: "الطفل عمره 3 سنوات يعاني من كحة ونزلة معوية، ترغب في أقرب موعد متاح اليوم.",
    status: "INTERESTED",
    urgency: "high",
    assignedAgent: "سارة محمود",
    nextFollowUp: null,
    lossReason: null,
    notes: [
      { id: "n4", author: "سارة محمود", text: "العميلة جاهزة وموافقة على رسوم الكشف (300 ج). في انتظار فتح السيستم لاختيار ميعاد كشف اليوم 1:00 م.", time: "منذ 45 دقيقة" }
    ],
    timeline: [
      { id: "t1", title: "رسالة واتساب واردة", desc: "استفسار عن د. هبة فؤاد", time: "11:20", type: "msg" },
      { id: "t2", title: "تأهيل العميل", desc: "تم التأكيد على رغبتها في الحجز", time: "11:35", type: "update" }
    ]
  },
  {
    id: "lead-105",
    leadNumber: "LD-605",
    createdAt: "2026-09-16T09:00:00Z",
    name: "خالد سعيد منصور",
    phone: "01555566778",
    city: "القاهرة",
    preferredBranchId: "clinic_cairo",
    source: "facebook_ads",
    campaign: "حملة باطنة وسكري كبار السن",
    specialty: "باطنة عامة وجهاز هضمي",
    preferredDoctorId: 1,
    complaint: "متابعة قراءات سكر مرتفعة لوالده (70 سنة) وضبط جرعات الإنسولين.",
    status: "CONVERTED",
    urgency: "normal",
    assignedAgent: "سارة محمود",
    nextFollowUp: null,
    lossReason: null,
    convertedPatientId: "TB-1045",
    convertedBookingDetails: {
      doctorName: "د. أحمد سامي",
      date: "2026-09-16",
      time: "05:30 م",
      branch: "فرع القاهرة",
      fee: 350
    },
    notes: [
      { id: "n5", author: "سارة محمود", text: "تم تأكيد الحجز بنجاح وإرسال رسالة التأكيد وموقع العيادة باللوكيشن عبر الواتساب.", time: "10:15 ص" }
    ],
    timeline: [
      { id: "t1", title: "وصول العميل", desc: "إعلان فيسبوك", time: "09:00", type: "new" },
      { id: "t2", title: "مكالمة التأكيد", desc: "تم الاتفاق على موعد اليوم 5:30 م", time: "09:40", type: "call" },
      { id: "t3", title: "تم الحجز والتحويل ✅", desc: "أُنشئ الحجز برقم #BK-902 وتأكد بفرع القاهرة", time: "10:15", type: "converted" }
    ]
  },
  {
    id: "lead-106",
    leadNumber: "LD-606",
    createdAt: "2026-09-15T16:00:00Z",
    name: "ياسر حمدي بدر",
    phone: "01033445566",
    city: "المنصورة",
    preferredBranchId: "clinic_mansoura",
    source: "phone_call",
    campaign: "مكالمة مباشرة للخط الساخن",
    specialty: "باطنة عامة وجهاز هضمي",
    preferredDoctorId: 1,
    complaint: "استفسر عن عمل منظار معدة وتكلفته في المركز.",
    status: "LOST",
    urgency: "low",
    assignedAgent: "أحمد رشاد",
    nextFollowUp: null,
    lossReason: "السعر أعلى من ميزانية العميل / تم الحجز في مستشفى حكومي",
    notes: [
      { id: "n6", author: "أحمد رشاد", text: "العميل رأى أن تكلفة المنظار مرتفعة حالياً ويفضل الانتظار للتأمين الصحي.", time: "أمس" }
    ],
    timeline: [
      { id: "t1", title: "اتصال هاتفي وارد", desc: "استفسار عن المنظار", time: "أمس 16:00", type: "call" },
      { id: "t2", title: "إغلاق العميل (Lost)", desc: "السبب: السعر غير مناسب للعميل", time: "أمس 16:20", type: "lost" }
    ]
  },
  {
    id: "lead-107",
    leadNumber: "LD-607",
    createdAt: "2026-09-16T15:10:00Z",
    name: "ريهام علاء الدين",
    phone: "01288990011",
    city: "الجيزة - الدقي",
    preferredBranchId: "clinic_giza",
    source: "website_lead",
    campaign: "نموذج كشف الطوارئ بالموقع",
    specialty: "أمراض القلب والأوعية الدموية",
    preferredDoctorId: 2,
    complaint: "ألم ضاغط في منتصف الصدر يمتد للكتف الأيسر ومستمر منذ نصف ساعة!",
    status: "NEW",
    urgency: "critical",
    assignedAgent: "سارة محمود",
    nextFollowUp: null,
    lossReason: null,
    notes: [
      { id: "n7", author: "النظام الذكي", text: "تنبيه طوارئ: الكلمات الدلالية تشير لاحتمالية أزمة قلبية حادة. يرجى الاتصال فوراً وتوجيهها لأقرب طوارئ أو استدعاء إسعاف.", time: "منذ 8 دقائق" }
    ],
    timeline: [
      { id: "t1", title: "🚨 تنبيه طوارئ عاجل", desc: "سجلت بالموقع مع شكوى ألم صدر حاد", time: "15:10", type: "emergency" }
    ]
  }
];

// WhatsApp Quick Response Templates
const CS_WA_TEMPLATES = [
  {
    id: "wa_welcome",
    title: "ترحيب واستفسار عن الحالة",
    text: "أهلاً بك أستاذ/ة {name} معك سارة من مركز «طبابا» الطبي 🩺. بخصوص استفسارك الكريم عن عيادة {specialty} بفرع {branch}، كيف يمكننا مساعدتك لتحديد الموعد المناسب مع استشاريينا؟"
  },
  {
    id: "wa_missed_call",
    title: "متابعة لعدم الرد على الاتصال",
    text: "مرحباً أستاذ/ة {name}، حاولنا الاتصال بحضرتك هاتفياً من خدمة عملاء «طبابا» لمساعدتك في استفسارك عن {specialty}. نرجو إفادتنا بالوقت الأنسب لمعاودة الاتصال أو يمكنك الرد علينا مباشرة هنا على واتساب 💬."
  },
  {
    id: "wa_booking_confirm",
    title: "تأكيد تفاصيل الحجز والموقع",
    text: "تم تأكيد موعد كشف حضرتك بنجاح يا فندم ✅!\n👨‍⚕️ الطبيب: {doctor}\n🏥 الفرع: {branch} ({address})\n📅 الموعد: اليوم {time}\nكود الحجز: {code}\nلأي استفسار قبل الوصول، يسعدنا تواصلك دائماً."
  }
];

// ============================= DATA STORE CONTROLLER =============================

class CsStore {
  constructor() {
    this.storageKey = "tababa_cs_leads";
    this.leads = this.loadLeads();
  }

  loadLeads() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Could not parse saved CS leads, falling back to seed data", e);
    }
    // Save initial seed
    localStorage.setItem(this.storageKey, JSON.stringify(INITIAL_LEADS));
    return INITIAL_LEADS;
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.leads));
  }

  getAll() {
    return this.leads;
  }

  getById(id) {
    return this.leads.find(l => l.id === id);
  }

  addLead(data) {
    const newId = "lead-" + Date.now();
    const newNumber = "LD-" + (600 + this.leads.length + 1);
    const newLead = {
      id: newId,
      leadNumber: newNumber,
      createdAt: new Date().toISOString(),
      name: data.name || "عميل جديد",
      phone: data.phone || "",
      city: data.city || "المنصورة",
      preferredBranchId: data.branchId || "clinic_mansoura",
      source: data.source || "facebook_ads",
      campaign: data.campaign || "حملة الاستحواذ المباشر",
      specialty: data.specialty || "باطنة عامة وجهاز هضمي",
      preferredDoctorId: data.doctorId ? parseInt(data.doctorId) : 1,
      complaint: data.complaint || "طلب استشارة طبية",
      status: "NEW",
      urgency: data.urgency || "normal",
      assignedAgent: "سارة محمود",
      nextFollowUp: null,
      lossReason: null,
      notes: [
        { id: "n_" + Date.now(), author: "النظام", text: "تم تسجيل العميل المحتمل يدوياً بنجاح", time: "الآن" }
      ],
      timeline: [
        { id: "t_" + Date.now(), title: "تسجيل عميل محتمل جديد", desc: "أضيف عبر واجهة خدمة العملاء", time: "الآن", type: "new" }
      ]
    };
    this.leads.unshift(newLead);
    this.save();
    return newLead;
  }

  updateStatus(id, newStatus, reason = null) {
    const lead = this.getById(id);
    if (!lead) return null;
    lead.status = newStatus;
    if (newStatus === "LOST" && reason) {
      lead.lossReason = reason;
    }
    lead.timeline.unshift({
      id: "t_" + Date.now(),
      title: "تحديث الحالة إلى: " + (CS_STATUSES[newStatus]?.label || newStatus),
      desc: reason ? "السبب: " + reason : "تم التحديث عبر شاشة خدمة العملاء",
      time: "الآن",
      type: newStatus === "CONVERTED" ? "converted" : (newStatus === "LOST" ? "lost" : "update")
    });
    this.save();
    return lead;
  }

  addNote(id, text, author = "سارة محمود") {
    const lead = this.getById(id);
    if (!lead) return null;
    const noteObj = {
      id: "n_" + Date.now(),
      author: author,
      text: text,
      time: "الآن"
    };
    lead.notes.unshift(noteObj);
    lead.timeline.unshift({
      id: "t_" + Date.now(),
      title: "إضافة ملاحظة عمل",
      desc: text.substring(0, 55) + (text.length > 55 ? "..." : ""),
      time: "الآن",
      type: "note"
    });
    this.save();
    return lead;
  }

  scheduleFollowUp(id, dateTimeStr, note = "") {
    const lead = this.getById(id);
    if (!lead) return null;
    lead.nextFollowUp = dateTimeStr;
    lead.status = "FOLLOW_UP";
    if (note) {
      this.addNote(id, "موعد متابعة: " + note);
    }
    lead.timeline.unshift({
      id: "t_" + Date.now(),
      title: "جدولة موعد متابعة",
      desc: "تاريخ المتابعة: " + new Date(dateTimeStr).toLocaleString("ar-EG"),
      time: "الآن",
      type: "schedule"
    });
    this.save();
    return lead;
  }

  recordCallOutcome(id, outcome, notes = "") {
    const lead = this.getById(id);
    if (!lead) return null;
    
    let outcomeText = "";
    if (outcome === "answered") {
      outcomeText = "تم الرد وفهم الحالة";
      if (lead.status === "NEW") lead.status = "CONTACTED";
    } else if (outcome === "no_answer") {
      outcomeText = "لم يرد على الاتصال";
      lead.status = "FOLLOW_UP";
    } else if (outcome === "busy") {
      outcomeText = "الرقم مشغول";
      lead.status = "FOLLOW_UP";
    } else if (outcome === "wrong_number") {
      outcomeText = "رقم خاطئ";
      lead.status = "LOST";
      lead.lossReason = "رقم هاتف خاطئ أو خارج الخدمة";
    }

    const fullDesc = outcomeText + (notes ? " (" + notes + ")" : "");
    lead.timeline.unshift({
      id: "t_" + Date.now(),
      title: "تسجيل نتيجة مكالمة: " + outcomeText,
      desc: fullDesc,
      time: "الآن",
      type: "call"
    });
    if (notes) {
      this.addNote(id, "نتيجة اتصال: " + fullDesc);
    }
    this.save();
    return lead;
  }

  convertToBooking(id, bookingData) {
    const lead = this.getById(id);
    if (!lead) return null;

    lead.status = "CONVERTED";
    lead.convertedBookingDetails = {
      doctorName: bookingData.doctorName,
      date: bookingData.date,
      time: bookingData.time,
      branch: bookingData.branchName,
      fee: bookingData.fee,
      bookingCode: "BK-" + Math.floor(100 + Math.random() * 900)
    };

    // Link or generate clinical Patient ID
    const newPatientCode = "TB-" + (1045 + this.leads.filter(l => l.status === "CONVERTED").length);
    lead.convertedPatientId = newPatientCode;

    lead.timeline.unshift({
      id: "t_" + Date.now(),
      title: "🎉 تم تحويل العميل إلى حجز مؤكد ومريض رسمي!",
      desc: `تم الحجز مع ${bookingData.doctorName} بفرع ${bookingData.branchName} بتاريخ ${bookingData.date} الساعة ${bookingData.time} (كود المريض: ${newPatientCode})`,
      time: "الآن",
      type: "converted"
    });

    this.save();
    return lead;
  }

  getKpis(branchFilter = "all") {
    let list = this.leads;
    if (branchFilter !== "all") {
      list = list.filter(l => l.preferredBranchId === branchFilter);
    }

    const now = new Date();
    const isToday = (d) => {
      if (!d) return false;
      const target = new Date(d);
      return target.toDateString() === now.toDateString();
    };
    const isPast = (d) => {
      if (!d) return false;
      return new Date(d) < now;
    };

    const newLeads = list.filter(l => l.status === "NEW").length;
    const followupsDueToday = list.filter(l => l.status === "FOLLOW_UP" && l.nextFollowUp && isToday(l.nextFollowUp)).length;
    const overdueFollowups = list.filter(l => l.status === "FOLLOW_UP" && l.nextFollowUp && isPast(l.nextFollowUp)).length;
    const interested = list.filter(l => l.status === "INTERESTED" || l.status === "BOOKING_PENDING").length;
    const converted = list.filter(l => l.status === "CONVERTED").length;
    const lost = list.filter(l => l.status === "LOST").length;
    const total = list.length;
    const conversionRate = total > 0 ? Math.round((converted / total) * 100) : 0;

    return {
      total,
      newLeads,
      followupsDueToday,
      overdueFollowups,
      interested,
      converted,
      lost,
      conversionRate
    };
  }
}

// Global Store Instance
window.csStore = new CsStore();
