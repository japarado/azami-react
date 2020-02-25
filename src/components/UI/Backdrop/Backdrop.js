import React from "react";
import PropTypes from "prop-types";
import "./Backdrop.css";

const Backdrop = (props) => 
{
	return(
		<div className="backdrop position-fixed h-100 w-100">
			{ props.children }
		</div>
	);
};


Backdrop.propTypes =  {
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	])
};

export default Backdrop;
