import { Link } from "react-router-dom";
import { useState } from "react";

import {
    ArrowRight,
    GraduationCap,
    FileCheck,
    CheckCircle,
    Building2,
    Landmark,
    Files,
    ShieldCheck,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { ChevronDown } from "lucide-react";

export default function CertificateEquivalencyPage() {

    const [openFaq, setOpenFaq] = useState(null);

    const documents = [
        "أصل الشهادة",
        "كشف الدرجات",
        "جواز السفر",
        "الهوية الشخصية",
        "صور شخصية",
        "ترجمة معتمدة (إن وجدت)",
    ];
    const faqs = [
        {
            question: "كم تستغرق معادلة الشهادة؟",
            answer:
                "تختلف المدة حسب الدولة ونوع المؤهل، ولكن يقوم فريق UniGuide بمتابعة الطلب حتى صدور القرار النهائي.",
        },
        {
            question: "هل يشترط الحضور الشخصي؟",
            answer:
                "في أغلب الحالات لا، ويمكن إنجاز معظم الإجراءات عن بُعد مع توفير المستندات المطلوبة.",
        },
        {
            question: "هل تساعدون في تجهيز الأوراق؟",
            answer:
                "نعم، نقوم بمراجعة جميع المستندات والتأكد من مطابقتها لمتطلبات الجهة المختصة.",
        },
        {
            question: "هل تشمل الخدمة متابعة الطلب؟",
            answer:
                "نعم، نقوم بمتابعة الطلب مع الجهات الرسمية وإبلاغك بجميع التحديثات حتى استلام قرار المعادلة.",
        },
    ];
    const steps = [
        {
            number: "01",
            title: "إرسال الطلب",
            desc: "إرسال بياناتك  المطلوبة.",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200",
        },
        {
            number: "02",
            title: "مراجعة الملف",
            desc: "فحص جميع الوثائق   .",
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
        },
        {
            number: "03",
            title: "تجهيز المستندات",
            desc: "إعداد الملف حسب متطلبات  .",
            image: "https://i.pinimg.com/736x/9a/b7/98/9ab798a2c090c91551baf28ad6258c4d.jpg",
        },
        {
            number: "04",
            title: "التقديم الرسمي",
            desc: "رفع الطلب للجهة المختصة.",
            image: "https://i.pinimg.com/736x/a3/76/3e/a3763e9232a5fc5c7123dbbea93b39b3.jpg",
        },
        {
            number: "05",
            title: "متابعة الطلب",
            desc: "متابعة مستمرة حتى صدور القرار.",
            image: "https://i.pinimg.com/1200x/67/78/b4/6778b4f8bae08b0d9a7e71a005850aed.jpg",
        },
        {
            number: "06",
            title: "استلام المعادلة",
            desc: "استلام شهادة المعادلة بعد الانتهاء   الإجراءات.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
        },
    ];

    const services = [
        {
            title: "معادلة الثانوية",
            icon: GraduationCap,
            description:
                "إجراءات معادلة شهادات الثانوية للالتحاق بالجامعات.",
        },
        {
            title: "معادلة البكالوريوس",
            icon: Building2,
            description:
                "معادلة شهادات البكالوريوس الصادرة من الجامعات الخارجية.",
        },
        {
            title: "معادلة الدراسات العليا",
            icon: Landmark,
            description:
                "معادلة الماجستير والدكتوراه وفق الأنظمة الرسمية.",
        },
        {
            title: "معادلة الشهادات الطبية",
            icon: ShieldCheck,
            description:
                "معادلة المؤهلات الطبية والبرامج الصحية.",
        },
    ];

    return (
        <main className="bg-gray-50">

            {/* Hero */}

            {/* هنا سنضيف القسم الأول */}


            {/* Hero */}

            <section
                className="relative h-[600px] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/93/0d/c1/930dc1ac4570507ca25303a967e0cc2d.jpg')",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#154734]/90 via-[#154734]/70 to-black/60"></div>

                <div className="container mx-auto px-9 relative z-10">

                    <div className="max-w-3xl text-white">

                       

                        <h1 className="text-[28px] md:text-6xl font-black leading-tight mt-8">

                            معادلة الشهادات
                            <br />
                            بكل سهولة واحترافية

                        </h1>

                        <p className="mt-7 text-lg leading-9 text-white/90">

                            نوفر خدمات معادلة الشهادات الجامعية والثانوية
                            داخل مصر والإمارات، مع متابعة جميع الإجراءات
                            الرسمية حتى استلام قرار المعادلة، بواسطة فريق
                            متخصص يرافقك في كل خطوة.

                        </p>

                        <div className="flex flex-wrap gap-5 mt-10">

                            <Link
                                to="/scholarship-application?service=equivalency"
                                className="bg-white text-[#154734] px-8 py-3 rounded-xl font-bold hover:scale-105 transition"
                            >
                                ابدأ التقديم
                            </Link>

                            <Link
                                to="/contactSection"
                                className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#154734] transition"
                            >
                                تواصل معنا
                            </Link>

                        </div>

                        <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">

                            <div>

                                <h3 className="text-[22px] font-bold">
                                    +500
                                </h3>

                                <p className="text-white/80">
                                    ملفات 
                                </p>

                            </div>

                            <div>

                                <h3 className="text-[22px] font-bold">
                                    2
                                </h3>

                                <p className="text-white/80">
                                    دول 
                                </p>

                            </div>

                            <div>

                                <h3 className="text-[22px] font-bold">
                                    100%
                                </h3>

                                <p className="text-white/80">
                                    متابعة 
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ما هي خدمة معادلة الشهادات */}

            <section className="container bg-white mx-auto px-3 py-10">

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* الصورة */}

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                            alt="Certificate Equivalency"
                            className="rounded-[10px] shadow-2xl w-full h-[350px] object-cover"
                        />

                        <div className="absolute -bottom-6 -left-3 bg-[#2f3b69] text-white rounded-[9px] p-1 shadow-xl">

                            <div className="flex items-center gap-3">

                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">

                                    <FileCheck size={26} />

                                </div>

                                <div>


                                    <p className="text-white/80 text-[10px]">
                                        معادلة تم إنجازها
                                    </p>

                                    <h3 className="text-[16px] font-bold">
                                        +500
                                    </h3>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* المحتوى */}

                    <div>



                        <h2 className="text-[27px] font-black mt-2 leading-tight text-[#2f3b69]">

                            ما هي خدمة
                            <br />
                            معادلة الشهادات؟

                        </h2>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">

                            تساعدك UniGuide في إنهاء جميع إجراءات معادلة
                            الشهادات الجامعية والثانوية والدراسات العليا
                            داخل مصر والإمارات، بدايةً من مراجعة الأوراق،
                            وتجهيز الملف، وحتى الحصول على قرار المعادلة
                            من الجهات المختصة.

                        </p>

                        <div className="grid sm:grid-cols-2 gap-5 mt-6">

                            <div className="bg-white rounded-[10px] border p-3 shadow-sm">

                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle className="text-[#2f3b69] w-7 h-7 flex-shrink-0" />

                                    <h4 className="font-bold text-[#2f3b69] text-[20px]">
                                        مراجعة الملف
                                    </h4>
                                </div>

                                <p className="text-gray-600 text-sm leading-7">
                                    التأكد من اكتمال جميع المستندات قبل التقديم.
                                </p>

                            </div>

                            <div className="bg-white rounded-2xl border p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Files className="text-[#2f3b69] w-7 h-7 flex-shrink-0" />

                                    <h4 className="font-bold text-[#2f3b69] text-lg">
                                        تجهيز المستندات
                                    </h4>
                                </div>

                                <p className="text-gray-600 text-sm leading-7">
                                    ترتيب وتجهيز جميع الوثائق وفق متطلبات الجهة المختصة.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl border p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Building2 className="text-[#2f3b69] w-7 h-7 flex-shrink-0" />

                                    <h4 className="font-bold text-lg text-[#2f3b69]">
                                        التقديم الرسمي
                                    </h4>
                                </div>

                                <p className="text-gray-600 text-sm leading-7">
                                    تقديم طلب المعادلة لدى الجهات الرسمية ومتابعة الطلب.
                                </p>
                            </div>
                            <div className="bg-white rounded-2xl border p-5 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <ShieldCheck className="text-[#2f3b69] w-7 h-7 flex-shrink-0" />

                                    <h4 className="font-bold text-lg text-[#2f3b69]">
                                        متابعة حتى الإنجاز
                                    </h4>
                                </div>

                                <p className="text-gray-600 text-sm leading-7">
                                    متابعة مستمرة حتى استلام قرار المعادلة النهائي.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* أنواع المعادلات */}

            <section className="bg-white py-10">

                <div className="container mx-auto px-4">

                    <div className="text-center mb-16">



                        <h2 className="text-4xl font-black mt-3 text-[#0d2b5e]">
                            أنواع معادلة الشهادات
                        </h2>

                        <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
                            نقدم خدمات معادلة لمختلف المؤهلات الدراسية وفق الأنظمة
                            المعتمدة في مصر والإمارات.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-8">

                        {services.map((item) => (

                            <div
                                key={item.title}
                                className="group bg-white rounded-[10px] border border-gray-200 overflow-hidden shadow-sm  transition duration-300 hover:-translate-y-2"
                            >

                                <div className="bg-[#2f3b69] h-6"></div>

                                <div className="p-8">

                                    <div className="w-18 h-18 rounded-2xl bg-[#154734]/10 flex items-center justify-center mb-6  ">

                                        <item.icon
                                            size={40}
                                            className="text-[#2f3b69] group-hover:text-white transition"
                                        />

                                    </div>



                                    <h3 className="text-2xl font-bold mt-3 text-[#0d2b5e]">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-8 mt-4">
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* المستندات المطلوبة */}

            <section className="container bg-white mx-auto px-4 py-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* المحتوى */}

                    <div>



                        <h2 className="text-[28px] font-black mt-3 text-[#0d2b5e]">
                            المستندات المطلوبة
                        </h2>

                        <p className="text-gray-600 mt-5 leading-9">
                            لضمان سرعة إنجاز طلب معادلة الشهادة، يرجى تجهيز
                            المستندات التالية قبل بدء عملية التقديم.
                        </p>

                        <div className="mt-10 space-y-3">

                            {documents.map((doc) => (

                                <div
                                    key={doc}
                                    className="flex items-center gap-4 bg-white rounded-2xl border border-gray-200 p-3 shadow-sm hover:shadow-lg transition"
                                >

                                    <div className="w-10 h-10 rounded-full bg-[#154734]/10 flex items-center justify-center">

                                        <CheckCircle2
                                            className="text-[#2f3b69]"
                                            size={22}
                                        />

                                    </div>

                                    <span className="text-lg font-medium text-gray-800">
                                        {doc}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* الصورة */}

                    <div className="relative">

                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
                            alt="Documents"
                            className="rounded-[10px] shadow-2xl w-full h-[330px] object-cover"
                        />

                        <div className="absolute -bottom-5 -right-3 bg-[#2f3b69] rounded-[10px] shadow-xl px-3 py-2">



                            <p className="text-[#ffffff] mt-2">
                                متابعة لجميع الملفات
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* خطوات معادلة الشهادة */}

            <section className="py-10 bg-gray-50 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="text-center mb-16">
                        <span className="text-[#154734] font-semibold">
                            خطوات التقديم
                        </span>

                        <h2 className="text-[27px] text-[#154734] font-bold mt-3">
                            خطوات معادلة الشهادة
                        </h2>

                        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-8">
                            نتابع ملفك خطوة بخطوة حتى الحصول على قرار المعادلة من الجهة المختصة.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3 gap-3">

                        {steps.map((step) => (

                            <div
                                key={step.number}
                                className="bg-white rounded-[12px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >

                                {/* صورة */}
                                <div className="relative h-36">

                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-black/40"></div>

                                    {/* رقم الخطوة */}
                                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">

                                        <div className="w-10 h-10 rounded-full bg-white border-2 border-[#2f3b69] shadow-xl flex items-center justify-center">

                                            <span className="text-[14px] font-black text-[#2f3b69]">
                                                {step.number}
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                {/* المحتوى */}
                                <div className="pt-8 pb-4 px-2 text-center">

                                    <h3 className="text-[15px] font-bold text-[#2f3b69] mb-2">
                                        {step.title}
                                    </h3>

                                    <p className="text-gray-600 leading-8">
                                        {step.desc}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
            {/* الدول المتاحة */}

            <section className="container mx-auto px-4 py-10 bg-white">

                <div className="text-center mb-16">

                    

                    <h2 className="text-[24px] font-black mt-2 text-[#2f3b69]">
                        الدول التي نقدم فيها الخدمة
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-3xl mx-auto leading-8">
                        نوفر خدمات معادلة الشهادات في عدد من الدول بالتعاون مع
                        الجهات الرسمية والجامعات المعتمدة.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-10">

                    {/* مصر */}

                    <div className="group overflow-hidden rounded-[10px] shadow-xl bg-white">

                        <div className="relative h-62">

                            <img
                                src="https://i.pinimg.com/736x/1a/16/9b/1a169b9aac9b31d14d3f9b94eb999abc.jpg"
                                className="w-full h-full object-[2px] group-hover:scale-110 transition duration-800"
                                alt="Egypt"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-6 right-6 text-white">

                                <h3 className="text-3xl font-black">
                                    🇪🇬 مصر
                                </h3>

                                <p className="text-white/90 mt-2">
                                    معادلة المؤهلات داخل جمهورية مصر العربية.
                                </p>

                            </div>

                        </div>

                        <div className="p-5">

                            <ul className="space-y-3 text-gray-700">

                                <li>✔ معادلة الثانوية العامة</li>

                                <li>✔ معادلة البكالوريوس</li>

                                <li>✔ معادلة الدراسات العليا</li>

                                <li>✔ متابعة حتى صدور القرار</li>

                            </ul>

                        </div>

                    </div>

                    {/* الإمارات */}

                    <div className="group overflow-hidden rounded-[9px] shadow-xl bg-white">

                        <div className="relative h-62">

                            <img
                                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                alt="UAE"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-6 right-6 text-white">

                                <h3 className="text-3xl font-black">
                                    🇦🇪 الإمارات
                                </h3>

                                <p className="text-white/90 mt-2">
                                    معادلة المؤهلات وفق متطلبات وزارة التعليم.
                                </p>

                            </div>

                        </div>

                        <div className="p-8">

                            <ul className="space-y-4 text-gray-700">

                                <li>✔ معادلة الشهادات الجامعية</li>

                                <li>✔ معادلة الدراسات العليا</li>

                                <li>✔ مراجعة المستندات</li>

                                <li>✔ متابعة جميع الإجراءات</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
            {/* الأسئلة الشائعة */}

            <section className="bg-white py-10">

                <div className="container mx-auto px-4 max-w-4xl">

                    <div className="text-center mb-16">

                        <span className="text-[#154734] font-semibold">
                            FAQ
                        </span>

                        <h2 className="text-4xl font-black mt-3 text-[#0d2b5e]">
                            الأسئلة الشائعة
                        </h2>

                        <p className="text-gray-600 mt-5">
                            أكثر الأسئلة التي يطرحها الطلاب حول معادلة الشهادات.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md border overflow-hidden"
                            >

                                <button
                                    onClick={() =>
                                        setOpenFaq(openFaq === index ? null : index)
                                    }
                                    className="w-full flex items-center justify-between p-6 text-right"
                                >

                                    <h3 className="font-bold text-lg text-[#0d2b5e]">
                                        {faq.question}
                                    </h3>

                                    <ChevronDown
                                        className={`transition duration-300 ${openFaq === index
                                            ? "rotate-180 text-[#154734]"
                                            : ""
                                            }`}
                                    />

                                </button>

                                <div
                                    className={`transition-all duration-300 overflow-hidden ${openFaq === index
                                        ? "max-h-40"
                                        : "max-h-0"
                                        }`}
                                >

                                    <p className="px-6 pb-6 text-gray-600 leading-8">
                                        {faq.answer}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* CTA */}

            <section className="relative py-24">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://i.pinimg.com/736x/a3/76/3e/a3763e9232a5fc5c7123dbbea93b39b3.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-[#154734]/55"></div>

                <div className="container mx-auto px-2 relative z-10">

                    <div className="max-w-4xl mx-auto text-center text-white">

                       

                        <h2 className="text-[27px] font-black leading-tight">

                            ابدأ إجراءات
                            
                          

                        </h2>

                        <p className="mt-5 text-xl leading-9 text-white/90">

                            لا تضيع وقتك في الإجراءات المعقدة.
                            فريق UniGuide سيتولى مراجعة مستنداتك،
                            وتجهيز ملفك، والتقديم لدى الجهات المختصة،
                            ومتابعة الطلب حتى استلام قرار المعادلة.

                        </p>

                        <div className="flex flex-wrap justify-center gap-5 mt-12">

                            <Link
                                to="/scholarship-application?service=equivalency"
                                className="bg-white text-[#154734] px-8 py-2 rounded-[9px] font-bold text-lg hover:scale-105 transition"
                            >
                                ابدأ التقديم الآن
                            </Link>

                            <Link
                                to="/contactSection"
                                className="border border-white px-10 py-2 rounded-xl text-lg hover:bg-white hover:text-[#154734] transition"
                            >
                                تواصل معنا
                            </Link>

                        </div>

                        <div className="grid md:grid-cols-3 grid-cols-3 gap-8 mt-10">

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">

                                <h3 className="text-[20px] font-black">
                                    +500
                                </h3>

                                <p className="mt-2">
                                    الطلابات  
                                </p>

                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">

                                <h3 className="text-[20px] font-black">
                                    100%
                                </h3>

                                <p className="mt-2">
                                    متابعة  
                                </p>

                            </div>

                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">

                                <h3 className="text-[20px] font-black">
                                    24/7
                                </h3>

                                <p className="mt-2">
                                     واستشارات
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </main>

    );
}
