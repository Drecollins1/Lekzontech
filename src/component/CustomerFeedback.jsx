import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";

const backgroundImageUrl = "/assets/images/future.jpg";

const CustomerFeedback = () => {
  const customers = [
    {
      text: "Working with LekzonTech was a game-changer. They delivered our project swiftly, adapting to our tight deadlines with precision and professionalism. His revisions were spot-on, and the quality was exceptional. Highly recommend!",
      name: "Jerry Lifted",
      position: "Founder, WhyTradeFx",
    },
    {
      text: "This team is fast, reliable, and customer-focused. They addressed every concern promptly, ensuring a seamless experience. I'd recommend them to anyone seeking top-tier service.",
      name: "Debowale",
      position: "CNG Director",
    },
    {
      text: "Their commitment to excellence is unmatched. They delivered high-quality work with transparency and integrity, exceeding our expectations every step of the way.",
      name: "Pricilia",
      position: "",
    },
    {
      text: "My third time working with them, and they never disappoint. Their attention to detail and dedication make every project a success.",
      name: "Adetola Ruth",
      position: "Entrepreneur",
    },
    {
      text: "Their creativity transformed my portfolio into a stunning masterpiece. The attention to detail and professionalism are unparalleled. A must for any design project!",
      name: "Vivian Nwalusi",
      position: "Designer",
    },
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section
      data-aos="fade-up"
      className="py-16 md:py-24 w-full"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {/* Slider Section */}
          <div className="w-full p-4 sm:p-6 lg:p-8 relative z-10">
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50 rounded-lg"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 text-center">
                <p className="text-teal-500 mb-2 font-semibold">Testimonials</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  What Our Clients Say
                </h2>
              </div>

              <Slider ref={sliderRef} {...settings}>
                {customers.map((customer, index) => (
                  <div 
                    key={index} 
                    className="px-2 md:px-3" 
                    data-aos="fade-in" 
                    data-aos-delay={index * 100}
                  >
                    <div className="bg-white/80 h-auto min-h-[300px] md:h-64 backdrop-blur-md rounded-lg p-6 shadow-lg flex flex-col">
                      <FaQuoteLeft className="w-8 h-8 text-teal-500 mb-4" />
                      
                      <p className="text-gray-800 mb-4 leading-relaxed flex-grow">
                        {customer.text}
                      </p>
                      
                      <div className="mt-auto">
                        <h3 className="text-teal-500 text-lg md:text-xl font-bold">
                          {customer.name}
                        </h3>
                        {customer.position && (
                          <p className="text-gray-600 mt-1">
                            {customer.position}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

              <div className="flex gap-3 mt-6 justify-center">
                <button
                  onClick={goToPrev}
                  className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center transition-all hover:bg-teal-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label="Previous testimonial"
                >
                  <IoIosArrowBack className="text-teal-500 group-hover:text-white transition-colors text-xl" />
                </button>
                <button
                  onClick={goToNext}
                  className="group w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal-500/20 border border-teal-500 flex items-center justify-center transition-all hover:bg-teal-500 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  aria-label="Next testimonial"
                >
                  <IoIosArrowForward className="text-teal-500 group-hover:text-white transition-colors text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerFeedback;