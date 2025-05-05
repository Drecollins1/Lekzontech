import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ 
  name = "Contact Us", 
  style = "", 
  link = "/contact", 
  onClick = null, 
  ...props 
}) => {
  const className = `border-solid border-2 p-2 px-5 rounded-xl text-md ${
    style ? style : "text-white bg-[#39B3FF] border-[#39B3FF] hover:bg-transparent hover:text-[#39B3FF] transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
  }`;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={className}
        {...props}
      >
        {name}
      </button>
    );
  }

  return (
    <NavLink
      to={link}
      className={className}
      {...props}
    >
      {name}
    </NavLink>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
