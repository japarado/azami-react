import React from "react";
import { AuthContextConsumer } from "../../../../../ctx/AuthContextProvider";

const NavbarLogout = () => 
{
	return(
		<AuthContextConsumer>
			{(ctx) => 
			{
				return(
					<button type="button"
						className="btn btn-danger"
						onClick={ ctx.logout }>Log out</button>
				);
			}}
		</AuthContextConsumer>
	);
};

export default NavbarLogout;
