import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Dreams = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="flex justify-between flex-col lg:flex-row w-[90%] m-auto mt-28">
      <div data-aos="fade-down" className="relative md:w-[40%]">
        <img
          src="assets/images/element.png"
          className="top absolute -top-8"
          alt="sub about image"
        />
        <img
          src="assets/images/sub-aboutImg.png"
          className="relative z-10"
          alt="sub about image"
        />
        <img
          src="assets/images/element.png"
          className="left absolute right-0 -bottom-8"
          alt="sub about image"
        />
      </div>

      <div data-aos="fade-up" className="md:w-1/2 mt-10 ">
        <h1 className="text-[32px] md:text-[40px] leading-[50px] font-bold">
          Dream Until Your <br />
          Dreams Come True
        </h1>
        <p className="mt-8 text-[#00000082] font-medium text-[19px]">
          Our consultants help address your most challenging issues <br /> by
          providing strategic, financial, operational, and IT services.
        </p>
      </div>
    </div>
  );
};

export default Dreams;
