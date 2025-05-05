import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatWeDo from "../component/WhatWeDo";
import OurTeam from "../component/OurTeam";
import OurCompany from "../component/OurCompany";
import CustomerFeedback from "../component/CustomerFeedback";
import FAQs from "../component/Questions";
import Feedback from "../component/Feedback";
import Button from "../component/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import ExclusiveOffer from "../component/ExclusiveOffer";
import HeroSection from "../component/HomeHero";
import GlobalPresence from "../component/GlobalPresence";
import Empower from "../component/Empower";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const heroContent = [
    {
      title: "Let's Grow Your Business",
      description: "Transforming visions into stunning digital Realities.",
      image: "/images/vr-background.jpg",
      features: [
        "Craft exceptional websites",
        "Captivate your audience",
        "Drive digital success",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div>
        <HeroSection />
      </div>

      <OurCompany />

      <div className="bg-[#E5EDFC]">
        <ExclusiveOffer />
      </div>

      <Empower />

      {/* <WhatWeDo /> */}

      {/* <OurTeam /> */}

      <CustomerFeedback />

      {/* <div className="w-[100%] mx-auto"> */}
      {/* <GlobalPresence /> */}
      {/* </div> */}

      <FAQs />

      <div className="bg-[#E5EDFC]">
        <Feedback />
      </div>
    </>
  );
};

export default Home;
