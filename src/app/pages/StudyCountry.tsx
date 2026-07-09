import { useParams, Link } from "react-router-dom";
import { studyCountries } from "../../data/studyCountries";
export default function StudyCountry() {
  const { country } = useParams();

  const data = country ? studyCountries[country] : undefined;

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
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
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
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          نبذة
        </h2>

        <p className="leading-9 text-gray-700">
          {data.overview}
        </p>
      </section>

      {/* لماذا الدراسة */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          لماذا {data.name}؟
        </h2>

        <p className="leading-9 text-gray-700">
          {data.whyStudy}
        </p>
      </section>

      {/* الجامعات */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-10">
          أفضل الجامعات
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.universities.map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* التخصصات */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-10">
          أشهر التخصصات
        </h2>

        <div className="flex flex-wrap gap-4">
          {data.majors.map((item) => (
            <span
              key={item}
              className="bg-[#154734] text-white px-5 py-2 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* شروط القبول */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          شروط القبول
        </h2>

        <ul className="space-y-4 list-disc pr-6">
          {data.requirements.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* النسب */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          النسب المطلوبة
        </h2>

        <p>{data.grades}</p>
      </section>

      {/* الرسوم */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          الرسوم الدراسية
        </h2>

        <p>{data.tuition}</p>
      </section>

      {/* الفيزا */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          الفيزا
        </h2>

        <p>{data.visa}</p>
      </section>

      {/* المعيشة */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-6">
          التكلفة المعيشية
        </h2>

        <p>{data.livingCost}</p>
      </section>

      {/* الخطوات */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-10">
          خطوات التقديم
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.steps.map((step, index) => (
            <div
              key={step}
              className="border rounded-2xl p-6 text-center"
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
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-10">
          الأسئلة الشائعة
        </h2>

        <div className="space-y-5">
          {data.faq.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl p-5"
            >
              <h3 className="font-bold mb-3">
                {item.question}
              </h3>

              <p className="text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* فورم */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl font-bold mb-8">
          قدم الآن
        </h2>

        <form className="grid md:grid-cols-2 gap-5">

          <input
            className="border p-4 rounded-xl"
            placeholder="الاسم"
          />

          <input
            className="border p-4 rounded-xl"
            placeholder="البريد الإلكتروني"
          />

          <input
            className="border p-4 rounded-xl"
            placeholder="رقم الهاتف"
          />

          <input
            className="border p-4 rounded-xl"
            placeholder="التخصص"
          />

          <textarea
            className="border p-4 rounded-xl md:col-span-2"
            rows={5}
            placeholder="اكتب رسالتك"
          />

          <button
            className="bg-[#154734] text-white py-4 rounded-xl md:col-span-2"
          >
            إرسال الطلب
          </button>

        </form>
      </section>

    </main>
  );
}