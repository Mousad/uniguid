import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, GraduationCap, Globe, ArrowLeft } from "lucide-react";

export default function ScholarshipService() {

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
     <section

  className="relative overflow-hidden py-20 text-white bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(rgba(13,43,94,0.65), rgba(13,43,94,0.65)), url("https://i.pinimg.com/736x/4c/25/b1/4c25b193608124a2557c44ab835b2a51.jpg")`,
  }}
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className="text-right">

        <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm mb-5">
           منح دراسية حول العالم
        </span>

        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
          ابدأ رحلتك الدراسية مع
          <span className="text-yellow-300"> UniGuide </span>
        </h1>

        <p className="mt-6 text-lg leading-9 text-gray-100">
          نقدم خدمات التقديم على المنح الدراسية والقبولات الجامعية
          في أفضل الجامعات العالمية، مع متابعة كاملة حتى الحصول
          على القبول والتأشيرة.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-end">

          <Link
            to="/scholarship-application"
            className="bg-yellow-400 hover:bg-yellow-500 text-[#0d2b5e] px-8 py-3 rounded-xl font-bold transition-all duration-300"
          >
            قدم الآن
          </Link>

          <Link
            to="/contactSection"
            className="border-2 border-white hover:bg-white hover:text-[#0d2b5e] px-8 py-3 rounded-xl font-bold transition-all duration-300"
          >
            استشارة مجانية
          </Link>

        </div>

      </div>

      {/* Card */}
      <div className="flex justify-center">

        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-md">

          <div className="flex items-center gap-3 mb-8">

            <GraduationCap
              size={45}
              className="text-[#0d2b5e]"
            />

            <h2 className="text-3xl font-bold text-[#0d2b5e]">
              لماذا UniGuide؟
            </h2>

          </div>

          <div className="space-y-6">

            <div className="flex items-center gap-4">

              <Globe
                size={28}
                className="text-green-600"
              />

              <span className="text-[#0d2b5e] font-semibold">
                أكثر من 20 دولة للدراسة.
              </span>

            </div>

            <div className="flex items-center gap-4">

              <GraduationCap
                size={28}
                className="text-blue-600"
              />

              <span className="text-[#0d2b5e] font-semibold">
                قبولات جامعية ومنح ممولة بالكامل.
              </span>

            </div>

            <div className="flex items-center gap-4">

              <ArrowLeft
                size={28}
                className="text-orange-500"
              />

              <span className="text-[#0d2b5e] font-semibold">
                متابعة كاملة حتى السفر والاستقرار.
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      
      {/* ================= الدول ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-3">

    <div className="text-center mb-2">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        اختر وجهتك الدراسية
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
        نوفر فرص الدراسة والمنح الدراسية في أفضل الجامعات العالمية
        مع متابعة كاملة لجميع إجراءات القبول.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3">

      {[
        {
          country: "مصر",
          flag: "🇪🇬",
          desc: "جامعات حكومية وخاصة معترف بها."
        },
        {
          country: "تركيا",
          flag: "🇹🇷",
          desc: "منح حكومية وفرص دراسية مميزة."
        },
        {
          country: "الصين",
          flag: "🇨🇳",
          desc: "جامعات عالمية ومنح ممولة بالكامل."
        },
        {
          country: "ماليزيا",
          flag: "🇲🇾",
          desc: "تعليم عالي بتكاليف مناسبة."
        },
        {
          country: "روسيا",
          flag: "🇷🇺",
          desc: "أفضل الجامعات الطبية والهندسية."
        },
        {
          country: "الإمارات",
          flag: "🇦🇪",
          desc: "جامعات حديثة وشهادات معترف بها."
        },
        {
          country: "السعودية",
          flag: "🇸🇦",
          desc: "منح جامعية وبرامج دراسات عليا."
        },
        {
          country: "الهند",
          flag: "IN",
          desc: "منح Stipendium Hungaricum."
        },
      ].map((item) => (

        <div
          key={item.country}
          className="bg-white rounded-[10px] border border-gray-200 hover:border-[#0d2b5e] hover:shadow-xl transition duration-300 p-5 text-center group"
        >

          <div className="text-[37px] mb-3">
            {item.flag}
          </div>

          <h3 className="text-[20px] font-bold text-[#0d2b5e]">
            {item.country}
          </h3>

          <p className="text-gray-600 mt-2 leading-7">
            {item.desc}
          </p>

          
        </div>

      ))}

    </div>

  </div>
</section>
{/* ================= الدول ================= */}



{/* ================= أنواع المنح ================= */}

<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        أنواع المنح التي نوفرها
      </h2>

      <p className="text-gray-600 mt-4">
        اختر نوع المنحة أو البرنامج الذي يناسب مستقبلك الأكاديمي.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      {[
        {
          title: "منح البكالوريوس",
          icon: "🎓",
          desc: "للطلاب الراغبين في بدء الدراسة الجامعية."
        },
        {
          title: "منح الماجستير",
          icon: "📚",
          desc: "لإكمال الدراسات العليا في أفضل الجامعات."
        },
        {
          title: "منح الدكتوراه",
          icon: "👨‍🎓",
          desc: "للباحثين الراغبين في الحصول على درجة الدكتوراه."
        },
        {
          title: "المنح الممولة بالكامل",
          icon: "💰",
          desc: "تشمل الرسوم الدراسية والسكن والمعيشة."
        },
        {
          title: "المنح الجزئية",
          icon: "🏫",
          desc: "تغطي جزءاً من الرسوم الدراسية."
        },
        {
          title: "دورات اللغة",
          icon: "🌍",
          desc: "برامج لتعلم اللغة الإنجليزية والتركية والصينية وغيرها."
        }
      ].map((item) => (

        <div
          key={item.title}
          className="bg-gray-50 rounded-2xl p-8 border hover:border-[#0d2b5e] hover:shadow-xl transition duration-300"
        >

          <div className="text-6xl mb-6">
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#0d2b5e] mb-4">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-8">
            {item.desc}
          </p>

          <button
            className="mt-6 bg-[#0d2b5e] hover:bg-[#17468c] text-white px-6 py-3 rounded-xl transition"
          >
            التقديم الآن
          </button>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= لماذا UniGuide ================= */}

<section className="py-24 bg-[#0d2b5e] text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        لماذا تختار UniGuide؟
      </h2>

      <p className="mt-4 text-gray-200 max-w-3xl mx-auto">
        نحن لا نقدم مجرد خدمة تقديم، بل نرافقك في جميع مراحل رحلتك
        الدراسية حتى تبدأ دراستك في الجامعة.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

      {[
        {
          icon:"🎓",
          number:"+500",
          title:"طالب تم قبوله"
        },
        {
          icon:"🌍",
          number:"+20",
          title:"دولة للدراسة"
        },
        {
          icon:"🏛️",
          number:"+150",
          title:"جامعة شريكة"
        },
        {
          icon:"⭐",
          number:"98%",
          title:"رضا العملاء"
        }

      ].map((item)=>(

        <div
          key={item.title}
          className="bg-white/10 rounded-3xl p-8 text-center backdrop-blur hover:bg-white/20 transition"
        >

          <div className="text-6xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-5xl font-black text-yellow-300">
            {item.number}
          </h3>

          <p className="mt-4 text-lg">
            {item.title}
          </p>

        </div>

      ))}

    </div>

    <div className="mt-20 grid lg:grid-cols-2 gap-10">

      <div className="bg-white rounded-3xl p-10 text-gray-800">

        <h3 className="text-3xl font-bold text-[#0d2b5e] mb-6">
          ماذا نقدم؟
        </h3>

        <ul className="space-y-5">

          <li>✅ اختيار الجامعة المناسبة.</li>

          <li>✅ مراجعة جميع المستندات.</li>

          <li>✅ التقديم على المنح والجامعات.</li>

          <li>✅ متابعة القبول الجامعي.</li>

          <li>✅ استخراج التأشيرة.</li>

          <li>✅ متابعة الطالب حتى السفر.</li>

        </ul>

      </div>

      <div className="bg-yellow-400 rounded-3xl p-10">

        <h3 className="text-3xl font-bold text-[#0d2b5e] mb-6">
          مميزاتنا
        </h3>

        <div className="space-y-6 text-[#0d2b5e] font-semibold">

          <div>✔ خبرة في التقديم للجامعات العالمية.</div>

          <div>✔ فريق متخصص في المنح الدراسية.</div>

          <div>✔ متابعة مستمرة حتى الحصول على القبول.</div>

          <div>✔ سرعة في إنجاز الطلبات.</div>

          <div>✔ دعم عبر واتساب طوال فترة التقديم.</div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ================= خطوات التقديم ================= */}

<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        خطوات التقديم
      </h2>

      <p className="text-gray-600 mt-4">
        خطوات بسيطة تفصلك عن حلم الدراسة في الخارج.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      {[
        {
          step: "01",
          title: "تعبئة نموذج التقديم",
          desc: "قم بإدخال بياناتك الشخصية والأكاديمية بدقة."
        },
        {
          step: "02",
          title: "رفع المستندات",
          desc: "ارفع الشهادات وجواز السفر وبقية الملفات المطلوبة."
        },
        {
          step: "03",
          title: "مراجعة الملف",
          desc: "يقوم فريق UniGuide بمراجعة بياناتك والتأكد من جاهزيتها."
        },
        {
          step: "04",
          title: "اختيار الجامعة",
          desc: "نساعدك في اختيار الجامعة والمنحة المناسبة."
        },
        {
          step: "05",
          title: "إرسال الطلب",
          desc: "نقوم بالتقديم الرسمي للجامعة أو الجهة المانحة."
        },
        {
          step: "06",
          title: "استلام القبول",
          desc: "بعد القبول نساعدك في التأشيرة والاستعداد للسفر."
        }

      ].map((item) => (

        <div
          key={item.step}
          className="relative bg-white rounded-3xl shadow-md hover:shadow-2xl transition p-8 border"
        >

          <div className="absolute -top-6 right-8 w-14 h-14 rounded-full bg-[#0d2b5e] text-white flex items-center justify-center text-xl font-bold">
            {item.step}
          </div>

          <div className="mt-8">

            <h3 className="text-2xl font-bold text-[#0d2b5e]">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-4 leading-8">
              {item.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= المستندات المطلوبة ================= */}

<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        المستندات المطلوبة
      </h2>

      <p className="text-gray-600 mt-4">
        تأكد من تجهيز المستندات التالية قبل بدء عملية التقديم.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      {[
        {
          icon: "🛂",
          title: "جواز السفر",
          desc: "نسخة واضحة وسارية المفعول."
        },
        {
          icon: "🎓",
          title: "الشهادة الدراسية",
          desc: "آخر مؤهل دراسي حصلت عليه."
        },
        {
          icon: "📄",
          title: "كشف الدرجات",
          desc: "السجل الأكاديمي أو كشف الدرجات."
        },
        {
          icon: "📸",
          title: "صورة شخصية",
          desc: "بخلفية بيضاء وحديثة."
        },
        {
          icon: "📝",
          title: "السيرة الذاتية",
          desc: "يفضل أن تكون باللغة الإنجليزية."
        },
        {
          icon: "🌐",
          title: "شهادة لغة (اختياري)",
          desc: "IELTS أو TOEFL إن وجدت."
        }

      ].map((item) => (

        <div
          key={item.title}
          className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-xl border hover:border-[#0d2b5e] transition"
        >

          <div className="text-6xl mb-6">
            {item.icon}
          </div>

          <h3 className="text-2xl font-bold text-[#0d2b5e]">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-4 leading-8">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

{/* ================= قصص النجاح ================= */}

<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        قصص نجاح طلابنا
      </h2>

      <p className="text-gray-600 mt-4">
        نفتخر بمساعدة مئات الطلاب في تحقيق حلم الدراسة بالخارج.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      {[
        {
          name: "محمد أحمد",
          country: "تركيا",
          university: "جامعة إسطنبول",
          image:
            "https://randomuser.me/api/portraits/men/32.jpg",
          text:
            "كانت تجربة رائعة مع UniGuide، ساعدوني من تجهيز الملف وحتى الحصول على القبول."
        },
        {
          name: "سارة علي",
          country: "ماليزيا",
          university: "جامعة مالايا",
          image:
            "https://randomuser.me/api/portraits/women/44.jpg",
          text:
            "احترافية في التعامل وسرعة في إنهاء الإجراءات، أنصح الجميع بالتعامل معهم."
        },
        {
          name: "أحمد حسن",
          country: "الصين",
          university: "جامعة بكين",
          image:
            "https://randomuser.me/api/portraits/men/68.jpg",
          text:
            "بفضل الله ثم فريق UniGuide حصلت على منحة ممولة بالكامل."
        }

      ].map((student) => (

        <div
          key={student.name}
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition"
        >

          <div className="flex justify-center">

            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#0d2b5e]"
            />

          </div>

          <h3 className="text-center text-2xl font-bold mt-5 text-[#0d2b5e]">
            {student.name}
          </h3>

          <p className="text-center text-gray-500 mt-2">
            {student.university}
          </p>

          <p className="text-center text-sm text-gray-400">
            📍 {student.country}
          </p>

          <div className="text-center text-yellow-500 text-xl mt-4">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="text-gray-600 mt-6 leading-8 text-center">
            {student.text}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
 
   {/* ================= FAQ ================= */}

<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-14">

      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        الأسئلة الشائعة
      </h2>

      <p className="text-gray-600 mt-4">
        إجابات لأكثر الأسئلة التي يطرحها الطلاب.
      </p>

    </div>

    {[
      {
        q: "هل يمكنني التقديم بدون شهادة لغة؟",
        a: "نعم، بعض الجامعات لا تشترط شهادة لغة، ويمكننا مساعدتك في اختيار الجامعة المناسبة."
      },
      {
        q: "كم تستغرق إجراءات التقديم؟",
        a: "يعتمد ذلك على الجامعة، ولكن غالبًا تستغرق بين أسبوعين إلى شهرين."
      },
      {
        q: "هل توجد منح ممولة بالكامل؟",
        a: "نعم، نوفر منحًا ممولة بالكامل ومنحًا جزئية في عدد كبير من الدول."
      },
      {
        q: "هل تساعدون في استخراج التأشيرة؟",
        a: "نعم، نقدم الدعم الكامل حتى استخراج التأشيرة والاستعداد للسفر."
      },
      {
        q: "هل يمكنني اختيار الجامعة بنفسي؟",
        a: "بالتأكيد، ويمكن أيضًا لفريقنا مساعدتك في اختيار الجامعة المناسبة حسب معدلك وميزانيتك."
      }

    ].map((faq, index) => (

      <div
        key={index}
        className="border rounded-2xl mb-5 overflow-hidden shadow-sm"
      >

        <button
          onClick={() =>
            setOpenFAQ(openFAQ === index ? null : index)
          }
          className="w-full flex justify-between items-center p-6 bg-gray-50 hover:bg-gray-100 transition"
        >

          <ChevronDown
            className={`transition-transform ${
              openFAQ === index ? "rotate-180" : ""
            }`}
          />

          <span className="font-bold text-lg text-[#0d2b5e]">
            {faq.q}
          </span>

        </button>

        {openFAQ === index && (

          <div className="p-6 bg-white text-gray-600 leading-8">

            {faq.a}

          </div>

        )}

      </div>

    ))}

  </div>
</section>

{/* ================= تواصل معنا ================= */}

<section className="py-24 bg-[#0d2b5e] text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold">
        هل تحتاج إلى مساعدة؟
      </h2>

      <p className="mt-4 text-gray-200">
        فريق UniGuide جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار أفضل فرصة دراسية.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

      <div className="bg-white rounded-3xl p-8 text-center text-gray-800 shadow-xl">
        <div className="text-5xl mb-5">📱</div>

        <h3 className="text-2xl font-bold text-[#0d2b5e] mb-3">
          واتساب
        </h3>

        <p className="text-gray-600 mb-6">
          تواصل معنا مباشرة عبر الواتساب.
        </p>

        <a
          href="https://wa.me/201234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl inline-block transition"
        >
          مراسلة واتساب
        </a>
      </div>

      <div className="bg-white rounded-3xl p-8 text-center text-gray-800 shadow-xl">

        <div className="text-5xl mb-5">📧</div>

        <h3 className="text-2xl font-bold text-[#0d2b5e] mb-3">
          البريد الإلكتروني
        </h3>

        <p className="text-gray-600">
          info@uniguide.com
        </p>

      </div>

      <div className="bg-white rounded-3xl p-8 text-center text-gray-800 shadow-xl">

        <div className="text-5xl mb-5">📍</div>

        <h3 className="text-2xl font-bold text-[#0d2b5e] mb-3">
          مقر الشركة
        </h3>

        <p className="text-gray-600">
          القاهرة - جمهورية مصر العربية
        </p>

      </div>

    </div>

  </div>
</section>

{/* ================= CTA ================= */}

<section className="relative overflow-hidden py-24 bg-gradient-to-r from-[#0d2b5e] via-[#17468c] to-[#0d2b5e] text-white">

  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-10 left-10 w-52 h-52 rounded-full bg-white"></div>
    <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-yellow-400"></div>
  </div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <span className="inline-block bg-white/20 px-5 py-2 rounded-full text-sm mb-6">
      🎓 ابدأ مستقبلك من اليوم
    </span>

    <h2 className="text-5xl font-extrabold leading-tight">
      حلم الدراسة بالخارج
      <br />
      يبدأ بخطوة واحدة
    </h2>

    <p className="mt-8 text-xl text-gray-200 leading-9 max-w-3xl mx-auto">
      انضم إلى مئات الطلاب الذين حصلوا على قبول جامعي ومنح دراسية
      من خلال فريق UniGuide، ودعنا نرافقك حتى تحقق هدفك الأكاديمي.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-12">

      <Link
        to="/scholarship-form"
        className="bg-yellow-400 hover:bg-yellow-500 text-[#0d2b5e] font-bold px-10 py-4 rounded-2xl transition duration-300 shadow-lg"
      >
        🚀 ابدأ التقديم الآن
      </Link>

      <Link
        to="/ContactSection"
        className="border-2 border-white hover:bg-white hover:text-[#0d2b5e] font-bold px-10 py-4 rounded-2xl transition duration-300"
      >
        📞 احجز استشارة مجانية
      </Link>

    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-20">

      <div>
        <h3 className="text-4xl font-black text-yellow-300">
          +500
        </h3>

        <p className="mt-2 text-gray-200">
          طالب تم قبوله
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-black text-yellow-300">
          +150
        </h3>

        <p className="mt-2 text-gray-200">
          جامعة شريكة
        </p>
      </div>

      <div>
        <h3 className="text-4xl font-black text-yellow-300">
          +20
        </h3>

        <p className="mt-2 text-gray-200">
          دولة حول العالم
        </p>
      </div>

    </div>

  </div>

</section>

    </div>
  );
}