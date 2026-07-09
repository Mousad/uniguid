import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface CountryCardProps {
  title: string;
  image: string;
  description: string;
  universities: number;
  path: string;
}

export default function CountryCard({
  title,
  image,
  description,
  universities,
  path,
}: CountryCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <h2 className="absolute bottom-4 right-4 text-white text-2xl font-bold">
          {title}
        </h2>
      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-gray-600 leading-7 mb-5">
          {description}
        </p>

        <div className="flex items-center justify-between mb-6">

          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-700">
              {universities}+
            </h3>

            <span className="text-sm text-gray-500">
              جامعة
            </span>
          </div>

          <Link
            to={path}
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-full transition"
          >
            استكشف
            <ArrowLeft size={18} />
          </Link>

        </div>

      </div>

    </div>
  );
}