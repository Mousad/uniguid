import CountryCard from "../components/CountryCard";
import { studyCountries } from "../../data/studyCountries";

export default function StudyAbroad() {
  return (
    <main className="bg-gray-50">

      {/* Hero */}
      <section className="relative h-[350px] md:h-[500px]">
     <img
  src="https://i.pinimg.com/736x/1d/68/04/1d68041835324a83583595071e6eb95c.jpg"
  alt="Study Abroad"
  className="absolute inset-0 w-full h-full object-cover"
/>

   

        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            الدراسة في الخارج
          </h1>

          <p className="max-w-3xl leading-8 text-lg">
            اختر الدولة المناسبة لك، واستكشف الجامعات والتخصصات وشروط القبول
            والرسوم الدراسية وكل ما تحتاجه لبدء رحلتك التعليمية.
          </p>
        </div>
      </section>

      {/* Countries */}
      <section className="max-w-7xl mx-auto py-20 px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            اختر وجهتك الدراسية
          </h2>

          <p className="text-gray-600 mt-4">
            نقدم برامج الدراسة في أشهر الوجهات التعليمية حول العالم.
          </p>
        </div>

       <div className="grid gap-8 md:grid-cols-2  lg:grid-cols-3">
  {Object.values(studyCountries).map((country) => (
    <CountryCard
      key={country.slug}
      title={country.name}
      image={country.heroImage}
      description={country.overview}
      path={`/study/${country.slug}`}
    />
  ))}
</div>

      </section>

    </main>
  );
}