import React, { useEffect, useState, Suspense } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

// Lazy load components
const Navbar = React.lazy(() => import("./Navbar"));
const NewFooter = React.lazy(() => import("./NewFooter"));

const OutletPage = () => {
  const [loader, setLoader] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Handle scroll visibility for button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {loader ? (
        <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br lg:px-24 from-indigo-600 via-teal-600 to-coral-500 animate-gradient">
          <img
            src="/assets/images/Lekzon.png"
            alt="Brand logo"
            className=" transition-transform duration-300 hover:scale-110"
            data-aos="zoom-in"
          />
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br lg:px-24 from-indigo-600 via-teal-600 to-coral-500 animate-gradient">
              <img
                src="/assets/images/Lekzon.png"
                alt="Brand logo"
                className=" transition-transform duration-300 hover:scale-110"
                data-aos="zoom-in"
              />
            </div>
          }
        >
          <Navbar />
          <div>
            <Outlet />
          </div>
          <NewFooter />
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 w-12 h-12 flex justify-center items-center right-8 bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-white hover:text-teal-500 transition-colors duration-300 group"
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-xl"/>
            </button>
          )}
        </Suspense>
      )}
    </div>
  );
};

export default OutletPage;
