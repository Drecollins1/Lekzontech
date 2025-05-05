import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({ className, onClick, children }) => (
  <button
    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${className}`}
    onClick={onClick}
    aria-label={children}
  >
    {children}
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
    AOS.refresh();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto">
      {/* Desktop and Tablet View */}
      <nav
        className={`fixed top-0 w-full z-50 transition-shadow duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        } bg-white/80 backdrop-blur-md md:flex md:justify-between md:items-center p-3 px-5 lg:px-24`}
        data-aos="fade-down"
      >
        <div className="flex items-center">
          <NavLink to="/" onClick={closeMenu}>
            <img
              src="/assets/images/Lekzon.png"
              alt="Brand logo"
              className="w-12 lg:w-16 transition-transform duration-300 hover:scale-110"
              data-aos="zoom-in"
            />
          </NavLink>
        </div>
        <ul className="hidden md:flex flex-wrap justify-center items-center lg:justify-between gap-6 lg:gap-12 text-sm lg:text-base">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/services", label: "Services" },
            // { to: "/projects", label: "Our Projects" },
            // { to: "/portfolio", label: "Portfolio" },
          ].map(({ to, label }) => (
            <li key={to} data-aos="fade-up" data-aos-delay={100 * to.length}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `relative font-medium transition-all duration-300 hover:text-teal-500 ${
                    isActive ? "text-teal-600" : "text-gray-800"
                  }`
                }
                aria-label={label}
              >
                {label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-teal-500 transition-all duration-300 ${({
                    isActive,
                  }) => (isActive ? "w-full" : "w-0")} group-hover:w-full`}
                ></span>
              </NavLink>
            </li>
          ))}
          <div className="hidden md:block">
            <Button
              className="bg-teal-600 text-white hover:bg-teal-700"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </ul>
      </nav>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex fixed top-0 left-0 right-0 z-[50] justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md shadow-sm">
          <NavLink to="/" onClick={closeMenu}>
            <img
              src="/assets/images/Lekzon.png"
              alt="Brand logo"
              className="w-10"
              data-aos="zoom-in"
            />
          </NavLink>
          <button
            className="w-10 h-10 flex items-center justify-center focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            ) : null}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 bg-white text-black transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full focus:outline-none hover:bg-teal-700/50 transition-transform duration-300 hover:scale-110"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-6 h-full flex flex-col justify-center">
            <ul className="text-lg sm:text-xl space-y-8 text-center">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                // { to: "/projects", label: "Our Projects" },
                // { to: "/portfolio", label: "Portfolio" },
              ].map(({ to, label }, index) => (
                <li
                  key={to}
                  data-aos="fade-left"
                  data-aos-delay={100 * (index + 1)}
                >
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block font-medium transition-all duration-300 ${
                        isActive ? "text-coral-400" : "text-black"
                      } hover:text-coral-400`
                    }
                    onClick={closeMenu}
                    aria-label={label}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-5 text-center">
              <Button
                className="bg-teal-600 text-white hover:bg-teal-700 l sm:w-auto"
                onClick={() => {
                  closeMenu();
                  window.location.href = "/contact";
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 "></div>

      <style>
        {`
          .group:hover .group-hover\\:w-full {
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
