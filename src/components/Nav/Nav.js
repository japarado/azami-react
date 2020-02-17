import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Nav = (props) =>
{
	return(
		<div className="mb-3">
			<Navbar isAuth={ props.isAuth }/>
		</div>
	);
};

Nav.propTypes = {
	isAuth: PropTypes.bool
};

export default Nav;
