import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode, FaFigma } from "react-icons/fa";
import { FaFileCircleCheck } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { SiCoreldraw } from "react-icons/si";

const Button = ({ className, to, children, ariaLabel }) => (
  <Link to={to}>
    <button
      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/50 relative z-10 ${className}`}
      aria-label={ariaLabel}
      onClick={() => console.log(`Navigating to ${to}`)} // Debugging click
    >
      {children}
    </button>
  </Link>
);

const ExclusiveOffer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  const services = [
    {
      title: "Web Development",
      imageUrl: "/assets/images/356159-PB0V71-529.jpg",
      iconUrl: <FaCode />,
      description: "Build robust, scalable web apps tailored to your needs.",
    },
    {
      title: "Product Management",
      imageUrl: "/assets/images/8815173.jpg",
      iconUrl: <FaFileCircleCheck />,
      description: "Streamline your product lifecycle with expert guidance.",
    },
    {
      title: "UI/UX Designs",
      imageUrl: "/assets/images/uiuxdesign.jpg",
      iconUrl: <FaFigma />,
      description: "Create intuitive, user-centric designs that captivate.",
    },
    {
      title: "Graphic Design",
      imageUrl: "/assets/images/graphics.jpeg",
      iconUrl: <SiCoreldraw />,
      description: "Craft stunning visuals that elevate your brand.",
    },
    {
      title: "Web Hosting",
      imageUrl: "/assets/images/hosting.avif",
      iconUrl: <CgWebsite />,
      description: "Reliable, secure hosting for seamless performance.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-100 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-coral-400/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Services
          </h2>
          <div
            className="w-24 h-1 bg-gradient-to-r from-teal-500 to-coral-500 mx-auto mt-3 rounded-full"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        {/* Services Grid/Carousel */}
        <div className="flex lg:grid lg:grid-cols-3 gap-8 snap-x snap-mandatory overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scroll-smooth hide-scrollbar">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="flex-shrink-0 w-full sm:w-1/2 lg:w-auto snap-center"
              data-aos="zoom-in"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl border border-transparent hover:border-teal-500/50">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-coral-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="mb-4 text-4xl flex justify-center text-teal-600 bg-teal-100/50 rounded-full w-12 h-12 items-center mx-auto">
                  {service.iconUrl}
                </div>
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <Button
                  className="bg-teal-600 text-white hover:bg-teal-700"
                  to="/services"
                  ariaLabel={`Learn more about ${service.title}`}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS CDN and Custom Styles */}

      <style>
        {`
          @keyframes pulse-slow {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.2); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default ExclusiveOffer;
