import { useNavigate } from "react-router-dom";
import { CustomButton } from "./Atoms/AllButtons";

const homeCars = [
  {
    name: "Toyota Innova Crysta",
    image:
      "https://i.pinimg.com/736x/fe/e6/ee/fee6eea7b191112a744e2bf23a277871.jpg",
    tag: "Family · Business",
    description:
      "Spacious and comfortable MPV for airport transfers, family trips and group tours in and around Jaipur.",
    seats: "6–7 Seater",
    ac: "Dual-zone AC",
  },
  {
    name: "Swift Dzire",
    image:
      "https://www.spinny.com/blog/wp-content/uploads/2024/11/New-Maruti-Suzuki-Dzire-1-1160x653.webp",
    tag: "City Ride",
    description:
      "Compact, economical sedan ideal for daily city rides, office commute and Jaipur sightseeing.",
    seats: "4 Seater",
    ac: "Climate control",
  },
  {
    name: "Suzuki Ertiga",
    image:
      "https://i.pinimg.com/736x/ed/24/ef/ed24ef892aec45a5dd26031f58711b62.jpg",
    tag: "Family · Group",
    description:
      "Comfortable 6–8 seater MPV perfect for family trips, weddings and outstation group travel.",
    seats: "6–8 Seater",
    ac: "Climate control",
  },
];

const CarsSectionHome = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center lg:text-left" data-aos="fade-right">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Premium Fleet
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-heading">
            Popular cars for{" "}
            <span className="text-red-500">Jaipur rides</span>
          </h2>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-body">
            A quick look at some of our most booked cars for airport pickup,
            city rides and outstation tours.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeCars.map((car, index) => (
            <article
              key={car.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
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

                <div className="flex items-center justify-between rounded-lg bg-neutral-secondary-soft px-3 py-2 text-xs sm:text-sm text-body">
                  <span>
                    Seats: <span className="font-semibold">{car.seats}</span>
                  </span>
                  <span>
                    AC: <span className="font-semibold">{car.ac}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center" data-aos="fade-up">
          <CustomButton
            label="Show all cars"
            variant="primary"
            width="w-auto"
            className="px-10 sm:px-12"
            onClick={() => navigate("/premium-cars")}
          />
        </div>
      </div>
    </section>
  );
};

export default CarsSectionHome;

