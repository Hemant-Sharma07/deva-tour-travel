import { useState, useEffect } from "react";

const words = ["Journey", "Adventure", "Experience"];

export default function HeroText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute left-1/2 top-1/3 -translate-y-1/2 text-whiteColor -translate-x-1/2 text-center px-4"
      data-aos="fade-up"
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Premium Cars
      </h1>

      <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white  bg-clip-text transition-all duration-500">
        For Every <span className="text-red-500">{words[index]}</span>
      </h1>

      <p className="mt-6 text-gray-300 text-lg">
        Deva Tour Travels provides comfort and style with India's most trusted
        luxury car rental service.
      </p>
    </div>
  );
}
