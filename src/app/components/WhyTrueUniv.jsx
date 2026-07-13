import { useState } from "react";
import { Link } from "react-router-dom";
import baoh from "../pilden/baoh.jpeg";
const stories = [
  {
    year: "2022",
    title: "تأسيس UniGuide",
    description:
      "بدأت رحلة UniGuide في عام 2022 بفكرة إنشاء منصة عربية تساعد الطلاب على الوصول إلى أفضل الجامعات والمنح الدراسية حول العالم، من خلال تقديم معلومات موثوقة وخدمات تعليمية متكاملة في مكان واحد.",
    image: baoh,
  },
  {
    year: "2023",
    title: "إطلاق النسخة الأولى",
    description:
      "تم تطوير النسخة الأولى من منصة UniGuide لتوفير معلومات عن الجامعات والمنح الدراسية، مع واجهة بسيطة تساعد الطلاب على استكشاف الفرص التعليمية بسهولة.",
    image:
      "https://images.ctfassets.net/2xwec9cs3stx/30eXtgU3MGwRjLpAzpt8Yn/dac524cd6e06ad2028ab61bfd8077d01/Our_story_so_far_-_2010.jpg?fit=fill&w=540&h=390",
  },
  {
    year: "2024",
    title: "تطوير خدمات المنصة",
    description:
      "شهد عام 2024 إضافة العديد من الخدمات الجديدة، مثل تصنيف الجامعات، وعرض التخصصات، وتوفير معلومات أكثر دقة لمساعدة الطلاب في اختيار مسارهم الأكاديمي.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  },
  {
    year: "2025",
    title: "إطلاق خدمات المنح الدراسية",
    description:
      "تمت إضافة قسم متكامل للمنح الدراسية يتيح للطلاب البحث عن الفرص المناسبة، مع إمكانية تصفية النتائج حسب الدولة والتخصص ودرجة الدراسة.",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=900",
  },
  {
    year: "2026",
    title: "توسيع خدمات UniGuide",
    description:
      "واصلت UniGuide تطوير خدماتها بإضافة أدوات جديدة لمساعدة الطلاب، مثل الإرشاد الأكاديمي، واستكشاف الجامعات، وتقديم تجربة استخدام حديثة وسهلة لجميع المستخدمين.",
    image:
      "https://images.ctfassets.net/2xwec9cs3stx/7mSdLoZb9A7kCL0nGU46xS/7d0f420a54be501b663f248c51c31644/Our_story_so_far_-_2009.jpg?fit=fill&w=540&h=390",
  },
];

export default function WhyTrueUniv() {
  const [activeStory, setActiveStory] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* العنوان */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-[22px] font-bold text-[#0d2b5e]">
              رحلة UniGuide
            </h2>

            <div className="w-24 h-1 bg-[#2f3b69] mt-3 rounded-full"></div>
          </div>

          <Link
            to="/about"
            className="text-[#2f3b69] font-bold hover:underline"
          >
             المزيد →
          </Link>
        </div>

        {/* الخط الزمني */}
        <div className="relative mb-14">
          <div className="absolute top-2.5 left-0 right-0 h-1 bg-gray-300"></div>

          <div className="relative flex justify-between">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className="flex flex-col items-center bg-transparent z-10"
              >
                <div
                  className={`w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                    activeStory === index
                      ? "bg-[#2f3b69] border-[#2f3b69]"
                      : "bg-white border-gray-400"
                  }`}
                />

                <span
                  className={`mt-3 font-bold transition ${
                    activeStory === index
                      ? "text-[#154734]"
                      : "text-gray-500"
                  }`}
                >
                  {story.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* المحتوى */}
        <div className="grid lg:grid-cols-2 gap-2 items-center">

        <img
  src={stories[activeStory].image}
  alt={stories[activeStory].title}
  className="w-full h-[220px] md:h-[280px] lg:h-[220px] rounded-xl shadow-xl object-cover transition-all duration-500"
/>

          <div>
            <span className="text-[#154734] font-bold text-[22px]">
              {stories[activeStory].year}
            </span>

            <h3 className="text-[25px] font-bold text-[#0d2b5e] mt-2 mb-3">
              {stories[activeStory].title}
            </h3>

            <p className="text-gray-600 text-lg leading-9">
              {stories[activeStory].description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}