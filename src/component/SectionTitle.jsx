import PropTypes from "prop-types";
function SectionTitle({ title, subtitle, children }) {
  return (
    <div className="mb-10 px-5 lg:px-20 text-center" data-aos="fade-in">
      <h2 className="lg:text-4xl text-2xl font-semibold mb-4">{title}</h2>
      {subtitle && <p className="mb-10">{subtitle}</p>}
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};
export default SectionTitle;
