import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Input from "../components/Atoms/Input";
import { CustomButton } from "../components/Atoms/AllButtons";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    carName: "",
    mobile: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up API/WhatsApp later if needed.
    // For now, just prevent reload.
  };

  return (
    <main className="min-h-screen bg-neutral-primary text-heading">
      {/* Header */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
            Contact Us
          </p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold">
            Let&apos;s plan your next ride with{" "}
            <span className="text-red-500">Deva Tour &amp; Travels</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-gray-300">
            Reach out for Jaipur city tours, outstation travel, airport pickup
            or premium car bookings. We&apos;ll get back quickly.
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-neutral-tertiary bg-white p-5 shadow-sm" data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-red-50 p-2 text-red-500">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Address</p>
                <p className="mt-1 text-sm text-body">
                  41,42 Radhaswami Nagar, Mansarovar, Jaipur
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-tertiary bg-white p-5 shadow-sm" data-aos="fade-up" data-aos-delay="150">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-red-50 p-2 text-red-500">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Mobile</p>
                <a
                  className="mt-1 block text-sm text-body hover:text-red-500"
                  href="tel:8000842874"
                >
                  +91-8000842874
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-tertiary bg-white p-5 shadow-sm" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-red-50 p-2 text-red-500">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-heading">Email</p>
                <a
                  className="mt-1 block text-sm text-body hover:text-red-500"
                  href="mailto:devatour@gmail.com"
                >
                  devatour@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start" data-aos="fade-up">
          <div className="rounded-2xl border border-neutral-tertiary bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-heading">
              Send booking request
            </h2>
            <p className="mt-2 text-sm text-body">
              Share your details and preferred car. We&apos;ll contact you with
              availability and pricing.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Name"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Car name"
                  name="carName"
                  placeholder="e.g. Innova Crysta"
                  value={form.carName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Mobile number"
                  name="mobile"
                  placeholder="10 digit number"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Address"
                  name="address"
                  placeholder="Pickup / city"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <Input
                label="Address description"
                name="description"
                type="textarea"
                placeholder="Pickup point, drop, date/time, passengers, etc."
                value={form.description}
                onChange={handleChange}
                rows={4}
              />

              <CustomButton
                label="Submit"
                variant="primary"
                className="w-full"
              />
            </form>
          </div>

          <div className="rounded-2xl border border-neutral-tertiary bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-heading">
              Quick booking tips
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-body">
              <li>• Mention pickup date &amp; time.</li>
              <li>• Share pickup and drop location.</li>
              <li>• Tell us number of passengers and luggage.</li>
              <li>• Mention preferred car (or we’ll suggest best option).</li>
            </ul>

            <div className="mt-6 rounded-2xl bg-neutral-secondary-soft p-5">
              <p className="text-sm font-semibold text-heading">
                Office address
              </p>
              <p className="mt-1 text-sm text-body">
                41,42 Radhaswami Nagar, Mansarovar, Jaipur
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="tel:8000842874"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-heading border border-neutral-tertiary hover:border-red-300 hover:text-red-500 transition"
                >
                  <Phone className="h-4 w-4" /> Call now
                </a>
                <a
                  href="mailto:devatour@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-heading border border-neutral-tertiary hover:border-red-300 hover:text-red-500 transition"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

