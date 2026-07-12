import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { studyCountries } from "../../data/studyCountries";
export default function StudyCountry() {
  const { country } = useParams();

  const data = country ? studyCountries[country] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!data) {
    return (
      <div className="container mx-auto py-32 text-center">
        <h1 className="text-4xl font-bold mb-4">
          الدولة غير موجودة
        </h1>

        <Link
          to="/services"
          className="inline-block mt-6 px-6 py-3 bg-[#154734] text-white rounded-xl"
        >
          العودة للخدمات
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white">

      {/* Hero */}
      <section
        className="relative h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${data.heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl font-bold mb-4">
            {data.name}
          </h1>

          <p className="max-w-2xl mx-auto">
            ابدأ رحلتك الدراسية مع UniGuide
          </p>
        </div>
      </section>

      {/* نبذة */}
      <section className="container mx-auto px-2 py-6">
  <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-10">

    {/* العنوان */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-10 bg-[#154734] rounded-full"></div>

      <h2 className="text-3xl font-bold text-[#0d2b5e]">
        نبذة عن الجامعة
      </h2>
    </div>

    {/* المحتوى */}
    <p className="text-gray-700 leading-9 text-lg text-justify">
      {data.overview}
    </p>

  </div>
</section>

      {/* لماذا الدراسة */}
     <section className="container mx-auto px-2 py-6">
  <div className="max-w-5xl mx-auto">

    {/* السؤال */}
    <div className="bg-[#0d2b5e] text-white rounded-t-2xl px-8 py-5">
      <h2 className="text-[26px] font-bold">
        لماذا {data.name}؟
      </h2>
    </div>

    {/* الإجابة */}
    <div className="bg-white border border-t-0 border-gray-200 rounded-b-2xl p-8 shadow-lg">
      <p className="text-gray-700 text-lg leading-9">
        {data.whyStudy}
      </p>
    </div>

  </div>
</section>

      {/* الجامعات */}
    {/* أفضل الجامعات */}
<section className="container mx-auto px-2 py-6">

  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-[#0d2b5e]">
      أفضل الجامعات
    </h2>

    <p className="text-gray-600 mt-3">
      تعرف على أشهر الجامعات في {data.name}
    </p>
  </div>

  <div className="grid sm:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-3">

    {data.universities.map((item) => (

      <div
        key={item.name}
        className="bg-white rounded-[0px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
      >

        {/* صورة الجامعة */}
        <div className="relative h-24">

          <img
            src={item.cover}
            alt={item.name}
            className="w-full h-full object-cover"
          />

          {/* اللوقو */}
          <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2">

            <div className="w-12 h-12 rounded-full bg-white p-2 shadow-xl">

              <img
                src={item.logo}
                alt={item.name}
                className="w-full h-full rounded-full object-contain"
              />

            </div>

          </div>

        </div>

        {/* اسم الجامعة */}
        <div className="pt-8 pb-6 px-4 text-center">

          <h3 className="font-bold text-[14px] text-[#0d2b5e]">
            {item.name}
          </h3>

         

        </div>

      </div>

    ))}

  </div>

</section>

      {/* التخصصات */}
      <section className="container mx-auto px-2 py-6">
       
        <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-[#0d2b5e]">
      أشهر التخصصات
    </h2>

    
  </div>

        <div className="flex flex-wrap gap-4">
          {data.majors.map((item) => (
            <span
              key={item}
              className="bg-[#0d2b5e] text-white px-4 py-1 rounded-[5px]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* شروط القبول */}
     {/* شروط التقديم */}
<section className="container mx-auto px-2 py-6">

  {/* العنوان */}
  <div className="text-center mb-14">

    <span className="text-[#0d2b5e] font-semibold">
      المستندات المطلوبة
    </span>

    <h2 className="text-4xl font-bold mt-3">
      شروط التقديم
    </h2>

    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      تأكد من تجهيز جميع المستندات التالية قبل البدء في تقديم طلب الدراسة.
    </p>

  </div>

  {/* البطاقات */}
  <div className="grid md:grid-cols-2  lg:grid-cols-3 gap-6">

    {data.requirements.map((item, index) => (

      <div
        key={item}
        className="bg-white border border-gray-200 rounded-2xl p-3 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="flex items-center gap-4">

          {/* رقم */}
          <div className="w-8 h-8 rounded-full bg-[#0d2b5e] text-white flex items-center justify-center font-bold text-lg">
            {index + 1}
          </div>

          {/* النص */}
          <div>
            <h3 className="font-bold text-[#0d2b5e] mb-1">
              {item}
            </h3>

            <p className="text-sm text-gray-500">
              مطلوب عند تقديم طلب الدراسة.
            </p>
          </div>

        </div>

      </div>

    ))}

  </div>

</section>

     

    

      {/* الفيزا */}
   <section className="container mx-auto px-2 py-6">

  <div className="bg-white rounded-[6px] shadow-xl overflow-hidden grid lg:grid-cols-2">

    {/* الصورة */}
    <div className="relative h-[220px] lg:h-auto">
      <img
        src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200"
        alt="Student Visa"
        className="w-full h-full object-cover"
      />
    </div>

    {/* المحتوى */}
    <div className="p-7 flex flex-col justify-center">

     

      <h2 className="text-[26px] font-bold text-[#0d2b5e] mb-6">
        التأشيرة الدراسية
      </h2>

      <p className="text-gray-600 leading-9 text-lg">
        {data.visa}
      </p>

      <div className="mt-5 flex items-center gap-3">

        <div className="w-10 h-10 rounded-[50px] bg-[#0d2b5e] flex items-center justify-center text-white text-xl">
          ✓
        </div>

        <div>
          <h4 className="font-bold">
            دعم كامل    
          </h4>

          <p className="text-gray-500 text-sm">
            يساعدك فريق UniGuide في تجهيز المستندات ومتابعة إجراءات الفيزا.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

     

      {/* الخطوات */}
      <section className="container px-2 mx-auto py-6">
      
        <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-[#0d2b5e]">
      خطوات التقديم
    </h2>

   
  </div>

        <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-3">
          {data.steps.map((step, index) => (
            <div
              key={step}
              className="border rounded-2xl p-3 text-center"
            >
              <div className="text-3xl font-bold text-[#154734] mb-3">
                {index + 1}
              </div>

              {step}
            </div>
          ))}
        </div>
      </section>

      {/* الأسئلة */}
      <section className="container mx-auto px-2 py-6">

  <div className="text-center mb-14">
    <span className="text-[#154734] font-semibold">
      FAQ
    </span>

    <h2 className="text-4xl font-bold mt-3">
      الأسئلة الشائعة
    </h2>

    <p className="text-gray-600 mt-4">
      أكثر الأسئلة التي يطرحها الطلاب قبل بدء رحلة الدراسة.
    </p>
  </div>

  <div className="max-w-4xl mx-auto space-y-5">

    {data.faq.map((item, index) => {

      const isOpen = openFaq === index;

      return (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md border overflow-hidden transition-all"
        >

          <button
            onClick={() =>
              setOpenFaq(isOpen ? null : index)
            }
            className="w-full flex items-center justify-between p-6 text-right"
          >

            <h3 className="font-bold text-[16px] text-[#0d2b5e]">
              {item.question}
            </h3>

            <span
              className={`text-2xl text-[#0d2b5e] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>

          </button>

          <div
            className={`transition-all duration-500 overflow-hidden ${
              isOpen ? "max-h-96 p-6 pt-0" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 leading-8">
              {item.answer}
            </p>
          </div>

        </div>

      );
    })}

  </div>

</section>

      {/* فورم */}
    <section className="container mx-auto px-2 py-6">

  <div
    className="relative overflow-hidden rounded-[10px]"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >

    <div className="absolute inset-0 bg-[#154734]/80"></div>

    <div className="relative z-10 py-20 px-10 text-center text-white">

     

      <h2 className="text-[23px] md:text-5xl font-bold ">
        ابدأ رحلتك الدراسية الآن
      </h2>

      <p className="max-w-3xl mx-auto mt-3 leading-7 text-lg text-white/90">
        إذا كنت ترغب بالدراسة في {data.name}، فإن فريق UniGuide سيتولى جميع
        إجراءات التقديم حتى حصولك على القبول الجامعي والتأشيرة.
      </p>

      <Link
        to={`/scholarship-application?country=${data.slug}`}
        className="inline-block mt-5 bg-white text-[#154734] font-bold px-5 py-2 rounded-[10px] hover:scale-105 transition"
      >
        قدم الآن
      </Link>

    </div>

  </div>

</section>

    </main>
  );
}