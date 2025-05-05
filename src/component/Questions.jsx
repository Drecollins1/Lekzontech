import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQs = () => {
  const [expanded, setExpanded] = useState(null);

  const questions = [
    {
      question: "What does LekzonTech do?",
      answer: (
        <>
          LekzonTech is a leading IT solutions provider dedicated to empowering businesses with innovative digital tools. Our core services include:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Custom web and mobile app development</li>
            <li>Creative graphic and product design</li>
            <li>Comprehensive product management</li>
            <li>Strategic social media management</li>
          </ul>
          <p className="mt-2">
            We deliver high-quality solutions to help your business thrive.
          </p>
        </>
      ),
    },
    {
      question: "What services does LekzonTech offer?",
      answer: (
        <>
          We provide a wide range of services to elevate your business:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Web & Mobile Apps:</strong> Tailored solutions for seamless user experiences.
            </li>
            <li>
              <strong>Graphic Design:</strong> Stunning visuals, from logos to marketing materials.
            </li>
            <li>
              <strong>Product Design:</strong> Innovative designs to meet market needs.
            </li>
            <li>
              <strong>Product Management:</strong> From concept to launch, we manage it all.
            </li>
            <li>
              <strong>Social Media:</strong> Engaging campaigns to grow your audience.
            </li>
          </ul>
          <p className="mt-2">
            Visit our{" "}
            <a href="/services" className="text-teal-500 hover:underline">
              Services Page
            </a>{" "}
            or contact us for details.
          </p>
        </>
      ),
    },
    {
      question: "How can I contact your support team?",
      answer: (
        <>
          Our support team is here to assist you:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@lekzontech.com" className="text-teal-500 hover:underline">
                support@lekzontech.com
              </a>{" "}
              (response within 24 hours).
            </li>
            <li>
              <strong>Contact Form:</strong> Use the form on our{" "}
              <a href="/contact" className="text-teal-500 hover:underline">
                Support Page
              </a>.
            </li>
          </ul>
          <p className="mt-2">
            Reach out anytime—we’re ready to help!
          </p>
        </>
      ),
    },
    {
      question: "How is your pricing structured?",
      answer: (
        <>
          We offer flexible pricing tailored to your project:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <strong>Fixed Price:</strong> Clear costs for well-defined projects.
            </li>
            <li>
              <strong>Hourly Rate:</strong> Ideal for ongoing or evolving work.
            </li>
            <li>
              <strong>Custom Packages:</strong> Personalized plans for unique needs.
            </li>
          </ul>
          <p className="mt-2">
            Contact us to find the best pricing for your project.
          </p>
        </>
      ),
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="w-full max-w-md lg:w-5/12">
            <img
              src="/assets/images/faqs-concept-illustration_114360-5185.jpg"
              alt="LekzonTech team collaboration"
              className="w-full h-auto rounded-lg shadow-lg transform rotate-2 hover:scale-105 transition-transform duration-300"
              aria-label="LekzonTech team collaboration"
            />
          </div>

          {/* Accordion Section */}
          <div data-aos="fade-up" className="w-full lg:w-7/12">
            <div className="mb-8 text-center lg:text-left">
              <div className="flex justify-center lg:justify-start items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  Your Questions, Answered
                </h2>
              </div>
              <p className="text-gray-600 max-w-xl mx-auto lg:mx-0">
                Explore common inquiries about our IT solutions. Need more details? Contact us directly.
              </p>
            </div>

            <div className="space-y-4">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-teal-500/20 transition-all duration-300 hover:bg-teal-50/50"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={expanded === index}
                    aria-controls={`faq-panel-${index}`}
                    aria-label={`Toggle ${item.question}`}
                  >
                    <span className="text-sm md:text-base font-semibold text-gray-800">
                      {item.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-teal-500 transform transition-transform duration-300 ${
                        expanded === index ? "rotate-45" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={expanded === index ? "M6 18L18 6M6 6l12 12" : "M12 4v16m8-8H4"}
                      />
                    </svg>
                  </button>
                  {expanded === index && (
                    <div
                      id={`faq-panel-${index}`}
                      className="px-4 pb-4 text-gray-600 text-sm md:text-base"
                      data-aos="fade-in"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;