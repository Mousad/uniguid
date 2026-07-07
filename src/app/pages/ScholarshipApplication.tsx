import { useState } from "react";
import { Send } from "lucide-react";

export default function ScholarshipApplication() {
  const [service, setService] = useState("");

  return (
    <section className="min-h-screen bg-[#f7faf9] py-22">
      <div className="max-w-5xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-[#154734]/10 text-[#154734] px-5 py-2 rounded-full font-semibold">
            نموذج الطلب
          </span>

          <h1 className="text-4xl font-bold text-[#0d2b5e] mt-5">
            طلب خدمة تعليمية
          </h1>

          <p className="text-gray-600 mt-4">
            يرجى تعبئة البيانات التالية وسيتواصل معك فريق UniGuide في أقرب وقت.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          {/* اختيار الخدمة */}
          <div className="mb-8">
            <label className="block mb-1 font-bold text-gray-700">
              اختر الخدمة *
            </label>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border rounded-xl px-2 py-2 focus:ring-2 focus:ring-[#154734] outline-none"
            >
              <option value="">اختر الخدمة</option>

              <option value="scholarship">
                التقديم على منحة دراسية
              </option>

              <option value="consultation">
                استشارة تعليمية
              </option>

              <option value="university">
                استخراج شهادة جامعية
              </option>

              <option value="secondary">
                استخراج شهادة الثانوية العامة
              </option>

              <option value="basic">
                استخراج شهادة الصف الثامن
              </option>
            </select>
          </div>

          {/* المعلومات الشخصية */}
          {service && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mb-6">
                المعلومات الشخصية
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="الجنسية"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="الدولة الحالية"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="date"
                  className="border rounded-xl px-4 py-3"
                />

              </div>
            </>
          )}

          {/* المنحة */}
          {service === "scholarship" && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mt-10 mb-6">
                بيانات المنحة
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="الدولة المطلوبة"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="الجامعة المطلوبة"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="التخصص"
                  className="border rounded-xl px-4 py-3"
                />

                <select className="border rounded-xl px-4 py-3">
                  <option>بكالوريوس</option>
                  <option>ماجستير</option>
                  <option>دكتوراه</option>
                </select>

              </div>
            </>
          )}

          {/* الاستشارة */}
          {service === "consultation" && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mt-10 mb-6">
                تفاصيل الاستشارة
              </h2>

              <textarea
                rows={5}
                placeholder="اكتب استفسارك هنا..."
                className="w-full border rounded-xl px-4 py-3"
              />
            </>
          )}

          {/* استخراج الشهادات */}
          {(service === "university" ||
            service === "secondary" ||
            service === "basic") && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mt-10 mb-6">
                بيانات الشهادة
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="اسم المؤسسة التعليمية"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="سنة التخرج"
                  className="border rounded-xl px-4 py-3"
                />

                <input
                  type="text"
                  placeholder="رقم الجلوس أو الرقم الجامعي"
                  className="border rounded-xl px-4 py-3"
                />

              </div>
            </>
          )}

          {/* رفع الملفات */}
          {service && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mt-10 mb-6">
                رفع الملفات
              </h2>

              <input
                type="file"
                multiple
                className="w-full border rounded-xl p-4"
              />
            </>
          )}

          {/* ملاحظات */}
          {service && (
            <>
              <h2 className="text-2xl font-bold text-[#0d2b5e] mt-10 mb-6">
                ملاحظات إضافية
              </h2>

              <textarea
                rows={4}
                placeholder="أي معلومات إضافية..."
                className="w-full border rounded-xl px-4 py-3"
              />
            </>
          )}

          {/* زر الإرسال */}
          {service && (
            <button className="mt-10 w-full bg-[#154734] hover:bg-[#0d2b5e] text-white py-4 rounded-xl font-bold flex justify-center items-center gap-3 transition">
              <Send size={20} />
              إرسال الطلب
            </button>
          )}

        </div>

      </div>
    </section>
  );
}