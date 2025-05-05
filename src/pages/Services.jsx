import React, { useEffect } from "react";
import Service from "../component/Service";
import Dreams from "../component/Dreams";
import Impact from "../component/impact";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkingProcess from "../component/WorkingProcess";

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="relative bg-services-image bg-cover bg-center lg:h-[70vh] h-[50vh] "
      >
        <div className="absolute inset-0 bg-black h-full opacity-60"></div>
        <div className="relative flex flex-col justify-center items-center h-full">
          <h1 className="text-white text-center font-extrabold text-4xl md:text-7xl mb-3">
            Our Services
          </h1>
        </div>
      </div>

      {/* <div data-aos="fade-up" className="text-center mb-10 mt-16">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-[#3EB1F1] rounded-full"></div>
          <h2 className="text-xl text-[#3EB1F1]">What We Do</h2>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold">
          Providing Exceptional Service That Raises the Standard
        </h1>
      </div> */}

      <Service />
      {/* <Dreams /> */}
      <WorkingProcess />
      {/* <Impact /> */}
    </>
  );
};

export default Services;
