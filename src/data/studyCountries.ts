// src/data/studyCountries.ts

export interface University {
  name: string;
  cover: string;
  logo: string;
}

export interface StudyCountry {
  slug: string;
  name: string;
  heroImage: string;

  overview: string;
  whyStudy: string;

  universities: University[];

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
    "تُعد مصر واحدة من أفضل الوجهات الدراسية في الشرق الأوسط وإفريقيا، حيث تضم جامعات حكومية وخاصة ذات تصنيف عالمي، وتوفر برامج أكاديمية متنوعة كما تتميز بانخفاض تكاليف الدراسة والمعيشة مقارنة بالعديد من الدول الأخرى، مما يجعلها خيارًا مثاليًا للطلاب الدوليين.",

  whyStudy:
    "توفر مصر جامعات معترف بها عالميًا، وتخصصات أكاديمية متنوعة، وبيئة عربية مناسبة للطلاب، بالإضافة إلى انخفاض تكاليف المعيشة وسهولة استخراج التأشيرة للعديد من الجنسيات، مع وجود فرص تدريب في المستشفيات والشركات الكبرى.",

  universities: [
    {
      name: "جامعة القاهرة",
      cover:
        "https://i.pinimg.com/736x/27/71/57/277157a5755cfab9d6b384ddb66f41d0.jpg",
      logo:
        "https://ar.wikipedia.org/wiki/%D9%85%D9%84%D9%81:%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png",
    },
    {
      name: "جامعة عين شمس",
      cover:
        "https://www.asu.edu.eg/141090/2023/news/e06a534b627c87e42e2ac648c73a524a.jpg",
      logo:
        "https://upload.wikimedia.org/wikipedia/ar/8/87/AinShamsUniv.png",
    },
    {
      name: "جامعة الإسكندرية",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcWcVzphPvG3Z_rm6NikP82VT51DfMoygGzPRRWo6_g&s",
      logo:
        "https://scu.eg/storage/2023/05/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A%D8%A9.png",
    },
    {
      name: "جامعة المنصورة",
      cover:
        "https://arabsstudents.com/blogs/175855260748Jy2UeA2L",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0qpL7NfYKJHiz5zoXqxoqAN6xLVk70cWueNGIPYnvQ&s=10",
    },
   
    {
      name: "جامعة المستقبل",
      cover:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwUuF1bGQgBpyXZffWEDozMeGi2cOcJo-9SSSIGyLYuoeMkpd491sy7M&s=10",
    },
   
    {
      name: "جامعة أكتوبر    (MSA)",
      cover:
        "https://studyinegy.com/wp-content/uploads/2023/03/gamaaoctobersciencearts.webp",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe-xBxjDWB_HX2YiNCDe3LEGOMh9yd7cZhdfNBGGGcA&s=10",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "العلاج الطبيعي",
    "الهندسة",
    "الذكاء الاصطناعي",
    "علوم الحاسب",
    "الأمن السيبراني",
    "إدارة الأعمال",
    "المحاسبة",
    "الاقتصاد",
    "الإعلام",
    "الحقوق",
    "التمريض",
    "العلوم",
    "الزراعة",
    "التجارة",
    "الفنون التطبيقية",
  ],

  requirements: [
    "صورة جواز سفر ساري المفعول",
    "الشهادة الثانوية الأصلية",
    "كشف الدرجات",
    "شهادة الميلاد",
    "عدد 6 صور شخصية",
    "الفحص الطبي (عند الطلب)",
    "استمارة التقديم",
  ],





  visa:
    "بعد الحصول على خطاب القبول الجامعي، يتم التقديم للحصول على التأشيرة الدراسية المصرية، مع إمكانية المساعدة في جميع الإجراءات من خلال UniGuide.",

  livingCost:
    "تتراوح تكلفة المعيشة في مصر بين 250 و600 دولار شهريًا حسب المدينة ونوع السكن ونمط المعيشة.",

  steps: [
    "اختيار التخصص المناسب",
    "اختيار الجامعة",
    "إرسال المستندات",
    "مراجعة الملف",
    "الحصول على القبول الجامعي",
    "سداد الرسوم",
    "استخراج التأشيرة",
    "حجز تذكرة السفر",
    "الوصول إلى مصر",
    "إكمال التسجيل في الجامعة",
  ],

  faq: [
    {
      question: "هل الجامعات المصرية معترف بها؟",
      answer:
        "نعم، معظم الجامعات المصرية الحكومية والعديد من الجامعات الخاصة معترف بها في الدول العربية وعدد كبير من دول العالم.",
    },
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، تتوفر العديد من البرامج باللغة الإنجليزية خاصة في الطب والهندسة وعلوم الحاسب وإدارة الأعمال.",
    },
    {
      question: "هل نساعد  في استخراج التأشيرة؟",
      answer:
        "نعم، نقدم الدعم الكامل في استخراج القبول الجامعي، والتأشيرة، وترتيبات السفر والاستقبال.",
    },
    {
      question: "هل يمكن للطالب العمل أثناء الدراسة؟",
      answer:
        "يعتمد ذلك على القوانين المنظمة والإقامة الدراسية، ويمكن لفريق UniGuide توضيح التفاصيل حسب حالة الطالب.",
    },
    {
      question: "كم تستغرق إجراءات القبول؟",
      answer:
        "غالبًا تستغرق إجراءات القبول من أسبوعين إلى أربعة أسابيع بعد اكتمال جميع المستندات المطلوبة.",
    },
  ],
},

 china: {
  slug: "china",

  name: "الدراسة في الصين",

  heroImage:
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600",

  overview:
    "تُعتبر الصين واحدة من أبرز الوجهات التعليمية في العالم، حيث تضم جامعات مصنفة عالميًا وتوفر برامج دراسية متنوعة في مختلف التخصصات، بالإضافة إلى منح دراسية حكومية ودولية للطلاب الأجانب.",

  whyStudy:
    "توفر الصين تعليمًا عالي الجودة، ومختبرات حديثة، وفرصًا بحثية متميزة، ورسومًا دراسية مناسبة مقارنة بالدول الغربية، كما تمنح الطلاب فرصة التعرف على واحدة من أكبر الاقتصادات في العالم.",

  universities: [
    {
      name: "جامعة تسينغهوا",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      logo: "https://i.pinimg.com/1200x/d2/ea/84/d2ea84f1e6b31ad27ce1c527bfbc20f4.jpg",
    },
    {
      name: "جامعة بكين",
      cover: "https://i.pinimg.com/736x/0d/f9/6c/0df96c82854fe1767d601a7f18969d77.jpg",
      logo: "https://i.pinimg.com/1200x/63/5c/ea/635cea4fcad14d703867284861a0376e.jpg",
    },
   
    {
      name: "جامعة شنغهاي جياو تونغ",
      cover: "https://i.pinimg.com/736x/4b/52/6d/4b526dc7ab9d069f31c46c494703ee86.jpg",
      logo: "https://i.pinimg.com/736x/26/78/95/26789578b0df62c214a6e641cc30d219.jpg",
    },
    {
      name: "جامعة تشجيانغ",
      cover: "https://i.pinimg.com/1200x/f4/47/03/f44703a28adc7a357245704345c0a0c4.jpg",
      logo: "https://i.pinimg.com/1200x/84/2b/74/842b74f61f2514f2089252c69e8c5c9d.jpg",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "الهندسة",
    "الذكاء الاصطناعي",
    "علوم الحاسب",
    "إدارة الأعمال",
    "الاقتصاد",
    "الهندسة المدنية",
    "التجارة الدولية",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة لغة إنجليزية أو صينية حسب البرنامج",
    "الفحص الطبي",
  ],

  grades:
    "تختلف نسب القبول حسب الجامعة والتخصص، ويُفضل الحصول على معدل مرتفع خاصة في التخصصات الطبية والهندسية.",

  tuition:
    "تتراوح الرسوم الدراسية بين 2000 و9000 دولار أمريكي سنويًا حسب الجامعة والبرنامج.",

  visa:
    "بعد الحصول على خطاب القبول الجامعي يتم استخراج تأشيرة الدراسة (X1 أو X2) من السفارة الصينية.",

  livingCost:
    "تتراوح تكلفة المعيشة بين 350 و800 دولار أمريكي شهريًا حسب المدينة.",

  steps: [
    "اختيار الجامعة المناسبة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "التقديم الإلكتروني",
    "استلام خطاب القبول",
    "دفع الرسوم أو تأكيد المنحة",
    "استخراج التأشيرة",
    "السفر إلى الصين",
    "إكمال التسجيل في الجامعة",
  ],

  faq: [
    {
      question: "هل الجامعات الصينية معترف بها؟",
      answer:
        "نعم، العديد من الجامعات الصينية معترف بها عالميًا وفي معظم الدول العربية.",
    },
    {
      question: "هل توجد منح دراسية؟",
      answer:
        "نعم، توفر الحكومة الصينية (CSC) والجامعات منحًا ممولة بالكامل أو جزئيًا.",
    },
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، توفر العديد من الجامعات برامج باللغة الإنجليزية خاصة في الطب والهندسة وإدارة الأعمال.",
    },
  ],
},

 turkey: {
  slug: "turkey",

  name: "الدراسة في تركيا",

  heroImage:
    "https://www.turkeyuniversity.org/_next/image?url=https%3A%2F%2Fimtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com%2Feywb_aldrast_fy_trkya_63c7d59ab9_28e5ed967c.png&w=1920&q=75",

  overview:
    "تُعد تركيا من أكثر الوجهات الدراسية جذبًا للطلاب الدوليين، حيث تجمع بين جودة التعليم، وانخفاض الرسوم الدراسية مقارنة بالدول الأوروبية، إضافةً إلى موقعها الجغرافي المميز الذي يربط بين آسيا وأوروبا.",

  whyStudy:
    "توفر الجامعات التركية برامج أكاديمية معترفًا بها عالميًا، وفرصًا للحصول على منح دراسية، إضافةً إلى بيئة طلابية متنوعة، وتكاليف معيشة مناسبة، وإمكانية الدراسة باللغة الإنجليزية أو التركية.",

  universities: [
    {
      name: "جامعة إسطنبول",
      cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      logo: "https://i.pinimg.com/1200x/63/5c/ea/635cea4fcad14d703867284861a0376e.jpg",
    },
    {
      name: "جامعة أنقرة",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZswL-z-4OGOMqn23J3mZZhOLXgU7Q38ZnQ0Z_sh_axp7Ox1FirvrDGE&s=10",
      logo: "https://imtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com/Ankara_Ueniversity_imtiyaz_92b422d1bf.png",
    },
    {
      name: "جامعة حاجت تبه",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      logo: "https://i.pinimg.com/736x/4a/f6/ef/4af6efb62440c7a655f9607707546a06.jpg",
    },
    {
      name: "جامعة الشرق الأوسط التقنية",
      cover: "https://i.pinimg.com/736x/fb/7d/e2/fb7de27208d00f016ed6f8a2a1005c85.jpg",
      logo: "https://i.pinimg.com/1200x/18/5d/d1/185dd185ff636bbd092f33e14ef7c942.jpg",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "الهندسة",
    "علوم الحاسب",
    "الذكاء الاصطناعي",
    "إدارة الأعمال",
    "العمارة",
    "الإعلام",
    "الاقتصاد",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة لغة إن وجدت",
  ],

  grades:
    "تختلف نسب القبول حسب الجامعة والتخصص، حيث تتطلب التخصصات الطبية معدلات مرتفعة، بينما تكون باقي التخصصات أكثر مرونة.",

  tuition:
    "تتراوح الرسوم الدراسية بين 500 و 8000 دولار سنويًا حسب الجامعة والتخصص.",

  visa:
    "بعد الحصول على خطاب القبول الجامعي يتم التقديم للحصول على التأشيرة الدراسية التركية من السفارة أو القنصلية التركية.",

  livingCost:
    "تتراوح تكلفة المعيشة بين 300 و700 دولار أمريكي شهريًا حسب المدينة ونمط الحياة.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "إرسال الطلب",
    "استلام القبول",
    "سداد الرسوم",
    "استخراج التأشيرة",
    "السفر إلى تركيا",
    "إكمال التسجيل الجامعي",
  ],

  faq: [
    {
      question: "هل الجامعات التركية معترف بها؟",
      answer:
        "نعم، العديد من الجامعات التركية معترف بها دوليًا وفي معظم الدول العربية.",
    },
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، توفر العديد من الجامعات برامج باللغة الإنجليزية في مختلف التخصصات.",
    },
    {
      question: "هل توجد منح دراسية؟",
      answer:
        "نعم، توفر الحكومة التركية وعدد من الجامعات منحًا دراسية ممولة جزئيًا وكليًا.",
    },
  ],
},

 russia: {
  slug: "russia",

  name: "الدراسة في روسيا",

  heroImage:
    "https://i.pinimg.com/736x/ef/71/24/ef7124a2d2c7c4d2c7ed992a6e9b9066.jpg",

  overview:
    "تعد روسيا من أبرز الوجهات الدراسية للطلاب الدوليين، خاصة في التخصصات الطبية والهندسية، حيث تضم جامعات ذات تصنيف عالمي ورسوم دراسية مناسبة مقارنة بالعديد من الدول الأوروبية.",

  whyStudy:
    "توفر روسيا تعليماً عالي الجودة، ومختبرات حديثة، وشهادات معترف بها في العديد من الدول، بالإضافة إلى انخفاض تكاليف الدراسة والمعيشة وإمكانية الدراسة باللغة الروسية أو الإنجليزية.",

  universities: [
    {
      name: "جامعة لومونوسوف موسكو",
      cover:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=900",
      logo:
        "https://i.pinimg.com/1200x/84/2b/74/842b74f61f2514f2089252c69e8c5c9d.jpg",
    },
    {
      name: "جامعة سانت بطرسبرغ الحكومية",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ5ofaeDLnMId_JVTU-3g4RenjVxZCA8m9guCRJdP4zefovNd-QnciMFY&s=10",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaCeOvDGn2YyDCUxeHE_cbHnHfh2WoP0sN_7bEN4SRJrgqGuDQt8zTmso&s=10",
    },
    {
      name: "جامعة الصداقة بين الشعوب",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn-4Cz-EeY1KJRIzJCDKvbFEY_sB8XHH_7DoavJxUD2f2dH6mYiMgwiy8&s=10",
    },
    {
      name: "جامعة كازان الفيدرالية",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpnXkVCXTEyF7cnFiAhAJNQAQN2xh0E-GyRaeeNZXI4zSiFaIMfdrAiY-&s=10",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37BRJezUTcOWkGOLRFoW6domzo0C7-OWMroQtiQjugkWR932kNRWJsok&s=10",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "الهندسة",
    "علوم الحاسب",
    "الذكاء الاصطناعي",
    "إدارة الأعمال",
    "العلاقات الدولية",
    "الاقتصاد",
    "الطيران",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة ميلاد",
    "فحص طبي",
  ],

  grades:
    "تختلف النسبة المطلوبة حسب الجامعة والتخصص، وتكون أعلى في التخصصات الطبية.",

  tuition:
    "تبدأ الرسوم الدراسية من حوالي 2,500 دولار سنوياً وقد تصل إلى 8,000 دولار حسب الجامعة والتخصص.",

  visa:
    "بعد الحصول على خطاب القبول تصدر الجامعة دعوة رسمية للتقديم على التأشيرة الدراسية الروسية.",

  livingCost:
    "تتراوح تكلفة المعيشة بين 300 و700 دولار شهرياً حسب المدينة ونمط الحياة.",

  steps: [
    "اختيار التخصص",
    "اختيار الجامعة",
    "إرسال المستندات",
    "استلام خطاب القبول",
    "الحصول على الدعوة",
    "استخراج التأشيرة",
    "السفر إلى روسيا",
    "التسجيل في الجامعة",
  ],

  faq: [
    {
      question: "هل الدراسة في روسيا معترف بها؟",
      answer:
        "نعم، العديد من الجامعات الروسية معترف بها في معظم الدول العربية والعالم.",
    },
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، توفر العديد من الجامعات برامج باللغة الإنجليزية خاصة في التخصصات الطبية.",
    },
    {
      question: "هل تساعد UniGuide في إجراءات السفر؟",
      answer:
        "نعم، نساعد في التقديم للجامعة، استخراج التأشيرة، وترتيب السفر والاستقبال.",
    },
  ],
},

 india: {
  slug: "india",

  name: "الدراسة في الهند",

  heroImage:
    "https://d3vt78ic2w6yaz.cloudfront.net/max-760/t/40037-1624968209608.jpg",

  overview:
    "تُعد الهند من أفضل الوجهات التعليمية للطلاب الدوليين، حيث تضم جامعات مرموقة في مجالات الطب والهندسة وإدارة الأعمال وتقنية المعلومات، إضافةً إلى انخفاض الرسوم الدراسية مقارنة بالعديد من الدول.",

  whyStudy:
    "توفر الهند تعليماً عالي الجودة، ومناهج حديثة، وتخصصات متنوعة، وشهادات معترف بها دولياً، مع تكلفة دراسة ومعيشة مناسبة للطلاب الدوليين.",

  universities: [
    {
      name: "جامعة دلهي",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGTtp5X1eiMGsWgifdLAZF0BhpJqYmOUbEHgU1t_5-SA&s=10",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9r7AsjMFn22N4QJrnlIzIXqr35aVRWIKU9aGVoefpHt0kFypgIuxeV8&s=10",
    },
    {
      name: "جامعة جواهر لال نهرو",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFNqOxRkjIjbV5xkO1Q-wYwW9BPJ-HkKnx6XSX5zgHVP0anAVuC0Vt-4&s=10",
    },
    {
      name: "المعهد الهندي للتكنولوجيا IIT Delhi",
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Main%28Administrative%29Building_IIT-Roorkee.JPG/1280px-Main%28Administrative%29Building_IIT-Roorkee.JPG",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1280px-Indian_Institute_of_Technology_Delhi_Logo.svg.png",
    },
    {
      name: "جامعة مانيبال",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6waM4zFYbLi2W-fE8F5ebPdFCJWt6uzcfoViGaBdJC8MXTJ53XE_kH4t&s=10",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ZM4wXqJ6DYbo07TVkDaEXlEZaxbKfJBVtPXFqZVGHytFIYhrwqD-jbU&s=10",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "الهندسة",
    "علوم الحاسب",
    "الذكاء الاصطناعي",
    "إدارة الأعمال",
    "الإعلام",
    "التمريض",
    "التجارة",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة الميلاد",
    "إثبات إجادة اللغة عند الحاجة",
  ],

  grades:
    "تعتمد نسبة القبول على الجامعة والتخصص، وتكون أعلى في التخصصات الطبية والهندسية.",

  tuition:
    "تبدأ الرسوم الدراسية من حوالي 2,000 دولار سنوياً وقد تصل إلى 8,000 دولار حسب الجامعة والتخصص.",

  visa:
    "بعد الحصول على خطاب القبول يتم التقديم على التأشيرة الدراسية الهندية من خلال السفارة أو القنصلية.",

  livingCost:
    "تتراوح تكلفة المعيشة بين 250 و600 دولار شهرياً حسب المدينة ونمط حياة الطالب.",

  steps: [
    "اختيار التخصص",
    "اختيار الجامعة",
    "تجهيز المستندات",
    "إرسال طلب التقديم",
    "الحصول على القبول",
    "استخراج التأشيرة",
    "حجز السفر",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل الجامعات الهندية معترف بها؟",
      answer:
        "نعم، العديد من الجامعات الهندية معترف بها دولياً وفي معظم الدول العربية.",
    },
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، معظم البرامج الجامعية في الهند تُدرس باللغة الإنجليزية.",
    },
    {
      question: "هل تساعد UniGuide في التقديم؟",
      answer:
        "نعم، نقدم خدمة التقديم للجامعات واستخراج التأشيرة ومتابعة إجراءات السفر حتى الوصول.",
    },
  ],
},

rwanda: {
  slug: "rwanda",

  name: "الدراسة في رواندا",

  heroImage:
    "https://i.pinimg.com/1200x/6f/78/6a/6f786a6b55357e4d1e1696c62fad0707.jpg",

  overview:
    "أصبحت رواندا من الوجهات التعليمية الصاعدة في إفريقيا، حيث تستثمر بشكل كبير في التعليم العالي والبحث العلمي، وتوفر بيئة آمنة وحديثة للطلاب الدوليين مع جامعات تقدم برامج باللغة الإنجليزية.",

  whyStudy:
    "توفر رواندا جامعات حديثة، ورسوم دراسية مناسبة، وتعليماً باللغة الإنجليزية، إضافة إلى بيئة مستقرة وفرص جيدة في مجالات التكنولوجيا والهندسة وإدارة الأعمال والعلوم الصحية.",

  universities: [
    {
      name: "جامعة رواندا",
      cover:
        "https://alkhawarizmi.eg/wp-content/uploads/2024/06/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%B1%D9%88%D8%A7%D9%86%D8%AF%D8%A7.jpg",
      logo:
        "https://ar.uni24k.com/media/logos/logo_schools_u44d31bf9_9b98ab1f.jpg",
    },
    {
      name: "جامعة كيغالي المستقلة",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCwrXhz_rPhlTdlyggJp-pI_Adyyr7EjQx-U_0WijsZUt-chGxerhYo-N&s=10",
      logo:
        "https://ar.uni24k.com/media/logos/logo_schools_ua9751a4a_f6c48b36.jpg",
    },
    {
      name: "جامعة كيغالي",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2q2X2VekgPyZPKHCs3oF3zB_d-N6_mP6rfqXEBEuag828uZ5HgfrX2A&s=100",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GOg-7KaYKvYkzRgIXoiQ3U_OujmWln80pMixpgQZvcI2-plLQJXFVVoi&s=10",
    },
    {
      name: "معهد كيغالي للعلوم والتكنولوجيا",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqTI92UTz8P4AtxjrB1M-HjkB80Koy9sqzg_HzRqFJ0CBgzBHYtaa_rvaa&s=10",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJLymCT71IIjCqNFpKF1pCRn4DuM9N9Gy4ptrfb3xXg&s",
    },
  ],

  majors: [
    "الطب",
    "الهندسة",
    "علوم الحاسب",
    "تقنية المعلومات",
    "إدارة الأعمال",
    "المحاسبة",
    "الاقتصاد",
    "التمريض",
    "الصحة العامة",
    "الذكاء الاصطناعي",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة ميلاد",
    "شهادة إجادة اللغة الإنجليزية عند الحاجة",
  ],

  grades:
    "تعتمد نسبة القبول على الجامعة والتخصص، مع مرونة في متطلبات العديد من البرامج.",

  tuition:
    "تبدأ الرسوم الدراسية من حوالي 1,500 دولار سنوياً وتختلف حسب الجامعة والتخصص.",

  visa:
    "بعد الحصول على خطاب القبول يتم التقديم للحصول على التأشيرة الدراسية، وتتميز إجراءاتها بالسهولة مقارنة بالعديد من الدول.",

  livingCost:
    "تتراوح تكلفة المعيشة بين 250 و500 دولار شهرياً حسب المدينة ونمط الحياة.",

  steps: [
    "اختيار التخصص",
    "اختيار الجامعة",
    "إرسال المستندات",
    "الحصول على القبول",
    "استخراج التأشيرة",
    "حجز تذكرة السفر",
    "الوصول إلى رواندا",
    "إكمال التسجيل في الجامعة",
  ],

  faq: [
    {
      question: "هل الدراسة في رواندا باللغة الإنجليزية؟",
      answer:
        "نعم، تعتمد معظم الجامعات في رواندا اللغة الإنجليزية كلغة أساسية للتدريس.",
    },
    {
      question: "هل الجامعات الرواندية معترف بها؟",
      answer:
        "نعم، العديد من الجامعات الرواندية معترف بها في عدد من الدول الإفريقية والعربية.",
    },
    {
      question: "هل تساعد UniGuide في إجراءات التقديم؟",
      answer:
        "نعم، نتابع مع الطالب جميع مراحل التقديم، واستخراج التأشيرة، وحتى الوصول إلى الجامعة.",
    },
  ],
},
};