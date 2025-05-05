import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Our Mission & Vision
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-coral-500 transform scale-x-0 transition-transform duration-500 hover:scale-x-100"></span>
          </h1>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Mission Card */}
          <div
            className="flex-1 bg-white border-t-4 border-teal-500 rounded-lg p-6 shadow-sm relative overflow-hidden transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 bg-teal-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Mission icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                  Mission
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-800 group-hover:text-white leading-relaxed transition-colors duration-500">
                <span className="font-semibold text-teal-500 group-hover:text-white">LekzonTech</span> innovates to empower businesses, delivering tailored technology solutions that drive growth and success in a dynamic digital world.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className="flex-1 bg-white border-t-4 border-teal-500 rounded-lg p-6 shadow-sm relative overflow-hidden transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-teal-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <svg
                  className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Vision icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-500">
                  Vision
                </h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-800 group-hover:text-white leading-relaxed transition-colors duration-500">
                Shape a digital future with global impact, leading transformative solutions that redefine industries and inspire progress worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;