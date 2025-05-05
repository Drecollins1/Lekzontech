import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const WhatWeDo = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        setSlidesToShow(1);
      } else if (window.matchMedia("(max-width: 1280px)").matches) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0px',
    className: 'center',
    appendDots: (dots) => (
      <div style={{ position: "relative", bottom: "-30px" }}>
        <ul className="hidden justify-center items-center space-x-1">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="hidden custom-dot w-4 h-4 bg-gray-300 rounded-full cursor-pointer"></div>
    ),
  };

  const services = [
    {
      title: "WOP",
      imageUrl: "../assets/images/wop.png",
      description:
        "WOP is a dynamic event website dedicated to personal event hosting. It showcases upcoming and past events while allowing users to...",
    },
    {
      title: "Pac Fashion",
      imageUrl: "../assets/images/pacfashion.png",
      description:
        "PAC Fashion is a modern learning platform designed for aspiring fashion enthusiasts. This landing page provides detailed insights into various courses and enrollment options. While users cannot enroll directly on the website, they are seamlessly redirected to the main platform for registration and further learning.",
    },
    {
      title: "Vital Home",
      imageUrl: "../assets/images/vitalhome.png",
      description:
        "Home Care is a compassionate service website focused on elderly care. It connects families with professional...",
    },
    // {
    //   title: "Graphic Design",
    //   imageUrl: "../assets/images/graphic1.png",
    //   description: "Designing brand stories.",
    // },
    // {
    //   title: "Web Hosting",
    //   imageUrl: "../assets/images/host.png",
    //   description: "Tailored web hosting, simplified choices.",
    // },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="pt-10 px-5 lg:px-0">
      <div data-aos="fade-up" className="text-center mb-10">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-[#39B3FF] rounded-full animate-pulse"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            A few projects we’ve handled
          </h1>
        </div>
      </div>
      <Slider {...settings} className="mx-auto">
        {services.map((service, index) => (
          <div data-aos="fade-up" key={index} className="p-5">
            <div 
              className="flex flex-col sm:flex-row items-center h-auto sm:h-[300px] gap-4 p-4 overflow-hidden transform transition-all duration-300 rounded-lg mx-auto slick-slide-content"
            >
              <div className="w-full sm:w-[40%] h-[200px] sm:h-[80%] p-2">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full rounded-lg border border-black object-cover"
                />
              </div>
              <div className="w-full sm:w-[60%]">
                <h3 className="text-lg font-bold mb-2 text-center sm:text-left">{service.title}</h3>
                <p className="text-gray-600 text-sm text-center sm:text-left">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatWeDo;
