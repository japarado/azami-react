import React from "react";
import { AuthContextConsumer } from "../../../../ctx/AuthContextProvider";
import NavbarLoginForm from "./NavbarLoginForm/NavbarLoginForm";
import NavbarLogout from "./NavbarLogout/NavbarLogout";

const NavbarAuthSection = () => 
{
	return(
		<AuthContextConsumer>
			{(ctx) => 
			{
				let componentToRender = undefined;
				if(!ctx.isAuth)
				{
					componentToRender = <NavbarLoginForm/>;
				}
				else 
				{
					componentToRender = <NavbarLogout/>;
				}
				return(
					componentToRender
				)
			}}
		</AuthContextConsumer>
	);
};

export default NavbarAuthSection;
