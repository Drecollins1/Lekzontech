import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkingProcess = () => {
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const processSteps = [
    {
      title: "Discover",
      description: "LekzonTech uncovers your business needs, identifying opportunities to drive innovation and achieve your goals.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Discover icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Strategize",
      description: "We craft a tailored plan, aligning technology solutions with your vision for maximum impact.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Strategize icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17V7m0 10h6m-6 0H3m12 0h6m-6-10h6M9 7H3"
          />
        </svg>
      ),
    },
    {
      title: "Create",
      description: "Our team designs intuitive, brand-aligned interfaces that enhance user experience and engagement.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Create icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Build",
      description: "LekzonTech develops robust, scalable solutions using cutting-edge technologies to meet your needs.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Build icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Validate",
      description: "We rigorously test solutions to ensure quality, reliability, and alignment with your objectives.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Validate icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      title: "Support",
      description: "LekzonTech provides ongoing support, ensuring your solutions evolve and perform optimally.",
      icon: (
        <svg
          className="w-8 h-8 text-teal-500 group-hover:text-white group-hover:scale-110 group-hover:brightness-0 group-hover:invert transition-all duration-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-label="Support icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative inline-block"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Our Dynamic Process
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-coral-500 transform scale-x-0 transition-transform duration-500 hover:scale-x-100"></span>
          </h1>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-500 h-full"></div>

          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`relative mb-8 flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              <div
                className={`w-full sm:w-5/12 bg-white border-2 border-teal-500 rounded-lg p-4 sm:p-6 shadow-sm relative overflow-hidden transition-all duration-500 group cursor-pointer min-h-[120px] flex flex-col justify-center ${activeStep === index ? "bg-teal-500" : ""}`}
                onClick={() => setActiveStep(activeStep === index ? null : index)}
                onKeyDown={(e) => e.key === "Enter" && setActiveStep(activeStep === index ? null : index)}
                aria-expanded={activeStep === index}
                role="button"
                tabIndex={0}
              >
                <div className={`absolute inset-0 bg-teal-500 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out ${activeStep === index ? "translate-y-0" : ""}`}></div>
                <div className="relative z-10 flex items-center gap-4">
                  {step.icon}
                  <h3 className={`text-xl sm:text-2xl font-semibold ${activeStep === index ? "text-white" : "text-gray-800"} group-hover:text-white transition-colors duration-500`}>
                    {step.title}
                  </h3>
                </div>
                {activeStep === index && (
                  <p className="text-lg sm:text-xl text-white leading-relaxed mt-2">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;