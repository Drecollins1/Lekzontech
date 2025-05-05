import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = ({ className, to, children, ariaLabel }) => (
  <Link to={to}>
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  </Link>
);

const OurCompany = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-coral-400/20 rounded-full blur-3xl animate-float-slow"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Card */}
          <div
            className="relative lg:w-2/5 z-10"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="relative bg-white/80 backdrop-blur-md p-4 rounded-3xl shadow-xl">
              <img
                src="/assets/images/technology-workforce-and-industry.jpg"
                alt="Our team at work"
                className="w-full h-96 object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-500 to-coral-500 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
              <div className="w-4 h-4 bg-coral-500 rounded-full animate-pulse"></div>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-800"
                data-aos="fade-up"
              >
                About Our Company
              </h2>
            </div>
            <p
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At LekzonTech, we’re driven by a passion for innovation, crafting cutting-edge solutions that empower businesses globally. From vision to victory, we turn ideas into impactful realities.
            </p>

            {/* Services as Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center lg:place-items-start">
              {[
                { label: "Web App Development", icon: "/assets/images/Group 1000002335.svg" },
                { label: "Mobile App Development", icon: "/assets/images/Group 1000002335.svg" },
                { label: "IT Consulting", icon: "/assets/images/Group 1000002335.svg" },
                { label: "UI/UX Designs", icon: "/assets/images/Group 1000002335.svg" },
              ].map((service, index) => (
                <div
                  key={service.label}
                  className="flex items-center bg-white/50 backdrop-blur-sm p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-full max-w-xs"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <img
                    src={service.icon}
                    alt={`${service.label} icon`}
                    className="w-6 h-6 mr-3"
                  />
                  <span className="text-gray-800 font-medium">{service.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-center lg:justify-start">
              {isHomePage ? (
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-700 flex items-center gap-2"
                  to="/about"
                  ariaLabel="See More About Us"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Button>
              ) : (
                <Button
                  className="bg-[#0F766E] text-white hover:bg-coral-600"
                  to="/services"
                  ariaLabel="Check Out Our Services"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  Check Out Services We Offer
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind CSS CDN and Custom Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0); }
          }
          @keyframes float-slow {
            0% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
            100% { transform: translateY(0); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-slow {
            animation: float-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default OurCompany;