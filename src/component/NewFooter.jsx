import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const NewFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-teal-600 to-indigo-600 text-white py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div data-aos="fade-up" data-aos-delay="100">
            <NavLink to="/" aria-label="LekzonTech logo">
              <img
                src="/assets/images/Lekzon.png"
                alt="LekzonTech logo"
                className="w-14 sm:w-16 lg:w-32 transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                data-aos="zoom-in"
              />
            </NavLink>
            <p className="text-sm mt-4 max-w-xs">
              Actualizing potential through inventive and effective strategies.{" "}
            </p>
          </div>

          {/* Services Section */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="text-sm space-y-2">
              {[
                "Graphics Design",
                "IT Consulting",
                "Mobile App Development",
                "Product Design",
                "Product Management",
                "SEO Optimization",
                "Social Media Management",
                "Web Development",
              ].map((service, index) => (
                <li key={index}>
                  <span className="hover:text-coral-500 hover:underline transition-all duration-300">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `hover:text-coral-500 hover:underline transition-all duration-300 ${
                        isActive ? "text-coral-500" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="text-sm space-y-2">
              {[{ to: "/privacy", label: "Privacy Policy" }].map(
                (link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `hover:text-coral-500 hover:underline transition-all duration-300 ${
                          isActive ? "text-coral-500" : ""
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2025 LekzonTech. All Rights Reserved.</p>
          <div
            className="flex items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {[
              {
                href: "https://www.linkedin.com/company/lekzontech",
                icon: <FaLinkedinIn />,
                label: "Visit LekzonTech on LinkedIn",
              },
              {
                href: "https://www.instagram.com/lekzontech",
                icon: <AiFillInstagram />,
                label: "Visit LekzonTech on Instagram",
              },
              {
                href: "https://x.com/lekzontech",
                icon: <FaTwitter />,
                label: "Visit LekzonTech on X",
              },

              // Uncomment if YouTube link is available
              // {
              //   href: "https://www.youtube.com/@lekzontech",
              //   icon: <FaYoutube />,
              //   label: "Visit LekzonTech on YouTube",
              // },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center hover:bg-teal-600 hover:scale-110 hover:rotate-12 transition-all duration-300"
                aria-label={social.label}
              >
                <span className="text-teal-600 group-hover:text-white transition-colors duration-300">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;
