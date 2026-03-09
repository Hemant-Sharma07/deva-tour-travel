import { useState, useEffect } from "react";
import HeroText from "./Atoms/HeroText";

const images = [
  "https://assets.gqindia.com/photos/6644932501e2ecdaa5138025/master/w_1600%2Cc_limit/Bugatti-Divo.jpg",
  "https://images.unsplash.com/photo-1633867179970-c54688bcfa33?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?q=80&w=2737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1533127321739-d5dc53c221c8?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="relative md:h-screen w-full overflow-hidden">
      <div
        className="relative h-[50vh] md:h-[95vh] w-full"
        data-aos="fade-right"
      >
        <div className="relative h-full transition-all duration-700 ease-linear">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover bg-black blur-[1px] sm:blur-[2px] brightness-90 saturate-110"
              />

              {/* Black Blur Overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-xs" />
            </div>
          ))}
        </div>

        {/* Centered text overlay (centers within image on mobile) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
          <HeroText />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
