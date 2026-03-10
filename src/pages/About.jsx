import HeroSection from "../components/HeroSection";

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

const About = () => {
  return (
    <main className="bg-neutral-primary text-heading min-h-screen">
      {/* Hero strip for About */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-16">
          <div className="max-w-2xl space-y-4" data-aos="fade-right">
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

          <div className="mt-6 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-md sm:p-6" data-aos="fade-left" data-aos-delay="200">
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
        <div className="mb-8 text-center" data-aos="fade-up">
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
          {jaipurPlaces.map((place, index) => (
            <article
              key={place.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group overflow-hidden rounded-xl border border-zinc-300 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
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
