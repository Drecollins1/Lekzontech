import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Impact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        className="relative bg-cover flex flex-col justify-center md:px-16 px-5 bg-impact mt-40 bg-center  h-[60vh]"
      >
        <div className="lg:p-6 text-white">
          <h2 className="lg:text-6xl text-3xl font-bold">
            Where Ideas Meet Impact
          </h2>
          <p className="mt-4 font-bold lg:text-2xl">
            Connect with us today! Share your project goals.
          </p>
          <p className="font-bold lg:text-2xl">
            Let’s innovate, elevate and excel together.
          </p>
          <button className="mt-6 inline-block float-end lg:mr-40 border p-3 bg-white text-[#0367A5] font-bold rounded-lg">
            <NavLink to="/contact">Contact us</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
