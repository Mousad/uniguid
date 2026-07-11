import { Link } from "react-router-dom";
import { useState } from "react"; 

import {
  Hospital,
   ArrowRight,
  GraduationCap,
  FileCheck,
  CheckCircle,
  Stethoscope,
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

  const universities = [
    {
      name: "جامعة القاهرة",
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
    },
    {
      name: "جامعة عين شمس",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900",
    },
    {
      name: "جامعة الإسكندرية",
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900",
    },
    {
      name: "جامعة المنصورة",
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
    },
  ];
const [openFaq, setOpenFaq] = useState(null);  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section
        className="relative h-[520px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-[#154734]/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-white">

          <span className="bg-white/20 px-4 py-2 rounded-full">
            UniGuide Medical
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
            الامتياز الطبي
            <br />
            والدراسات العليا
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-9 text-white/90">
            نساعد الأطباء في التقديم لبرامج الامتياز الطبي
            والدراسات العليا داخل أفضل الجامعات والمستشفيات،
            بدايةً من تجهيز الملف وحتى الحصول على القبول.
          </p>

          <Link
            to="/scholarship-application?service=medical"
            className="inline-flex items-center gap-3 mt-10 bg-white text-[#154734] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            ابدأ التقديم الآن
            <ArrowRight size={20} />
          </Link>

        </div>
      </section>
            {/* نبذة عن الخدمة */}
      <section className="container mx-auto px-4 py-20">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <span className="text-[#154734] font-semibold">
              Medical Internship
            </span>

            <h2 className="text-4xl font-bold text-[#0d2b5e] mt-3 mb-6">
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
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200"
              alt="Medical"
              className="rounded-3xl shadow-xl"
            />
          </div>

        </div>

      </section>


      {/* لماذا UniGuide */}
      <section className="bg-white py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-14">

            <span className="text-[#154734] font-semibold">
              لماذا نحن؟
            </span>

            <h2 className="text-4xl font-bold mt-3">
              لماذا تختار UniGuide؟
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

              <Hospital
                size={45}
                className="mx-auto text-[#154734] mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                جامعات معتمدة
              </h3>

              <p className="text-gray-600">
                نتعامل مع جامعات ومستشفيات معترف بها دولياً.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

              <FileCheck
                size={45}
                className="mx-auto text-[#154734] mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                تجهيز الملف
              </h3>

              <p className="text-gray-600">
                مراجعة جميع المستندات قبل إرسالها للجامعة.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

              <GraduationCap
                size={45}
                className="mx-auto text-[#154734] mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
                قبول أسرع
              </h3>

              <p className="text-gray-600">
                متابعة مستمرة مع الجامعات حتى صدور خطاب القبول.
              </p>

            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

              <CheckCircle
                size={45}
                className="mx-auto text-[#154734] mb-5"
              />

              <h3 className="font-bold text-xl mb-3">
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
      <section className="container mx-auto px-4 py-20">

        <div className="text-center mb-14">

          <span className="text-[#154734] font-semibold">
            Eligibility
          </span>

          <h2 className="text-4xl font-bold mt-3">
            من يمكنه التقديم؟
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            "خريجو كليات الطب",
            "أطباء الامتياز",
            "الراغبون في الماجستير",
            "الراغبون في الدكتوراه",
          ].map((item) => (

            <div
              key={item}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >

              <div className="w-20 h-20 mx-auto rounded-full bg-[#154734] flex items-center justify-center text-white text-3xl mb-5">
                👨‍⚕️
              </div>

              <h3 className="font-bold text-xl text-[#0d2b5e]">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </section>


      {/* المستندات المطلوبة */}
      <section className="bg-white py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-14">

            <span className="text-[#154734] font-semibold">
              Documents
            </span>

            <h2 className="text-4xl font-bold mt-3">
              المستندات المطلوبة
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {documents.map((doc) => (

              <div
                key={doc}
                className="flex items-center gap-4 bg-[#f8fafc] border rounded-2xl p-6 hover:border-[#154734] transition"
              >

                <div className="w-12 h-12 rounded-full bg-[#154734] flex items-center justify-center text-white font-bold">
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
      <section className="container mx-auto px-4 py-20">

        <div className="text-center mb-14">

          <span className="text-[#154734] font-semibold">
            Universities
          </span>

          <h2 className="text-4xl font-bold mt-3">
            الجامعات المتاحة
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {universities.map((uni) => (

            <div
              key={uni.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >

              <img
                src={uni.image}
                alt={uni.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl text-[#0d2b5e] text-center">
                  {uni.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </section>
            {/* خطوات التقديم */}
      <section className="bg-white py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-14">

            <span className="text-[#154734] font-semibold">
              Application Steps
            </span>

            <h2 className="text-4xl font-bold mt-3">
              خطوات التقديم
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "إرسال المستندات",
              "مراجعة الملف",
              "اختيار الجامعة",
              "التقديم الرسمي",
              "الحصول على القبول",
              "استخراج التأشيرة والسفر",
            ].map((step, index) => (

              <div
                key={step}
                className="bg-[#f8fafc] rounded-3xl p-8 text-center shadow hover:shadow-xl transition"
              >

                <div className="w-16 h-16 rounded-full bg-[#154734] text-white flex items-center justify-center mx-auto text-2xl font-bold mb-5">
                  {index + 1}
                </div>

                <h3 className="font-bold text-xl">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* الأسئلة الشائعة */}

      <section className="container mx-auto px-4 py-20">

        <div className="text-center mb-14">

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
                className="bg-white rounded-2xl shadow border overflow-hidden"
              >

                <button
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center p-6"
                >

                  <h3 className="font-bold text-right">
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
        className="relative py-28 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600')",
        }}
      >

        <div className="absolute inset-0 bg-[#154734]/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">

          <h2 className="text-5xl font-bold">
            ابدأ رحلتك الطبية اليوم
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-9">

            فريق UniGuide جاهز لمساعدتك في التقديم
            والحصول على القبول الجامعي ومتابعة جميع
            الإجراءات حتى السفر.

          </p>

          <Link
            to="/scholarship-application?service=medical"
            className="inline-block mt-10 bg-white text-[#154734] px-10 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            قدم الآن
          </Link>

        </div>

      </section>

    </main>
  );
}