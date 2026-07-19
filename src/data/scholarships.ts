export interface Scholarship {
  id: string;
  slug: string;
  title: string;
  country: string;
  image: string;
  funded: string;
  description: string;

  benefits: string[];

  requirements: string[];

  grades: {
    program: string;
    percentage: string;
  }[];

  documents: string[];

  universities?: string[];

  age?: {
    degree: string;
    age: string;
  }[];
  
}



export const scholarships: Scholarship[] = [
  
  {
    id: "1",
    slug: "iraq-2026",

    title: "منحة الحكومة العراقية 2026",

    country: "العراق",

    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",

    funded: "ممولة بالكامل",

    description:
      "منحة حكومية مقدمة من وزارة التعليم العالي العراقية للطلاب الدوليين لدراسة البكالوريوس والماجستير والدكتوراه في مختلف التخصصات.",

    benefits: [
      "إعفاء كامل من الرسوم الدراسية",
      "تمويل كامل طوال فترة الدراسة",
      "تشمل الطب والأسنان والصيدلة",
      "إمكانية اختيار 3 رغبات",
      "تشمل جميع التخصصات",
    ],

    requirements: [
      "أن يكون المتقدم غير عراقي",
      "ألا يكون أحد الوالدين عراقياً",
      "امتلاك جواز سفر ساري",
    ],

    grades: [
      {
        program: "الطب",
        percentage: "85%",
      },
      {
        program: "طب الأسنان",
        percentage: "75%",
      },
      {
        program: "الصيدلة",
        percentage: "75%",
      },
      {
        program: "الهندسة",
        percentage: "65%",
      },
      {
        program: "التمريض",
        percentage: "65%",
      },
      {
        program: "باقي التخصصات",
        percentage: "60%",
      },
    ],

    age: [
      {
        degree: "بكالوريوس",
        age: "25 سنة",
      },
      {
        degree: "ماجستير",
        age: "45 سنة",
      },
      {
        degree: "دكتوراه",
        age: "50 سنة",
      },
    ],

    documents: [
      "جواز سفر ساري",
      "هوية أو شهادة ميلاد للوالدين",
      "خطاب تعهد",
      "الشهادة الأكاديمية",
      "البريد الإلكتروني",
      "صورة شخصية بخلفية بيضاء",
    ],
  },

  {
    id: "2",

    slug: "egypt-2026",

    title: "المنحة المصرية 2026",

    country: "مصر",

    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a",

    funded: "ممولة بالكامل",

    description:
      "منحة حكومية مقدمة للطلاب الدوليين للدراسة في الجامعات المصرية بمختلف التخصصات.",

    benefits: [
      "إعفاء كامل من الرسوم الدراسية",
      "جامعات حكومية معترف بها",
      "لا يشترط IELTS",
      "فرص في جميع التخصصات",
    ],

    requirements: [
      "أن يكون المتقدم طالباً دولياً",
      "امتلاك شهادة ثانوية",
      "جواز سفر ساري",
    ],

    grades: [
      {
        program: "الطب",
        percentage: "70 - 75%",
      },
      {
        program: "طب الأسنان",
        percentage: "65 - 70%",
      },
      {
        program: "الصيدلة",
        percentage: "65 - 70%",
      },
      {
        program: "العلاج الطبيعي",
        percentage: "60 - 65%",
      },
      {
        program: "الهندسة",
        percentage: "60 - 65%",
      },
      {
        program: "الحاسبات والذكاء الاصطناعي",
        percentage: "60 - 65%",
      },
      {
        program: "العلوم",
        percentage: "50 - 55%",
      },
      {
        program: "التمريض",
        percentage: "50 - 55%",
      },
      {
        program: "الفنون",
        percentage: "50 - 55%",
      },
      {
        program: "الإعلام",
        percentage: "60 - 65%",
      },

      
    ],

    

    documents: [
      "الشهادة الثانوية موثقة",
      "جواز سفر أو كرت لجوء",
      "شهادة الميلاد أو الرقم الوطني",
      "صورة شخصية",
      "بيانات الوالدين",
    ],
    
  },
];