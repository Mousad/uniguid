import { Link } from "react-router-dom";
import { useState } from "react"; 

import {
  Hospital,
   ArrowRight,
  GraduationCap,
  FileCheck,
  CheckCircle,
  Stethoscope,
    
  
  BookOpen,
  Microscope,
} from "lucide-react";

export default function MedicalInternshipPage() {
    
  const documents = [
    "صورة جواز السفر",
    "شهادة التخرج",
    "كشف الدرجات",
    "السيرة الذاتية (CV)",
    "صور شخصية حديثة",
    "شهادة الامتياز (إن وجدت)",
    "شهادة اللغة (إن وجدت)",
  ];
  const eligibility = [
  {
    title: "خريجو كليات الطب",
    icon: GraduationCap,
  },
  {
    title: "أطباء الامتياز",
    icon: Stethoscope,
  },
  {
    title: "الراغبون في الماجستير",
    icon: BookOpen,
  },
  {
    title: "الراغبون في الدكتوراه",
    icon: Microscope,
  },
];

  const universities = [
    {
      name: "جامعة القاهرة",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GAfT2rnLrvIYYgrKJrvKRQfEFz3tYnyzIXfb8MZquZ3ZNhVXbDilMOk&s=10",
    },
    {
      name: "جامعة عين شمس",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS17qp05mPdW9YtKUvzEHV7cyAH7NFsifIH18aBNjwvn55lA570O4jPx-c&s=10",
    },
    {
      name: "جامعة الإسكندرية",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPytt76a3k91-EZcWdc3F7ycJv6RuLaOrOOxNA0YKohg&s=10",
    },
    {
      name: "جامعة المنصورة",
      image:
        "https://www.nmu.edu.eg/frontend/assets/img/news/5tr49l9IkA5IYLNCPaZmrjA7cQlOETwUWLdh46C8.jpg",
    },
  ];
const [openFaq, setOpenFaq] = useState(null);  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section
        className="relative h-[400px] bg-white bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/1d/68/04/1d68041835324a83583595071e6eb95c.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#154734]/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-white">

         

          <h1 className="text-[26px] md:text-6xl font-bold mt-14 leading-tight">
            الامتياز الطبي
            <br />
            والدراسات العليا
          </h1>

          <p className="mt-3 max-w-2xl text-lg leading-9 text-white/90">
            نساعد الأطباء في التقديم لبرامج الامتياز الطبي
            والدراسات العليا داخل أفضل الجامعات والمستشفيات،
            بدايةً من تجهيز الملف وحتى الحصول على القبول.
          </p>

          <Link
            to="/scholarship-application?service=medical"
            className="inline-flex items-center gap-3 mt-7 bg-white text-[#154734] px-10 py-2 rounded-[10px] font-bold hover:scale-105 transition"
          >
            ابدأ التقديم 
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>
            {/* نبذة عن الخدمة */}
      <section className="container mx-auto p-3 bg-white py-8">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
          

            <h2 className="text-[26px] font-bold text-[#0d2b5e] mt-3 mb-3">
              ما هو برنامج الامتياز الطبي؟
            </h2>

            <p className="text-gray-600 leading-9 text-lg">
              يعد برنامج الامتياز الطبي المرحلة العملية التي تلي التخرج من كلية
              الطب، حيث يكتسب الطبيب الخبرة السريرية داخل المستشفيات التعليمية.
              كما نوفر خدمات التقديم للدراسات العليا (الماجستير والدكتوراه)
              للأطباء الراغبين في تطوير مسيرتهم المهنية داخل الجامعات المعتمدة.
            </p>

          </div>

          <div>
            <img
              src="https://i.pinimg.com/1200x/e7/04/92/e70492c4a30340d0431b7fa459343645.jpg"
              alt="Medical"
              className="rounded-[6px] shadow-xl"
            />
          </div>

        </div>

      </section>


      {/* لماذا UniGuide */}
      <section className="bg-white py-8">

        <div className="container mx-auto px-2">

          <div className="text-center mb-10">

            <span className="text-[#154734] font-semibold">
              لماذا نحن؟
            </span>

            <h2 className="text-4xl font-bold mt-3">
              لماذا تختار UniGuide؟
            </h2>

          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-gray-50 rounded-[9px] p-4 text-center shadow hover:shadow-xl transition">

              <Hospital
                size={35}
                className="mx-auto text-[#154734] mb-3"
              />

              <h3 className="font-bold text-[18px] mb-3">
                جامعات معتمدة
              </h3>

              <p className="text-gray-600">
                نتعامل مع جامعات ومستشفيات معترف بها دولياً.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-4 text-center shadow hover:shadow-xl transition">

              <FileCheck
                size={35}
                className="mx-auto text-[#154734] mb-3"
              />

              <h3 className="font-bold text-[18px]  mb-3">
                تجهيز الملف
              </h3>

              <p className="text-gray-600">
                مراجعة جميع المستندات قبل إرسالها للجامعة.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-4 text-center shadow hover:shadow-xl transition">

              <GraduationCap
                size={35}
                className="mx-auto text-[#154734] mb-3"
              />

              <h3 className="font-bold text-[18px]  mb-3">
                قبول أسرع
              </h3>

              <p className="text-gray-600">
                متابعة مستمرة مع الجامعات حتى صدور خطاب القبول.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-4 text-center shadow hover:shadow-xl transition">

              <CheckCircle
                size={35}
                className="mx-auto text-[#154734] mb-3"
              />

              <h3 className="font-bold text-[18px]  mb-3">
                دعم كامل
              </h3>

              <p className="text-gray-600">
                من بداية التقديم وحتى السفر والاستقرار.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* من يمكنه التقديم */}
    {/* من يمكنه التقديم */}
<section className="container mx-auto px-3 py-8 bg-white">

  <div className="text-center mb-6">

    <h2 className="text-4xl font-bold mt-1">
      من يمكنه التقديم؟
    </h2>

    <p className="text-gray-600 mt-4">
      البرامج متاحة للفئات التالية
    </p>

  </div>

  {eligibility.map((item, index) => (

    <div
      key={item.title}
      className={`flex ${
        index % 2 === 0
          ? "justify-start"
          : "justify-end"
      } mb-8`}
    >

      <div
        className={`group bg-white rounded-[3px] border border-gray-200
        shadow-md hover:shadow-2xl transition-all duration-300
        hover:-translate-y-1
        w-full md:w-[75%] lg:w-[70%]
        flex items-center gap-2 p-3
        ${
          index % 2 !== 0
            ? "flex-row-reverse"
            : ""
        }`}
      >

        {/* Icon */}

        <div
          className="w-13 h-13 rounded-[4px]
          border-2 border-[#154734]
          bg-[#f3faf7]
          flex items-center justify-center
          flex-shrink-0
          group-hover:bg-[#154734]
          transition"
        >

          <item.icon
            size={30}
            strokeWidth={2.2}
            className="text-[#154734] group-hover:text-white transition"
          />

        </div>

        {/* Content */}

        <div className="flex-1">

          <h3 className="text-2xl font-bold text-[#0d2b5e] mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-8">
            {item.description}
          </p>

        </div>

      </div>

    </div>

  ))}

</section>


      {/* المستندات المطلوبة */}
      <section className="bg-white py-8">

        <div className="container mx-auto px-3">

          <div className="text-center mb-10">

          

            <h2 className="text-4xl font-bold mt-2">
              المستندات المطلوبة
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">

            {documents.map((doc) => (

              <div
                key={doc}
                className="flex items-center gap-4 bg-[#f8fafc] border rounded-[10px] p-3 hover:border-[#154734] transition"
              >

                <div className="w-8 h-8 rounded-full bg-[#154734] flex items-center justify-center text-white font-bold">
                  ✓
                </div>

                <span className="font-semibold text-gray-700">
                  {doc}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* الجامعات */}
      <section className="container mx-auto px-2 py-8 bg-white">

        <div className="text-center mb-10">

          <span className="text-[#154734] font-semibold">
            Universities
          </span>

          <h2 className="text-4xl font-bold mt-2">
            الجامعات المتاحة
          </h2>

        </div>

        <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-3">

          {universities.map((uni) => (

            <div
              key={uni.name}
              className="bg-white rounded- overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={uni.image}
                alt={uni.name}
                className="h-38 w-full object-cover"
              />

              <div className="p-2">

                <h3 className="font-bold text-[13px] text-[#0d2b5e] text-center">
                  {uni.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* خطوات التقديم */}
      <section className=" py-8 bg-white">

        <div className="container mx-auto px-4">

          <div className="text-center mb-14">

            

            <h2 className="text-4xl font-bold mt-3">
              خطوات التقديم
            </h2>

          </div>

          <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-3">

            {[
              "إرسال المستندات",
              "مراجعة الملف",
              "اختيار الجامعة",
              "التقديم الرسمي",
              "الحصول على القبول",
              "استخراج التأشيرة ",
            ].map((step, index) => (

              <div
                key={step}
                className="bg-[#f8fafc] rounded-[10px] p-5 text-center shadow hover:shadow-xl transition"
              >

                <div className="w-7 h-7 rounded-full bg-[#154734] text-white flex items-center justify-center mx-auto text-[15px] font-bold mb-3">
                  {index + 1}
                </div>

                <h3 className="font-bold text-[14px]">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* الأسئلة الشائعة */}

      <section className="container mx-auto px-2 py-8 bg-white">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            الأسئلة الشائعة
          </h2>

        </div>

        <div className="max-w-4xl mx-auto space-y-5">

          {[
            {
              q: "هل يمكن التقديم قبل التخرج؟",
              a: "يعتمد ذلك على شروط الجامعة، ويمكن لفريق UniGuide مساعدتك في معرفة الجامعات التي تسمح بذلك.",
            },
            {
              q: "هل الامتياز معترف به؟",
              a: "نعم، يتم التقديم إلى جامعات ومستشفيات معترف بها.",
            },
            {
              q: "هل تساعدون في استخراج التأشيرة؟",
              a: "نعم، نقدم الدعم الكامل حتى السفر.",
            },
          ].map((item, index) => {

            const isOpen = openFaq === index;

            return (

              <div
                key={index}
                className=" rounded-[1px]  border overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-3"
                >

                  <h3 className="font-bold text-[17px] text-right">
                    {item.q}
                  </h3>

                  <span
                    className={`transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>

                </button>

                {isOpen && (

                  <div className="px-6 pb-6 text-gray-600 leading-8">

                    {item.a}

                  </div>

                )}

              </div>

            );

          })}

        </div>

      </section>


      {/* CTA */}

      <section
        className="relative py-8 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600')",
        }}
      >

        <div className="absolute inset-0 bg-[#154734]/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">

          <h2 className="text-[19px] font-bold">
            ابدأ رحلتك الطبية اليوم
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-[15px] leading-9">

            فريق UniGuide جاهز لمساعدتك في التقديم
            والحصول على القبول الجامعي ومتابعة جميع
            الإجراءات حتى السفر.

          </p>

          <Link
            to="/scholarship-application?service=medical"
            className="inline-block mt-7 bg-white text-[#154734] px-10 py-2 rounded-[10px] font-bold hover:scale-105 transition"
          >
            قدم الآن
          </Link>

        </div>

      </section>

    </main>
  );
}