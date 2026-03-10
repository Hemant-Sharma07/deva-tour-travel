import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 sm:py-16">
      <div className="px-6 lg:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-5" data-aos="fade-up" data-aos-delay="0">
            <div className="inline-block rounded-xl bg-white p-2">
              <img
                src="/logo.png"
                alt="Deva Tour & Travels"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Premium car rental service in Jaipur for airport pickups, city sightseeing, weddings, and outstation tours. Your comfort is our priority.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/premium-cars" className="hover:text-red-500 transition-colors">
                  Premium Cars
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-red-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Address & Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="mb-5 text-lg font-semibold text-white">Contact Info</h3>
            <ul className="flex flex-col space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 text-red-500 mt-0.5" />
                <span>41,42 Radhaswami Nagar, Mansarovar, Jaipur<br/>(Serving entire Rajasthan)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-red-500" />
                <span>+91-8000842874</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-red-500" />
                <span>booking@devatours.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Icons */}
          <div data-aos="fade-up" data-aos-delay="450">
            <h3 className="mb-5 text-lg font-semibold text-white">Follow Us</h3>
            <p className="text-sm mb-4">
              Stay connected with us for the latest travel updates and offers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-all hover:bg-red-500 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-all hover:bg-red-500 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 transition-all hover:bg-red-500 hover:text-white"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Deva Tour &amp; Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
