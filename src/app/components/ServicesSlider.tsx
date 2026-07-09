import React, { useEffect, useState } from "react"
import ServicesCarousel from "./components/ServicesCarousel";



export default function ServicesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", direction: "rtl" },
    [Autoplay({ delay: 10000, stopOnInteraction: false })]
  )

  useEffect(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap()))
  }, [emblaApi])

  return (
    <ServicesCarousel />
    <section className="py-2 bg-gray-50">
      <div className="text-center mb-1">
        <h2 className="text-3xl font-bold mb-2">خدماتنا</h2>
        <p className="max-w-2xl mx-auto">
          نقدم لك كل ما يسهل رحلتك <br />التعليمية في الجامعات  مع نخبة من مستشاري ريتال التعليمية.
        </p>
      </div>

    

      
    </section>
  )
}