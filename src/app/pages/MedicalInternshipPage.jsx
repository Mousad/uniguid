import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MedicalInternshipPage() {
 const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="bg-white">

      {/* Hero */}
      {/* Hero */}
<section
  className="relative overflow-hidden text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=2000&q=80')",
  }}
>
  {/* طبقة تغميق */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-7xl mx-auto px-4 py-22">
     <div>

        <span className="inline-flex items-center bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold mb-2">
           الامتياز  في مصر
        </span>

        <h1 className="text-[30px] lg:text-6xl font-black leading-tight">

         قضاء سنة الامتياز الطبي فى مصر
          
         
        

        </h1>

        <p className="mt-5 text-lg leading-9 text-gray-200 max-w-xl">

        اذا كنت خريج كلية طب خارج مصر و ترغب في قضاء سنة الامتياز فى المستشفيات المصرية فإن UniGuide تتولى جميع الإجراءات من مراجعة الملف و حتى بدء فترة التدريب

        </p>

        <div className="flex flex-wrap gap-3 mt-12">

          <Link
            to="/scholarship-application?service=medical"
            className="bg-white text-[#154734] px-8 py-1 rounded-[10px] font-bold hover:scale-105 transition"
          >
            ابدأ الآن
          </Link>

          <a
            href="#steps"
            className="border border-white px-8 py-1 rounded-[10px] hover:bg-white hover:text-[#154734] transition"
          >
            خطوات التقديم
          </a>

        </div>

      </div>
  </div>
</section>


 



      {/* نبذة عن الامتياز */}
       {/* نبذة عن الامتياز */}

<section className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* الصورة */}

      

      {/* المحتوى */}

      <div>

        <span className="inline-block bg-green-100 text-[#154734] px-4 py-2 rounded-full font-semibold mb-5">
          الامتياز الطبي
        </span>

        <h2 className="text-[29px] font-bold text-gray-900 leading-tight mb-6">
          أكمل رحلتك الطبية داخل
          <span className="text-[#154734]"> المستشفيات المصرية </span>
          
        </h2>

        <p className="text-gray-600 leading-9 text-lg mb-5">

          إذا كنت خريجًا من كلية الطب خارج مصر وترغب في قضاء سنة
          الامتياز بالمستشفيات المصرية، فإن UniGuide تتولى إدارة
          جميع الإجراءات اللازمة بدايةً من مراجعة ملفك وحتى
          استكمال متطلبات التقديم.

        </p>

        <p className="text-gray-600 leading-9 text-lg">

          يعمل فريقنا على مراجعة مستنداتك، تجهيز ملفك،
          متابعة إجراءات المعادلة والتقديم،
          والتنسيق مع الجهات المختصة حتى تبدأ سنة الامتياز
          بكل سهولة واحترافية.

        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/scholarship-application?service=medical"
            className="bg-[#154734] text-white px-5 py-2 rounded-xl hover:bg-[#103826] transition"
          >
            ابدأ تقديم
          </Link>

          <a
            href="#steps"
            className="border border-[#154734] text-[#154734] px-8 py-2 rounded-xl hover:bg-[#154734] hover:text-white transition"
          >
            تعرف على الخطوات
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
      {/* لماذا مصر */}


<section className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        لماذا تختار مصر؟
      </span>

      <h2 className="text-4xl font-bold mt-3">
        مميزات قضاء سنة الامتياز في مصر
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        توفر المستشفيات المصرية بيئة تدريبية قوية تمنحك خبرة عملية
        تساعدك في بناء مستقبلك المهني والاستعداد للدراسات العليا.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-2">

      <div className="bg-white  p-5 shadow hover:shadow-xl transition">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966484.png"
          className="w-14 h-14 mb-6"
          alt=""
        />

        <h3 className="text-[15px] font-bold mb-4">
          مستشفيات تعليمية
        </h3>

        <p className="text-gray-600 leading-6">
          التدريب داخل مستشفيات تعليمية معتمدة تضم نخبة من الأطباء
          والاستشاريين.
        </p>

      </div>

      <div className="bg-white  p-4 shadow hover:shadow-xl transition">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2784/2784445.png"
          className="w-14 h-14 mb-6"
          alt=""
        />

        <h3 className="text-xl font-bold mb-4">
          خبرة سريرية
        </h3>

        <p className="text-gray-600 leading-6">
          اكتساب خبرة عملية من خلال التعامل مع حالات متنوعة داخل
          المستشفيات المصرية.
        </p>

      </div>

      <div className="bg-white  p-5 shadow hover:shadow-xl transition">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          className="w-14 h-14 mb-6"
          alt=""
        />

        <h3 className="text-xl font-bold mb-4">
          تجهيز للمستقبل
        </h3>

        <p className="text-gray-600 leading-6">
          سنة الامتياز تمنحك خبرة قوية تساعدك في التخصص أو الدراسات
          العليا والعمل لاحقًا.
        </p>

      </div>

      <div className="bg-white  p-4 shadow hover:shadow-xl transition">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
          className="w-14 h-14 mb-6"
          alt=""
        />

        <h3 className="text-[15px] font-bold mb-4">
          دعم كامل من UniGuide
        </h3>

        <p className="text-gray-600 leading-6">
          نتابع جميع الإجراءات من مراجعة الملف وحتى بدء سنة الامتياز
          دون تعقيدات.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* رحلة الامتياز */}
  

<section id="steps" className="py-10 bg-white">
  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-20">
      <span className="text-[#154734] font-semibold">
        رحلة الامتياز
      </span>

      <h2 className="text-4xl font-bold mt-3">
        خطوات التقديم مع UniGuide
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-8">
        نرافقك من أول خطوة وحتى بداية سنة الامتياز داخل المستشفيات
        المصرية.
      </p>
    </div>

    <div className="relative">

      {/* الخط */}
      <div className="absolute right-5 top-0 bottom-0 w-1 bg-[#2f3b69]/20"></div>

      {[
        {
          number: "01",
          icon: "📂",
          title: "مراجعة الملف",
          desc: "نتأكد من جاهزية جميع مستنداتك."
        },
        {
          number: "02",
          icon: "🎓",
          title: "معادلة الدرجة",
          desc: "إجراءات معادلة الدرجة العلمية."
        },
        {
          number: "03",
          icon: "📄",
          title: "تجهيز المستندات",
          desc: "ترتيب وتجهيز جميع الوثائق."
        },
        {
          number: "04",
          icon: "📝",
          title: "التقديم",
          desc: "رفع الملف لدى الجهات المختصة."
        },
        {
          number: "05",
          icon: "🔍",
          title: "متابعة الطلب",
          desc: "متابعة الطلب حتى صدور القرار."
        },
        {
          number: "06",
          icon: "✅",
          title: "إصدار الموافقات",
          desc: "استلام الموافقات الرسمية."
        },
        {
          number: "07",
          icon: "🏥",
          title: "بدء الامتياز",
          desc: "الالتحاق بالمستشفى."
        },
      ].map((step) => (

        <div
          key={step.number}
          className="relative flex gap-2 mb-10"
        >

          {/* الرقم */}
          <div className="relative z-10">

            <div className="w-12 h-12 rounded-full bg-[#2f3b69] text-white flex items-center justify-center font-black shadow-lg">
              {step.number}
            </div>

          </div>

          {/* الكرت */}
          <div className="flex-1 bg-[#f8fafc]  shadow-lg p-2 hover:shadow-2xl hover:-translate-y-1 transition">

            <div className="flex items-center gap-2 mb-1">

              

              <h3 className="text-[16px] font-bold text-[#154734]">
                {step.title}
              </h3>

            </div>

            <p className="text-gray-600 leading-8">
              {step.desc}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>
</section>
      {/* المستندات المطلوبة */}


<section className="py-10 bg-white">  

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        المستندات المطلوبة
      </span>

      <h2 className="text-4xl font-bold mt-3">
        جهّز مستنداتك قبل التقديم
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        تجهيز المستندات بشكل صحيح يساهم في تسريع إجراءات التقديم
        والقبول لسنة الامتياز.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-">

      {[
        {
          title: "شهادة البكالوريوس",
          icon: "🎓",
        },
        {
          title: "كشف الدرجات (Transcript)",
          icon: "📄",
        },
        {
          title: "شهادة المعادلة",
          icon: "✅",
        },
        {
          title: "جواز السفر",
          icon: "🛂",
        },
      {
  title: "شهادة الميلاد",
  icon: "📜",
},
        {
          title: "بيانات الوالدين",
          icon: "👨‍👩‍👧",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="bg-white   p-3 shadow hover:shadow-xl transition duration-300 border"
        >

         <div className="w-16 h-16 mx-auto rounded-2xl bg-white text-[#154734] flex items-center justify-center text-3xl mb-6">
  {item.icon}
</div>

          <h3 className="text-[14px] font-bold mb-4 flex items-center justify-center">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-5">
            يجب توفير هذا المستند بصيغة واضحة وحديثة لضمان سرعة مراجعة الطلب.
          </p>

        </div>

      ))}

    </div>

    <div
  className="relative mt-10 rounded-[10px] overflow-hidden text-center text-white"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* طبقة تغميق */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* المحتوى */}
  <div className="relative p-11 md:p-12">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      هل بعض المستندات غير متوفرة لديك؟
    </h3>

    <p className="leading-8 text-gray-200 max-w-3xl mx-auto">
      لا تقلق، سيقوم فريق UniGuide بمراجعة حالتك وإرشادك إلى أفضل
      طريقة لاستكمال المستندات المطلوبة قبل بدء إجراءات التقديم.
    </p>
  </div>
</div>

  </div>

</section>
      {/* خدمات UniGuide */}
  

<section className="py-10 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        خدماتنا
      </span>

      <h2 className="text-4xl font-bold mt-3">
        كيف تساعدك UniGuide؟
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        نتولى جميع الإجراءات الإدارية والرسمية حتى تبدأ سنة الامتياز
        دون عناء، مع متابعة مستمرة في كل خطوة.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: "📂",
          title: "مراجعة الملف",
          desc: "مراجعة جميع مستنداتك والتأكد من استيفاء متطلبات التقديم.",
        },
        {
          icon: "🎓",
          title: "معادلة الدرجة العلمية",
          desc: "المساعدة في إجراءات معادلة الدرجة العلمية للجامعات خارج مصر.",
        },
        {
          icon: "📑",
          title: "متابعة الإجراءات",
          desc: "التنسيق مع الجهات المختصة ومتابعة الطلب حتى صدور الموافقات.",
        },
        {
          icon: "🏥",
          title: "التنسيق مع المستشفيات",
          desc: "اختيار المستشفى المناسب والتنسيق مع الجهات التعليمية.",
        },
        {
          icon: "✈️",
          title: "الاستقبال والسكن",
          desc: "استقبال الطالب من المطار والمساعدة في ترتيب السكن المناسب.",
        },
        {
          icon: "🤝",
          title: "الدعم حتى بدء الامتياز",
          desc: "يبقى فريقنا معك حتى تبدأ سنة الامتياز وتباشر التدريب.",
        },
      ].map((service) => (

        <div
          key={service.title}
          className="bg-gray-50 rounded-[10px] p-4 border hover:border-[#154734] hover:shadow-xl transition-all duration-300"
        >

          <div className="flex items-center gap-4 mb-6">

  <div className="w-16 h-16 rounded-[10px]  text-white flex items-center justify-center text-3xl flex-shrink-0">
    {service.icon}
  </div>

  <h3 className="text-xl font-bold text-[#154734]">
    {service.title}
  </h3>

</div>  
          <p className="text-gray-600 leading-5">
            {service.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
      {/* هل أنا مؤهل */}
  {/* الأسئلة الشائعة */}


      {/* الأسئلة الشائعة */}
     <section className="py-10 bg-white">
  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-16">
      <span className="text-[#154734] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl font-bold mt-3">
        لديك سؤال؟
      </h2>

      <p className="text-gray-600 mt-5 leading-8">
        هذه أكثر الأسئلة التي يطرحها الطلاب حول سنة الامتياز الطبي في مصر.
      </p>
    </div>

    {[
      {
        q: "من يمكنه التقديم لسنة الامتياز في مصر؟",
        a: "يمكن لخريجي كليات الطب من خارج مصر التقديم وفقاً للوائح والاشتراطات المعمول بها."
      },
      {
        q: "هل يجب معادلة الدرجة العلمية؟",
        a: "نعم، معادلة الدرجة العلمية تعتبر خطوة أساسية قبل بدء إجراءات الامتياز."
      },
      {
        q: "كم تستغرق الإجراءات؟",
        a: "تختلف حسب استكمال المستندات والجهات الرسمية، ويتابع فريق UniGuide الملف حتى النهاية."
      },
      {
        q: "هل يمكن بدء الإجراءات من خارج مصر؟",
        a: "نعم، يمكن تجهيز الملف وإنهاء جزء كبير من الإجراءات عن بعد."
      },
      {
        q: "كيف أبدأ؟",
        a: "أرسل مستنداتك الأولية وسيقوم فريقنا بمراجعتها وإرشادك إلى الخطوات التالية."
      }
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
          <h3 className="font-bold text-[16px] text-right">
            {faq.q}
          </h3>

          <ChevronDown
            className={`transition ${
              openFaq === index ? "rotate-180" : ""
            }`}
          />
        </button>

        {openFaq === index && (
          <div className="px-6 pb-6">
            <p className="text-gray-600 leading-8">
              {faq.a}
            </p>
          </div>
        )}
      </div>
    ))}

  </div>
</section>
      {/* نموذج التقديم */}
<section className="py-10 bg-white">

  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-14">

      <span className="text-[#154734] font-semibold">
        قدم الآن
      </span>

      <h2 className="text-4xl font-bold mt-3">
        ابدأ إجراءات سنة الامتياز
      </h2>

      <p className="text-gray-600 mt-4">
        املأ البيانات وسيتواصل معك فريق UniGuide في أقرب وقت.
      </p>

    </div>

    <div className="bg-[#f8fafc] rounded-3xl p-8 shadow-lg">

      <form className="grid md:grid-cols-2 gap-6">

        <input
          className="border rounded-xl p-4"
          placeholder="الاسم رباعي"
        />

        <input
          className="border rounded-xl p-4"
          placeholder="البريد الإلكتروني"
        />

        <input
          className="border rounded-xl p-4"
          placeholder="رقم الهاتف"
        />

        <input
          className="border rounded-xl p-4"
          placeholder="الدولة"
        />

        <input
          className="border rounded-xl p-4 md:col-span-2"
          value="الامتياز الطبي"
          readOnly
        />

        <textarea
          rows={5}
          className="border rounded-xl p-4 md:col-span-2"
          placeholder="اكتب أي تفاصيل إضافية..."
        />

        <button
          className="md:col-span-2 bg-[#154734] hover:bg-[#123d2d] text-white py-4 rounded-xl font-bold transition"
        >
          إرسال الطلب
        </button>

      </form>

    </div>

  </div>

</section>
      {/* CTA */}
<section
  className="relative overflow-hidden py-16 text-white bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/736x/b2/b9/7f/b2b97fab420adedeb0f6c43592a6105a.jpg')",
  }}
>
  {/* طبقة تغميق */}
  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative max-w-6xl mx-auto px-4 text-center">

   
    <h2 className="text-[29px] font-black mt-2">
      مستعد لبدء سنة الامتياز؟
    </h2>

    <p className="max-w-3xl mx-auto mt-6 leading-9 text-gray-200">
      دع فريق UniGuide يتولى جميع الإجراءات نيابةً عنك،
      بدءًا من مراجعة الملف وحتى بدء سنة الامتياز في المستشفى.
    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <Link
        to="/scholarship-application"
        className="bg-white text-[#154734] px-8 py-1  font-bold hover:scale-105 transition"
      >
        قدم الآن
      </Link>

      <a
        href="https://wa.me/+20151096007"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white px-8 py-1  hover:bg-white hover:text-[#154734] transition"
      >
        تواصل عبر واتساب
      </a>

    </div>

  </div>
</section>
    </main>
  );
}