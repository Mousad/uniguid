// src/data/studyCountries.ts

export interface StudyCountry {
  slug: string;
  name: string;
  heroImage: string;

  overview: string;
  whyStudy: string;

  universities: string[];

  majors: string[];

  requirements: string[];

  grades: string;

  tuition: string;

  visa: string;

  livingCost: string;

  steps: string[];

  faq: {
    question: string;
    answer: string;
  }[];
}

export const studyCountries: Record<string, StudyCountry> = {
  egypt: {
    slug: "egypt",

    name: "الدراسة في مصر",

    heroImage:
      "https://admission.study-in-egypt.gov.eg/static/media/heroImg.ff53e208.png",

    overview:
      "تُعد مصر من أكثر الوجهات الدراسية جذبًا للطلاب العرب والأفارقة، لما تتميز به من جامعات عريقة وبرامج أكاديمية معترف بها ورسوم دراسية مناسبة.",

    whyStudy:
      "توفر مصر جامعات حكومية وخاصة متميزة، وتخصصات متنوعة، وشهادات معترف بها دوليًا، بالإضافة إلى سهولة التواصل باللغة العربية وانخفاض تكاليف المعيشة مقارنة بالعديد من الدول.",

    universities: [
      "جامعة القاهرة",
      "جامعة عين شمس",
      "جامعة الإسكندرية",
      "جامعة المنصورة",
      "جامعة الأزهر",
      "جامعة المستقبل",
      "جامعة بدر",
      "جامعة أكتوبر للعلوم الحديثة",
    ],

    majors: [
      "الطب البشري",
      "طب الأسنان",
      "الصيدلة",
      "الهندسة",
      "الذكاء الاصطناعي",
      "علوم الحاسب",
      "إدارة الأعمال",
      "الإعلام",
      "الحقوق",
      "التمريض",
    ],

    requirements: [
      "صورة جواز السفر",
      "الشهادة الثانوية",
      "كشف الدرجات",
      "شهادة الميلاد",
      "صور شخصية",
    ],

    grades:
      "تختلف النسب المطلوبة حسب الجامعة والتخصص، ويتم تحديدها سنويًا من قبل الجهات المختصة.",

    tuition:
      "تختلف الرسوم حسب الجامعة والتخصص، ويمكن لفريق UniGuide مساعدتك في معرفة التكلفة الدقيقة.",

    visa:
      "بعد الحصول على القبول الجامعي يتم التقديم للحصول على التأشيرة الدراسية وفق الإجراءات المعتمدة.",

    livingCost:
      "تتراوح تكلفة المعيشة الشهرية بين 250 إلى 600 دولار تقريبًا حسب المدينة ونمط الحياة.",

    steps: [
      "اختيار التخصص المناسب",
      "اختيار الجامعة",
      "إرسال المستندات",
      "الحصول على القبول",
      "سداد الرسوم",
      "استخراج التأشيرة",
      "السفر إلى مصر",
      "إتمام التسجيل النهائي",
    ],

    faq: [
      {
        question: "هل الجامعات المصرية معترف بها؟",
        answer:
          "نعم، العديد من الجامعات المصرية معترف بها في معظم الدول العربية والعالم.",
      },
      {
        question: "هل يمكن الدراسة باللغة الإنجليزية؟",
        answer:
          "نعم، توجد برامج عديدة تُدرس باللغة الإنجليزية خاصة في التخصصات الطبية والهندسية.",
      },
      {
        question: "هل تساعد UniGuide في استخراج الفيزا؟",
        answer:
          "نعم، نقدم الدعم والإرشاد الكامل حتى الحصول على التأشيرة والسفر.",
      },
    ],
  },

  china: {
    slug: "china",

    name: "الدراسة في الصين",

    heroImage:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b",

    overview: "",

    whyStudy: "",

    universities: [],

    majors: [],

    requirements: [],

    grades: "",

    tuition: "",

    visa: "",

    livingCost: "",

    steps: [],

    faq: [],
  },

  turkey: {
    slug: "turkey",

    name: "الدراسة في تركيا",

    heroImage: "https://www.turkeyuniversity.org/_next/image?url=https%3A%2F%2Fimtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com%2Feywb_aldrast_fy_trkya_63c7d59ab9_28e5ed967c.png&w=1920&q=75",

    overview: "",

    whyStudy: "",

    universities: [],

    majors: [],

    requirements: [],

    grades: "",

    tuition: "",

    visa: "",

    livingCost: "",

    steps: [],

    faq: [],
  },

  russia: {
    slug: "russia",

    name: "الدراسة في روسيا",

    heroImage: "https://i.pinimg.com/736x/ef/71/24/ef7124a2d2c7c4d2c7ed992a6e9b9066.jpg",

    overview: "",

    whyStudy: "",

    universities: [],

    majors: [],

    requirements: [],

    grades: "",

    tuition: "",

    visa: "",

    livingCost: "",

    steps: [],

    faq: [],
  },

  india: {
    slug: "india",

    name: "الدراسة في الهند",

    heroImage: "https://d3vt78ic2w6yaz.cloudfront.net/max-760/t/40037-1624968209608.jpg",

    overview: "",

    whyStudy: "",

    universities: [],

    majors: [],

    requirements: [],

    grades: "",

    tuition: "",

    visa: "",

    livingCost: "",

    steps: [],

    faq: [],
  },

  rwanda: {
    slug: "rwanda",

    name: "الدراسة في رواندا",

    heroImage: "https://i.pinimg.com/1200x/6f/78/6a/6f786a6b55357e4d1e1696c62fad0707.jpg",

    overview: "",

    whyStudy: "",

    universities: [],

    majors: [],

    requirements: [],

    grades: "",

    tuition: "",

    visa: "",

    livingCost: "",

    steps: [],

    faq: [],
  },
};