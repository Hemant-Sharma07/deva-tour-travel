import { useState, useEffect } from "react";

const words = ["Journey", "Adventure", "Experience"];

export default function HeroText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const isTyping = charIndex < currentWord.length;
    const delay = isTyping ? 120 : 1500;

    const timeout = setTimeout(() => {
      if (isTyping) {
        setCharIndex((prev) => prev + 1);
      } else {
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, wordIndex]);

  const currentWord = words[wordIndex];
  const typedText = currentWord.slice(0, charIndex);

  return (
    <div
      className="text-center text-whiteColor max-w-2xl mx-auto"
      data-aos="fade-up"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
        Premium Cars
      </h1>

      <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        For Every{" "}
        <span className="text-red-500 border-r-2 border-red-500 pr-1">
          {typedText}
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-gray-200">
        Deva Tour Travels provides comfort and style with India's most trusted
        luxury car rental service.
      </p>
    </div>
  );
}
