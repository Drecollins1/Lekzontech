import React, { useEffect } from "react";
import OurTeam from "../component/OurTeam";
// import Button from "../component/Button";
// import Dreams from "../component/Dreams";
// import Map from "../component/Map";
import OurValues from "../component/OurValues";
import AOS from "aos";
import "aos/dist/aos.css";
import OurCompany from "../component/OurCompany";
import CustomerFeedback from "../component/CustomerFeedback";
import GlobalPresence from "../component/GlobalPresence";
import WorkingProcess from "../component/WorkingProcess";

const About = () => {
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
      className="relative bg-gradient-to-br from-teal-600 to-indigo-600 bg-cover bg-center min-h-[50vh] md:min-h-[60vh]"
      // Optional: Uncomment to use a custom image if available
      // style={{ backgroundImage: "url(/assets/images/about-bg.jpg)" }}
    >
      {/* Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center min-h-[50vh] md:min-h-[60vh] px-4 sm:px-6 lg:px-12">
        <h1
          className="text-teal-100 text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ textShadow: "0 0 8px rgba(34, 211, 238, 0.4)" }}
          data-aos="zoom-in"
          data-aos-delay="100"
          aria-label="About LekzonTech"
        >
          About Us
        </h1>
        <p
          className="text-teal-100 text-base sm:text-lg text-center max-w-xl"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <span className="font-semibold">LekzonTech</span> delivers innovative solutions, turning visions into reality with cutting-edge technology.
        </p>
      </div>
    </div>

      <OurCompany />

      {/* <div
        data-aos="fade-up"
        className="flex flex-col md:flex-row justify-between items-center mt-16 w-[90%] m-auto"
      >
        <div className="md:w-1/2">
          <h1 className="font-bond text-3xl">How we work with our Clients.</h1>
          <Button style="hidden md:block mt-6 w-1/4 text-center text-white bg-[#39B3FF]" />
        </div>
        <div className="md:w-1/2 mt-2 md:mt-0">
          <p>
            Growing customer expections. Market shaping AI. Self-optimizing
            systems.
          </p>
          <p>
            The post digital age shows no signs of slowing down, and the need
            for rapid business transformation has never been greater.
          </p>
          <p>
            At Divnerix, we are passionate about leveraging technology to drive
            innovation and empower businesses worldwide. Since our inception, we
            have been at the forefront of the digital revolution, offering
            cutting-edge solutions that transform ideas into reality.
          </p>
        </div>
      </div> */}

      {/* <Dreams /> */}

      <OurValues />

      {/* Our team section */}
      {/* <OurTeam /> */}

      <CustomerFeedback />

      {/* <GlobalPresence /> */}

      <WorkingProcess />

    </>
  );
};

export default About;
