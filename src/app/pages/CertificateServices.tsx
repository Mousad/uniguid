import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock3,
  Users,
  BadgeCheck,
} from "lucide-react";
import { Star, Quote } from "lucide-react";
export default function CertificateServices() {
  return (
    <main className="bg-gray-50">

      {/* Hero Section */}

      <section className="relative h-[390px] md:h-[520px] overflow-hidden">

        <img
          src="https://i.pinimg.com/1200x/b0/a3/8a/b0a38a6d7ea0dc61c39310be4454beac.jpg"
          alt="Certificate Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">

          <div className="max-w-3xl">

           

            <h1 className="text-[29px] md:text-6xl font-bold text-white mb-6">
              استخراج الشهادات الدراسية
            </h1>

            <p className="text-white/90 text-lg leading-8 mb-8">
              نوفر خدمة استخراج الشهادات الدراسية والتوثيقات الرسمية بكل
              احترافية وسرعة، مع متابعة الطلب حتى استلام الشهادة.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="/certificates"
                className="bg-[#2f3b69] hover:bg-[#0f3528] text-white px-8 py-1 rounded-[10px] font-semibold transition"
              >
                ابدأ الآن
              </a>

              <Link
                to="/contactSection"
                className="border border-white text-white hover:bg-white hover:text-black px-8 py-1 rounded-[10px] transition"
              >
                تواصل معنا
              </Link>

            </div>

          </div>

        </div>

      </section>
     {/* أنواع الشهادات */}

      <section className="py-20 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-14">

      <span className="text-[#2f3b69] font-semibold">
        خدمات استخراج الشهادات
      </span>

      <h2 className="text-4xl font-bold mt-3">
        اختر نوع الشهادة
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
        نوفر خدمة استخراج جميع الشهادات السودانية بطريقة احترافية مع متابعة
        كاملة حتى استلام الشهادة.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {/* الشهادة الجامعية */}

      <div className="bg-white rounded-[10px] shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

        <img
          src="https://i.pinimg.com/736x/a4/0c/cf/a40ccf3f32e48ccbed8985edd1f7026b.jpg"
          className="w-full h-56 "
        />

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-[#154734] mb-3">
            الشهادة الجامعية
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            استخراج جميع الشهادات الجامعية والتوثيقات الرسمية.
          </p>

          <a
            href="#university"
            className="inline-block bg-[#2f3b69] text-white px-7 py-3 rounded-[10px]"
          >
            قدم الآن
          </a>

        </div>

      </div>

      {/* الشهادة السودانية */}

      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900"
          className="w-full h-56 object-cover"
        />

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-[#154734] mb-3">
            الشهادة السودانية
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            استخراج الشهادة الثانوية السودانية بجميع اللغات.
          </p>

          <a
            href="#secondary"
            className="inline-block bg-[#2f3b69] text-white px-7 py-3 rounded-[10px]"
          >
            قدم الآن
          </a>

        </div>

      </div>

      {/* شهادة الأساس */}

      <div className="bg-white rounded-[10px] shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">

        <img
          src="https://ultrasudan.ultrasawt.com/sites/ultrasudan.ultrasawt.com/files/styles/news_large/public/2022-07/%D8%A7%D9%85%D8%AA%D8%AD%D8%A7%D9%86%D8%A7%D8%AA%20%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3.jpeg.webp?itok=oC9L05Z-"
          className="w-full h-56 object-cover"
        />

        <div className="p-6 text-center">

          <h3 className="text-2xl font-bold text-[#154734] mb-3">
            شهادة الأساس
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            استخراج شهادة مرحلة الأساس مع متابعة كاملة.
          </p>

          <a
            href="#basic"
            className="inline-block bg-[#2f3b69] text-white px-7 py-3 rounded-[10px]"
          >
            قدم الآن
          </a>

        </div>

      </div>

    </div>

  </div>

      </section>

      {/* ==================== University Certificate ==================== */}

      <section id="university" className="py-24 bg-gray-50">

     <div className="max-w-5xl mx-auto px-4">

     <div className="text-center mb-14">

      <span className="text-[#154734] font-semibold">
        استخراج الشهادة الجامعية
      </span>

      <h2 className="text-4xl font-bold mt-3">
        قدم طلب استخراج الشهادة الجامعية
      </h2>

      <p className="text-gray-600 mt-4">
        أدخل البيانات التالية وسيقوم فريق UniGuide  بالتواصل معك.
      </p>

    </div>

    <form className="bg-white rounded-3xl shadow-xl p-8">

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="الاسم رباعي"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="اسم الجامعة"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="التخصص"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="الرقم الجامعي"
          className="border rounded-xl p-4"
        />

        <input
          type="number"
          placeholder="سنة الدخول"
          className="border rounded-xl p-4"
        />

        <input
          type="number"
          placeholder="سنة التخرج"
          className="border rounded-xl p-4"
        />

        <div>
          <label className="block mb-2 font-semibold">
            صورة شخصية
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            جواز السفر
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-[#2f3b69] hover:bg-[#123a2c] text-white py-4 rounded-xl text-lg font-bold transition"
      >
        إرسال الطلب
      </button>

    </form>

  </div>

      </section>
      <section id="secondary" className="py-24 bg-gray-50">

     <div className="max-w-5xl mx-auto px-4">

     <div className="text-center mb-14">

      <span className="text-[#154734] font-semibold">
        استخراج الشهادة الثانوية
      </span>

      <h2 className="text-4xl font-bold mt-3">
        قدم طلب استخراج الشهادة الثانوية
      </h2>

      <p className="text-gray-600 mt-4">
        أدخل البيانات التالية وسيقوم فريق UniGuide  بالتواصل معك.
      </p>

    </div>

    <form className="bg-white rounded-3xl shadow-xl p-8">

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="الاسم رباعي"
          className="border rounded-xl p-4"
        />
        <input
          type="text"
          placeholder=" اسم الأم رباعى"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="  اسم المدرسة"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="رقم الجلوس"
          className="border rounded-xl p-4"
        />

       

        <input
          type="number"
          placeholder=" سنة الشهادة"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="  بيانات شهادة ثامن"
          className="border rounded-xl p-4"
        />
        <select className="border rounded-xl p-4">

          <option>لغة استخراج الشهادة</option>

          <option>العربية</option>

          <option>الإنجليزية</option>

        </select>

        <div>
          <label className="block mb-2 font-semibold">
            صورة شخصية
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            جواز السفر
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />
        </div>

      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-[#2f3b69] hover:bg-[#123a2c] text-white py-4 rounded-xl text-lg font-bold transition"
      >
        إرسال الطلب
      </button>

    </form>

  </div>

      </section>

      {/* ==================== Basic Certificate ==================== */}

<section id="basic" className="py-24 bg-gray-50">

  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-14">

      <span className="text-[#154734] font-semibold">
        استخراج شهادة الأساس
      </span>

      <h2 className="text-4xl font-bold mt-3">
        قدم طلب استخراج شهادة الأساس
      </h2>

      <p className="text-gray-600 mt-4">
        يرجى تعبئة جميع البيانات المطلوبة حتى يتمكن فريقنا من تنفيذ طلبك.
      </p>

    </div>

    <form className="bg-white rounded-3xl shadow-xl p-8">

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="الاسم رباعي"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="اسم الأم رباعي"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="اسم المدرسة"
          className="border rounded-xl p-4"
        />

        <input
          type="text"
          placeholder="رقم الجلوس"
          className="border rounded-xl p-4"
        />

        <input
          type="number"
          placeholder="سنة الشهادة"
          className="border rounded-xl p-4"
        />

        <select className="border rounded-xl p-4">

          <option>لغة استخراج الشهادة</option>

          <option>العربية</option>

          <option>الإنجليزية</option>

        </select>

        <div>

          <label className="block mb-2 font-semibold">
            جواز السفر
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />

        </div>

        <div>

          <label className="block mb-2 font-semibold">
            الصورة الشخصية
          </label>

          <input
            type="file"
            className="border rounded-xl p-3 w-full"
          />

        </div>

      </div>

      <button
        type="submit"
        className="w-full mt-10 bg-[#2f3b69] hover:bg-[#2f3b69] text-white py-4 rounded-xl text-lg font-bold transition"
      >
        إرسال الطلب
      </button>

    </form>

  </div>

</section>
<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        لماذا نحن؟
      </span>

      <h2 className="text-4xl font-bold mt-3">
        لماذا تختار UniGuide 
      </h2>

      <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
        نساعدك في استخراج الشهادات بأسرع وقت مع متابعة مستمرة حتى استلامها.
      </p>

    </div>

    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-4 gap-5">

      {/* Card */}

      <div className="bg-gray-50 rounded-[12px] p-5 text-center shadow hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#2f3b69] mx-auto flex items-center justify-center mb-5">

          <ShieldCheck className="text-white w-8 h-8" />

        </div>

        <h3 className="font-bold text-[18px] mb-2">
          موثوقية عالية
        </h3>

        <p className="text-gray-600 leading-7">
          جميع الإجراءات تتم عبر القنوات الرسمية  
        </p>

      </div>

      {/* Card */}

      <div className="bg-gray-50 rounded-[12px] p-5 text-center shadow hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#2f3b69] mx-auto flex items-center justify-center mb-5">

          <Clock3 className="text-white w-8 h-8" />

        </div>

        <h3 className="font-bold text-[20px] mb-3">
          سرعة الإنجاز
        </h3>

        <p className="text-gray-600 leading-7">
          نتابع طلبك حتى يتم إنجازه في أقصر وقت .
        </p>

      </div>

      {/* Card */}

      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#2f3b69] mx-auto flex items-center justify-center mb-5">

          <Users className="text-white w-8 h-8" />

        </div>

        <h3 className="font-bold text-[18px] mb-3">
          فريق متخصص
        </h3>

        <p className="text-gray-600 leading-7">
          فريق ذو خبرة كبيرة في استخراج الشهادات .
        </p>

      </div>

      {/* Card */}

      <div className="bg-gray-50 rounded-3xl p-8 text-center shadow hover:shadow-xl transition">

        <div className="w-16 h-16 rounded-full bg-[#2f3b69] mx-auto flex items-center justify-center mb-5">

          <BadgeCheck className="text-white w-8 h-8" />

        </div>

        <h3 className="font-bold text-[17px] mb-3">
          متابعة مستمرة 
        </h3>

        <p className="text-gray-600 leading-7">
          لا ينتهي دورنا إلا بعد استلامك للشهادة المطلوبة.
        </p>

      </div>

    </div>

  </div>

</section>

    {/* ==================== FAQ ==================== */}

<section className="py-24 bg-gray-50">

  <div className="max-w-5xl mx-auto px-4">

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        الأسئلة الشائعة
      </span>

      <h2 className="text-4xl font-bold mt-3">
        أكثر الأسئلة التي تصلنا
      </h2>

      <p className="text-gray-600 mt-4">
        إذا لم تجد إجابتك يمكنك التواصل معنا مباشرة.
      </p>

    </div>

    <div className="space-y-5">

      <details className="bg-white rounded-2xl shadow-md p-6 group">

        <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center">

          كم يستغرق استخراج الشهادة؟

          <span className="text-[#154734] text-2xl group-open:rotate-45 transition">
            +
          </span>

        </summary>

        <p className="mt-5 text-gray-600 leading-8">
          تختلف المدة حسب نوع الشهادة والجهة المختصة، ويتم إبلاغك بالمدة
          المتوقعة بعد مراجعة الطلب.
        </p>

      </details>

      <details className="bg-white rounded-2xl shadow-md p-6 group">

        <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center">

          هل يمكن التقديم من خارج السودان؟

          <span className="text-[#154734] text-2xl group-open:rotate-45 transition">
            +
          </span>

        </summary>

        <p className="mt-5 text-gray-600 leading-8">
          نعم، يمكنك التقديم من أي دولة وإرسال المستندات إلكترونياً.
        </p>

      </details>

      <details className="bg-white rounded-2xl shadow-md p-6 group">

        <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center">

          هل أحتاج للحضور شخصياً؟

          <span className="text-[#154734] text-2xl group-open:rotate-45 transition">
            +
          </span>

        </summary>

        <p className="mt-5 text-gray-600 leading-8">
          لا، معظم الإجراءات تتم بالنيابة عنك بعد استلام المستندات المطلوبة.
        </p>

      </details>

      <details className="bg-white rounded-2xl shadow-md p-6 group">

        <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center">

          كيف أتابع حالة طلبي؟

          <span className="text-[#154734] text-2xl group-open:rotate-45 transition">
            +
          </span>

        </summary>

        <p className="mt-5 text-gray-600 leading-8">
          سيقوم فريق UniGuide  بالتواصل معك بشكل مستمر عبر الهاتف أو واتساب حتى
          اكتمال الخدمة.
        </p>

      </details>

    </div>

  </div>

</section>

 {/* ================= CTA ================= */}

      <section
  className="relative py-20 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/40/7d/91/407d9107a19e32338236fd28a152e344.jpg')",
  }}
>

  {/* Overlay */}

  <div className="absolute inset-0 bg-[#154734]/85"></div>

  <div className="relative max-w-5xl mx-auto px-2 text-center text-white">

    

    <h2 className="text-4xl md:text-6xl font-black leading-tight mb-2">

      ابدأ استخراج شهادتك اليوم

    </h2>

    <p className="max-w-3xl mx-auto text-lg leading-9 text-gray-100">

      فريقنا مستعد لمساعدتك في استخراج جميع الشهادات السودانية،
      ومتابعة الطلب حتى استلام الشهادة بكل سهولة واحترافية.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <a
        href="#university"
        className="bg-white text-[#154734] px-10 py-4 rounded-[10px] font-bold hover:scale-105 transition"
      >
        قدم الآن
      </a>

      <a
        href="https://wa.me/201130378500"
        target="_blank"
        rel="noreferrer"
        className="border-2 border-white px-10 py-4 rounded-[10px] font-bold hover:bg-white hover:text-[#154734] transition"
      >
        تواصل عبر واتساب
      </a>

    </div>

  </div>

       </section>

       <section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-16">

      <h2 className="text-4xl font-bold">
        ماذا يقول طلابنا؟
      </h2>

      <p className="text-gray-600 mt-4">
        نفتخر بثقة طلابنا ونجاحهم.
      </p>

    </div>

    <div className="grid md:grid-cols-3 grid-cols-2 gap-8">

      <div className="bg-gray-50 rounded-3xl p-8 shadow">

        ⭐⭐⭐⭐⭐

        <p className="mt-5 leading-8">
          ساعدوني في استخراج شهادتي خلال فترة قصيرة.
        </p>

        <h4 className="mt-5 font-bold">
          محمد أحمد
        </h4>

      </div>

      <div className="bg-gray-50 rounded-3xl p-8 shadow">

        ⭐⭐⭐⭐⭐

        <p className="mt-5 leading-8">
          فريق محترم ويتابع معك حتى تستلم الشهادة.
        </p>

        <h4 className="mt-5 font-bold">
          سارة علي
        </h4>

      </div>

       <div className="bg-gray-50 rounded-3xl p-8 shadow">

        ⭐⭐⭐⭐⭐

        <p className="mt-5 leading-8">
          ساعدوني        الخدمة ممتازة.
        </p>

        <h4 className="mt-5 font-bold">
           مصعب محمد  
        </h4>

      </div>

      <div className="bg-gray-50 rounded-3xl p-8 shadow">

        ⭐⭐⭐⭐⭐

        <p className="mt-5 leading-8">
          أنصح أي طالب بالتعامل معهم.
        </p>

        <h4 className="mt-5 font-bold">
          أحمد حسن
        </h4>

      </div>

    </div>

  </div>

</section>




    </main>
  );
}