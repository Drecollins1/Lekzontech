import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const backgroundImageUrl = "/assets/images/background.jpeg";

const GlobalPresence = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // Sample locations with their positions
  const locations = [
    {
      id: 1,
      name: "PAC Fashion",
      location: "Canada",
      description:
        "A learning platform for fashion enthusiasts, offering course insights and redirecting users for enrollment.",
      position: { top: "28%", left: "18%" }, // Canada west coast
    },
    {
      id: 2,
      name: "Moh Lagos",
      location: "Lagos, Nigeria",
      description:
        "An e-commerce site for African fashion, providing a seamless shopping experience.",
      position: { top: "53%", left: "48%" }, // Lagos, Nigeria
    },
    {
      id: 3,
      name: "Health Care",
      location: "United States",
      description:
        "A website offering specialized treatment and support for individuals with disabilities.",
      position: { top: "38%", left: "22%" }, // US east coast
    },
    {
      id: 4,
      name: "Home Care",
      location: "United States",
      description:
        "A service platform connecting families with professional caregivers to enhance the well-being and comfort of elderly individuals.",
      position: { top: "36%", left: "24%" }, // US central
    },
    {
      id: 5,
      name: "Jaycon Apparel",
      location: "Canada",
      description:
        "An e-commerce site showcasing African fashion with curated clothing and accessories.",
      position: { top: "26%", left: "22%" }, // Canada central
    },
    {
      id: 6,
      name: "WOP",
      location: "Canada",
      description:
        "A dynamic event website for hosting personal events, allowing users to explore past and upcoming events, buy tickets, and make donations.",
      position: { top: "28%", left: "24%" }, // Canada east coast
    },
    {
      id: 7,
      name: "Refund",
      location: "Lagos, Nigeria",
      description:
        "A mobile investment app that ensures 100% returns within 180 days, providing a secure and hassle-free experience for users.",
      position: { top: "53%", left: "46%" }, // Lagos, slightly offset from Moh Lagos
    },
    {
      id: 8,
      name: "Komax Clean",
      location: "United Kingdom",
      description:
        "A top-tier cleaning service delivering professional and efficient solutions for homes and businesses, ensuring a spotless environment.",
      position: { top: "25%", left: "45%" }, // UK
    },
  ];

  const [activeLocation, setActiveLocation] = useState(null);
  const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  // Update window width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateCardPosition = (position) => {
    if (!mapContainerRef.current) return { top: 0, left: 0 };

    const mapWidth = mapContainerRef.current.offsetWidth;
    const cardWidth = windowWidth >= 768 ? 256 : 192; // Card width for different screens
    const cardHeight = windowWidth >= 768 ? 160 : 150; // Slightly taller for medium screens

    // Convert percentage to pixels for horizontal positioning
    const leftPercent = parseFloat(position.left);
    const leftPixels = (leftPercent / 100) * mapWidth;

    // Center position (default position if not at an edge)
    let leftPosition = `calc(${position.left} - ${cardWidth / 2}px)`;

    // Left edge detection
    if (leftPixels < cardWidth / 2 + 10) {
      leftPosition = "10px"; // 10px margin from left edge
    }
    // Right edge detection
    else if (leftPixels > mapWidth - cardWidth / 2 - 10) {
      leftPosition = `calc(100% - ${cardWidth + 10}px)`; // 10px margin from right edge
    }

    // Vertical positioning
    const topPercent = parseFloat(position.top);
    let topPosition;

    if (topPercent > 70) {
      // If dot is near bottom, position card above the dot
      topPosition = `calc(${position.top} - ${cardHeight + 20}px)`;
    } else {
      // Otherwise position below with small offset
      topPosition = `calc(${position.top} + 20px)`;
    }

    return { top: topPosition, left: leftPosition };
  };

  // Recalculate card position when window width changes
  useEffect(() => {
    if (activeLocation) {
      const location = locations.find((loc) => loc.id === activeLocation);
      if (location) {
        setCardPosition(calculateCardPosition(location.position));
      }
    }
  }, [windowWidth, activeLocation]);

  return (
    <div className="pt-10 px-5 lg:px-20">
      <div data-aos="fade-up" className="text-center mb-10">
        <div className="flex justify-center items-center space-x-2 mb-4 relative z-10">
          <div className="w-3 h-3 bg-[#39B3FF] rounded-full animate-pulse"></div>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Our Global Presence
          </h1>
        </div>
        <h2 className="relative z-10 text-gray-600 mb-8">
          We&apos;ve worked with different clients at different parts of the
          world
        </h2>

        <div className="relative" ref={mapContainerRef}>
          <img
            src="/assets/images/globalpresence2.png"
            alt="World Map with Company Presence"
            className="w-full"
          />

          {/* Location dots */}
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="absolute w-2 h-2 md:w-4 md:h-4 bg-red-500 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-125 transition-transform"
              style={{ top: loc.position.top, left: loc.position.left }}
              onMouseEnter={() => {
                setActiveLocation(loc.id);
                setCardPosition(calculateCardPosition(loc.position));
              }}
              onMouseLeave={() => setActiveLocation(null)}
            />
          ))}

          {/* Info cards */}
          {locations.map(
            (loc) =>
              activeLocation === loc.id && (
                <div
                  key={`card-${loc.id}`}
                  className="absolute bg-white rounded-lg shadow-lg p-2 md:p-4 w-48 md:w-64 z-30 transition-all duration-300 text-start"
                  style={{
                    top: cardPosition.top,
                    left: cardPosition.left,
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "left",
                  }}
                >
                  <h3 className="font-bold text-gray-800 text-sm md:text-base">
                    {loc.name}
                  </h3>
                  <p className="text-xs md:text-sm mb-1 md:mb-2">
                    {loc.location}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm">
                    {loc.description}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalPresence;
