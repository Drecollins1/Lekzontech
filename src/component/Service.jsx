import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "./Button";

const Service = () => {
  const [selectedService, setSelectedService] = useState("webDevelopment");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [percentages, setPercentages] = useState({
    year2024: 0,
    year2025: 0,
  });
  const contentRef = React.useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    animatePercentages();
  }, [selectedService]);

  const services = {
    webDevelopment: {
      title: "Website Development",
      icon: "💻",
      imgSrc: "/assets/images/356159-PB0V71-529.jpg",
      description: "Custom, high-performance websites tailored to your business needs.",
      features: [
        "Responsive design for all devices",
        "SEO-optimized structure",
        "Fast loading speeds",
        "Secure & scalable"
      ],
      growth: { year2024: "93%", year2025: "95%" },
      cta: "Elevate your online presence with our expert web development"
    },
    projectManagement: {
      title: "Project Management",
      icon: "📊",
      imgSrc: "/assets/images/8815173.jpg",
      description: "End-to-end digital project management for seamless execution.",
      features: [
        "Agile methodology",
        "Clear communication",
        "Timely delivery",
        "Quality assurance"
      ],
      growth: { year2024: "92%", year2025: "94%" },
      cta: "Streamline your projects with our professional management"
    },
    seoOptimization: {
      title: "SEO Optimization",
      icon: "🔍",
      imgSrc: "/assets/images/11400065.jpg",
      description: "Comprehensive strategies to boost your search visibility.",
      features: [
        "Keyword research",
        "Technical SEO",
        "Content optimization",
        "Performance tracking"
      ],
      growth: { year2024: "90%", year2025: "92%" },
      cta: "Dominate search rankings with our SEO expertise"
    },
    webHosting: {
      title: "Web Hosting",
      icon: "☁️",
      imgSrc: "/assets/images/hosting.avif",
      description: "Reliable, secure hosting solutions for optimal performance.",
      features: [
        "99.9% uptime",
        "24/7 monitoring",
        "Automatic backups",
        "Scalable resources"
      ],
      growth: { year2024: "91%", year2025: "93%" },
      cta: "Host with confidence on our robust infrastructure"
    },
    uiUxDesign: {
      title: "UI/UX Design",
      icon: "🎨",
      imgSrc: "/assets/images/uiuxdesign.jpg",
      description: "Intuitive interfaces that delight users and drive conversions.",
      features: [
        "User research",
        "Wireframing & prototyping",
        "Accessibility-focused",
        "Interactive elements"
      ],
      growth: { year2024: "91%", year2025: "93%" },
      cta: "Transform user experiences with our design expertise"
    },
    itConsulting: {
      title: "IT Consulting",
      icon: "🛠️",
      imgSrc: "/assets/images/2869464.jpg",
      description: "Strategic technology solutions aligned with your business goals.",
      features: [
        "Infrastructure planning",
        "Security audits",
        "Cloud solutions",
        "Digital transformation"
      ],
      growth: { year2024: "93%", year2025: "95%" },
      cta: "Optimize your technology strategy with our guidance"
    }
  };

  const animatePercentages = () => {
    const serviceData = services[selectedService];
    const targetPercentages = {
      year2024: parseInt(serviceData.growth.year2024),
      year2025: parseInt(serviceData.growth.year2025),
    };

    const duration = 1000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setPercentages({
        year2024: Math.round(targetPercentages.year2024 * progress),
        year2025: Math.round(targetPercentages.year2025 * progress),
      });

      if (currentStep >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsMenuOpen(false);
    
    if (window.innerWidth < 1024 && contentRef.current) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    }
  };

  const serviceData = services[selectedService];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block py-1 px-3 mb-4 text-sm font-semibold text-teal-500 bg-teal-50 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-teal-500">Specialized</span> Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
            Comprehensive solutions tailored to your digital needs
          </p>
        </div>

        {/* Service Navigation */}
        <div className="mb-12 md:mb-16">
          {/* Mobile Dropdown */}
          <div className="lg:hidden relative">
            <button
              className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl text-lg font-semibold text-gray-800 shadow-sm hover:shadow-md transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Service menu"
            >
              <div className="flex items-center">
                <span className="mr-3 text-xl">{serviceData.icon}</span>
                {serviceData.title}
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isMenuOpen && (
              <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                {Object.entries(services).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => handleServiceClick(key)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center ${
                      selectedService === key ? "bg-teal-50 text-teal-600" : "text-gray-700"
                    }`}
                  >
                    <span className="mr-3 text-lg">{service.icon}</span>
                    {service.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Tabs */}
          <div className="hidden lg:flex justify-center gap-2 flex-wrap">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => handleServiceClick(key)}
                className={`flex items-center px-5 py-3 rounded-xl border transition-all ${
                  selectedService === key
                    ? "bg-teal-500 border-teal-500 text-white shadow-lg"
                    : "bg-white border-gray-200 text-gray-700 hover:border-teal-300 hover:shadow-md"
                }`}
                data-aos="fade-up"
                data-aos-delay={50 * Object.keys(services).indexOf(key)}
              >
                <span className="mr-2 text-xl">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div 
          ref={contentRef}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="p-8 md:p-10 lg:w-2/3">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{serviceData.icon}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {serviceData.title}
                </h3>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                {serviceData.description}
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Key Features:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Growth Stats */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Service Growth Projection
                </h4>
                <div className="space-y-5">
                  {[2024, 2025].map((year) => (
                    <div key={year}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{year}</span>
                        <span className="font-semibold text-teal-600">
                          {percentages[`year${year}`]}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-teal-400 to-teal-600 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${percentages[`year${year}`]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-gray-700 italic">
                "{serviceData.cta}"
              </p>
            </div>
            
            {/* Image Section */}
            <div className="lg:w-1/3 bg-gray-50 flex items-center justify-center p-6 md:p-8">
              <div className="relative w-full h-64 md:h-80 lg:h-full rounded-xl overflow-hidden shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <img
                  src={serviceData.imgSrc}
                  alt={serviceData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h4 className="text-xl font-bold my-5">{serviceData.title}</h4>
                  <Button
                    name="Get Started"
                    style="px-6 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
                    aria-label={`Get started with ${serviceData.title}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                name="Contact Us"
                style="px-8 py-3 bg-white text-teal-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors shadow-md"
                aria-label="Contact us"
              />
              <Button
                name="View All Services"
                style="px-8 py-3 border-2 border-white text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                aria-label="View all services"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;