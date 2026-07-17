import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TeamSection } from "../components/TeamSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import EgyptMap from "../components/EgyptMap";
import { ContactSection } from "../components/ContactSection";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";



import WhyTrueUniv from "../components/WhyTrueUniv";
import TimelineSection from "../components/TimelineSection"
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f0f7f3]">

      {/* ===== Back Button ===== */}
     

      {/* ===== Hero Section ===== */}
     

      <section className="relative overflow-hidden bg-gradient-to-br from-[#2f3b69] via-[#2f3b69] to-[#2f3b69] text-white">

  {/* Background */}

  <div className="absolute inset-0">
    <img
      src="https://i.pinimg.com/736x/bc/4d/77/bc4d77a98407620996ce565424539b2c.jpg"
      alt=""
      className="w-full h-full object-cover opacity-15"
    />
  </div>

  {/* Shapes */}

  

  <div className="relative max-w-7xl mx-auto px-5 py-28">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

        

        <h1 className="mt-5 text-5xl lg:text-7xl font-black leading-tight">

          نبني مستقبلك
          <br />

          <span className="text-[#ffdf20]">

            خطوة بخطوة

          </span>

        </h1>

        <p className="mt-8 text-lg leading-9 text-gray-200 max-w-xl">

          في UniGuide نؤمن أن كل طالب يستحق فرصة تعليمية
          تناسب أحلامه وطموحه، لذلك نرافقه منذ اختيار
          التخصص وحتى الوصول إلى الجامعة وبناء مستقبله
          الأكاديمي والمهني.

        </p>

        <div className="flex flex-wrap gap-9 mt-5">

          <button className="bg-[#ffdf20] text-[#154734] px-10 py-2 rounded-[10px] font-bold hover:scale-105 transition">

            تعرف علينا

          </button>

          <button className="border border-white/40 backdrop-blur-md px-10 py-2 rounded-[10px] hover:bg-white/10 transition">

            خدماتنا

          </button>

        </div>

      </div>

      {/* Right */}

      <div className="relative">

       

        {/* Card */}

        

      </div>

    </div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}

    <div className="text-center mb-10">

      

      <h2 className="text-5xl text-[#2f3b69] font-black mt-4">

        رؤيتنا ورسالتنا

      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">

        نطمح إلى بناء مستقبل تعليمي أفضل من خلال توفير الإرشاد،
        والخدمات، والشراكات التي تساعد الطلاب على الوصول إلى
        أفضل الفرص الأكاديمية حول العالم.

      </p>

    </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  {/* Vision */}

  <div className="group relative bg-white rounded-[8px] border border-gray-100 p-6 md:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">

    {/* Top Border */}

    <div className="absolute top-0 left-0 w-full h-1 bg-[#2f3b69]"></div>

    {/* Background Decoration */}

    <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#2f3b69]/5 rounded-full"></div>

    {/* Icon */}

   <div className="flex items-center gap-5 mb-8">

  {/* Icon */}

  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-3xl md:text-4xl shadow-lg flex-shrink-0">

    🌍

  </div>

  {/* Title */}

  <h3 className="text-2xl md:text-3xl font-black text-[#2f3b69]">

    رؤيتنا

  </h3>

</div>

    {/* Text */}

    <p className="text-gray-600 leading-8 md:leading-9 text-[15px] md:text-lg">

      أن نصبح الشريك التعليمي الأكثر ثقة للطلاب حول العالم،
      وأن نبني مجتمعًا عالميًا من المرشدين والخبراء يربط كل
      طالب بالفرصة التعليمية التي يستحقها، دون أن تكون
      الحدود الجغرافية عائقًا أمام مستقبله.

    </p>

    </div>

    {/* Mission */}

    <div className="group relative bg-[#2f3b69] rounded-[9px] p-6 md:p-10 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden text-white">

    {/* Top Border */}

    <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>

    {/* Background Decoration */}

    <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full"></div>

    {/* Icon */}

    <div className="flex items-center gap-5 mb-8">

  {/* Icon */}

  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#f8fafc] text-white flex items-center justify-center text-3xl md:text-4xl shadow-lg flex-shrink-0">

    🎯

  </div>

  {/* Title */}

  <h3 className="text-2xl md:text-3xl font-black text-[#f8fafc]">

    رسالتنا

  </h3>

</div>

  

    

    {/* Text */}

    <p className="leading-8 md:leading-9 text-white/90 text-[15px] md:text-lg">

      نساعد الطلاب على اتخاذ قرارات تعليمية صحيحة من خلال
      تقديم الإرشاد، والخدمات التعليمية، والبرامج التدريبية،
      وبناء جسور تربطهم بالجامعات والفرص الأكاديمية حول
      العالم.

    </p>

  </div>

</div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-3">

    {/* Heading */}

    <div className="text-center mb-20">

     

      <h2 className="text-5xl font-black mt-4">
        القيم التي نقود بها رحلتنا
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">
        في UniGuide لا نقدم خدمات تعليمية فقط، بل نبني علاقة طويلة
        الأمد مع كل طالب، ترتكز على مجموعة من المبادئ التي تشكل
        أساس كل قرار نتخذه.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-4">

      {[
        {
          icon: "🎓",
          title: "الطالب أولاً",
          desc: "كل قرار نتخذه يبدأ من مصلحة الطالب، لأن نجاحه هو المقياس الحقيقي لنجاحنا.",
        },
        {
          icon: "🤝",
          title: "الثقة",
          desc: "نبني علاقاتنا على الشفافية، والالتزام، والمصداقية في كل خطوة من رحلة الطالب.",
        },
        {
          icon: "🌍",
          title: "العالمية",
          desc: "نؤمن أن التعليم فرصة للجميع، بغض النظر عن الجنسية أو مكان الإقامة.",
        },
        {
          icon: "💡",
          title: "الابتكار",
          desc: "نطوّر حلولًا تعليمية حديثة وتقنيات تساعد الطلاب على اتخاذ قرارات أفضل.",
        },
        {
          icon: "📚",
          title: "التعلم المستمر",
          desc: "رحلة الطالب لا تنتهي بالحصول على القبول، بل تبدأ منها نحو مستقبل أفضل.",
        },
        {
          icon: "🚀",
          title: "الأثر",
          desc: "نقيس نجاحنا بعدد القصص التي ساعدنا في تغييرها وصناعة مستقبلها.",
        },
      ].map((item) => (

       <div
  key={item.title}
  className="group bg-[#f8fafc] rounded-[10px] p-3 border border-gray-100 hover:border-[#154734] hover:-translate-y-3 hover:shadow-2xl transition-all duration-500 text-center"
>

  {/* Icon */}

  <div className="w-18 h-18 mx-auto rounded-[14px] bg-[#2f3b69] text-white flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition duration-300">

    {item.icon}

  </div>

  {/* Title */}

  <h3 className="text-2xl font-black text-[#154734] mb-1">

    {item.title}

  </h3>

  {/* Description */}

  <p className="text-gray-600 leading-8 text-[15px]">

    {item.desc}

  </p>

</div>

      ))}

    </div>

  </div>

</section>

<section className="py-28 bg-[#ffffff]">

  <div className="max-w-6xl mx-auto px-5">

    {/* Heading */}

    <div className="text-center mb-20">


      <h2 className="text-5xl font-black mt-2">
        لماذا UniGuide؟
      </h2>

      <p className="text-gray-600 mt-2 max-w-3xl mx-auto leading-9">

        لأننا لا نقدم خدمة فقط...
        بل نبني رحلة تعليمية متكاملة تبدأ مع الطالب
        وتستمر حتى بعد الجامعة.

      </p>

    </div>

    <div className="relative max-w-4xl mx-auto">

      {/* Line */}

      <div className="absolute right-6 top-0 bottom-0 w-[3px] bg-[#154734]/15"></div>

      {[
        {
          title: "نبدأ بالطالب",
          text: "لا نبدأ بالجامعة أو الدولة، بل نفهم أهداف الطالب وطموحه   .",
          icon: "👨‍🎓",
        },
        {
          title: "نبني خطة تعليمية",
          text: "لا نبيع قبولات جامعية، بل نصمم لكل طالب مسارًا أكاديميًا يناسب مستقبله.",
          icon: "🗺️",
        },
        {
          title: "رحلتنا لا تنتهي بالقبول",
          text: "بعد القبول الجامعي نستمر مع الطالب في التأشيرة، والسكن، والاستقبال، والاستقرار.",
          icon: "✈️",
        },
        {
          title: "لكل طالب قصة مختلفة",
          text: "لهذا لا نقدم حلولًا جاهزة، بل نقدم استشارات مخصصة تناسب كل حالة.",
          icon: "💡",
        },
        {
          title: "نعمل معك",
          text: "نؤمن بالشراكة مع الطالب، ونرافقه في اتخاذ القرار الصحيح خطوة بخطوة.",
          icon: "🤝",
        },

      ].map((item, index) => (

        <div
          key={index}
          className="relative flex gap-2 mb-8"
        >

          {/* Circle */}

          <div className="relative z-10">

            <div className="w-14 h-14 rounded-full bg-[#2f3b69] text-white flex items-center justify-center text-2xl shadow-lg">

              {item.icon}

            </div>

          </div>

          {/* Card */}

          <div className="flex-1 bg-white rounded-[10px] p-2 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

            <h3 className="text-[18px] font-black text-[#2f3b69] mb-2">

              {item.title}

            </h3>

            <p className="text-gray-600 leading-7">

              {item.text}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}

    <div className="text-center mb-20">

      

      <h2 className="text-5xl font-black mt-4">
        ماذا نقدم؟
      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">

        نقدم منظومة تعليمية متكاملة ترافق الطالب منذ بداية التفكير
        في الدراسة وحتى الاستقرار في جامعته وبناء مستقبله الأكاديمي
        والمهني.

      </p>

    </div>

   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">

  {[
    {
      icon: "🌍",
      title: "الدراسة بالخارج",
      desc: "اختيار الدولة والجامعة والتخصص المناسب وفق أهدافك الأكاديمية.",
    },
    {
      icon: "🎓",
      title: "المنح الدراسية",
      desc: "البحث عن المنح وتجهيز ملف تنافسي يزيد من فرص القبول.",
    },
    {
      icon: "🩺",
      title: "الامتياز الطبي",
      desc: "برامج سنة الامتياز والإجراءات الخاصة بالكليات الطبية.",
    },
    {
      icon: "📑",
      title: "معادلة الشهادات",
      desc: "متابعة جميع إجراءات معادلة المؤهلات داخل وخارج الدولة.",
    },
    {
      icon: "✈️",
      title: "التأشيرات",
      desc: "المساعدة في استخراج التأشيرات وتجهيز جميع المتطلبات.",
    },
    {
      icon: "📚",
      title: "الترجمة ",
      desc: "ترجمة المستندات واعتمادها لدى الجهات الرسمية.",
    },
    {
      icon: "🏠",
      title: " والاستقبال",
      desc: "توفير خيارات السكن والاستقبال لضمان بداية مريحة.",
    },
    {
      icon: "💬",
      title: "الاستشارات ",
      desc: "جلسات فردية مع خبراء لمساعدتك في اتخاذ القرار الصحيح.",
    },
  ].map((service, index) => (

    <div
      key={index}
      className="group bg-white rounded-[10px] border border-gray-100 p-5 md:p-7 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#154734] transition-all duration-500 flex flex-col"
    >

      {/* Number */}

      <div className="flex justify-between items-center mb-3">

        <div className="w-9 h-9 rounded-full bg-[#2f3b69]/10 text-[#2f3b69] font-bold flex items-center justify-center text-sm">

          {(index + 1).toString().padStart(2, "0")}

        </div>

      </div>

      {/* Icon */}

      <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-3xl md:text-4xl mb-5 group-hover:scale-110 duration-300">

        {service.icon}

      </div>

      {/* Title */}

      <h3 className="text-lg md:text-xl font-black text-[#2f3b69] text-center mb-3">

        {service.title}

      </h3>

      {/* Description */}

      <p className="text-gray-600 text-center leading-7 text-sm md:text-base flex-1">

        {service.desc}

      </p>

      {/* Button */}

     
    </div>

  ))}

</div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Founder Image */}

      <div className="relative">

        <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#154734]/10 rounded-full blur-3xl"></div>

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
          alt="Founder"
          className="rounded-[10px] w-full object-cover shadow-2xl"
        />

      </div>

      {/* Content */}

      <div>

        <span className="text-[#2f3b69] font-bold uppercase tracking-wider">

          Founder Message

        </span>

        <h2 className="text-4xl text-[#ffdf20] font-black mt-2 mb-10">

          رسالة من المؤسس

        </h2>

        <div className="bg-white rounded-[10px] p-10 shadow-xl border relative overflow-hidden">

          {/* Quote */}

          <div className="absolute -top-8 left-8 text-[120px] font-black text-[#154734]/10">

            “

          </div>

          <p className="leading-10 text-gray-700 text-lg relative z-10">

            في <span className="font-bold text-[#2f3b69]">UniGuide</span>،
            لا نؤمن أن التعليم هو مجرد قبول جامعي أو ورقة رسمية.

            <br /><br />

            نؤمن أن كل طالب يحمل حلمًا يستحق من يؤمن به،
            ويوجهه، ويمهد له الطريق.

            <br /><br />

            لهذا أسسنا UniGuide،
            لنكون أكثر من شركة تعليمية؛
            لنكون شريكًا في رحلة الطالب،
            ومصدرًا للثقة،
            ومنصة تربط الطموح بالفرص.

            <br /><br />

            رؤيتنا لا تقتصر على مساعدة الطلاب في الدراسة بالخارج،
            بل تمتد إلى بناء مجتمع عالمي من المرشدين والخبراء
            والخريجين يتعاونون لدعم الأجيال القادمة.

            <br /><br />

            لأننا نؤمن أن التعليم الجيد
            لا يغيّر حياة فرد واحد فقط...

            <span className="font-bold text-[#2f3b69]">

              بل يغيّر مستقبل مجتمعات بأكملها.

            </span>

          </p>

          <div className="mt-10 pt-4 border-t">

            <h3 className="font-black text-2xl text-[#2f3b69]">

              مؤسس UniGuide

            </h3>

            <p className="text-gray-500 mt-2">

              Founder & CEO

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left */}

      <div>

       

        <h2 className="text-5xl font-black mt-2 mb-5">

          رؤيتنا للمستقبل

        </h2>

        <p className="text-gray-600 leading-10 text-lg">

          نعمل على بناء أكبر شبكة عالمية من المرشدين التعليميين،
          تضم طلابًا، وخبراء، وخريجين من مختلف دول العالم،
          لمساعدة كل طالب على الوصول إلى المعلومات الصحيحة،
          واتخاذ القرار المناسب،
          وتحقيق أهدافه الأكاديمية والمهنية بثقة.

        </p>

        <p className="text-gray-600 leading-10 text-lg mt-8">

          نسعى إلى إنشاء منظومة تعليمية متكاملة،
          تجعل الوصول إلى الجامعات،
          والمنح،
          وبرامج التبادل،
          والإرشاد الأكاديمي،
          أكثر سهولة وعدالة لكل طالب،
          بغض النظر عن دولته أو خلفيته.

        </p>

        <div className="mt-10 bg-[#2f3b69] text-white rounded-3xl p-8">

          <h3 className="text-2xl font-black mb-5">

            رؤيتنا الكبرى

          </h3>

          <p className="leading-7 text-white/90">

            أن تصبح UniGuide المرجع التعليمي الأول عالميًا،
            ومنصة تربط كل طالب بالفرصة التي يستحقها،
            دون أن تكون الحدود الجغرافية عائقًا أمام مستقبله.

          </p>

        </div>

      </div>

      {/* Right */}

      <div className="relative">

        <div className="absolute inset-0 bg-[#154734]/10 rounded-[40px] blur-3xl"></div>

        <div className="relative bg-[#f8fafc] rounded-[10px] p-6 border shadow-xl">

          {[
            {
              icon: "🌍",
              title: "مجتمع عالمي",
              desc: "ربط الطلاب والخريجين والمرشدين حول العالم.",
            },
            {
              icon: "🎓",
              title: "فرص تعليمية",
              desc: "الوصول إلى الجامعات والمنح الدولية بسهولة.",
            },
            {
              icon: "🤝",
              title: "شراكات استراتيجية",
              desc: "التعاون مع الجامعات والمؤسسات التعليمية.",
            },
            {
              icon: "🚀",
              title: "نمو مستمر",
              desc: "تطوير حلول تعليمية مبتكرة تخدم ملايين الطلاب.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="flex gap-5 mb-8 last:mb-0"
            >

              <div className="w-16 h-16 rounded-[10px] bg-[#2f3b69] text-white flex items-center justify-center text-3xl">

                {item.icon}

              </div>

              <div>

                <h3 className="font-black text-xl text-[#2f3b69]">

                  {item.title}

                </h3>

                <p className="text-gray-600 mt-1 leading-6">

                  {item.desc}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>
<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Content */}

      <div>

        <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#154734]/10 text-[#2f3b69] font-bold">

          🎓 Scholarships Hub

        </span>

        <h2 className="text-4xl text-[#2f3b69] font-black mt-6 leading-tight">

          بوابتك إلى
          <span className="text-[#ffdf20]">
            {" "}المنح الدراسية العالمية
          </span>

        </h2>

        <p className="text-gray-600 leading-9 text-lg mt-8">

          سواء كنت تبحث عن منحة ممولة بالكامل أو جزئيًا،
          نحن نساعدك في العثور على الفرصة المناسبة،
          وتجهيز ملف تنافسي يزيد من فرص قبولك.

        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-7">

          <div className="bg-white rounded-[10px] p-3 shadow border">

            <h4 className="font-bold text-[#2f3b69] mb-2">

              🎯 اختيار المنحة المناسبة

            </h4>

            <p className="text-gray-600 text-sm leading-7">

              نساعدك على اختيار أفضل المنح وفقًا لمؤهلاتك وأهدافك.

            </p>

          </div>

          <div className="bg-white rounded-2xl p-5 shadow border">

            <h4 className="font-bold text-[#154734] mb-2">

              📄 تجهيز الملف

            </h4>

            <p className="text-gray-600 text-sm leading-6">

              مراجعة جميع المستندات لضمان جاهزيتها قبل التقديم.

            </p>

          </div>

          <div className="bg-white rounded-[10px] p-3 shadow border">

            <h4 className="font-bold text-[#2f3b69] mb-2">

              ✍ كتابة Motivation Letter

            </h4>

            <p className="text-gray-600 text-sm leading-7">

              إعداد خطاب دافع احترافي يزيد من فرص القبول.

            </p>

          </div>

          <div className="bg-white rounded-[10px] p-3 shadow border">

            <h4 className="font-bold text-[#2f3b69] mb-2">

              🎤 الاستعداد للمقابلة

            </h4>

            <p className="text-gray-600 text-sm leading-7">

              تدريب كامل على مقابلات المنح والقبول الجامعي.

            </p>

          </div>

        </div>

        <div className="flex flex-wrap gap-3 mt-8">

          <button className="bg-[#ffdf20] text-[#103826] px-5 py-3 rounded-[10px] font-bold hover:bg-[#103826] transition">

            ابدأ البحث عن منحة

          </button>

          <button className="border border-[#154734] text-[#154734] px-4 py-3 rounded-[10px] font-bold hover:bg-[#154734] hover:text-white transition">

            تواصل مع مستشار

          </button>

        </div>

      </div>

      {/* Image */}

      <div className="relative">

        <img
          src="https://i.pinimg.com/1200x/70/a6/86/70a686f3e0a1490c6d7fa642eb96460e.jpg"
          alt=""
          className="rounded-[10px] shadow-2xl"
        />

        <div className="absolute -bottom-8 -left-4 bg-white rounded-[10px] shadow-xl p-2">

          <p className="text-1xl font-black text-[#154734]">

            +500

          </p>

          <p className="text-gray-500 mt-1">

            منحة دراسية متاحة

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}

    <div className="text-center mb-20">

    

      <h2 className="text-4xl font-black mt-6">

        كيف نساعدك في الفوز بالمنحة؟

      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">

        لا نكتفي بإرسال روابط المنح، بل نرافقك في كل خطوة حتى يصبح
        ملفك جاهزًا للمنافسة على أفضل الفرص التعليمية.

      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          number: "01",
          title: "اختيار المنحة ",
          desc: "نرشح لك أفضل المنح حسب معدلك، تخصصك، وجنسيتك.",
          icon: "🎯",
        },

        {
          number: "02",
          title: "مراجعة الأهلية",
          desc: "نتأكد من استيفائك لجميع شروط المنحة قبل التقديم.",
          icon: "✅",
        },

        {
          number: "03",
          title: "تجهيز الملف",
          desc: "تنظيم جميع المستندات المطلوبة بطريقة احترافية.",
          icon: "📁",
        },

        {
          number: "04",
          title: "كتابة Motivation Letter",
          desc: "صياغة خطاب دافع احترافي يعكس شخصيتك وطموحك.",
          icon: "✍️",
        },

        {
          number: "05",
          title: "مراجعة السيرة الذاتية",
          desc: "تحسين الـ CV ليتوافق مع معايير الجامعات الدولية.",
          icon: "📄",
        },

        {
          number: "06",
          title: "الاستعداد للمقابلة",
          desc: "تدريب عملي على مقابلات المنح والجامعات الدولية.",
          icon: "🎤",
        },

      ].map((item) => (

        <div
          key={item.number}
          className="group bg-[#f8fafc] rounded-[10px] p-4 border hover:border-[#154734] hover:shadow-2xl transition duration-300"
        >

         <div className="flex items-center justify-between mb-6">

  {/* Icon + Title */}
  <div className="flex items-center gap-4">

    <div className="w-16 h-16 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-3xl flex-shrink-0">
      {item.icon}
    </div>

    <h3 className="text-xl md:text-2xl font-bold text-[#2f3b69] leading-tight">
      {item.title}
    </h3>

  </div>

  {/* Number */}
  <span className="text-4xl md:text-5xl font-black text-[#154734]/15">
    {item.number}
  </span>

</div>

          

          <p className="text-gray-600 leading-8">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

    {/* CTA */}

   <div className="mt-20 relative overflow-hidden rounded-[10px]">

  {/* Background Image */}

  <img
    src="https://i.pinimg.com/1200x/49/f6/41/49f6419c3848e6a109cc019e5d10460a.jpg"
    alt="Scholarship"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-[#2f3b69]/85"></div>

  {/* Content */}

  <div className="relative z-10 p-5 md:p-12 text-center text-white">

   

    <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
      هل أنت مستعد لبدء رحلة المنحة؟
    </h3>

    <p className="max-w-3xl mx-auto leading-8 md:leading-9 text-white/90 text-[15px] md:text-lg">
      دع فريق UniGuide يساعدك في تجهيز ملف احترافي،
      واختيار أفضل الفرص، وزيادة فرص قبولك في المنح الدراسية العالمية.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

      <button className="bg-white text-[#154734] px-3 py-2 rounded-[10px] font-bold hover:scale-105 transition-all">
          تواصل معنا
      </button>

     

    </div>

  </div>

</div>

  </div>

</section>



<section className="py-10 bg-[#ffffff]">

  <div className="max-w-7xl mx-auto px-5">

    {/* Heading */}

    <div className="text-center mb-20">

      <span className="inline-block px-5 py-2 rounded-full bg-[#154734]/10 text-[#2f3b69] font-bold">

        Contact Us

      </span>

      <h2 className="text-5xl text-[#2f3b69] font-black mt-5">

        تواصل مع UniGuide

      </h2>

      <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-9">

        سواء كنت ترغب في الدراسة بالخارج، أو التقديم على منحة،
        أو تحتاج إلى استشارة تعليمية، يسعد فريق UniGuide بمساعدتك.

      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Contact Info */}

      <div className="space-y-6">

        <div className="bg-white rounded-[30px] p-8 shadow border">

          <h3 className="text-2xl font-black text-[#154734] mb-8">

            معلومات التواصل

          </h3>

          <div className="space-y-6">

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-2xl">

                📍

              </div>

              <div>

                <h4 className="font-bold text-[#2f3b69]">

                  العنوان

                </h4>

                <p className="text-gray-600">

                  يضاف عنوان الشركة هنا

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-2xl">

                📧

              </div>

              <div>

                <h4 className="font-bold text-[#2f3b69]">

                  البريد الإلكتروني

                </h4>

                <p className="text-gray-600">

                  info@uniguide.com

                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#2f3b69] text-white flex items-center justify-center text-2xl">

                📞

              </div>

              <div>

                <h4 className="font-bold text-[#2f3b69]">

                  الهاتف

                </h4>

                <p className="text-gray-600">

                  +20 XXX XXX XXXX

                </p>

              </div>

            </div>

          </div>

          {/* Social */}

          <div className="border-t mt-10 pt-8">

            <h4 className="font-bold mb-5">

              تابعنا

            </h4>

            <div className="flex gap-4">

  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaFacebookF size={20} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-[#E4405F] text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaYoutube size={20} />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition"
  >
    <FaLinkedinIn size={20} />
  </a>

</div>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="bg-white rounded-[35px] p-10 shadow-xl border">

        <h3 className="text-3xl text-[#2f3b69] font-black mb-8">

          أرسل استفسارك

        </h3>

        <div className="space-y-5">

          <input
            placeholder="الاسم الكامل"
            className="w-full h-14 rounded-xl border px-5 outline-none focus:border-[#154734]"
          />

          <input
            placeholder="البريد الإلكتروني"
            className="w-full h-14 rounded-xl border px-5 outline-none focus:border-[#154734]"
          />

          <input
            placeholder="رقم الهاتف"
            className="w-full h-14 rounded-xl border px-5 outline-none focus:border-[#154734]"
          />

          <select className="w-full h-14 rounded-xl border px-5">

            <option>اختر الخدمة</option>
            <option>الدراسة بالخارج</option>
            <option>المنح الدراسية</option>
            <option>الاستشارات التعليمية</option>
            <option>معادلة الشهادات</option>

          </select>

          <textarea
            rows={5}
            placeholder="اكتب رسالتك..."
            className="w-full rounded-xl border p-5 outline-none focus:border-[#154734]"
          />

          <button className="w-full h-14 rounded-xl bg-[#2f3b69] text-white font-bold hover:bg-[#2f3b69] transition">

            إرسال الرسالة

          </button>

        </div>

      </div>

    </div>

  </div>

</section>




            
            

      
    

     
      
      {/* ===== Content Section ===== */}
    
           
    

      

   
      

   

      
      

      

      {/* ======= زر واتساب عائم ======= */}
        <a
          href="https://wa.me/201000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white px-3 py-3 rounded-[100px] shadow-lg flex items-center justify-center hover:bg-green-600 transition text-xl"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
            {/* <TeamSection /> */}


    </div>
  );
}