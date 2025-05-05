import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {
  const [emailValue, setEmailValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [commentValue, setCommentValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!nameValue.trim()) newErrors.name = "Full name is required";
    if (!emailValue.trim()) newErrors.email = "Email address is required";
    else if (!/\S+@\S+\.\S+/.test(emailValue)) newErrors.email = "Invalid email format";
    if (!numberValue.trim()) newErrors.number = "Phone number is required";
    if (!commentValue.trim()) newErrors.message = "Feedback is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_s2ugdd2", "template_h805hpm", form.current, {
        publicKey: "0Q4vPIsmG7r4CYYeH",
      })
      .then((response) => {
        console.log("SUCCESS!", response);
        setIsOpen(true);
        setNumberValue("");
        setEmailValue("");
        setNameValue("");
        setCommentValue("");
        setErrors({});
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setErrors({ form: "Failed to send feedback. Please try again later." });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      sendEmail();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
              Share Your Thoughts
            </h1>
          </div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Your feedback helps us improve our services. Let us know how we can serve you better.
          </p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-md rounded-lg p-6 sm:p-8 shadow-lg max-w-2xl mx-auto space-y-6"
          data-aos="zoom-in"
        >
          {errors.form && (
            <p className="text-red-500 text-sm text-center" data-aos="fade-in">
              {errors.form}
            </p>
          )}

          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full bg-white/80 backdrop-blur-md border-2 border-teal-500/50 focus:border-teal-500 rounded-md px-4 py-3 outline-none transition-all duration-300 hover:scale-105 focus:scale-105 focus:shadow-lg ${
                errors.name ? "border-red-500" : ""
              }`}
              name="name"
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              placeholder="Enter your full name"
              required
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1" data-aos="fade-in">
                {errors.name}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className={`w-full bg-white/80 backdrop-blur-md border-2 border-teal-500/50 focus:border-teal-500 rounded-md px-4 py-3 outline-none transition-all duration-300 hover:scale-105 focus:scale-105 focus:shadow-lg ${
                  errors.number ? "border-red-500" : ""
                }`}
                name="number"
                value={numberValue}
                onChange={(e) => setNumberValue(e.target.value)}
                placeholder="Enter your phone number"
                required
                aria-describedby={errors.number ? "number-error" : undefined}
              />
              {errors.number && (
                <p id="number-error" className="text-red-500 text-sm mt-1" data-aos="fade-in">
                  {errors.number}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className={`w-full bg-white/80 backdrop-blur-md border-2 border-teal-500/50 focus:border-teal-500 rounded-md px-4 py-3 outline-none transition-all duration-300 hover:scale-105 focus:scale-105 focus:shadow-lg ${
                  errors.email ? "border-red-500" : ""
                }`}
                name="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1" data-aos="fade-in">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Your Feedback
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full bg-white/80 backdrop-blur-md border-2 border-teal-500/50 focus:border-teal-500 rounded-md px-4 py-3 outline-none resize-none transition-all duration-300 hover:scale-105 focus:scale-105 focus:shadow-lg ${
                errors.message ? "border-red-500" : ""
              }`}
              rows={6}
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder="Share your thoughts with us..."
              required
              aria-describedby={errors.message ? "message-error" : undefined}
            ></textarea>
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1" data-aos="fade-in">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="relative bg-[#0F766E] text-white font-medium py-3 px-8 rounded-xl transition-all duration-500  focus:outline-none focus:ring-2 focus:ring-teal-500 animate-pulse"
            >
              <span className="relative z-10">Submit Feedback</span>
              {/* <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></span> */}
            </button>
          </div>
        </form>

        {/* Custom Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            data-aos="zoom-in"
          >
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 w-11/12 max-w-md mx-auto relative border-2 border-transparent bg-clip-padding">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-teal-500 focus:outline-none"
                aria-label="Close feedback confirmation"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center">
                <svg
                  className="w-20 h-20 mx-auto mt-5 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="animate-draw"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="mt-3 text-xl font-bold text-gray-800">
                  Thank You for Your Feedback!
                </h3>
                <p className="mt-2 text-gray-600">
                  We’ll be in touch soon to follow up.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style>
        {`
          @keyframes draw {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-draw {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: draw 1s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Feedback;