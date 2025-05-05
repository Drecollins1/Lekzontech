import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br lg:px-24 from-indigo-600 via-teal-600 to-coral-500 animate-gradient">
      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

      {/* Main Content */}
      <div className="relative container mx-auto py-12 md:py-24 flex flex-col md:flex-row items-center gap-12 z-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
            data-aos="fade-up"
          >
            Unleash Your Vision
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-100 mb-8 max-w-xl mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform your ideas into reality with innovative solutions tailored
            to your needs. Let’s build something extraordinary together.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button
              className="bg-coral-500 text-white hover:bg-coral-600"
              to="/contact"
              ariaLabel="Get Started"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Get Started
            </Button>
            <Button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-600"
              to="/about"
              ariaLabel="Learn More"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Decorative Element (Optional Image or Illustration) */}
        <div className="flex-1  md:block" data-aos="fade-up">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-coral-400/30 rounded-full blur-2xl animate-pulse"></div>
            <img
              src="/assets/images/undraw_designer_efwz.svg"
              alt="Hero illustration"
              className="relative w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 w-full text-white z-10">
        <svg viewBox="0 0 1440 120" fill="currentColor">
          <path d="M0,64L80,53.3C160,43,320,21,480,26.7C640,32,800,64,960,69.3C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* Tailwind CSS CDN and Custom Styles */}

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
