import React, { useEffect } from 'react'
// import Button from '../component/Button';
// import OurGoal from '../component/OurGoal';
import OurProject from '../component/OurProject';
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
      <>
        <div
          data-aos="fade-up"
          className="relative bg-contact-image bg-cover bg-center h-[50vh] -mt-5"
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div
            data-aos="fade-up"
            className="relative flex flex-col justify-center items-center h-full"
          >
            <h1 className="text-white text-3xl md:text-5xl">Our Projects</h1>
          </div>
        </div>
        <OurProject />

        {/* Let's meet */}
        {/* <div className="bg-[#D9D9D9] py-10 mt-20">
          <div className="relative w-[90%] m-auto bg-ideas-image bg-cover bg-center h-full p-2 sm:p-10 rounded-xl">
            <div className="relative">
              <h1 className="text-white text-2xl md:text-3xl mb-3">
                Where Ideas Meet Impact
              </h1>
              <p className="text-white text-sm mt-3">
                Connect with us today! Share your project goals. Let’s innovate,
                elevate and excel together.
              </p>
            </div>
            <Button
              name="Click Here"
              style="bg-white text-black border-0 mt-4 p-0.5"
            />
          </div>
        </div> */}
      </>
    );
}

export default Project