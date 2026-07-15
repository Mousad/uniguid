import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, CheckCircle, FileText } from "lucide-react";
export default function CertificateBquivalencyPage() {

  const egyptRef = useRef(null);
  const uaeRef = useRef(null);

const scrollToSection = (ref) => {
  ref.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white">

      {/* Hero */}
      {/* Hero */}
<section className="relative overflow-hidden min-h-[30vh] flex items-center">

  {/* Background */}
  <img
    src="https://i.pinimg.com/1200x/51/29/7a/51297a362b8ba3cd94e90bcc6b07d3bf.jpg"
    alt="Certificate Equivalency"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#154734]/65 via-[#154734]/80 to-[#154734]/60"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">

    {/* النص */}
    <div>

      <span className="inline-flex items-center px-5 py-1 rounded-[10px] bg-white/20 backdrop-blur text-white font-semibold">
        UniGuide • خدمات معادلة الشهادات
      </span>

      <h1 className="text-[27px] lg:text-7xl font-black text-white mt-5 leading-tight">
        معادلة شهادتك
        <span className="text-yellow-300">
          {" "}أسهل مما تتخيل
        </span>
      </h1>

      <p className="text-white/90 text-lg leading-9 mt-5 max-w-xl">
        نوفر خدمة متكاملة لمعادلة الشهادات الجامعية في مصر والإمارات،
        بدءًا من مراجعة المستندات وحتى استلام قرار المعادلة، مع متابعة
        مستمرة في كل خطوة.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        <button
          onClick={() => scrollToSection(egyptRef)}
          className="bg-white text-[#154734] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
        >
          معادلة في مصر
        </button>

        <button
          onClick={() => scrollToSection(uaeRef)}
          className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-[#154734] transition"
        >
          معادلة في الإمارات
        </button>

      </div>

    </div>

    {/* البطاقة */}
    <div className="bg-white rounded-[10px] shadow-2xl p-2">

     

     

      <div className="grid grid-cols-3 gap-4 mt-1 text-center">

        <div>
          <h4 className="text-3xl font-black text-[#154734]">
            +5000
          </h4>
          <p className="text-gray-500">
            طالب
          </p>
        </div>

        <div>
          <h4 className="text-3xl font-black text-[#154734]">
            +7
          </h4>
          <p className="text-gray-500">
            سنة خبرة
          </p>
        </div>

        <div>
          <h4 className="text-3xl font-black text-[#154734]">
            98%
          </h4>
          <p className="text-gray-500">
            رضا العملاء
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* اختيار الدولة */}
      <section id="countries" className="py-10 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-10">

      <span className="text-[#154734] font-semibold">
        اختر الدولة
      </span>

      <h2 className="text-4xl font-bold mt-2">
        أين ترغب في معادلة شهادتك؟
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-5">
        اختر الدولة التي ترغب في معادلة شهادتك بها، وسنعرض لك جميع
        التفاصيل الخاصة بالمستندات المطلوبة، خطوات التقديم، والأسئلة
        الشائعة.
      </p>

    </div>

   <div className="grid grid-cols-2 gap-2 lg:gap-8">

  {/* مصر */}
  <div
    onClick={() => scrollToSection(egyptRef)}
    className="group cursor-pointer overflow-hidden rounded-[10px] bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="relative overflow-hidden">
      <img
        src="https://i.pinimg.com/736x/7d/3b/f2/7d3bf2613aadf24c71d67d8a0a6e53fe.jpg"
        alt="Egypt"
        className="w-full h-39 md:h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-lg shadow">
        🇪🇬
      </div>
    </div>

    <div className="p-4 md:p-6">

      <h3 className="text-[] md:text-2xl font-bold text-gray-900 leading-5">
        معادلة الشهادات في مصر
      </h3>

      <p className="text-gray-600 text-xs md:text-base leading-6 mt-2 line-clamp-3">
        اعتماد الشهادات العلمية داخل جمهورية مصر العربية للدراسة،
        سنة الامتياز، الدراسات العليا، والأغراض المهنية.
      </p>

      <button className="w-full mt-4 bg-[#154734] hover:bg-[#103826] text-white py-2 rounded-[10px] text-sm md:text-base font-semibold transition">
        عرض التفاصيل
      </button>

    </div>
  </div>

  {/* الإمارات */}
  <div
    onClick={() => scrollToSection(uaeRef)}
    className="group cursor-pointer overflow-hidden rounded-[10px] bg-white border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
  >
    <div className="relative overflow-hidden">
      <img
        src="https://i.pinimg.com/1200x/e6/45/57/e64557dc736a16818349b81e895a8828.jpg"
        alt="UAE"
        className="w-full h-39 md:h-64 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-lg shadow">
        🇦🇪
      </div>
    </div>

    <div className="p-4 md:p-6">

      <h3 className="text-sm md:text-2xl font-bold text-gray-900 leading-5">
        معادلة الشهادات في الإمارات
      </h3>

      <p className="text-gray-600 text-xs md:text-base leading-6 mt-2 line-clamp-3">
        خدمة اعتماد المؤهلات العلمية داخل دولة الإمارات للأغراض
        الأكاديمية، المهنية، واستكمال الدراسة.
      </p>

      <button className="w-full mt-4 bg-[#154734] hover:bg-[#103826] text-white py-2 rounded-[10px] text-sm md:text-base font-semibold transition">
        عرض التفاصيل
      </button>

    </div>
  </div>

</div>

  </div>

</section>
      {/* معادلة الشهادات في مصر */}
<section
  ref={egyptRef}
  className="py-24 bg-white border-t border-gray-100"
>
  <div className="max-w-7xl mx-auto px-2">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* الصورة */}

      <div className="relative">

        <img
          src="https://i.pinimg.com/736x/fc/e5/bc/fce5bc17d284322b26d20e533ec1170d.jpg"
          alt="Egypt Certificate Equivalency"
          className="rounded-[10px] shadow-2xl h-[400px] w-full object-cover"
        />

       

      </div>

      {/* المحتوى */}

      <div>

        <span className="inline-block bg-[#154734]/10 text-[#154734] px-5 py-2 rounded-full font-semibold">
          معادلة الشهادات في مصر
        </span>

        <h2 className="text-5xl font-black mt-6 leading-tight">

          اعتمد مؤهلك العلمي
          <span className="text-[#154734]">
            {" "}داخل مصر
          </span>

        </h2>

        <p className="text-gray-600 leading-9 mt-8 text-lg">

          خدمة مخصصة للراغبين في اعتماد الشهادات العلمية داخل
          جمهورية مصر العربية سواء لاستكمال الدراسة،
          أو سنة الامتياز، أو الدراسات العليا،
          أو للأغراض الأكاديمية والمهنية.

        </p>

        <div className="grid grid-cols-2 gap-5 mt-10">

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              🎓 الدراسات العليا
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              🏥 سنة الامتياز
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              💼 العمل
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              📜 الترخيص المهني
            </h4>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

{/* المستندات المطلوبة */}

<section className="py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-2">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        المستندات المطلوبة
      </span>

      <h2 className="text-4xl font-black mt-3">
         مستنداتك قبل بدء الإجراءات
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        تجهيز المستندات بشكل صحيح يساعد في تسريع عملية مراجعة الملف
        وإنهاء إجراءات معادلة الشهادة.
      </p>

    </div>

   <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

  {[
    {
      icon: "🎓",
      title: "الشهادة المطلوب ",
    },
    {
      icon: "📄",
      title: "بيان الدرجات",
    },
    {
      icon: "🏛",
      title: "خطاب   من السفارة",
    },
    {
      icon: "🛂",
      title: "جواز سفر ساري",
    },
    {
      icon: "📑",
      title: "خطاب التحركات لبعض الجنسيات",
    },
  ].map((item, index) => (

    <div
      key={item.title}
      className={`
        bg-white rounded-[10px] border shadow-sm hover:shadow-xl
        transition duration-300
        p-3 md:p-8
        text-center

        ${
          index === 4
            ? "col-span-2 w-[95%] mx-auto md:col-span-1 md:w-auto"
            : ""
        }
      `}
    >

      <div className="w-14 h-14 md:w-16 md:h-16 rounded-[10px] bg-[#154734] text-white flex items-center justify-center text-3xl mx-auto mb-5">
        {item.icon}
      </div>

      <h3 className="text-base md:text-xl font-bold mb-3 leading-7">
        {item.title}
      </h3>

      <p className="text-gray-600 text-sm md:text-base leading-7">
        يجب توفير هذا المستند بصيغة واضحة وحديثة لضمان سرعة مراجعة الطلب وإنجاز إجراءات المعادلة.
      </p>

    </div>

  ))}

</div>

    <div className="mt-10 rounded-[10px] overflow-hidden relative">

      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#154734]/50"></div>

      <div className="relative p-10 text-center text-white">

        <h3 className="text-3xl font-bold mb-5">
          هل بعض المستندات غير متوفرة لديك؟
        </h3>

        <p className="max-w-3xl mx-auto leading-9 text-gray-200">
          لا تقلق، سيقوم فريق UniGuide بمراجعة حالتك وإرشادك إلى
          أفضل طريقة لاستكمال المستندات المطلوبة قبل بدء إجراءات
          المعادلة.
        </p>

      </div>

    </div>

  </div>

</section>
{/* خطوات المعادلة */}

<section className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-20">

      <span className="text-[#154734] font-semibold">
        خطوات الخدمة
      </span>

      <h2 className="text-4xl font-black mt-3">
        كيف تتم إجراءات المعادلة؟
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        يتولى فريق UniGuide جميع مراحل المعادلة خطوة بخطوة حتى استلام
        قرار المعادلة الرسمي.
      </p>

    </div>

    <div className="relative">

      {/* الخط */}

      <div className="hidden lg:block absolute left-0 right-0 top-10 h-1 bg-[#2f3b69]/20"></div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {[
    {
      number: "01",
      title: "مراجعة المستندات",
      desc: "التأكد من اكتمال جميع الوثائق المطلوبة."
    },
    {
      number: "02",
      title: "تجهيز الملف",
      desc: "ترتيب الملف وتجهيزه وفق متطلبات الجهة المختصة."
    },
    {
      number: "03",
      title: "تقديم الطلب",
      desc: "رفع الطلب ومتابعة استلامه لدى الجهات الرسمية."
    },
    {
      number: "04",
      title: "متابعة الإجراءات",
      desc: "متابعة جميع مراحل الطلب حتى صدور القرار."
    },
    {
      number: "05",
      title: "استلام المعادلة",
      desc: "استلام قرار المعادلة الرسمي وتسليمه للطالب."
    },
  ].map((step) => (

    <div
      key={step.number}
      className="group relative bg-white rounded-[30px] border border-gray-200 p-7 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >

      {/* خلفية عند الـ Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f3b69]/5 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      {/* رقم الخطوة */}
      <div className="relative w-16 h-16 mx-auto rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-xl font-black shadow-lg">
        {step.number}
      </div>

      {/* العنوان */}
      <h3 className="relative mt-6 text-xl font-bold text-[#154734]">
        {step.title}
      </h3>

      {/* الوصف */}
      <p className="relative mt-4 text-gray-600 leading-8 text-[15px]">
        {step.desc}
      </p>

      {/* خط سفلي */}
      <div className="relative mt-6 w-12 h-1 rounded-full bg-[#154734] mx-auto group-hover:w-20 transition-all duration-300"></div>

    </div>

  ))}

</div>

    </div>

  </div>

</section>
{/* الأسئلة الشائعة */}

<section className="py-24 bg-[#f8fafc]">

  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl font-black mt-3">
        كل ما تريد معرفته
      </h2>

      <p className="text-gray-600 mt-5 leading-8">
        أكثر الأسئلة التي يطرحها الطلاب حول معادلة الشهادات في مصر.
      </p>

    </div>

    {[
      {
        q: "من يحتاج إلى معادلة الشهادة في مصر؟",
        a: "قد تحتاج إلى المعادلة إذا كنت ترغب في قضاء سنة الامتياز، أو العمل داخل مصر، أو استكمال الدراسات العليا، أو استخراج ترخيص مهني، أو استيفاء متطلبات جهة حكومية أو جهة عمل."
      },
      {
        q: "هل يمكنني التقديم وأنا خارج مصر؟",
        a: "نعم، يمكن البدء في تجهيز الملف وإرسال المستندات إلكترونياً واستكمال معظم الإجراءات حتى استلام قرار المعادلة."
      },
      {
        q: "كم تستغرق إجراءات المعادلة؟",
        a: "تختلف المدة حسب الجهة المختصة، واكتمال المستندات، ونوع الجامعة التي صدرت منها الشهادة (حكومية أو خاصة)."
      },
      {
        q: "كيف أبدأ إجراءات المعادلة؟",
        a: "كل ما عليك هو التواصل مع فريق UniGuide وإرسال نسخة من مؤهلك الدراسي، وسنقوم بتحديد جميع المتطلبات المناسبة لحالتك."
      },
      {
        q: "لست متأكدًا إذا كنت أحتاج إلى معادلة، ماذا أفعل؟",
        a: "أرسل لنا مؤهلك الدراسي والغرض من المعادلة، وسيقوم فريقنا بمراجعة حالتك مجانًا وإرشادك إلى الإجراء الصحيح."
      },
    ].map((faq, index) => (

      <div
        key={index}
        className="bg-white rounded-2xl border shadow-sm mb-5 overflow-hidden"
      >

        <button
          onClick={() =>
            setOpenFaq(openFaq === index ? null : index)
          }
          className="w-full flex justify-between items-center p-6"
        >

          <h3 className="text-lg font-bold text-right">
            {faq.q}
          </h3>

          <ChevronDown
            className={`transition duration-300 ${
              openFaq === index ? "rotate-180" : ""
            }`}
          />

        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openFaq === index
              ? "max-h-96 p-6 pt-0"
              : "max-h-0"
          }`}
        >

          <p className="text-gray-600 leading-8">
            {faq.a}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

{/* هل تحتاج إلى معادلة؟ */}

<section className="py-10">

  <div className="max-w-7xl mx-auto px-1">

    <div className="relative overflow-hidden rounded-[10px]">

      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#2f3b69]/95 via-[#2f3b69]/85 to-[#2f3b69]/70"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-6 lg:p-20">

        {/* النص */}

        <div>



          <h2 className="text-[29px] lg:text-5xl font-black text-white mt-6 leading-tight">

            هل لست متأكدًا إذا كنت تحتاج إلى
            <span className="text-yellow-300">
              {" "}معادلة؟
            </span>

          </h2>

          <p className="text-white/90 leading-9 mt-5 text-lg">

            تختلف متطلبات المعادلة حسب الدولة، والمؤهل الدراسي،
            والغرض من استخدامها. لذلك لا تقلق إذا لم تكن متأكدًا.

            أرسل لنا مؤهلك الدراسي، وسيقوم فريق UniGuide
            بمراجعة حالتك مجانًا وإخبارك بجميع الخطوات المطلوبة.

          </p>

          <div className="flex flex-wrap gap-6 mt-6">

            <Link
              to="/scholarship-application"
              className="bg-white text-[#154734] px-4 py-2 rounded-xl font-bold hover:scale-105 transition"
            >
              اطلب تقييم 
            </Link>

            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-4 py-2 rounded-xl text-white hover:bg-white hover:text-[#154734] transition"
            >
              تواصل عبر واتساب
            </a>

          </div>

        </div>

        {/* البطاقة */}

        <div className="bg-white rounded-[10px] p-4 shadow-2xl">

          <h3 className="text-2xl font-bold text-[#154734] mb-2">

            سيقوم فريقنا بمراجعة:

          </h3>

          <div className="space-y-5">

            {[
              "نوع الشهادة",
              "الجامعة المانحة",
              "الدولة الصادرة منها",
              "الغرض من المعادلة",
              "المستندات المطلوبة",
              "المدة المتوقعة للإجراءات",
            ].map((item) => (

              <div
                key={item}
                className="flex items-center gap-4"
              >

                <div className="w-8 h-8 rounded-full bg-[#154734] text-white flex items-center justify-center">

                  ✓

                </div>

                <span className="font-medium text-gray-700">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* معادلة الشهادات في الإمارات */}
{/* معادلة الشهادات في الإمارات */}

<section
  ref={uaeRef}
  className="py-24 bg-white border-t border-gray-100"
>

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* المحتوى */}

      <div>

        <span className="inline-block bg-[#154734]/10 text-[#154734] px-5 py-2 rounded-full font-semibold">
          معادلة الشهادات في الإمارات
        </span>

        <h2 className="text-[33px] font-black mt-3 leading-tight">

          اعتمد مؤهلك العلمي داخل
          <span className="text-[#2f3b69]">
            {" "}دولة الإمارات
          </span>

        </h2>

        <p className="text-gray-600 leading-9 mt-8 text-lg">

          نقدم خدمة متكاملة للراغبين في معادلة واعتماد
          الشهادات العلمية داخل دولة الإمارات العربية المتحدة
          للأغراض الأكاديمية، المهنية، واستكمال الدراسة.

        </p>

        <div className="grid grid-cols-2 gap-5 mt-6">

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              🎓 استكمال الدراسة
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              💼 العمل
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              📜 الترخيص المهني
            </h4>

          </div>

          <div className="bg-[#f2f9f5] rounded-2xl p-5">

            <h4 className="font-bold text-[#154734]">
              🏛 الجهات الحكومية
            </h4>

          </div>

        </div>

      </div>

      {/* الصورة */}

      <div className="relative">

        <img
          src="https://i.pinimg.com/736x/90/c5/c4/90c5c44c217bc6906676d8aaaad8b6c1.jpg"
          alt="UAE Certificate Equivalency"
          className="rounded-[10px] shadow-2xl h-[400px] w-full object-cover"
        />

        <div className="absolute bottom-6 left-6 bg-white rounded-[5px] shadow-xl px-4 py-2">

        

          <h4 className="font-bold text-xl mt-1">
            دولة الإمارات العربية المتحدة
          </h4>

        </div>

      </div>

    </div>

  </div>

</section>
{/* المستندات المطلوبة - الإمارات */}

<section className="py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        المستندات المطلوبة
      </span>

      <h2 className="text-4xl font-black mt-3">
        المستندات المطلوبة لمعادلة الشهادة في الإمارات
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        جهز مستنداتك بالشكل الصحيح حتى يتمكن فريق UniGuide من البدء
        في إجراءات المعادلة دون أي تأخير.
      </p>

    </div>

   <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

  {[
    {
      icon: "🎓",
      title: "الشهادة المطلوب معادلتها",
    },
    {
      icon: "📄",
      title: "بيان الدرجات",
    },
    {
      icon: "🛂",
      title: "جواز سفر ساري المفعول",
    },
  ].map((item, index) => (

    <div
      key={item.title}
      className={`bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-5 md:p-8 text-center ${
        index === 2 ? "col-span-2 md:col-span-1 mx-auto w-[85%] md:w-full" : ""
      }`}
    >

      {/* الأيقونة */}
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg">
        {item.icon}
      </div>

      {/* العنوان */}
      <h3 className="text-base md:text-xl font-bold text-[#154734] leading-7">
        {item.title}
      </h3>

      {/* الوصف */}
      <p className="text-gray-600 text-sm md:text-base leading-7 md:leading-8 mt-4">
        يجب أن يكون المستند واضحًا وكاملًا حتى تتم مراجعة الطلب بسرعة ودون أي تأخير.
      </p>

    </div>

  ))}

</div>

    <div className="mt-16 relative overflow-hidden rounded-3xl">

      <img
        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#2f3b69]/80"></div>

      <div className="relative text-center text-white p-10">

        <h3 className="text-3xl font-bold mb-5">
          هل تحتاج إلى معرفة المستندات المناسبة لحالتك؟
        </h3>

        <p className="max-w-3xl mx-auto leading-9 text-gray-200">
          تختلف بعض المتطلبات حسب الجامعة والجهة المانحة للشهادة،
          لذلك سيقوم فريق UniGuide بمراجعة حالتك وإخبارك بجميع
          المستندات المطلوبة قبل بدء الإجراءات.
        </p>

      </div>

    </div>

  </div>

</section>
{/* خطوات المعادلة - الإمارات */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-20">

      <span className="text-[#154734] font-semibold">
        خطوات الخدمة
      </span>

      <h2 className="text-4xl font-black mt-3">
        كيف تتم معادلة الشهادة في الإمارات؟
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        نتابع جميع مراحل المعادلة بدايةً من مراجعة مستنداتك وحتى
        استلام قرار المعادلة الرسمي.
      </p>

    </div>

    <div className="relative">

      {/* الخط */}

      <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-[#2f3b69]/20"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {[
    {
      number: "01",
      title: "مراجعة المستندات",
      desc: "التأكد من اكتمال جميع الوثائق المطلوبة."
    },
    {
      number: "02",
      title: "تجهيز الملف",
      desc: "ترتيب وتجهيز الملف وفق متطلبات الجهات المختصة."
    },
    {
      number: "03",
      title: "تقديم الطلب",
      desc: "رفع الطلب إلى الجهات الرسمية المختصة."
    },
    {
      number: "04",
      title: "متابعة الإجراءات",
      desc: "متابعة الطلب والرد على أي ملاحظات حتى اعتماد الملف."
    },
    {
      number: "05",
      title: "استلام قرار المعادلة",
      desc: "استلام شهادة المعادلة وإرسالها للطالب."
    },
  ].map((step) => (

    <div
      key={step.number}
      className="group relative bg-white rounded-[30px] border border-gray-200 p-7 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
    >

      {/* خلفية عند Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2f3b69]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* الرقم */}
      <div className="relative w-16 h-16 mx-auto rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-xl font-black shadow-lg">
        {step.number}
      </div>

      {/* العنوان */}
      <h3 className="relative mt-6 text-xl font-bold text-[#154734]">
        {step.title}
      </h3>

      {/* الوصف */}
      <p className="relative mt-4 text-gray-600 text-[15px] leading-7">
        {step.desc}
      </p>

      {/* الخط السفلي */}
      <div className="relative mt-6 w-12 h-1 bg-[#154734] rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>

    </div>

  ))}

</div>

    </div>

  </div>

</section>
{/* الأسئلة الشائعة - الإمارات */}

<section className="py-10 bg-[#f8fafc]">

  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl font-black mt-3">
        أسئلة حول معادلة الشهادات في الإمارات
      </h2>

      <p className="text-gray-600 mt-5 leading-8">
        إليك أكثر الأسئلة التي يطرحها الطلاب حول إجراءات معادلة
        الشهادات داخل دولة الإمارات العربية المتحدة.
      </p>

    </div>

    {[
      {
        q: "من يحتاج إلى معادلة الشهادة في الإمارات؟",
        a: "تحتاج إلى معادلة الشهادة إذا كنت ترغب في العمل داخل دولة الإمارات، أو استكمال الدراسة، أو الحصول على ترخيص مهني، أو استيفاء متطلبات جهة حكومية أو جهة عمل."
      },
      {
        q: "هل يمكنني التقديم وأنا خارج الإمارات؟",
        a: "نعم، يمكن البدء في تجهيز الملف وإرسال المستندات إلكترونياً، واستكمال معظم الإجراءات عن بعد حتى استلام قرار المعادلة."
      },
      {
        q: "كم تستغرق إجراءات المعادلة؟",
        a: "تختلف مدة المعالجة حسب الجهة المختصة، واكتمال المستندات المطلوبة، ونوع الجامعة المانحة للشهادة."
      },
      {
        q: "كيف أبدأ إجراءات المعادلة؟",
        a: "كل ما عليك هو التواصل مع فريق UniGuide وإرسال نسخة من مؤهلك الدراسي، وسنتولى مراجعة الملف وإرشادك إلى جميع الخطوات."
      },
      {
        q: "هل أنا بحاجة إلى معادلة؟",
        a: "إذا لم تكن متأكدًا، أرسل لنا مؤهلك الدراسي والغرض من استخدامه، وسيقوم فريق UniGuide بتقييم حالتك مجانًا وإرشادك إلى الإجراء المناسب."
      },
    ].map((faq, index) => (

      <div
        key={index}
        className="bg-white rounded-2xl border shadow-sm mb-5 overflow-hidden"
      >

        <button
          onClick={() =>
            setOpenFaq(openFaq === `uae-${index}` ? null : `uae-${index}`)
          }
          className="w-full flex justify-between items-center p-6"
        >

          <h3 className="text-lg font-bold text-right">
            {faq.q}
          </h3>

          <ChevronDown
            className={`transition duration-300 ${
              openFaq === `uae-${index}` ? "rotate-180" : ""
            }`}
          />

        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            openFaq === `uae-${index}`
              ? "max-h-96 p-6 pt-0"
              : "max-h-0"
          }`}
        >

          <p className="text-gray-600 leading-8">
            {faq.a}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>
      {/* CTA */}
     

<section className="relative overflow-hidden py-10">

  {/* Background Image */}

  <img
    src="https://i.pinimg.com/736x/de/c0/83/dec083d4efc1b6b5bf5bddd6818712ff.jpg"
    alt="Students"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-r from-[#154734]/95 via-[#154734]/85 to-[#0d2d22]/90"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-1 text-center text-white">

    <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/20 backdrop-blur-md font-semibold">

      UniGuide

    </span>

    <h2 className="text-[30px] lg:text-6xl font-black mt-8 leading-tight">

      ابدأ إجراءات
      <span className="text-yellow-300">
        {" "}معادلة شهادتك
      </span>
      <br />
      مع فريق UniGuide

    </h2>

    <p className="max-w-3xl mx-auto mt-8 text-lg leading-9 text-gray-200">

      سواء كنت ترغب في معادلة شهادتك داخل مصر أو الإمارات،
      فإن فريق UniGuide يتولى جميع الإجراءات من مراجعة الملف،
      وحتى استلام قرار المعادلة، مع متابعة مستمرة في كل مرحلة.

    </p>

    <div className="flex flex-wrap justify-center gap-6 mt-10">

      <Link
        to="/scholarship-application"
        className="bg-white text-[#154734] px-10 py-2 rounded-[10px] font-bold hover:scale-105 transition duration-300"
      >
        ابدأ الآن
      </Link>

      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white px-10 py-2 rounded-[10px] font-bold hover:bg-white hover:text-[#154734] transition duration-300"
      >
        تواصل عبر واتساب
      </a>

    </div>

    {/* الإحصائيات */}

    <div className="grid grid-cols-3 md:grid-cols-4 gap-8 mt-20">

      <div>

        <h3 className="text-4xl font-black">
          +1000
        </h3>

        <p className="text-gray-300 mt-2">
          طالب تمت خدمته
        </p>

      </div>

      <div>

        <h3 className="text-4xl font-black">
          +15
        </h3>

        <p className="text-gray-300 mt-2">
          سنة خبرة
        </p>

      </div>

     

      <div>

        <h3 className="text-4xl font-black">
          24/7
        </h3>

        <p className="text-gray-300 mt-2">
          دعم واستشارات
        </p>

      </div>

    </div>

  </div>

</section>
{/* شركاء النجاح */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        شركاؤنا
      </span>

      <h2 className="text-4xl font-black mt-3">
        شركاء النجاح والجهات التعليمية
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        نتعاون مع العديد من الجامعات والجهات التعليمية والهيئات
        المختصة لتسهيل إجراءات المعادلة والقبول الأكاديمي.
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

      {[
        "https://i.pinimg.com/1200x/b7/ab/f2/b7abf26f43c2add8b7240fbd120f3895.jpg",

        "https://i.pinimg.com/736x/a0/be/97/a0be97578c8ffcdf9fce8702a3f7a708.jpg",

        "https://i.pinimg.com/736x/a0/be/97/a0be97578c8ffcdf9fce8702a3f7a708.jpg",

        "https://i.pinimg.com/736x/dd/de/53/ddde53347efe5db90eaad4868b315c15.jpg",

        "https://i.pinimg.com/736x/37/42/9c/37429cbcab314ca5d844ef3d9148c94d.jpg",

        "https://i.pinimg.com/736x/f1/f6/bd/f1f6bd67c1eec9a954bfc7d52e8d5b3b.jpg",
      ].map((logo, index) => (

        <div
          key={index}
          className="bg-white border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center h-40"
        >

          <img
            src={logo}
            alt=""
            className="max-h-40 object-contain grayscale hover:grayscale-0 transition"
          />

        </div>

      ))}

    </div>

  </div>

</section>
{/* قصص النجاح */}

<section className="py-24 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-4">

    {/* Heading */}
    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        قصص النجاح
      </span>

      <h2 className="text-3xl md:text-5xl font-black mt-3">
        طلاب وثقوا بـ UniGuide
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        نفخر بمساعدة مئات الطلاب في إنهاء إجراءات معادلة شهاداتهم
        ومواصلة مسيرتهم الأكاديمية والمهنية.
      </p>

    </div>

    {/* Reviews */}
    <div
      className="
      flex
      lg:grid lg:grid-cols-3
      gap-5
      overflow-x-auto
      lg:overflow-visible
      snap-x
      snap-mandatory
      scrollbar-hide
      pb-4
      "
    >

      {[
        {
          name: "محمد أحمد",
          country: "السودان",
          image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
          text:
            "تمت معادلة شهادتي في مصر خلال فترة قصيرة، وكان فريق UniGuide يتابعني في كل خطوة حتى استلام القرار."
        },

        {
          name: "سارة خالد",
          country: "الإمارات",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
          text:
            "التواصل كان ممتازًا، وتم تجهيز الملف بطريقة احترافية دون أي تعقيدات."
        },

        {
          name: "عبدالله عمر",
          country: "السودان",
          image:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
          text:
            "أنصح أي طالب بخدمات UniGuide، فقد وفروا علي الكثير من الوقت والجهد."
        }

      ].map((review, index) => (

        <div
          key={index}
          className="
          min-w-[92%]
          sm:min-w-[70%]
          lg:min-w-0
          snap-center
          bg-white
          rounded-[30px]
          border
          border-gray-100
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          p-7
          "
        >

          {/* User */}
          <div className="flex items-center gap-4 mb-6">

            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#154734]"
            />

            <div>

              <h3 className="font-bold text-lg text-[#154734]">
                {review.name}
              </h3>

              <p className="text-gray-500 text-sm">
                {review.country}
              </p>

            </div>

          </div>

          {/* Review */}
          <p className="text-gray-600 leading-8 text-[15px]">
            "{review.text}"
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-8 pt-5 border-t">

            <div className="text-yellow-500 text-lg tracking-wider">
              ⭐⭐⭐⭐⭐
            </div>

            <span className="text-sm text-gray-400">
              عميل موثق
            </span>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

    </main>
  );
}