import React from "react";
import PropTypes from "prop-types";

import "./Backdrop.css";

const Backdrop = (props) => props.show ? <div className="Backdrop" onClick={ props.click }>{ props.children }</div> : null;

Backdrop.propTypes = {
	show: PropTypes.bool,
	click: PropTypes.func,
};

export default Backdrop;
