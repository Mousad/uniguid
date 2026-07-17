import { Mail, Phone, MapPin, ArrowLeft, Heart } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { faFacebook, faInstagram, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const footerLinks = {
  "روابط سريعة": [
    { label: "الصفحة الرئيسية", href: "#home" },
    { label: "عن المنصة", href: "#about" },
    { label: "البرامج والتخصصات", href: "#programs" },
    { label: "شهادات الطلاب", href: "#testimonials" },
    { label: "أخبار ومقالات", href: "#blog" },
    { label: "تواصل معنا", href: "#contact" },
  ],

};

export function Footer() {
  return (

<footer className="bg-[#0d2b5e] text-white pt-8 pb-6">
  <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">

    {/* about */}
    <div className="space-y-4 text-center md:text-right">
      <h1>UniGuide</h1>
      {/* newsletter */}
    <div className="text-center md:text-right space-y-4">

     

      <form className="flex bg-white rounded-lg overflow-hidden">
        <input
          type="email"
          placeholder="بريدك الإلكتروني"
          className="flex-1 p-3 text-black outline-none"
        />

        <button className="bg-[#2f3b69] px-4 text-white">
          إرسال
        </button>
      </form>

      <p className="text-gray-300 text-sm">
        اشترك لتبقى على اطلاع دائم بعروضنا المميزة
      </p>

    </div>


      <p className="text-gray-300 text-sm pt-6 leading-relaxed">
        تعتبر UniGuide التعليمية شركة رائدة في مجال الخدمات الأكاديمية
        لمساعدة الطلاب العرب في الدراسة بالجامعات المتميزة.
      </p>

      <ul className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-300">
       <li>
  <Link to="/services">خدماتنا</Link>
</li>

<li>
  <Link to="/scholarship-service">المنح الدراسية</Link>
</li>

<li>
  <Link to="/universities/1">الجامعات</Link>
</li>

<li>
  <Link to="/ContactSection">تواصل معنا</Link>
</li>
        <li>
  <a
    href="https://wa.me/201501096007"
    target="_blank"
    rel="noopener noreferrer"
  >
    انضم إلينا
  </a>
</li>
      </ul>
    </div>


    {/* links */}
   <div className="text-center md:text-right">
  <h3 className="text-lg font-semibold mb-6">
    روابط مهمة
  </h3>

  <div className="grid grid-cols-2 gap-3 text-gray-300 text-sm">

    <Link to="/study-abroad">الدراسة بالخارج</Link>

    <Link to="/scholarship-service">المنح الدراسية</Link>

    <Link to="/services/medical">الامتياز الطبي</Link>

    <Link to="/services/bquivalency">معادلة الشهادات</Link>

    <Link to="/services/certificateservices">الترجمة والتصديقات</Link>

    <Link to="/services/Courses">الكورسات والتدريب</Link>

    <Link to="/about">من نحن</Link>

    <Link to="/ContactSection">تواصل معنا</Link>

  </div>
</div>

   

  </div>


  {/* bottom */}
 <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">

  <p>
    © {new Date().getFullYear()} UniGuide. جميع الحقوق محفوظة.
  </p>

  <a
    href="https://soob-portfolio.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1 text-[#ffdf20] hover:text-white transition"
  >
    <Code2 size={20} />
    <span className="text-[#f8fafc]"> Soo249</span>
  </a>

</div>
</footer>
    
  );
}
