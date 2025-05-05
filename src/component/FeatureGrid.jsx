import PropTypes from "prop-types";

function FeatureGrid({ items }) {
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 px-10 md:px-0 lg:grid-cols-4 gap-4"
      }
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-[#8B96DE] p-3 rounded-lg text-center shadow-md"
        >
          <div className="bg-white">
            <img
              src={item.src}
              alt={item.text}
              className="w-52 h-40 md:h-48 mb-2 mx-auto object-cover"
            />
          </div>
          <p className="text-sm">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

FeatureGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
      text: PropTypes.string,
    })
  ).isRequired,
};

export default FeatureGrid;
