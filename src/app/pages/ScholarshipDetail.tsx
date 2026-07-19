import { useParams, Link } from "react-router-dom";
import { scholarships } from "../../data/scholarships";
import {
  CheckCircle,
  FileText,
  GraduationCap,
  DollarSign,
} from "lucide-react";
 import {
  Calendar,
  Globe,
  
  BadgeDollarSign,
} from "lucide-react";

import { MapPin, ExternalLink } from "lucide-react";

import {
  Stethoscope,
  HeartPulse,
  Pill,
  Cpu,
  Building2,
  BookOpen,
  Briefcase,
  Microscope,
} from "lucide-react";

universities: [
  {
    name: "جامعة بغداد",
    city: "بغداد",
    image: "https://nc.uobaghdad.edu.iq/wp-content/uploads/sites/13/2019/09/2018-12-26-05.15.19-1.jpg",
    description: "إحدى أعرق الجامعات العراقية وتضم مختلف التخصصات.",
  },
  {
    name: "جامعة الموصل",
    city: "الموصل",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdHnY2hsFUwxHGUJhv4FlrarQwQLYZJFso7TaF5AZ97A&s=10",
    description: "جامعة حكومية متميزة في المجالات الطبية والهندسية.",
  },
  {
    name: "جامعة البصرة",
    city: "البصرة",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHq6_x_QlUhmUl9cQhPe23xDiMmn49qcX8zKt1b1OhS8_iaK0xEsdzJAc&s=10",
    description: "تقدم برامج أكاديمية متنوعة ومعترف بها دوليًا.",
  },
]
export default function ScholarshipDetail() {
  const { slug } = useParams();

  const scholarship = scholarships.find((item) => item.slug === slug);

  if (!scholarship) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          المنحة غير موجودة
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${scholarship.image})`,
        }}
      >
        <div className="absolute inset-0 bg-[#0d2b5e]/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">

          <div className="text-white max-w-2xl">

           

            <h1 className="text-3xl font-bold mt-6">

              {scholarship.title}

            </h1>

            <p className="mt-6 text-xl leading-9">

              {scholarship.description}

            </p>

            <Link
              to="/scholarship-application"
              className="inline-block mt-4 bg-white text-[#0d2b5e] px-8 py-2 rounded-[10px] font-bold hover:bg-gray-100 transition"
            >
              قدم الآن
            </Link>

          </div>

        </div>
      </section>

      {/* Benefits */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-3">

          <h2 className="text-4xl font-bold text-center text-[#0d2b5e] mb-14">

            مميزات المنحة

          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {scholarship.benefits.map((item, index) => (

              <div
  key={index}
  className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex items-center gap-4 hover:shadow-lg transition-all duration-300"
>
  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
    <CheckCircle className="text-green-600 w-6 h-6" />
  </div>

  <p className="text-lg text-gray-700 font-medium leading-7">
    {item}
  </p>
</div>

            ))}

          </div>

        </div>

      </section>

      {/* Requirements */}

      <section className="py-10 bg-[#ffffff]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0d2b5e] mb-10">

            شروط التقديم

          </h2>

          <div className="space-y-5">

            {scholarship.requirements.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 p-5 rounded-xl"
              >

                <CheckCircle className="text-primary" />

                <p>

                  {item}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>




     

<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <BadgeDollarSign className="text-primary w-7 h-7" />
        </div>

        <h3 className="font-bold text-lg text-[#0d2b5e]">
          التمويل
        </h3>

        <p className="text-gray-600 mt-2">
          {scholarship.funded}
        </p>
      </div>

      <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Globe className="text-primary w-7 h-7" />
        </div>

        <h3 className="font-bold text-lg text-[#0d2b5e]">
          الدولة
        </h3>

        <p className="text-gray-600 mt-2">
          {scholarship.country}
        </p>
      </div>

      <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <GraduationCap className="text-primary w-7 h-7" />
        </div>

        <h3 className="font-bold text-lg text-[#0d2b5e]">
          المرحلة
        </h3>

        <p className="text-gray-600 mt-2">
          بكالوريوس - ماجستير - دكتوراه
        </p>
      </div>

      <div className="bg-[#f8fafc] rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300">
        <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Calendar className="text-primary w-7 h-7" />
        </div>

        <h3 className="font-bold text-lg text-[#0d2b5e]">
          آخر موعد
        </h3>

        <p className="text-gray-600 mt-2">
          حسب إعلان الجهة المانحة
        </p>
      </div>

    </div>

  </div>
</section>


<section className="py-20 bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-[#0d2b5e]">
        التخصصات المتاحة
      </h2>

      <p className="text-gray-600 mt-4 text-lg">
        يمكنك التقديم على مجموعة واسعة من التخصصات حسب شروط المنحة.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
        {
          icon: <Stethoscope className="w-8 h-8" />,
          title: "الطب البشري",
        },
        {
          icon: <HeartPulse className="w-8 h-8" />,
          title: "طب الأسنان",
        },
        {
          icon: <Pill className="w-8 h-8" />,
          title: "الصيدلة",
        },
        {
          icon: <Cpu className="w-8 h-8" />,
          title: "الهندسة",
        },
        {
          icon: <Microscope className="w-8 h-8" />,
          title: "العلوم",
        },
        {
          icon: <Building2 className="w-8 h-8" />,
          title: "إدارة الأعمال",
        },
        {
          icon: <Briefcase className="w-8 h-8" />,
          title: "القانون",
        },
        {
          icon: <BookOpen className="w-8 h-8" />,
          title: "التخصصات الأدبية",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
        >
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5">
            {item.icon}
          </div>

          <h3 className="font-bold text-lg text-[#0d2b5e]">
            {item.title}
          </h3>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* Grades */}

      <section className="py-10">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0d2b5e] mb-10">

            المعدلات المطلوبة

          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {scholarship.grades.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
              >

                <div className="flex items-center gap-3">

                  <GraduationCap className="text-primary" />

                  <span className="font-bold">

                    {item.program}

                  </span>

                </div>

                <span className="font-bold text-primary">

                  {item.percentage}

                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Documents */}

      <section className="py-10 bg-[#ffffff]">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0d2b5e] mb-10">

            المستندات المطلوبة

          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {scholarship.documents.map((doc, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 flex items-center gap-4"
              >

                <FileText className="text-primary" />

                <span>

                  {doc}

                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Tuition */}

      <section className="relative py-8 overflow-hidden">

  {/* Background Image */}
  <img
    src="https://i.pinimg.com/736x/25/ce/5c/25ce5c8a5014ac232feb1850b5d1b5aa.jpg"
    alt="Scholarship"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-[#0d2b5e]/80"></div>

  <div className="relative z-10 max-w-5xl mx-auto px-6">

    <div className="text-center text-white">

      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
        <DollarSign className="w-10 h-10 text-yellow-300" />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        التمويل
      </h2>

      <p className="text-3xl font-bold text-yellow-300 mb-4">
        {scholarship.funded}
      </p>

      <p className="text-lg text-white/90 max-w-2xl mx-auto leading-8 mb-10">
        اغتنم فرصة الدراسة بتمويل كامل، وابدأ رحلتك الأكاديمية مع أفضل الجامعات من خلال دعم فريق UniGuide في جميع خطوات التقديم.
      </p>

      <Link
        to="/scholarship-application"
        className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#0d2b5e] rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
      >
        قدم الآن
      </Link>

    </div>

  </div>

</section>

    </div>
  );
}