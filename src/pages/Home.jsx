import React, { useRef, useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import { CustomButton } from "../components/Atoms/AllButtons";
import TravelCard from "../components/TravelCard";

const Home = () => {
  const jaipurPlaces = [
    {
      title: "Hawa Mahal",
      tag: "Old City",
      image:
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
      description:
        "Drive through the buzzing lanes around the iconic ‘Palace of Winds’ and capture the perfect Pink City postcard.",
    },
    {
      title: "Amber Fort",
      tag: "Heritage Fort",
      image:
        "https://i.pinimg.com/736x/24/c3/ab/24c3abec091dd101c6a4ca8c4a27db56.jpg",
      description:
        "Scenic uphill drive to the majestic fort with panoramic views of Aravalli hills and Maota Lake.",
    },
    {
      title: "Jal Mahal",
      tag: "Lake View",
      image:
        "https://i.pinimg.com/736x/bc/e7/15/bce715124626b0cdfc35b8eef1f9ecea.jpg",
      description:
        "Evening rides by the calm waters of Man Sagar Lake with the beautiful Jal Mahal floating in the middle.",
    },
    {
      title: "City Palace",
      tag: "Royal Residence",
      image:
        "https://i.pinimg.com/736x/af/9e/62/af9e62911672c2d8f5d8b6f2bfa90381.jpg",
      description:
        "Explore the royal courtyards and museums in the heart of the Pink City with hassle‑free parking.",
    },
    {
      title: "Nahargarh Fort",
      tag: "Sunset Point",
      image:
        "https://i.pinimg.com/736x/c8/c1/be/c8c1be3ef7e851ad9ac545fe71b65220.jpg",
      description:
        "A favourite evening drive spot offering stunning sunset views over the entire Jaipur cityscape.",
    },
    {
      title: "Albert Hall Museum",
      tag: "Museum",
      image:
        "https://i.pinimg.com/736x/d8/4b/8d/d84b8d0450f52b3c0e2f1c5bf6b5688f.jpg",
      description:
        "Drive past the Indo‑Saracenic architecture lit up at night or stop for a relaxed museum visit.",
    },
    {
      title: "Patrika Gate",
      tag: "Photo Spot",
      image:
        "https://i.pinimg.com/736x/a0/87/93/a08793f0fd7fb514f0a7bbc0e41d4d6c.jpg",
      description:
        "Perfect Instagram‑worthy stop with colourful painted arches at Jawahar Circle, ideal for short drives.",
    },
    {
      title: "Johari Bazaar",
      tag: "Shopping",
      image:
        "https://i.pinimg.com/736x/3b/c1/7c/3bc17cd03896f667a94818e44c3e6bbd.jpg",
      description:
        "Comfortable pick‑up and drop for jewellery and handicraft shopping in the busy old market streets.",
    },
    {
      title: "Galta Ji (Monkey Temple)",
      tag: "Temple",
      image:
        "https://i.pinimg.com/736x/a7/a0/ab/a7a0ab62058ef8177878e3a8e309f9d4.jpg",
      description:
        "Scenic drives through the Aravalli hills to the ancient temple complex with natural springs.",
    },
  ];

  return (
    <>
      <HeroSection />

      {/*  About section  */}
      <section className="bg-white py-5 sm:py-10">
        <div className="mx-auto max-w-7xl flex w-full flex-col-reverse items-center gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          {/* Left: text */}
          <div className="w-full max-w-xl space-y-4 text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
              About Deva Tour &amp; Travels
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-heading">
              Jaipur-based <span className="text-red-500">premium</span> car
              rental service
            </h2>
            <p className="text-sm sm:text-base text-body">
              Deva Tour &amp; Travels is your trusted Jaipur partner for airport
              pickups, business trips, weddings and city sightseeing. Clean
              cars, experienced chauffeurs and smooth bookings make every
              journey comfortable.
            </p>

            <CustomButton
              label="Book Now"
              variant="primary"
              className="max-w-32"
            />
          </div>

          {/* Right: logo highlight */}
          <div className="w-full max-w-sm">
            <div className="mx-auto flex items-center justify-center bg-neutral-secondary-soft/60 px-6 py-6 sm:px-8 sm:py-8">
              <img
                src="/logo.png"
                alt="Deva Tour & Travels logo"
                className="h-full w-full object-contain p-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jaipur places slider section */}
      <section className="bg-neutral-primary py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
                Jaipur Places
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl md:text-4xl font-bold text-heading">
                Explore Jaipur with{" "}
                <span className="text-red-500">Deva Tour &amp; Travels</span>
              </h2>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-body">
                Discover the most iconic sights of the Pink City in comfort. Our
                curated routes cover heritage forts, palaces and vibrant streets
                of Jaipur.
              </p>
            </div>
          </div>

          <JaipurPlacesSlider jaipurPlaces={jaipurPlaces} />
        </div>
      </section>
    </>
  );
};

const JaipurPlacesSlider = ({ jaipurPlaces }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = jaipurPlaces.length;

  // Auto-advance index
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % total),
      3000
    );
    return () => clearInterval(interval);
  }, [total]);

  // Scroll to active card when index changes
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const child = container.children[currentIndex];
    if (!child) return;
    const offsetLeft = child.offsetLeft;
    container.scrollTo({ left: offsetLeft, behavior: "smooth" });
  }, [currentIndex]);

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* hide scrollbar */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {jaipurPlaces.map((place) => (
          <div
            key={place.title}
            className="min-w-[85%] sm:min-w-[55%] md:min-w-[45%] lg:min-w-[32%]"
          >
            <TravelCard
              title={place.title}
              description={place.description}
              image={place.image}
              tag={place.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
