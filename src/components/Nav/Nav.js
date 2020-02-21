import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

import { AuthContextConsumer } from "../../contexts/AuthContextProvider";

const Nav = (props) =>
{
	return(
		<div className="mb-3">

			<AuthContextConsumer>
				{(context) => 
				{
					return(
						<Navbar 
							isAuth={ context.isAuth }
							handleLogout={ context.handleLogout }
						/>
					);
				}}
			</AuthContextConsumer>

		</div>
	);
};

Nav.propTypes = {
	handleLogout: PropTypes.func,
	isAuth: PropTypes.bool
};

export default Nav;
