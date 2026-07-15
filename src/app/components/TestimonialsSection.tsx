import { useState, useEffect } from "react";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
const simpleTestimonials = [
  {
    name: "أحمد عثمان",
    image: "...",
    text: "منصة UniGuide غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج...",
  },
  {
    name: "نور الحسن",
    image: "...",
    text: "ما يميز منصة UniGuide هو الاهتمام الشخصي بكل طالب...",
  },
];

export function SimpleTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[current];

  return (
    <section className="py-16 px-4 bg-[#f2f9f5] text-center">
      <div className="max-w-xl mx-auto">
        <img
          src={t.image}
          alt={t.name}
          className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-2xl object-cover mb-6 border-4 border-white shadow-lg"
        />
        <p className="text-lg text-gray-700 italic mb-4">"{t.text}"</p>
        <p className="text-xl font-bold text-gray-900">{t.name}</p>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "أحمد عثمان",
    country: "السودان ",
    university: "جامعة إسطنبول",
    major: "هندسة الحاسوب",
    rating: 5,
    image: "https://i.pinimg.com/736x/f1/2f/37/f12f37a580349c171e0cb7ff6f3e8331.jpg",
    text: "منصة UniGuide غيّرت مسار حياتي بالكامل. كنت أحلم بالدراسة في الخارج لكنني لم أكن أعرف من أين أبدأ. الفريق كان معي في كل خطو .",
    year: "2023",
  },
  {
    name: "نور الحسن",
    country: "🇯🇴 الأردن",
    university: "جامعة بيلكنت",
    major: "إدارة الأعمال الدولية",
    rating: 5,
    image: "https://i.pinimg.com/736x/9e/ed/64/9eed648cc2033c489d13f98fc11487cc.jpg",
    text: "ما يميز منصة UniGuide هو الاهتمام الشخصي بكل طالب. لم أشعر يوماً أنني مجرد رقم بينهم. ساعدوني في الحصول على قبول في جامعة بيلكنت  !",
    year: "2024",
  },
  {
    name: "عمر بن يوسف",
    country: "🇲🇦 المغرب",
    university: "جامعة أنقرة",
    major: "الطب البشري",
    rating: 5,
    image: "https://i.pinimg.com/736x/c4/28/02/c42802842e179d3b3b981ac44e4ded68.jpg",
    text: "كان حلمي الدراسة في كلية الطب التركية وقد حققته بفضل فريق UniGuide. ساعدوني في فهم متطلبات القبول وترجمة وثائقي وقدموا لي دعماً نفسياً ومعنوياً خلال فترة .",
    year: "2023",
  },
  {
    name: "فاطمة الزهراوي",
    country: "🇩🇿 الجزائر",
    university: "جامعة حاجتبه",
    major: "الهندسة الطبية الحيوية",
    rating: 5,
    image: "https://i.pinimg.com/736x/05/6c/85/056c85d23f30445c4ad7889967e6d9a1.jpg",
    text: "خدمة احترافية بكل معنى الكلمة. المستشارة سارة التي تولّت ملفي كانت متاحة في أي وقت وأجابت على كل استفساراتي !",
    year: "2024",
  },
  {
    name: "يوسف القاسمي",
    country: "🇪🇬 مصر",
    university: "جامعة بوغازيتشي",
    major: "الذكاء الاصطناعي",
    rating: 5,
    image: "https://i.pinimg.com/736x/71/50/a2/7150a2361dcd4d85734b54b4049d6598.jpg",
    text: "جامعة بوغازيتشي كانت حلماً يبدو بعيد المنال، لكن منصة UniGuide جعلته حقيقة. ساعدوني في تجهيز ملف استثنائي وأجروا معي تدريبات على المقابلة. اليوم .",
    year: "2024",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnim, setIsAnim] = useState(false);

  const go = (dir: number) => {
    if (isAnim) return;
    setIsAnim(true);
    setTimeout(() => {
      setCurrent((p) => (p + dir + testimonials.length) % testimonials.length);
      setIsAnim(false);
    }, 300);
  };

  useEffect(() => {
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
  <section id="testimonials" className="py-24 bg-[#f8fafc] overflow-hidden">

  <div className="max-w-7xl mx-auto px-4">

    {/* Header */}

    <div className="text-center mb-16">

      <span className="text-[#154734] font-semibold">
        آراء الطلاب
      </span>

      <h2 className="text-4xl font-black mt-3">
        قصص نجاح طلاب UniGuide
      </h2>

      <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
        نفتخر بمساعدة مئات الطلاب في الوصول إلى أهدافهم الأكاديمية
        واستكمال رحلتهم التعليمية داخل وخارج الوطن.
      </p>

    </div>

    <div
      className="
      flex
      lg:grid lg:grid-cols-3
      md:grid md:grid-cols-2
      gap-8
      overflow-x-auto
      lg:overflow-visible
      snap-x snap-mandatory
      scrollbar-hide
      pb-4
    "
    >

     {testimonials.map((review, index) => (

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

    {/* معلومات الطالب */}

    <div className="mt-6 space-y-2">

      <div className="flex items-center justify-between">

        <span className="text-gray-500 text-sm">
          الجامعة
        </span>

        <span className="font-semibold text-[#154734]">
          {review.university}
        </span>

      </div>

      <div className="flex items-center justify-between">

        <span className="text-gray-500 text-sm">
          التخصص
        </span>

        <span className="font-semibold">
          {review.major}
        </span>

      </div>

      <div className="flex items-center justify-between">

        <span className="text-gray-500 text-sm">
          سنة القبول
        </span>

        <span className="font-semibold">
          {review.year}
        </span>

      </div>

    </div>

    {/* Footer */}

    <div className="flex items-center justify-between mt-8 pt-5 border-t">

      <div className="flex gap-1">

        {[...Array(review.rating)].map((_, i) => (

          <Star
            key={i}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

        ))}

      </div>

      <span className="text-sm text-[#154734] font-semibold">
        طالب موثق ✓
      </span>

    </div>

  </div>

))}

    </div>

  </div>

</section>
  );
}
