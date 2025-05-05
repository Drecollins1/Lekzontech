import PropTypes from "prop-types";

function Hero({ title, backgroundImage }) {
  return (
    <div
      className="relative h-[350px] flex items-center justify-center mb-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="lg:text-5xl text-3xl font-bold text-white z-10 text-center">
        {title}
      </h1>
    </div>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default Hero;
