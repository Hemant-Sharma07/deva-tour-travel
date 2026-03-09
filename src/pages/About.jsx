import HeroSection from "../components/HeroSection";

const jaipurPlaces = [
  {
    name: "Hawa Mahal",
    description:
      "Iconic ‘Palace of Winds’ rising over the old city, a symbol of Jaipur’s royal heritage.",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Amber Fort",
    description:
      "Magnificent hilltop fort overlooking Maota Lake, known for its grand courtyards and views.",
    image:
      "https://i.pinimg.com/736x/24/c3/ab/24c3abec091dd101c6a4ca8c4a27db56.jpg",
  },
  {
    name: "City Palace",
    description:
      "A stunning fusion of Rajasthani and Mughal architecture in the heart of Pink City.",
    image:
      "https://i.pinimg.com/736x/af/9e/62/af9e62911672c2d8f5d8b6f2bfa90381.jpg",
  },
];

const About = () => {
  return (
    <main className="bg-neutral-primary text-heading min-h-screen">
      {/* Hero strip for About */}
      <section className="relative overflow-hidden bg-linear-to-r from-[#111827] via-[#1f2937] to-[#111827] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-400">
              About Deva Tour & Travels
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Jaipur&apos;s Trusted
              <span className="text-red-500"> Premium Car Rental</span> Partner
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
              Deva Tour & Travels is a Jaipur-based rental car company dedicated
              to comfortable, safe and stylish journeys across Rajasthan and
              beyond. From airport pickups to royal wedding entries, we keep
              your travel effortless.
            </p>
          </div>

          <div className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md sm:p-6">
            <h2 className="text-lg font-semibold text-white mb-2">
              Why travellers choose us
            </h2>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>• Clean, well-maintained premium cars & SUVs</li>
              <li>• Professional, polite and experienced Jaipur drivers</li>
              <li>• Customised sightseeing packages across Pink City</li>
              <li>• 24×7 support for airport, outstation and event travel</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Jaipur highlights section */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
            Jaipur Experiences
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-heading">
            Explore Jaipur with Deva Tour & Travels
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-body">
            From heritage forts to vibrant bazaars, our curated routes and local
            expertise make every ride in the Pink City smooth and memorable.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jaipurPlaces.map((place) => (
            <article
              key={place.name}
              className="group overflow-hidden rounded-2xl border border-neutral-tertiary bg-neutral-secondary-soft shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
                <h3 className="absolute bottom-3 left-4 text-lg font-semibold text-white drop-shadow-sm">
                  {place.name}
                </h3>
              </div>

              <div className="space-y-3 px-4 py-4">
                <p className="text-sm text-body">{place.description}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-red-500">
                  Chauffeur-driven city tours
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
