import { Link } from "react-router-dom";
import { services } from "../../data/services";

export default function ServicesCarousel() {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">



                    <h1 className="text-4xl md:text-6xl font-bold text-[#2f3b69] mb-5">
                        خدماتنا
                    </h1>

                    <p className="text-[#2f3b69] text-lg max-w-3xl leading-6 mb-2">
                        نوفر لك خدمات القبول الجامعي، المنح الدراسية، الدراسات العليا،
                        المعادلات، واستخراج الشهادات مع متابعة كاملة حتى وصولك إلى وجهتك.
                    </p>



                </div>


                {/* Cards */}

                <div className="grid grid-cols-1 gap-6 max-w-md mx-auto lg:max-w-7xl lg:grid-cols-2">
                    {services.map((service) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={service.id}
                                className={`bg-white rounded-[10px] overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2 ${service.id === 5 ? "col-span-1" : ""
                                    }`}
                            >

                                {/* Image */}

                                <div className="relative">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-50 md:h-60 object-cover"
                                    />

                                    {/* Circle */}

                                    <div
                                        className={`absolute left-1/2 -bottom-10 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-xl flex items-center justify-center ${service.color}`}
                                    >
                                        <Icon className="text-white w-9 h-9" />
                                    </div>

                                </div>

                                {/* Body */}

                                <div className="pt-11 pb-5 px-1  text-center">

                                    <h3 className="font-bold text-lg md:text-2xl mb-1">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600 leading-7 min-h-[90px]">
                                        {service.description}
                                    </p>

                                    <Link
                                        to={service.link}
                                        className={`inline-flex items-center justify-center mt-2 px-3 py-1 rounded-[10px] text-white font-semibold transition hover:scale-105 ${service.color}`}
                                    >
                                        {service.button}
                                    </Link>

                                </div>

                            </div>

                        );
                    })}

                </div>

            </div>

        </section>
    );
}