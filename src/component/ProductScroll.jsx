import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { useState, useEffect } from "react";

function ProductScroll({ items }) {
  const [slidePercentage, setSlidePercentage] = useState(getSlidePercentage());

  function getSlidePercentage() {
    if (window.innerWidth >= 1024) {
      return 33.33; // large screens - 3 items
    } else if (window.innerWidth >= 768) {
      return 50; // medium screens - 2 items
    }
    return 100; // small screens - 1 item
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidePercentage(getSlidePercentage());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="px-4" data-aos="scale-in">
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showArrows
        centerMode
        showIndicators={false}
        centerSlidePercentage={slidePercentage}
        showStatus={false}
        className="max-w-7xl mx-auto"
        dynamicHeight={false}
        swipeable={true}
        emulateTouch={true}
        responsive={true}
      >
        {items.map((item, index) => (
          <div key={index} className="relative p-4">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-64 object-cover rounded-lg"
              style={{
                filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.2))",
              }}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

ProductScroll.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductScroll;
