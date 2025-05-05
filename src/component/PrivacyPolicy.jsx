import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className=" py-16 md:py-5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 sm:p-8 ">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center"
            data-aos="zoom-in"
          >
            Privacy Policy
          </h1>

          <section className="mb-8" data-aos="fade-up" data-aos-delay="100">
            <p className="text-base sm:text-lg text-gray-800 mb-6">
              At <span className="text-teal-500 font-semibold">LekzonTech</span>, we prioritize your privacy. This policy explains how we collect, use, and protect your information. By using our website, you agree to these practices.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">1.1 Personal Information</h3>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              We collect data like:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 mb-4 text-gray-800 text-base sm:text-lg" role="list">
              {["Name", "Email address", "Phone number", "Details you provide"].map((item, index) => (
                <li key={index} role="listitem">{item}</li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              This occurs when you submit forms or inquiries.
            </p>

            <h3 className="text-lg font-medium text-gray-800 mb-2">1.2 Non-Personal Information</h3>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Automatically collected data includes:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 mb-4 text-gray-800 text-base sm:text-lg" role="list">
              {["Browser type", "Device information"].map((item, index) => (
                <li key={index} role="listitem">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Your data helps us:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 mb-4 text-gray-800 text-base sm:text-lg" role="list">
              {[
                "Deliver services",
                "Answer inquiries",
                "Improve website functionality",
                "Meet legal requirements",
              ].map((item, index) => (
                <li key={index} role="listitem">{item}</li>
              ))}
            </ul>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5

System: .614-3-3V2a3 3 0 00-3 3v2h-5M10 4v16m0-16H7a3 3 0 00-3 3v10a3 3 0 003 3h6a3 3 0 003-3V7a3 3 0 00-3-3h-3z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">3. Sharing Your Information</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              We don’t sell or rent your data. We may share it with trusted partners for:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 mb-4 text-gray-800 text-base sm:text-lg" role="list">
              {[
                "Website hosting",
                "Payment processing",
                "Legal compliance",
              ].map((item, index) => (
                <li key={index} role="listitem">{item}</li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Partners are required to keep your data secure.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="500">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 2.896 2 4zm0 0c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 2.896 2 4zm0 0c0 1.104-.896 2-2 2s-2-.896-2-2 2-4 2-4 2 2.896 2 4z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">4. Data Security</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              We use encryption and secure servers to protect your data. While we strive for security, no online transmission is 100% safe.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="600">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">5. Your Rights</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              You can:
            </p>
            <ul className="list-disc pl-6 sm:pl-8 mb-4 text-gray-800 text-base sm:text-lg" role="list">
              {[
                "Access your data",
                "Correct inaccuracies",
                "Request deletion (per legal limits)",
                "Opt out of promotions",
              ].map((item, index) => (
                <li key={index} role="listitem">{item}</li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Contact us at{" "}
              <a
                href="mailto:support@lekzontech.com"
                className="relative text-teal-500 font-semibold hover:scale-105 transition-transform duration-300 group"
                aria-label="Email LekzonTech support"
              >
                support@lekzontech.com
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>{" "}
              to exercise these rights.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="700">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">6. Third-Party Links</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Our site may link to external websites. We’re not responsible for their privacy practices. Review their policies before sharing data.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="800">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">7. Changes to This Policy</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              We may update this policy as needed. Changes will be posted here with the updated effective date.
            </p>
          </section>

          <section className="mb-8 border-t border-teal-500/20 pt-6" data-aos="fade-up" data-aos-delay="900">
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-teal-500 hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">8. Contact Us</h2>
            </div>
            <p className="text-base sm:text-lg text-gray-800 mb-4">
              Questions about this policy? Reach us at:
            </p>
            <p className="text-base sm:text-lg text-gray-800 font-semibold">LekzonTech</p>
            <p className="text-base sm:text-lg text-gray-800">
              Email:{" "}
              <a
                href="mailto:support@lekzontech.com"
                className="relative text-teal-500 font-semibold hover:scale-105 transition-transform duration-300 group"
                aria-label="Email LekzonTech support"
              >
                support@lekzontech.com
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-coral-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            </p>
          </section>

          <p className="text-base sm:text-lg text-gray-800 text-center" data-aos="fade-up" data-aos-delay="1000">
            Thank you for trusting <span className="text-teal-500 font-semibold">LekzonTech</span> with your information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;