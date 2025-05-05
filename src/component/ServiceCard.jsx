import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ServiceCard = ({
  title,
  description,
  link,
  image,
  showButton,
}) => {
  const CardContent = () => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 my-10`}>
      <div className="lg:w-[60%]  flex flex-col justify-between gap-y-10 md:gap-0">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-base text-gray-600">{description}</p>
          )}
        </div>
        {showButton && (
          <Link to={link} className="flex justify-start bg-[#3A4DC7] text-white rounded-[9px] py-[10px] px-[15px]  text-xs w-[90px] ">
            <button className="">
              See More
            </button>
          </Link>
        )}
      </div>
      <img
        src={image}
        alt={title}
        className="w-full lg:w-[70%] h-64 object-cover md:ml-auto rounded-lg shadow-md"
      />
    </div>
  );

  return link ? <CardContent /> : <CardContent />;
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  showButton: PropTypes.bool,
};
