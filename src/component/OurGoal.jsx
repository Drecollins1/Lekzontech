import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurGoal = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="relative mt-20 w-[90%] m-auto bg-[#D9D9D9] rounded-xl p-2 lg:p-7 overflow-hidden">
      <div
        data-aos="fade-up"
        className="md:flex-row flex flex-col justify-center md:justify-between items-center text-xl md:text-3xl"
      >
        <h1>Our Goal</h1>
        <h1 className="text-center">
          Transforming visions into{" "}
          <span className="text-[#8A065C]">reality.</span>
        </h1>
      </div>
      <h1 className="text-2xl md:text-3xl text-[#8A065C] text-center mt-7">
        Discover our Latest Innovation in Action.
      </h1>
      <p className="text-lg text-center mt-4">
        Revolutionizing Digital Transformation for Up-and-Coming Companies.
      </p>
      <div className="lg:flex justify-between items-center lg:w-[80%] m-auto mt-7">
        <div data-aos="fade-up" className="z-10 md:w-[80%] m-auto lg:m-0">
          <img
            src="../assets/images/prodManagersImage.png"
            alt="Product Managers Image"
            className="w-full lg:w-[80%]"
          />
          <div className="lg:w-[90%] mt-5">
            <h1 className="text-xl">From amazing product managers</h1>
            <p className="mt-3">
              Our goal is to deliver successful products that meet customer
              needs and drive business results. Trust our product management
              expert to lead your product to success.
            </p>
          </div>
          <div className="lg:hidden mt-10 border-solid border-4 border-[#8A065C] lg:w-1/2 h-1/2"></div>
        </div>
        <div className="md:w-[90%] m-auto lg:m-0 mt-14">
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center z-10 bg-[#8A065C] text-white p-3 md:w-[90%] m-auto lg:m-0 rounded-xl"
          >
            <img src="../assets/images/uxImage.png" alt="UX/UI Image" />
            <div className="lg:w-[90%] mt-5">
              <h1 className="text-xl">To flowless UI/UX designers</h1>
              <p className="mt-3">
                We understand the importance of user-centered design in creating
                exceptional digital experiences. Our team of skilled UI/UX
                designers is dedicated to crafting intuitive, visually stunning,
                and user-friendly interfaces that drive engagement and
                conversion.
              </p>
            </div>
          </div>
          <div className="lg:hidden mt-10 border-solid border-4 border-black w-[90%] m-auto lg:m-0 lg:w-1/2 h-1/2"></div>
        </div>
        <div data-aos="fade-up" className="z-10 md:w-[80%] m-auto lg:m-0 mt-14">
          <img
            src="../assets/images/developerImage.png"
            alt="Developers Image"
            className="w-full lg:w-[80%]"
          />
          <div className="lg:w-[90%] mt-5">
            <h1 className="text-xl">And experienced developers</h1>
            <p className="mt-3">
              Building fast, secure and scalable web applications that drive
              business growth.Under the capable hands of our seasoned
              developers,dedicated to crafting responsive and user friendly
              website that meet the highest standards of quality and
              performance.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center mt-10 w-[80%] m-auto"
      >
        <div
          data-aos="fade-up"
          className="hidden lg:block border-solid border-4 border-[#8A065C] w-1/2 h-1/2"
        ></div>
        <div
          data-aos="fade-up"
          className="hidden lg:block border-solid border-4 border-black w-1/2 h-1/2"
        ></div>
        <div
          data-aos="fade-up"
          className="border-solid border-4 border-[#3EB1F1] w-full lg:w-1/2 h-1/2"
        ></div>
      </div>
      <div data-aos="fade-up">
        <img
          src="../assets/images/leftPiece.png"
          alt="left piece"
          className="hidden lg:block absolute w-[20%] top-20 -left-5"
        />
        <img
          src="../assets/images/rightPeace.png"
          alt="right piece"
          className="hidden lg:block absolute -right-5 top-24 w-[20%]"
        />
      </div>
    </div>
  );
};

export default OurGoal;
