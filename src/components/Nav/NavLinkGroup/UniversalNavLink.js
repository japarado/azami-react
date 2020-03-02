import React from "react";
import { NavLink } from "react-router-dom";

const UniversaNavLink = (props) => 
{
	return(
		<NavLink to={ props.to }
			className="nav-link"
			activeClassName="active">{ props.title }</NavLink>
	);
};

export default UniversaNavLink;
