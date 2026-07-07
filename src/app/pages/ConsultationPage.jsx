// src/app/pages/CoursesPage.tsx
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function CoursesPage() {
  // الداتا الخاصة بالكورسات والدورات التدريبية
  const courses = [
    {
      id: 1,
      title: "كورسات  ",
      description: [
        "دورات  معتمدة  ",
        "مواد تعليمية ",
        "شهادات معترف ",
      ],
    },
    {
      id: 2,
      title: " تطوير ",
      description: [
        "تنمية المهارات  ",
        "إدارة الوقت  ",
        "مهارات القيادة  ",
      ],
    },
    {
      id: 3,
      title: "برامج   ",
      description: [
        " اللغة الإنجليزية",
        " للقبول الجامعي",
        "ارشادات وإرشادات  ",
      ],
    },
    {
      id: 4,
      title: "  وتوثيق ",
      description: [
        "تحضير  الشهادات ",
        " توثيق شهادات",
        "شهادات ثامن وثانوي",
      ],
    },
  ];

  const steps = [
    {
      title: "التقييم الأولي",
      icon: "📊",
      desc: "نقوم بتحليل مؤهلاتك وأهدافك لتحديد المسار المناسب لك.",
      points: [
        "مراجعة المؤهلات",
        "تحليل الأهداف",
        "تحديد الاهتمامات",
        "تقييم نقاط القوة",
      ],
    },
    {
      title: "اختيار التخصص",
      icon: "🎯",
      desc: "نساعدك في اختيار التخصص الأنسب لمستقبلك المهني.",
      points: [
        "اقتراح تخصصات مناسبة",
        "مطابقة سوق العمل",
        "توضيح فرص المستقبل",
      ],
    },
    {
      title: "اختيار الجامعة",
      icon: "🏫",
      desc: "نرشح لك أفضل الجامعات المحلية والدولية.",
      points: [
        "جامعات معتمدة",
        "مقارنة التكاليف",
        "تسهيل القبول",
      ],
    },
    {
      title: "بدء التقديم",
      icon: "🚀",
      desc: "نساعدك في خطوات التقديم حتى القبول النهائي.",
      points: [
        "تجهيز الأوراق",
        "التقديم الرسمي",
        "متابعة القبول",
      ],
    },
  ];


  const [current, setCurrent] = useState(0);

  const step = steps[current];
  // الصور المتغيرة في الخلفية
  const images = [
    "https://i.pinimg.com/736x/58/05/98/580598a49346ea48354bdba4654e3b7a.jpg",
    "https://unitededucation.com/_next/image?url=img%2F%D9%85%D8%AF%D8%A7%D8%B1%D8%B3%D9%86%D8%A7-09-2.webp&w=3840&q=75",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // تغيير الصورة كل 20 ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 20000);
    return () => clearInterval(interval);
  }, []);



  return (
    <div className="min-h-screen relative">
      {/* سهم الخروج ثابت */}
     

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fbf7] via-white to-white py-24">

        {/* الخلفية */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#154734]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0d2b5e]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ================= النص ================= */}

            <div>

              <span className="inline-block bg-[#154734]/10 text-[#154734] px-5 py-2 rounded-full font-semibold">
                خدماتنا 
              </span>

              <h2 className="text-[33px] lg:text-6xl font-black leading-tight mt-6 text-[#0d2b5e]">

                استشارات دراسية
                <br />



              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">

                نوفر لك استشارات أكاديمية متخصصة لمساعدتك في اختيار الجامعة
                المناسبة، والتخصص الأفضل، مع متابعة كاملة في جميع خطوات
                التسجيل والقبول حتى تبدأ رحلتك التعليمية بثقة.

              </p>

              {/* الأزرار */}

              <div className="flex flex-wrap gap-2 mt-10">

                <a
                  href="https://wa.me/"
                  className="bg-[#154734] text-white px-4 py-2 rounded-xl font-bold hover:bg-[#0d2b5e] transition"
                >
                  احجز استشارتك
                </a>

                <Link
                  to="/services"
                  className="border-2 border-[#154734] text-[#154734] px-4 py-2 rounded-xl font-bold hover:bg-[#154734] hover:text-white transition"
                >
                  جميع الخدمات
                </Link>

              </div>

              {/* المميزات */}

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-500 mt-8">

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  <span>خدمة</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  <span>خبراء </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div>
                  <span>متابعة حتى القبول</span>
                </div>

              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="space-y-6 md:space-y-8">

                {/* الصورة */}
                <div className="relative">

                  <div className="w-full h-72 md:h-96 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/drxozhuee/image/upload/v1759688351/01_Consulting_the_Expert_Insurance_Agency_nqfmm2.png"
                      alt="استشارة أكاديمية"
                      className="w-full h-full object-contain p-6"
                    />
                  </div>

                  {/* البطاقة الصغيرة */}
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5">

                    <div className="text-center">

                      <h2 className="text-3xl font-black text-[#154734]">
                        100%
                      </h2>

                      <p className="text-gray-500 font-medium mt-1">
                        استشارة مجانية
                      </p>

                    </div>

                  </div>

                </div>

                {/* الإحصائيات */}

                <div className="grid grid-cols-3 gap-4">

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md py-6 text-center hover:-translate-y-2 duration-300">

                    <h2 className="text-3xl font-black text-[#154734]">
                      +5000
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      استشارة
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md py-6 text-center hover:-translate-y-2 duration-300">

                    <h2 className="text-3xl font-black text-[#154734]">
                      +7
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      سنوات خبرة
                    </p>

                  </div>

                  <div className="bg-white rounded-2xl border border-gray-100 shadow-md py-6 text-center hover:-translate-y-2 duration-300">

                    <h2 className="text-3xl font-black text-[#154734]">
                      24/7
                    </h2>

                    <p className="text-gray-500 text-sm mt-2">
                      دعم مستمر
                    </p>

                  </div>

                </div>

              </div>
            </div>



            {/* ================= الصورة ================= */}



          </div>

          {/* الإحصائيات */}



        </div>

      </section>

      {/* محتوى الصفحة */}

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">

          {/* العنوان */}
          <div className="text-center mb-14">
            <span className="bg-[#154734]/10 text-[#154734] px-5 py-2 rounded-full text-sm font-bold">
              رحلتك معنا
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-5 text-[#0d2b5e]">
              من البداية حتى القبول
            </h2>

            <p className="text-gray-600 mt-4">
              خطوات بسيطة توصلّك لهدفك الأكاديمي
            </p>
          </div>

          {/* الكارد */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid lg:grid-cols-2 gap-10">

            {/* اليسار */}
            <div>
              <div className="text-6xl">{step.icon}</div>

              <h3 className="text-3xl font-bold mt-4 text-[#154734]">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4">{step.desc}</p>

              {/* أزرار */}
              <div className="flex gap-4 mt-8">
                <button
                  disabled={current === 0}
                  onClick={() => setCurrent((p) => p - 1)}
                  className="px-5 py-2 rounded-lg bg-gray-100 disabled:opacity-50"
                >
                  السابق
                </button>

                <button
                  disabled={current === steps.length - 1}
                  onClick={() => setCurrent((p) => p + 1)}
                  className="px-5 py-2 rounded-lg bg-[#154734] text-white"
                >
                  التالي
                </button>
              </div>
            </div>

            {/* اليمين */}
            <div>
              <h4 className="text-xl font-bold mb-5 text-[#0d2b5e]">
                ما نقدمه في هذه المرحلة
              </h4>

              <ul className="space-y-4">
                {step.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 bg-green-50 p-3 rounded-xl"
                  >
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* النقاط */}
          <div className="flex justify-center gap-2 mt-10">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition ${i === current
                  ? "bg-[#154734] scale-125"
                  : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

        </div>
      </section>
      <div className="container mx-auto px-4 py-1 bg-gradient-to-b space-y-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#f2f9f5] p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-[#154734] mb-4">
                {course.title}
              </h2>
              <ul className="list-decimal list-inside text-gray-700 space-y-1">
                {course.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>









      {/* ======= زر واتساب عائم ======= */}
      <a
        href="https://wa.me/201000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-10 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>


    </div>


  );
}