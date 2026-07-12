import {
  GraduationCap,
  Stethoscope,
  FileCheck,
  FileText,
  Plane,
} from "lucide-react";

export const services = [
 {
  id: 1,
  title: "الدراسة في الخارج",
  description:
    "استكشف أفضل الوجهات الدراسية، الجامعات، التخصصات، وشروط القبول في مختلف دول العالم.",
  image:
    "https://res.cloudinary.com/drxozhuee/image/upload/v1759688351/01_Consulting_the_Expert_Insurance_Agency_nqfmm2.png",
  icon: GraduationCap,
  color: "bg-green-700",
  button: "استكشف",
  link: "/study-abroad",
},

 {
  id: 2,
  title: "الامتياز الطبي",
  description:
    "التقديم لبرامج الامتياز الطبي والدراسات العليا للأطباء داخل أفضل الجامعات.",
  image:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
  icon: Stethoscope,
  color: "bg-blue-700",
  button: "اعرف المزيد",
  link: "/services/medical",
},

 {
  id: 5,
  title: "معادلة الشهادات",
  description:
    "خدمات معادلة الشهادات المصرية والإماراتية وإنهاء جميع الإجراءات الرسمية بسهولة.",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
  icon: FileCheck,
  color: "bg-green-700",
  button: "اعرف المزيد",
  link: "/services/equivalency",
},

  {
    id: 4,
    title: "استخراج الشهادات",
    description:
      "استخراج الشهادات الدراسية والتوثيقات الرسمية بسرعة واحترافية.",
    image:
      "https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80",
    icon: FileText,
    color: "bg-red-600",
    button: "عرض الخدمة",
    link: "/services/certificates",
  },

  {
    id: 5,
    title: "خدمات الطلاب",
    description:
      "كل الخدمات التي يحتاجها الطالب بعد القبول وحتى الاستقرار في بلد الدراسة.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    icon: Plane,
    color: "bg-purple-700",
    button: "استكشف الخدمات",
    link: "/services/student-services",
  },
];