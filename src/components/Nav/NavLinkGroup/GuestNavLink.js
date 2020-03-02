import React from "react";
import { AuthContextConsumer } from "../../../ctx/AuthContextProvider";
import { NavLink } from "react-router-dom";

const GuestNavLink = (props) => 
{
	return(
		<AuthContextConsumer>
			{(ctx) => 
			{
				let componentToRender;
				if(ctx.isAuth)
				{
					componentToRender = null;
				}
				else 
				{
					componentToRender = (
						<NavLink
							to={ props.to }
							activeClassName="active">{ props.title }</NavLink>
					);
				}

				return componentToRender;
			}}
		</AuthContextConsumer>
	);
};

export default GuestNavLink;
