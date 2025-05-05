import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
const backgroundImageUrl = "/assets/images/teambackground.jpeg";

const OurTeam = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 550px)").matches) {
        setSlidesToShow(1);
      } else if (window.matchMedia("(max-width: 800px)").matches) {
        setSlidesToShow(2);
      } else if (window.matchMedia("(max-width: 1240px)").matches) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div style={{ position: "relative", bottom: "0px" }}>
        <ul className="flex justify-center items-center space-x-1 py-4 pt-10">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="custom-dot w-3 h-3 bg-gray-300 rounded-full cursor-pointer"></div>
    ),
  };

  const teamMembers = [
    {
      name: "Oluyede Divine",
      title: "Founder/CEO",
      imageUrl: "../assets/images/ceo.JPG",
    },
    // {
    //   name: "success smith",
    //   title: "Product Manager",
    //   imageUrl: "../assets/images/prod.jpg",
    // },
    {
      name: "Gillian Kandie",
      title: "Social Media Manager",
      imageUrl: "../assets/images/social.jpeg",
    },
    // {
    //   name: "Chimelu Ezeoguine",
    //   title: "Software Developer",
    //   imageUrl: "../assets/images/developer.jpg",
    // },
    {
      name: "Olubode Diana",
      title: "Content Creator",
      imageUrl: "../assets/images/creator.JPG",
    },
    {
      name: "Christiana Egedi",
      title: "Product Designer",
      imageUrl: "../assets/images/designer1.JPG",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="pt-10 px-5">
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000" 
        className="text-center mb-10"
      >
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-[#39B3FF] rounded-full animate-pulse"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Meet Our Team of Experts
          </h1>
        </div>
      </div>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div 
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            key={index} 
            className="p-2"
          >
            <div
              className="group flex flex-col items-center gap-4 overflow-hidden p-4 transform transition-all duration-500 hover:scale-105 shadow-lg rounded-[27px] border-2 border-[#39B3FF] relative"
              style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
              }}
            >
              <img
                src={member.imageUrl}
                alt={member.title}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
              />
              <div className="px-6 text-center transform transition-all duration-500 group-hover:translate-y-2">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurTeam;
