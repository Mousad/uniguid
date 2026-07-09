import { HeroSection } from "../components/HeroSection";
import { StatsSection } from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import { ProgramsSection } from "../components/ProgramsSection";
import { ConsultationCTA } from "../components/ConsultationCTA";

import { TeamSection } from "../components/TeamSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { BlogSection } from "../components/BlogSection";
import { ContactSection } from "../components/ContactSection";
import { CertificateServices } from "../components/CertificateServices";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useRef } from "react";
import UniversitiesSlider from "../components/niversitiesSlider";

import ChatBot from "../components/ChatBot";
import WhyTrueUniv from "../components/WhyTrueUniv";


import logo from "../pilden/logo.jpg";
import akib from "../pilden/akib.png";

    



const majors = [
    {
      title: "الطب ",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الطب.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d8%b7%d8%a8-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "الهندسة",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/الهندسة.png.webp",
    },
    {
      title: "القانون",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/القانون.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a7%d9%84%d9%82%d8%a7%d9%86%d9%88%d9%86-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
    {
      title: "إدارة الأعمال",
      img: "https://studyinegypt-alkayan.com/wp-content/uploads/2025/05/ادراة-الاعمال.png.webp",
      link: "https://studyinegypt-alkayan.com/%d8%af%d8%b1%d8%a7%d8%b3%d8%a9-%d8%a5%d8%af%d8%a7%d8%b1%d8%a9-%d8%a7%d9%84%d8%a3%d8%b9%d9%85%d8%a7%d9%84-%d9%81%d9%8a-%d9%85%d8%b5%d8%b1/",
    },
  ];
// خدمات
const services = [
  { title: "التقديم على المنح الدراسية", slug: "scholarships" },
  { title: "استخراج تجهيز الشهادات", slug: "CertificateServices" },
  { title: "الاستشارات التعليمية", slug: "Consultation" },
  

];

export function HomePage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      <HeroSection />
      <StatsSection />

       

      <section className="py-13 flex justify-center bg-[#fefcfd]">
  <div className="relative bg-[#fefcfd] rounded-3xl shadow-xl w-[330px] max-w-sm p-4 md:p-6 flex flex-col items-center text-right">

    {/* البوردر */}
    <div className="absolute top-0 left-0 w-full h-full border-2 border-[#2f3b69] rounded-[20px] pointer-events-none"></div>

    {/* الصورة */}
    <div className="relative -mt-18 z-20">
     <img
  src={logo}
  alt="student"
  className="w-30 h-30 md:w-40 md:h-40 rounded-[20px] object-cover border-2 border-[#2f3b69] shadow-lg"
/>

    </div>

    {/* العنوان */}
    <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b5e] mb-4">
      خدماتنا 
    </h2>

    {/* الخدمات */}
    <div className="grid md:grid-cols-2 gap-2 w-full">
      {services.map((service, idx) => (
        <Link
          key={idx}
          to={`/services/${service.slug}`}
          className="relative group overflow-hidden bg-[#fefcfd] p-3 rounded-xl shadow transition text-[#0d2b5e] font-medium text-center"
        >

          {/* الخلفية المتحركة */}
          <span className="absolute inset-0 bg-[#fefcfd] scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

          {/* النص */}
          <span className="relative z-10 group-hover:text-white transition">
            {service.title}
          </span>

        </Link>
      ))}
    </div>

    {/* زر المزيد */}
    <div className="mt-6 z-10">
  <Link
    to="/services"
    className="relative group overflow-hidden px-8 z-100 bg-[#f2f9f5] text-[#2f3b69]  -bottom-7  rounded-[30px] border border-[#2f3b69] text-[#154734] font-"
  >
    
    {/* الخلفية المتحركة من تحت */}
    <span className="absolute inset-0 bg-[#fefcfd]  origin-bottom rounded-full  transition-transform duration-500 "></span>

    {/* النص */}
    <span className="relative z-100">
      المزيد
    </span>

  </Link>

  
</div>

  </div>
       </section>
       <UniversitiesSlider />
       
       
<section className="py-10 bg-[#fefcfd]">
  <div className="max-w-6xl mx-auto px-4">

    {/* العنوان */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-bold text-[#0d2b5e] mb-4">
        تعرف على UniGuide
      </h2>

      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        اكتشف رؤيتنا ورسالتنا والخدمات التي نقدمها لمساعدة الطلاب في الوصول إلى
        أفضل الجامعات والمنح الدراسية حول العالم.
      </p>
    </div>

    {/* البطاقة */}
    <div className="relative overflow-hidden rounded-3xl shadow-2xl group">

      {/* الصورة */}
      <img
        src="https://res.cloudinary.com/drxozhuee/image/upload/v1759712145/about_jtak9f.png"
        alt="تعرف على UniGuide"
        className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* طبقة شفافة */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b5e]/90 via-[#0d2b5e]/60 to-transparent"></div>

      {/* المحتوى */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-lg px-8 md:px-12 text-white">

          <h3 className="text-4xl font-bold mb-5">
            من نحن؟
          </h3>

          <p className="text-lg leading-8 mb-8 text-gray-100">
            تعرف على قصة UniGuide، وأهدافنا، وكيف نساعد آلاف الطلاب في العثور
            على أفضل المنح الدراسية والجامعات المناسبة لهم.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-[#2f3b69] hover:bg-white hover:text-[#154734] text-white font-bold px-4 py-1 rounded-{12px} transition-all duration-300 shadow-lg"
          >
             عنا
            <span>→</span>
          </Link>

        </div>
      </div>

    </div>

  </div>
</section>




    
      <WhyTrueUniv />

      
<section className="py-10 bg-[#fefcfd]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="relative overflow-hidden rounded-[10px] shadow-xl">

      {/* الصورة */}
      <img
        src="https://imagine-america.org/images/scholarship-footer-callout.jpg"
        alt="التقديم على المنح الدراسية"
        className="w-full h-[300px] object-cover"
      />

      {/* طبقة شفافة */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* المحتوى فوق الصورة */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-xl px-8 md:px-16 text-white">

          <h2 className="text-[22px] md:text-5xl font-bold mb-6">
            التقديم على المنح الدراسية
          </h2>

          <p className="text-lg leading-8 mb-8">
            أنشئ حسابك في UniGuide واستكشف أفضل المنح الدراسية المناسبة لك،
           
          
          </p>

          <Link
            to="/scholarship-application"
            className="inline-flex items-center bg-[#2f3b69]  text-white px-4 py-2 rounded-[4px] font-semibold transition duration-300"
          >
            ابدأ 
            <span className="mr-2">←</span>
          </Link>

        </div>
      </div>

    </div>

  </div>
</section>
      
      <ChatBot />
      <AboutSection />
   
      <ConsultationCTA />
      {/* <TeamSection /> */}
      <TestimonialsSection />
    
      <ContactSection />
     {/* ======= سكشن موقعنا ======= */}

     {/* <BlogSection />  */}
     

    </div>
  );
}