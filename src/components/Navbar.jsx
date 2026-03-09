import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { CustomButton } from "./Atoms/AllButtons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "#" },
    { label: "Contact", to: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-neutral-primary w-full z-20 border-b border-zinc-200">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-3 md:px-8">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img src="/logo.png" alt="" className="h-16 w-16 object-cover" />
          <span className="hidden md:flex flex-col self-center whitespace-nowrap">
            <span className="text-lg font-semibold text-primaryColor leading-tight">
              Deva Tour &amp; Travels
            </span>
            <span className="text-xs text-body leading-tight">
              Jaipur Premium Car Rentals
            </span>
          </span>
        </Link>

        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <CustomButton label="Book Now" variant="primary" />

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary transition-colors duration-200"
          >
            {isMenuOpen ? (
              <HiOutlineX className="w-8 h-8 transition-transform duration-300 ease-in-out" />
            ) : (
              <HiOutlineMenu className="w-8 h-8 transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            {tabs.map((tab) => (
              <li key={tab.label}>
                <Link
                  to={tab.to}
                  onClick={() => handleTabClick(tab.label)}
                  className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 ${
                    activeTab === tab.label
                      ? "text-primaryColor"
                      : "text-heading hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-primaryColor"
                  }`}
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden w-full mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border border-default rounded-base bg-neutral-secondary-soft px-4 py-3 space-y-4">
            <ul className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <li key={tab.label}>
                  <Link
                    to={tab.to}
                    onClick={() => handleTabClick(tab.label)}
                    className={`w-full text-left block py-2 px-3 rounded-sm transition-colors duration-200 ${
                      activeTab === tab.label
                        ? "bg-red-500 text-white"
                        : "text-heading hover:bg-neutral-tertiary"
                    }`}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
