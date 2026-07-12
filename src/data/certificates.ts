import {
  GraduationCap,
  School,
  Award,
} from "lucide-react";

export const certificates = [
  {
    id: "university",
    title: "استخراج الشهادة الجامعية",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200",
    description:
      "استخراج جميع الشهادات الجامعية والتوثيقات الرسمية بسرعة وموثوقية.",

    requirements: [
      "الاسم رباعي",
      "اسم الجامعة",
      "التخصص",
      "الرقم الجامعي",
      "سنة الدخول",
      "سنة التخرج",
      "صورة شخصية",
      "جواز السفر",
    ],

    applyLink:
      "/scholarship-application?service=university-certificate",
  },

  {
    id: "secondary",
    title: "استخراج الشهادة السودانية",
    icon: School,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200",
    description:
      "خدمة استخراج الشهادة الثانوية السودانية مع اختيار لغة الإصدار.",

    requirements: [
      "الاسم رباعي",
      "اسم الأم رباعي",
      "اسم المدرسة",
      "رقم الجلوس",
      "سنة الشهادة",
      "المساق",
      "جواز السفر",
      "صورة شخصية",
      "بيانات شهادة الثامن",
      "لغة الاستخراج (عربي / إنجليزي)",
    ],

    applyLink:
      "/scholarship-application?service=secondary-certificate",
  },

  {
    id: "basic",
    title: "استخراج شهادة الأساس",
    icon: Award,
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1200",
    description:
      "استخراج شهادة مرحلة الأساس وإنهاء جميع الإجراءات الرسمية.",

    requirements: [
      "الاسم رباعي",
      "اسم الأم رباعي",
      "اسم المدرسة",
      "رقم الجلوس",
      "سنة الشهادة",
      "جواز السفر",
      "صورة شخصية",
    ],

    applyLink:
      "/scholarship-application?service=basic-certificate",
  },
];