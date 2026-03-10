import React from "react";

const stats = [
  {
    value: "1,200+",
    label: "Happy Customers",
  },
  {
    value: "2,000+",
    label: "Total Bookings",
  },
  {
    value: "2+",
    label: "Years in Service",
  },
];

const CustomerSection = () => {
  return (
    <section className="w-full bg-primaryColor py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center text-white" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-100">
            Why travellers trust us
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold">
            Trusted by Jaipur travellers every day
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-red-50">
            Deva Tour &amp; Travels has been serving guests across Jaipur with
            safe, on-time and comfortable rides.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-2xl bg-white/10 px-6 py-5 text-center shadow-md border border-red-200/40"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-red-50">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
