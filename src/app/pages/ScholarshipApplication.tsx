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
                التقديم  منحة دراسية
              </option>

              <option value="consultation">
                استشارة تعليمية
              </option>

              <option value="university">
                استخراج شهادة جامعية
              </option>

              <option value="secondary">
                استخراج شهادة الثانوية 
              </option>

              <option value="basic">
                استخراج شهادة  الثامن
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

      {/* الدولة */}
      <select className="border rounded-xl px-4 py-3 bg-white">
        <option value="">اختر الدولة</option>

        <option>مصر</option>
        <option>السعودية</option>
        <option>الإمارات العربية المتحدة</option>
        <option>قطر</option>
        <option>الكويت</option>
        <option>البحرين</option>
        <option>سلطنة عُمان</option>
        <option>الأردن</option>
        <option>لبنان</option>
        <option>سوريا</option>
        <option>العراق</option>
        <option>فلسطين</option>
        <option>السودان</option>
        <option>ليبيا</option>
        <option>تونس</option>
        <option>الجزائر</option>
        <option>المغرب</option>
        <option>موريتانيا</option>
        <option>جيبوتي</option>
        <option>الصومال</option>
        <option>جزر القمر</option>
        <option>اليمن</option>
      </select>

       <select className="border rounded-xl px-4 py-3 bg-white">
  <option value="">اختر التخصص</option>

  {/* الطب والعلوم الصحية */}
  <optgroup label=" الطب والعلوم الصحية">
    <option>الطب البشري</option>
    <option>طب الأسنان</option>
    <option>الصيدلة</option>
    <option>التمريض</option>
    <option>العلاج الطبيعي</option>
    <option>المختبرات الطبية</option>
    <option>الأشعة والتصوير الطبي</option>
    <option>التغذية العلاجية</option>
    <option>الصحة العامة</option>
    <option>الطب البيطري</option>
  </optgroup>

  {/* الهندسة */}
  <optgroup label=" الهندسة">
    <option>الهندسة المدنية</option>
    <option>الهندسة المعمارية</option>
    <option>الهندسة الكهربائية</option>
    <option>الهندسة الميكانيكية</option>
    <option>هندسة الحاسوب</option>
    <option>الهندسة الإلكترونية</option>
    <option>الهندسة الصناعية</option>
    <option>الهندسة الكيميائية</option>
    <option>هندسة البترول</option>
    <option>الهندسة الزراعية</option>
    <option>الهندسة الطبية الحيوية</option>
  </optgroup>

  {/* الحاسوب والتقنية */}
  <optgroup label=" الحاسوب والتقنية">
    <option>علوم الحاسوب</option>
    <option>تقنية المعلومات</option>
    <option>الذكاء الاصطناعي</option>
    <option>الأمن السيبراني</option>
    <option>علوم البيانات</option>
    <option>هندسة البرمجيات</option>
    <option>الشبكات</option>
    <option>تطوير التطبيقات</option>
    <option>الحوسبة السحابية</option>
  </optgroup>

  {/* إدارة الأعمال */}
  <optgroup label=" إدارة الأعمال">
    <option>إدارة الأعمال</option>
    <option>المحاسبة</option>
    <option>المالية</option>
    <option>الاقتصاد</option>
    <option>التسويق</option>
    <option>الموارد البشرية</option>
    <option>إدارة المشاريع</option>
    <option>إدارة سلاسل الإمداد</option>
    <option>ريادة الأعمال</option>
  </optgroup>

  {/* القانون والعلوم الإنسانية */}
  <optgroup label=" القانون والعلوم الإنسانية">
    <option>القانون</option>
    <option>العلوم السياسية</option>
    <option>العلاقات الدولية</option>
    <option>علم النفس</option>
    <option>علم الاجتماع</option>
    <option>الإعلام</option>
    <option>الصحافة</option>
    <option>الترجمة</option>
    <option>اللغة العربية</option>
    <option>اللغة الإنجليزية</option>
  </optgroup>

  {/* التربية */}
  <optgroup label=" التربية">
    <option>التربية</option>
    <option>التربية الخاصة</option>
    <option>رياض الأطفال</option>
    <option>المناهج وطرق التدريس</option>
  </optgroup>

  {/* العلوم */}
  <optgroup label=" العلوم">
    <option>الكيمياء</option>
    <option>الفيزياء</option>
    <option>الأحياء</option>
    <option>الرياضيات</option>
    <option>الإحصاء</option>
    <option>علوم البيئة</option>
    <option>الجيولوجيا</option>
  </optgroup>

  {/* الزراعة */}
  <optgroup label=" الزراعة">
    <option>الزراعة</option>
    <option>الإنتاج الحيواني</option>
    <option>الإنتاج النباتي</option>
    <option>علوم الأغذية</option>
  </optgroup>

  {/* الفنون */}
  <optgroup label=" الفنون والتصميم">
    <option>التصميم الجرافيكي</option>
    <option>التصميم الداخلي</option>
    <option>الفنون الجميلة</option>
    <option>تصميم الأزياء</option>
    <option>الرسوم المتحركة</option>
  </optgroup>

  {/* أخرى */}
  <optgroup label=" تخصصات أخرى">
    <option>الطيران</option>
    <option>السياحة والفندقة</option>
    <option>العلوم البحرية</option>
    <option>الآثار</option>
    <option>الفلسفة</option>
    <option>أخرى</option>
  </optgroup>
</select>

     

    


      {/* الدرجة */}
      <select className="border rounded-xl px-4 py-3 bg-white">
        <option value="">اختر الدرجة العلمية</option>
        <option>دبلوم</option>
        <option>بكالوريوس</option>
        <option>ماجستير</option>
        <option>دكتوراه</option>
      </select>
       {/* الجامعة */}
      <input
        type="text"
        placeholder="الجامعة المطلوبة"
        className="border rounded-xl px-4 py-3"
      />

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
      placeholder="اسم المؤسسة "
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

    {/* ولاية التخرج */}
   {/* الجنسية */}
<select
  className="border rounded-xl px-4 py-3 bg-white"
  defaultValue=""
>
  <option value="" disabled>
    اختر الجنسية
  </option>

  <option>🇸🇩 سوداني</option>
  <option>🇪🇬 مصري</option>
  <option>🇸🇦 سعودي</option>
  <option>🇦🇪 إماراتي</option>
  <option>🇶🇦 قطري</option>
  <option>🇰🇼 كويتي</option>
  <option>🇧🇭 بحريني</option>
  <option>🇴🇲 عُماني</option>
  <option>🇯🇴 أردني</option>
  <option>🇮🇶 عراقي</option>
  <option>🇵🇸 فلسطيني</option>
  <option>🇸🇾 سوري</option>
  <option>🇱🇧 لبناني</option>
  <option>🇾🇪 يمني</option>
  <option>🇱🇾 ليبي</option>
  <option>🇹🇳 تونسي</option>
  <option>🇩🇿 جزائري</option>
  <option>🇲🇦 مغربي</option>
  <option>🌍 أخرى</option>
</select>

{/* دولة الإقامة الحالية */}
<select
  className="border rounded-xl px-4 py-3 bg-white"
  defaultValue=""
>
  <option value="" disabled>
    اختر دولة الإقامة الحالية
  </option>

  <option>🇸🇩 السودان</option>
  <option>🇪🇬 مصر</option>
  <option>🇸🇦 السعودية</option>
  <option>🇦🇪 الإمارات</option>
  <option>🇶🇦 قطر</option>
  <option>🇰🇼 الكويت</option>
  <option>🇧🇭 البحرين</option>
  <option>🇴🇲 سلطنة عُمان</option>
  <option>🇯🇴 الأردن</option>
  <option>🇮🇶 العراق</option>
  <option>🇵🇸 فلسطين</option>
  <option>🇸🇾 سوريا</option>
  <option>🇱🇧 لبنان</option>
  <option>🇾🇪 اليمن</option>
  <option>🇱🇾 ليبيا</option>
  <option>🇹🇳 تونس</option>
  <option>🇩🇿 الجزائر</option>
  <option>🇲🇦 المغرب</option>
  <option>🌍 دولة أخرى</option>
</select>

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
            <button className="mt-10 w-full bg-[#0d2b5e] hover:bg-[#0d2b5e] text-white py-3 rounded-xl font-bold flex justify-center items-center gap-3 transition">
              <Send size={20} />
              إرسال 
            </button>
          )}

        </div>

      </div>
    </section>
  );
}