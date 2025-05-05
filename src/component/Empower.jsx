import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Empower = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 items-center">
          {/* Image Section */}
          <div
            data-aos="fade-up"
            className="w-full max-w-md mx-auto lg:w-[40%]"
          >
            <img
              src="/assets/images/handshake.jpg"
              alt="LekzonTech team handshake"
              className="w-full h-auto rounded-lg shadow-lg"
              aria-label="LekzonTech team handshake"
            />
          </div>

          {/* Text Section */}
          <div
            data-aos="fade-up"
            className="w-full lg:w-[50%] bg-white/80 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg"
          >
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                Transform Your Business with Cutting-Edge IT Solutions
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-coral-500 mt-3 mb-6 mx-auto lg:mx-0 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed">
                At LekzonTech, we harness innovative technology to empower
                businesses globally. Our expert team delivers tailored IT
                solutions that turn your vision into reality, driving growth and
                success.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 place-items-center lg:place-items-start">
                {[
                  { text: "Guaranteed Excellence", aosDelay: 100 },
                  { text: "Advanced Tech Solutions", aosDelay: 200 },
                  { text: "Global Client Reach", aosDelay: 300 },
                  { text: "24/7 Expert Support", aosDelay: 400 },
                ].map(({ text, aosDelay }, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-800 text-nowrap"
                    data-aos="zoom-in"
                    data-aos-delay={aosDelay}
                  >
                    <span className="mr-3 bg-teal-100/50 rounded-full p-1">
                      <img
                        src="/assets/images/Group 1000002335.svg"
                        alt="Check icon"
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empower;
