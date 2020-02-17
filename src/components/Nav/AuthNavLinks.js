import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';

const AuthNavLinks = () => 
{
	return(
		<Fragment>
			<NavLink onClick={ clickLogout } activeClassName="active" className="btn btn-outline-danger text-white mx-1 mb-2" to="/auth/logout">Log out</NavLink>
		</Fragment>
	);
};
 export default AuthNavLinks;
