import { useState, useEffect } from "react";
import HeroText from "./Atoms/HeroText";

const images = [
  "https://assets.gqindia.com/photos/6644932501e2ecdaa5138025/master/w_1600%2Cc_limit/Bugatti-Divo.jpg",
  "https://images.unsplash.com/photo-1614687153862-b0e115ebcef1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwY2FyfGVufDB8fDB8fHww",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/12264/1759841599514/front-left-side-47.jpg",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div className="relative h-screen">
        <div className="relative w-full overflow-hidden" data-aos="fade-right">
          <div className="relative h-[20vh] sm:h-[40vh] md:h-[50vh] lg:h-[92vh] transition-all duration-700 ease-linear">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute w-full h-full object-contain top-0 left-0 transition-opacity duration-800 ${
                  index === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />

                {/* Black Blur Overlay */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>
              </div>
            ))}
          </div>
        </div>

        <HeroText />
      </div>
    </>
  );
};

export default HeroSection;
