import { useNavigate } from "react-router-dom";
import { CustomButton } from "../components/Atoms/AllButtons";

const cars = [
  {
    name: "Toyota Innova Crysta",
    image:
      "https://i.pinimg.com/736x/fe/e6/ee/fee6eea7b191112a744e2bf23a277871.jpg",
    tag: "Family · Business",
    description:
      "Spacious and comfortable MPV perfect for airport transfers, family trips and group tours in and around Jaipur.",
    seats: "6–7 Seater",
    ac: "Dual-zone AC",
  },
  {
    name: "Swift Dzire",
    image:
      "https://www.spinny.com/blog/wp-content/uploads/2024/11/New-Maruti-Suzuki-Dzire-1-1160x653.webp",
    tag: "City Ride",
    description:
      "Rugged off-roader ideal for weekend getaways, photo shoots and group tours in and around Jaipur.",
    seats: "4 Seater",
    ac: "Climate control",
  },
  {
    name: "Hyundai Aura",
    image:
      "https://sapphire.hyundaimotor.in/documents/d/global/aura-highlights-single",
    tag: "City Ride",
    description:
      "Comfortable sedan for everyday city rides, short business visits and group tours in and around Jaipur.",
    seats: "4 Seater",
    ac: "Climate control",
  },
  {
    name: "Toyota Etios",
    image:
      "https://i.pinimg.com/736x/89/15/2e/89152e475c57992f7cb17794ec8b77f9.jpg",
    tag: "Executive",
    description:
      "Business-class sedan that combines comfort, performance and style for executives and group tours in and around Jaipur.",
    seats: "4 Seater",
    ac: "Climate control",
  },
  {
    name: "Suzuki Ertiga",
    image:
      "https://i.pinimg.com/736x/ed/24/ef/ed24ef892aec45a5dd26031f58711b62.jpg",
    tag: "Family · Business",
    description:
      "Bold full-size SUV with commanding road presence, ideal for outstation trips and group tours in and around Jaipur.",
    seats: "6–8 Seater",
    ac: "Climate control",
  },
  {
    name: "Tempo Traveller",
    image:
      "https://i.pinimg.com/736x/c7/92/12/c79212cd91f55591b561449fa37ca405.jpg",
    tag: "Family · Business",
    description:
      "Comfortable tempo traveller for family trips, business travel and group tours in and around Jaipur.",
    seats: "11–14 Seater",
    ac: "Climate control",
  },
];

const PremiumCars = () => {
  const navigate = useNavigate();
  return (
    <main className="bg-neutral-primary text-heading min-h-screen">
      {/* Page hero */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl space-y-4" data-aos="fade-right">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
              Premium Fleet
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Choose your <span className="text-red-500">perfect</span> ride in
              Jaipur
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              From luxury sedans to rugged SUVs, Deva Tour &amp; Travels offers
              a carefully curated fleet to match every occasion — airport runs,
              weddings, business travel or weekend escapes.
            </p>
          </div>
        </div>
      </section>

      {/* Cars grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-heading">
              Our premium cars
            </h2>
            <p className="mt-2 max-w-xl text-sm sm:text-base text-body">
              All cars are chauffeur-driven, well-maintained and ready for your
              next journey in and around Jaipur.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car, index) => (
            <article
              key={car.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 sm:h-56 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-red-500/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                  {car.tag}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3 px-4 py-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-heading">
                    {car.name}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-body line-clamp-2">
                    {car.description}
                  </p>
                </div>

                <div className=" flex items-center justify-between rounded-lg bg-neutral-secondary-soft  text-xs sm:text-sm text-body">
                  <span>
                    Seats: <span className="font-semibold">{car.seats}</span>
                  </span>
                  <span>
                    AC: <span className="font-semibold">{car.ac}</span>
                  </span>
                </div>

                <div className="mt-3">
                  <CustomButton
                    label="Book Now"
                    variant="primary"
                    className="w-full"
                    onClick={() => {
                      navigate("/contact-us");
                    }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PremiumCars;
