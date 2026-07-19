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
    "تعرف على نظام التعليم العالي في مصر، وأبرز الجامعات الحكومية والخاصة والدولية، ولماذا تعد مصر واحدة من أكثر الوجهات الدراسية جذبًا للطلاب الدوليين، خاصة من الدول العربية والأفريقية.",

  whyStudy:
    "جامعات معترف بها دوليًا، جودة تعليم في مختلف التخصصات، قرب ثقافي ولغوي للدول العربية، رسوم دراسية تنافسية مقارنة بالعديد من الدول، تنوع كبير في الجامعات والتخصصات، مجتمع طلابي دولي، وسهولة الوصول من معظم الدول العربية والأفريقية.",

  universities: [
    {
      name: "جامعة القاهرة",
      cover: "https://i.pinimg.com/736x/27/71/57/277157a5755cfab9d6b384ddb66f41d0.jpg",
      logo: "https://ar.wikipedia.org/wiki/%D9%85%D9%84%D9%81:%D8%B4%D8%B9%D8%A7%D8%B1_%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9.png",
    },
    {
      name: "جامعة عين شمس",
      cover: "https://www.asu.edu.eg/141090/2023/news/e06a534b627c87e42e2ac648c73a524a.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/ar/8/87/AinShamsUniv.png",
    },
    {
      name: "جامعة الإسكندرية",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrcWcVzphPvG3Z_rm6NikP82VT51DfMoygGzPRRWo6_g&s",
      logo: "https://scu.eg/storage/2023/05/%D8%A7%D9%84%D8%A7%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%87%D9%84%D9%8A%D8%A9.png",
    },
    {
      name: "جامعة المنصورة",
      cover: "https://arabsstudents.com/blogs/175855260748Jy2UeA2L",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd0qpL7NfYKJHiz5zoXqxoqAN6xLVk70cWueNGIPYnvQ&s=10",
    },
  
   
   
    {
      name: "جامعة بدر",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/ar/7/76/Badr_University_logo.png",
    },
   
    
    {
      name: "جامعة مصر للعلوم والتكنولوجيا",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/28/MUST_University_logo.png",
    },
    {
      name: "جامعة 6 أكتوبر",
      cover: "https://studyinegy.com/wp-content/uploads/2023/03/gamaaoctobersciencearts.webp",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqe-xBxjDWB_HX2YiNCDe3LEGOMh9yd7cZhdfNBGGGcA&s=10",
    },
    {
      name: "الجامعة الأمريكية بالقاهرة",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7b/AUC_Logo.png",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "العلاج الطبيعي",
    "الهندسة",
    "علوم الحاسب",
    "الأمن السيبراني",
    "الذكاء الاصطناعي",
    "إدارة الأعمال",
    "الإعلام",
    "القانون",
    "التجارة",
  ],

  requirements: [
    "الشهادة الثانوية موثقة",
    "صورة من الجواز ساري أو كرت لجوء",
    "شهادة الميلاد أو الرقم الوطني",
    "صورة شخصية خلفية بيضاء",
    "بيانات الوالدين (الاسم، تاريخ الميلاد، الجنسية)",
  ],

  grades:
    "تختلف شروط القبول حسب نوع الشهادة (الثانوية السودانية، السعودية، الإماراتية، القطرية، IGCSE، American Diploma، IB وغيرها) وحسب الجامعة والتخصص.",

  tuition:
    "رسوم التقديم على منصة ادرس في مصر 172 دولار أمريكي. بعد ظهور القبول المبدئي يتم سداد رسوم الوافدين 1922 دولار للشهادات الحديثة، وتضاف 300 دولار عن كل سنة تأخير للشهادات القديمة.",

  visa:
    "بعد الحصول على القبول النهائي يتم استكمال إجراءات السفر والدخول إلى مصر، ويقوم فريق UniGuide بمتابعة الطالب حتى الوصول وإكمال إجراءات التسجيل.",

  livingCost:
    "تكلفة المعيشة تتراوح بين 150 و300 دولار شهريًا حسب أسلوب الإنفاق، بينما يبدأ السكن الخاص من 100 دولار شهريًا ويبلغ متوسط السكن الجامعي حوالي 300 دولار شهريًا.",

  steps: [
    "اختيار الجامعة",
    "تجهيز المستندات",
    "التقديم وسداد رسوم المنصة (172 دولار)",
    "ظهور القبول المبدئي خلال 7 إلى 10 أيام",
    "سداد رسوم الوافدين خلال 14 يومًا",
    "تسليم المستندات الأصلية",
    "الحصول على الترشيح النهائي",
    "إذا كان الطالب خارج مصر يتم عمل توكيل رسمي لإكمال الإجراءات",
    "استخراج التأشيرة",
    "السفر إلى مصر",
    "الاستقبال من المطار",
    "ترتيب السكن",
    "إكمال إجراءات الجامعة",
  ],
    faq: [
    {
      question: "هل الجامعات المصرية معترف بها؟",
      answer:
        "معظم الجامعات المصرية حاصلة على اعتراف واعتماد دولي في إفريقيا والوطن العربي وأوروبا وأمريكا.",
    },
    {
      question: "ما هي الجنسيات التي يمكنها الحصول على تخفيض في الرسوم الدراسية؟",
      answer:
        "يمكن للطلاب السودانيين الحاصلين على شهادات سودانية أو عربية أو أجنبية الحصول على تخفيض يصل إلى 70% من الرسوم الدراسية، كما يمكن للطلاب الفلسطينيين والسوريين الحاصلين على شهاداتهم الثانوية من بلدانهم الحصول على تخفيض يصل إلى 50%.",
    },
    {
      question: "هل يمكن التحويل إلى الجامعات المصرية؟",
      answer:
        "نعم، يوجد نوعان من التحويل: التحويل من جامعة داخل مصر إلى جامعة أخرى داخل مصر، أو التحويل من جامعة خارج مصر إلى جامعة داخل مصر.",
    },
    {
      question: "كم تستغرق إجراءات القبول؟",
      answer:
        "تستغرق إجراءات القبول المبدئي عادة من 7 إلى 14 يومًا تقريبًا بعد اكتمال المستندات.",
    },
    {
      question: "ما هي إجراءات سحب الملف؟",
      answer:
        "تتم إجراءات سحب الملف من الجامعات المصرية عبر تقديم طلب الاستقالة إلكترونيًا من خلال منصة ادرس في مصر مع إرفاق بيان الدرجات وبيان الحالة وسداد رسوم الخدمة.",
    },
  ],
},

china: {
  slug: "china",

  name: "الدراسة في الصين",

  heroImage:
    "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600",

  overview:
    "أصبحت الصين واحدة من أبرز الوجهات التعليمية في العالم، حيث تستقطب آلاف الطلاب الدوليين سنويًا بفضل جامعاتها المتقدمة، واستثماراتها الكبيرة في التعليم والبحث العلمي، وبرامجها الأكاديمية المتنوعة.",

  whyStudy:
    "جامعات ذات تصنيف عالمي، اهتمام كبير بالتكنولوجيا والابتكار، مختبرات حديثة، برامج باللغة الإنجليزية والصينية، رسوم دراسية تنافسية، فرص للحصول على منح دراسية، بيئة دولية، واقتصاد عالمي يفتح آفاقًا واسعة للخريجين.",

  universities: [
    {
      name: "Tsinghua University",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      logo:
        "https://i.pinimg.com/1200x/d2/ea/84/d2ea84f1e6b31ad27ce1c527bfbc20f4.jpg",
    },
    {
      name: "Peking University",
      cover:
        "https://i.pinimg.com/736x/0d/f9/6c/0df96c82854fe1767d601a7f18969d77.jpg",
      logo:
        "https://i.pinimg.com/1200x/63/5c/ea/635cea4fcad14d703867284861a0376e.jpg",
    },
    {
      name: "Fudan University",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/8/8d/Fudan_University_Logo.svg",
    },
    {
      name: "Shanghai Jiao Tong University",
      cover:
        "https://i.pinimg.com/736x/4b/52/6d/4b526dc7ab9d069f31c46c494703ee86.jpg",
      logo:
        "https://i.pinimg.com/736x/26/78/95/26789578b0df62c214a6e641cc30d219.jpg",
    },
    {
      name: "Zhejiang University",
      cover:
        "https://i.pinimg.com/1200x/f4/47/03/f44703a28adc7a357245704345c0a0c4.jpg",
      logo:
        "https://i.pinimg.com/1200x/84/2b/74/842b74f61f2514f2089252c69e8c5c9d.jpg",
    },
    {
      name: "Wuhan University",
      cover:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/7/7f/Wuhan_University_logo.png",
    },
    {
      name: "Nanjing University",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/8/84/Nanjing_University_logo.svg",
    },
    {
      name: "Harbin Institute of Technology",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/5/5d/Harbin_Institute_of_Technology_logo.png",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "التمريض",
    "الهندسة المدنية",
    "الهندسة الميكانيكية",
    "الهندسة الكهربائية",
    "هندسة الذكاء الاصطناعي",
    "الهندسة الصناعية",
    "علوم الحاسب",
    "هندسة البرمجيات",
    "الذكاء الاصطناعي",
    "الأمن السيبراني",
    "علوم البيانات",
    "تحليل البيانات",
    "هندسة الشبكات",
    "إدارة الأعمال",
    "التسويق",
    "التجارة الدولية",
    "التمويل",
    "المحاسبة",
    "الاقتصاد",
    "الإعلام",
    "العلاقات الدولية",
    "اللغات",
    "التصميم",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية أو الجامعية باللغة الإنجليزية",
    "كشف الدرجات (للماجستير والدكتوراه)",
    "صور شخصية",
    "شهادة إجادة اللغة الإنجليزية إذا كانت مطلوبة",
    "أي مستندات إضافية حسب الجامعة",
  ],

  grades:
    "يعتمد القبول على نوع الشهادة والتخصص والجامعة، ويبدأ القبول في بعض الجامعات من 50٪.",

  tuition:
    "تبدأ الرسوم الدراسية من حوالي 1000 دولار سنويًا لبعض البرامج، خاصة البرامج التي تُدرس باللغة الصينية.",

  visa:
    "بعد الحصول على القبول يتم التقديم للحصول على التأشيرة الدراسية الصينية ثم استكمال إجراءات السفر.",

  livingCost:
    "المعيشة تبدأ من حوالي 100 دولار شهريًا حسب أسلوب الصرف، والسكن يبدأ من 5 إلى 117 دولارًا شهريًا حسب الجامعة والمدينة، بينما يبلغ التأمين الصحي حوالي 117 دولارًا سنويًا.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "التقديم",
    "الحصول على القبول",
    "التقديم على التأشيرة",
    "السفر",
    "الاستقبال من المطار",
    "إكمال إجراءات الجامعة",
    "استلام السكن",
    "استخراج الإقامة الدراسية",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، توفر العديد من الجامعات الصينية برامج باللغة الإنجليزية خاصة في التخصصات الطبية والهندسية وإدارة الأعمال.",
    },
    {
      question: "هل الجامعات الصينية معترف بها؟",
      answer:
        "يعتمد الاعتراف على الجامعة والتخصص والدولة التي ترغب في العمل أو استكمال الدراسة بها، لذلك ننصح بالتحقق من جهة الاعتراف في بلدك.",
    },
    {
      question: "هل توجد منح دراسية في الصين؟",
      answer:
        "نعم، توجد منح حكومية وجامعية، خاصة للطلاب الذين أكملوا السنة التحضيرية باللغة الصينية.",
    },
    {
      question: "هل تكاليف المعيشة مرتفعة؟",
      answer:
        "تختلف حسب المدينة، وتوجد خيارات متعددة تناسب مختلف الميزانيات.",
    },
    {
      question: "لماذا يختار الطلاب الدراسة في الصين؟",
      answer:
        "لأن الصين أصبحت من أهم الدول في مجالات التكنولوجيا والابتكار والذكاء الاصطناعي، وتمنح الطلاب فرصًا تعليمية ومهنية مميزة.",
    },
  ],
},

turkey: {
  slug: "turkey",

  name: "الدراسة في تركيا",

  heroImage:
    "https://www.turkeyuniversity.org/_next/image?url=https%3A%2F%2Fimtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com%2Feywb_aldrast_fy_trkya_63c7d59ab9_28e5ed967c.png&w=1920&q=75",

  overview:
    "تُعد تركيا واحدة من أكثر الوجهات الدراسية جذبًا للطلاب الدوليين، حيث تجمع بين جودة التعليم، والتنوع الثقافي، والموقع الجغرافي الذي يربط بين أوروبا وآسيا. وتضم مئات الجامعات الحكومية والخاصة التي تقدم برامج أكاديمية حديثة في مختلف التخصصات.",

  whyStudy:
    "جامعات معترف بها دوليًا، برامج باللغة الإنجليزية والتركية، موقع استراتيجي بين أوروبا وآسيا، بيئة ثقافية متنوعة وآمنة، رسوم دراسية مناسبة، فرص للحصول على منح، جامعات حديثة، وحياة طلابية نشطة.",

  universities: [
    {
      name: "Istanbul University",
      cover: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/43/Istanbul_University_logo.svg",
    },
    {
      name: "Middle East Technical University (METU)",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/48/Middle_East_Technical_University_logo.svg",
    },
    {
      name: "Hacettepe University",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/84/Hacettepe_University_logo.svg",
    },
    {
      name: "Ankara University",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZswL-z-4OGOMqn23J3mZZhOLXgU7Q38ZnQ0Z_sh_axp7Ox1FirvrDGE&s=10",
      logo: "https://imtiyaz-cms-media-eu.s3.eu-central-1.amazonaws.com/Ankara_Ueniversity_imtiyaz_92b422d1bf.png",
    },
    {
      name: "Istanbul Medipol University",
      cover: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/6/6c/Medipol_University_logo.png",
    },
    {
      name: "Bahçeşehir University",
      cover: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5b/Bahcesehir_University_logo.png",
    },
    {
      name: "Istanbul Aydın University",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b6/Istanbul_Aydin_University_logo.png",
    },
    {
      name: "Altınbaş University",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/74/Altinbas_University_logo.png",
    },
    {
      name: "Istinye University",
      cover: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2c/Istinye_University_logo.png",
    },
    {
      name: "Üsküdar University",
      cover: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0b/Uskudar_University_logo.png",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "العلاج الطبيعي",
    "التمريض",
    "الهندسة المدنية",
    "الهندسة المعمارية",
    "الهندسة الميكانيكية",
    "الهندسة الكهربائية والإلكترونية",
    "الهندسة الصناعية",
    "علوم الحاسب",
    "هندسة البرمجيات",
    "الأمن السيبراني",
    "الذكاء الاصطناعي",
    "نظم المعلومات",
    "إدارة الأعمال",
    "التسويق",
    "التجارة الدولية",
    "التمويل",
    "المحاسبة",
    "الإعلام",
    "القانون",
    "العلاقات الدولية",
    "التصميم",
    "الاقتصاد",
    "علم النفس",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الدراسية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة لغة إذا كانت مطلوبة",
    "أي مستندات إضافية حسب الجامعة",
  ],

  grades:
    "تعتمد شروط القبول على نوع الشهادة، والتخصص المطلوب، والجامعة، ومتطلبات البرنامج.",

  tuition:
    "تختلف الرسوم الدراسية حسب نوع الجامعة (حكومية أو خاصة)، والتخصص، ولغة الدراسة. تواصل مع UniGuide لمعرفة أحدث الرسوم.",

  visa:
    "بعد الحصول على القبول الجامعي يتم التقديم للحصول على التأشيرة الدراسية التركية ثم استكمال إجراءات السفر.",

  livingCost:
    "تشمل تكاليف المعيشة السكن، والطعام، والمواصلات، والإنترنت، والتأمين الصحي، والمصروفات الشخصية، وتختلف حسب المدينة ونمط الحياة.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "التقديم",
    "الحصول على القبول",
    "التقديم على التأشيرة",
    "السفر",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل يمكن الدراسة باللغة الإنجليزية؟",
      answer:
        "نعم، تقدم العديد من الجامعات التركية برامج باللغة الإنجليزية في مختلف التخصصات.",
    },
    {
      question: "هل الجامعات التركية معترف بها؟",
      answer:
        "يعتمد الاعتراف على الجامعة والتخصص والدولة التي ترغب في العمل أو استكمال الدراسة بها.",
    },
    {
      question: "هل توجد منح دراسية؟",
      answer:
        "نعم، تتوفر منح حكومية وجامعية للطلاب الدوليين وفقًا لشروط كل برنامج.",
    },
    {
      question: "هل تكاليف المعيشة مرتفعة؟",
      answer:
        "تختلف حسب المدينة ونمط الحياة، وتوجد خيارات متنوعة تناسب مختلف الميزانيات.",
    },
    {
      question: "لماذا يختار الطلاب الدراسة في تركيا؟",
      answer:
        "لأن تركيا توفر تعليماً عالي الجودة، وجامعات حديثة، وبيئة دولية، مع إمكانية الدراسة باللغة الإنجليزية أو التركية.",
    },
  ],
},

russia: {
  slug: "russia",

  name: "الدراسة في روسيا",

  heroImage:
    "https://i.pinimg.com/736x/ef/71/24/ef7124a2d2c7c4d2c7ed992a6e9b9066.jpg",

  overview:
    "تُعد روسيا واحدة من أبرز الوجهات التعليمية في العالم، حيث تضم مئات الجامعات التي تستقبل آلاف الطلاب الدوليين سنويًا، وتتميز بنظام تعليمي قوي خاصة في التخصصات الطبية والهندسية والعلمية، مع رسوم دراسية وتكاليف معيشة مناسبة.",

  whyStudy:
    "جامعات ذات تاريخ أكاديمي عريق، برامج قوية في الطب والهندسة والعلوم، رسوم مناسبة، تكاليف معيشة منخفضة، شهادات معترف بها حسب الجامعة والتخصص، مختبرات متطورة، مجتمع طلابي دولي، وفرص للبحث العلمي.",

  universities: [
    {
      name: "Lomonosov Moscow State University",
      cover:
        "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Moscow_State_University_logo.svg",
    },
    {
      name: "Sechenov First Moscow State Medical University",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/6/63/Sechenov_University_logo.png",
    },
    {
      name: "Pirogov Russian National Research Medical University",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/4/48/Pirogov_University_logo.png",
    },
    {
      name: "Peoples' Friendship University of Russia (RUDN)",
      cover:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/5/5d/RUDN_University_logo.png",
    },
    {
      name: "Kazan Federal University",
      cover:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/e/e4/Kazan_Federal_University_logo.png",
    },
    {
      name: "Saint Petersburg State University",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/8/86/Saint_Petersburg_State_University_logo.png",
    },
    {
      name: "Tomsk State University",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/5/57/Tomsk_State_University_logo.png",
    },
    {
      name: "Novosibirsk State University",
      cover:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/8/82/Novosibirsk_State_University_logo.png",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "الطب البيطري",
    "الهندسة المدنية",
    "الهندسة الميكانيكية",
    "الهندسة الكهربائية",
    "هندسة البترول",
    "هندسة الطيران",
    "الهندسة النووية",
    "علوم الحاسب",
    "هندسة البرمجيات",
    "الأمن السيبراني",
    "الذكاء الاصطناعي",
    "علوم البيانات",
    "إدارة الأعمال",
    "الاقتصاد",
    "العلاقات الدولية",
    "القانون",
    "الإعلام",
    "اللغات",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الثانوية",
    "كشف الدرجات",
    "صور شخصية",
    "ترجمة وتصديق المستندات حسب متطلبات الجامعة",
    "أي مستندات إضافية تطلبها الجامعة",
  ],

  grades:
    "تعتمد شروط القبول على الجامعة، والتخصص، ولغة الدراسة، وقد تتطلب بعض البرامج سنة تحضيرية لدراسة اللغة الروسية.",

  tuition:
    "تبدأ الرسوم الدراسية من حوالي 1600 دولار سنويًا، وتختلف حسب الجامعة والتخصص ولغة الدراسة.",

  visa:
    "بعد الحصول على القبول تصدر الجامعة الدعوة الدراسية، ثم يتم التقديم للحصول على التأشيرة الروسية واستكمال إجراءات السفر.",

  livingCost:
    "تكلفة السكن الجامعي حوالي 20 دولارًا شهريًا، والتأمين الصحي حوالي 50 دولارًا سنويًا، بينما تتراوح المعيشة بين 100 و200 دولار شهريًا حسب أسلوب الإنفاق.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "ترجمة وتصديق الأوراق",
    "الحصول على القبول",
    "إصدار الدعوة الدراسية",
    "التقديم على التأشيرة",
    "السفر",
    "الاستقبال من المطار",
    "استلام السكن",
    "إكمال إجراءات الجامعة",
    "استخراج الإقامة الدراسية",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل الدراسة في روسيا معترف بها؟",
      answer:
        "يعتمد الاعتراف على الجامعة والتخصص والدولة التي ترغب في العمل أو استكمال الدراسة بها، لذلك ننصح بالتحقق من جهة الاعتراف في بلدك.",
    },
    {
      question: "هل يجب تعلم اللغة الروسية؟",
      answer:
        "إذا كنت ستدرس باللغة الروسية فغالبًا ستحتاج إلى سنة تحضيرية، بينما توجد بعض البرامج باللغة الإنجليزية.",
    },
    {
      question: "كم تستغرق إجراءات القبول؟",
      answer:
        "غالبًا يتم إصدار القبول خلال حوالي 5 أيام بعد اكتمال المستندات، ثم تستغرق إجراءات الدعوة والتأشيرة حوالي 45 يومًا.",
    },
    {
      question: "هل السكن الجامعي متوفر؟",
      answer:
        "نعم، توفر معظم الجامعات الروسية سكنًا جامعيًا للطلاب الدوليين برسوم تختلف حسب الجامعة.",
    },
  ],
},

india: {
  slug: "india",

  name: "الدراسة في الهند",

  heroImage:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600",

  overview:
    "تُعد الهند واحدة من أكبر الوجهات التعليمية في آسيا، وتتميز بقوة برامجها في الطب والهندسة وعلوم الحاسب وإدارة الأعمال، مع رسوم دراسية تنافسية وتكاليف معيشة مناسبة للطلاب الدوليين.",

  whyStudy:
    "جامعات ومعاهد ذات سمعة أكاديمية متميزة، قوة كبيرة في الطب والهندسة وتكنولوجيا المعلومات، برامج أكاديمية متنوعة، رسوم دراسية مناسبة، تكاليف معيشة منخفضة نسبيًا، بيئة متعددة الثقافات، وفرص جيدة للابتكار وريادة الأعمال.",

  universities: [
    {
      name: "Indian Institute of Technology (IIT)",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/5/5d/IIT_Bombay_Logo.svg",
    },
    {
      name: "Indian Institute of Science (IISc)",
      cover: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/70/Indian_Institute_of_Science_Logo.svg",
    },
    {
      name: "All India Institute of Medical Sciences (AIIMS)",
      cover: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/09/All_India_Institute_of_Medical_Sciences_Logo.svg",
    },
    {
      name: "Delhi University",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/32/Delhi_University_Logo.svg",
    },
    {
      name: "Jawaharlal Nehru University",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/0/05/Jawaharlal_Nehru_University_Logo.png",
    },
    {
      name: "Manipal Academy of Higher Education",
      cover: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/2f/Manipal_Academy_of_Higher_Education_logo.png",
    },
    {
      name: "Vellore Institute of Technology",
      cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fb/Vellore_Institute_of_Technology_seal.svg",
    },
    {
      name: "Amity University",
      cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/4e/Amity_University_logo.svg",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "التمريض",
    "العلاج الطبيعي",
    "الهندسة المدنية",
    "الهندسة الميكانيكية",
    "الهندسة الكهربائية",
    "هندسة الذكاء الاصطناعي",
    "علوم الحاسب",
    "هندسة البرمجيات",
    "الأمن السيبراني",
    "علوم البيانات",
    "الذكاء الاصطناعي",
    "تكنولوجيا المعلومات",
    "إدارة الأعمال",
    "المحاسبة",
    "التمويل",
    "التسويق",
    "القانون",
    "الإعلام",
  ],

  requirements: [
    "جواز سفر ساري",
    "الشهادة الدراسية",
    "كشف الدرجات",
    "صور شخصية",
    "أي مستندات إضافية تطلبها الجامعة",
  ],

  grades:
    "تعتمد شروط القبول على نوع الشهادة الدراسية، والتخصص المطلوب، والجامعة التي يرغب الطالب في الدراسة بها.",

  tuition:
    "تختلف الرسوم الدراسية حسب الجامعة والتخصص ونوع البرنامج. تواصل مع UniGuide لمعرفة أحدث الرسوم واختيار الجامعة المناسبة.",

  visa:
    "بعد الحصول على القبول الجامعي يتم التقديم على التأشيرة الدراسية الهندية واستكمال إجراءات السفر.",

  livingCost:
    "تتميز الهند بانخفاض تكاليف المعيشة مقارنة بالعديد من الدول، وتختلف حسب المدينة ونمط حياة الطالب.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "التقديم على الجامعة",
    "الحصول على القبول",
    "استخراج التأشيرة",
    "السفر إلى الهند",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل الدراسة في الهند باللغة الإنجليزية؟",
      answer:
        "نعم، تُدرَّس معظم البرامج الجامعية خاصة الطب والهندسة وعلوم الحاسب وإدارة الأعمال باللغة الإنجليزية.",
    },
    {
      question: "هل الجامعات الهندية معترف بها؟",
      answer:
        "يعتمد الاعتراف على الجامعة والتخصص والدولة التي ترغب في العمل أو استكمال الدراسة بها.",
    },
    {
      question: "هل تكاليف الدراسة والمعيشة مناسبة؟",
      answer:
        "نعم، توفر الهند خيارات متنوعة تناسب مختلف الميزانيات سواء في الرسوم الدراسية أو تكاليف المعيشة.",
    },
    {
      question: "هل يمكن للطلاب الدوليين التقديم؟",
      answer:
        "نعم، تستقبل الجامعات الهندية طلابًا دوليين من مختلف الجنسيات.",
    },
  ],
},
rwanda: {
  slug: "rwanda",

  name: "الدراسة في رواندا",

  heroImage:
    "https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?w=1600",

  overview:
    "تُعد رواندا من أسرع الدول الإفريقية نموًا في قطاع التعليم، حيث توفر جامعات حديثة وبرامج أكاديمية باللغة الإنجليزية، مع بيئة آمنة وتكاليف دراسة ومعيشة مناسبة للطلاب الدوليين.",

  whyStudy:
    "تتميز رواندا بالاستقرار والأمان، والجامعات الحديثة، والتعليم باللغة الإنجليزية، ورسوم دراسية مناسبة، وانخفاض تكاليف المعيشة، بالإضافة إلى اهتمام الحكومة بتطوير التعليم والبحث العلمي، مما يجعلها وجهة مميزة للطلاب الدوليين.",

  universities: [
    {
      name: "University of Rwanda",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/7/72/University_of_Rwanda_logo.png",
    },
    {
      name: "Kigali Independent University (ULK)",
      cover:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/8/86/ULK_Logo.png",
    },
    {
      name: "Adventist University of Central Africa (AUCA)",
      cover:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/f/f5/Adventist_University_of_Central_Africa_logo.png",
    },
    {
      name: "Carnegie Mellon University Africa",
      cover:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/4/45/Carnegie_Mellon_University_wordmark.svg",
    },
    {
      name: "Mount Kenya University Rwanda",
      cover:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/en/6/68/Mount_Kenya_University_logo.png",
    },
    {
      name: "Institute of Applied Sciences Ruhengeri (INES)",
      cover:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/INES_Ruhengeri_logo.png",
    },
  ],

  majors: [
    "الطب البشري",
    "طب الأسنان",
    "الصيدلة",
    "التمريض",
    "المختبرات الطبية",
    "الهندسة المدنية",
    "الهندسة الكهربائية",
    "الهندسة الميكانيكية",
    "علوم الحاسب",
    "هندسة البرمجيات",
    "الذكاء الاصطناعي",
    "الأمن السيبراني",
    "علوم البيانات",
    "إدارة الأعمال",
    "المحاسبة",
    "الاقتصاد",
    "التمويل",
    "التسويق",
    "القانون",
    "الإعلام",
    "الزراعة",
    "التربية",
  ],

  requirements: [
    "جواز سفر ساري المفعول",
    "الشهادة الدراسية",
    "كشف الدرجات",
    "صور شخصية",
    "شهادة الميلاد",
    "أي مستندات إضافية تطلبها الجامعة",
  ],

  grades:
    "تختلف معدلات القبول حسب الجامعة والتخصص، ويتم تقييم كل طلب وفقاً للشهادة الدراسية والبرنامج المطلوب.",

  tuition:
    "تعتبر الرسوم الدراسية في رواندا منخفضة مقارنة بالعديد من الدول، وتختلف حسب الجامعة والتخصص والمرحلة الدراسية.",

  visa:
    "بعد الحصول على القبول الجامعي يتم استخراج التأشيرة الدراسية الرواندية واستكمال إجراءات السفر والإقامة.",

  livingCost:
    "تكاليف المعيشة في رواندا مناسبة للطلاب الدوليين، وتشمل السكن والطعام والمواصلات بأسعار معقولة مقارنة بالعديد من الدول.",

  steps: [
    "اختيار الجامعة",
    "اختيار التخصص",
    "تجهيز المستندات",
    "التقديم على الجامعة",
    "الحصول على القبول",
    "التقديم على التأشيرة",
    "السفر إلى رواندا",
    "بدء الدراسة",
  ],

  faq: [
    {
      question: "هل الدراسة في رواندا باللغة الإنجليزية؟",
      answer:
        "نعم، تعتمد معظم الجامعات الرواندية اللغة الإنجليزية كلغة أساسية للتدريس.",
    },
    {
      question: "هل الجامعات الرواندية معترف بها؟",
      answer:
        "توجد جامعات معترف بها دولياً، ويعتمد الاعتراف على الجامعة والتخصص والدولة التي ترغب في معادلة الشهادة بها.",
    },
    {
      question: "هل تكاليف الدراسة مناسبة؟",
      answer:
        "نعم، تعتبر رواندا من الدول ذات الرسوم الدراسية وتكاليف المعيشة المناسبة للطلاب الدوليين.",
    },
    {
      question: "هل يمكن للطلاب الدوليين التقديم؟",
      answer:
        "نعم، تستقبل الجامعات الرواندية آلاف الطلاب الدوليين سنوياً من مختلف الدول.",
    },
  ],
},


};