import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { CustomButton } from "./Atoms/AllButtons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral-primary w-full z-20 border-b border-zinc-200">
      <div className="flex flex-wrap items-center justify-between mx-auto py-2 px-3 md:px-8">
        <Link
          to="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <img src="/logo.png" alt="" className="h-16 w-16 object-cover" />
          <span className="hidden md:flex self-center text-lg text-heading font-semibold whitespace-nowrap text-primaryColor">
            Deva Tour & Travel's
          </span>
        </Link>

        <div className="inline-flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <CustomButton label="Book Now" variant="primary" />

          <button
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <a
                href="#"
                className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
