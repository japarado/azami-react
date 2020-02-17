import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

const PublicNavLinks = () => 
{
	return(
		<Fragment>
			<NavLink activeClassName="active" className="btn btn-outline-primary text-white mx-1 mb-2" to="/login">Log in</NavLink>
			<NavLink activeClassName="active" className="btn btn-outline-info text-white mx-1 mb-2" to="/register">Register</NavLink>
		</Fragment>
	);
};

export default PublicNavLinks;
