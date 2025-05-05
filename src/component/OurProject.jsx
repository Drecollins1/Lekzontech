import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 9;
  const projectsRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const projects = [
    {
      name: "PAC Fashion Website",
      description:
        "A learning platform for fashion enthusiasts, offering course insights and redirecting users for enrollment.",
      imageUrl: "../assets/images/pacfashion.png",
    },
    {
      name: "MOH Lagos Website",
      description:
        "An e-commerce site for African fashion, providing a seamless shopping experience.",
      imageUrl: "../assets/images/mohwebsite.png",
    },
    {
      name: "RE4UND Website",
      description:
        "A mobile investment app that ensures 100% returns within 180 days, providing a secure and hassle-free experience for users.",
      imageUrl: "/assets/images/re4und.jpeg",
    },
    {
      name: "WOP Website",
      description:
        "A dynamic event website for hosting personal events, allowing users to explore past and upcoming events, buy tickets, and make donations.",
      imageUrl: "../assets/images/wop.png",
    },
    {
      name: "JAYCON Apparel",
      description:
        "An e-commerce site showcasing African fashion with curated clothing and accessories.",
      imageUrl: "../assets/images/jaycon.jpeg",
    },
    {
      name: "Home Care Website",
      description:
        "A service platform connecting families with professional caregivers to enhance the well-being and comfort of elderly individuals.",
      imageUrl: "../assets/images/vitalhome.png",
    },
    {
      name: "Health Care Website",
      description:
        "A website offering specialized treatment and support for individuals with disabilities.",
      imageUrl: "../assets/images/health.png",
    },
    {
      name: "KOMAX Cleaning Website",
      description:
        "A top-tier cleaning service delivering professional and efficient solutions for homes and businesses, ensuring a spotless environment.",
      imageUrl: "../assets/images/komax.jpeg",
    },
    {
      name: "RE4UND Mobile App",
      description:
        "A mobile investment app that ensures 100% returns within 180 days, providing a secure and hassle-free experience for users.",
      imageUrl: "../assets/images/re4und-mobile.jpeg",
    },
  ];
  // Get current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="my-10 md:my-20">
      <div
        ref={projectsRef}
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] m-auto"
      >
        {currentProjects.map((project, index) => (
          <div key={index} className="w-full p-3">
            <div
              data-aos="fade-up"
              className="group relative flex flex-col items-center overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="h-72 w-full object-cover rounded-t-xl"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 rounded-xl">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-center">{project.description}</p>
              </div>
              <div className="bg-[#39B3FF] p-4 rounded-b-xl w-full text-center mt-4">
                <h3 className="text-sm font-bold text-white">{project.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {Math.ceil(projects.length / projectsPerPage) > 1 && (
        <div className="flex justify-center my-8 gap-2">
          {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                currentPage === index + 1
                  ? 'bg-[#39B3FF] text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProject;
