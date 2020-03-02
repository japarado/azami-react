import React from "react";
import PropTypes from "prop-types";
import { AuthContextConsumer } from "../../../ctx/AuthContextProvider";
import NavbarAuthSection from "./NavbarAuthSection/NavbarAuthSection";
import { NavLink } from "react-router-dom";
import NavLinkGroup from "../NavLinkGroup/NavLinkGroup";
import UniversaNavLink from "../NavLinkGroup/UniversalNavLink";

const Navbar = () => 
{
	return(
		<AuthContextConsumer>
			{(ctx) => 
			{
				return(
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<a
							className="navbar-brand"
							href="#"
						>Pam</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						> <span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							{/* <ul className="navbar-nav mr-auto"> */}
							{/* 	<li className="nav-item active"> */}
							{/* 		<a className="nav-link" */}
							{/* 			href="#">Home <span className="sr-only">(current)</span></a> */}
							{/* 	</li> */}
							{/* 	<li className="nav-item active"> */}
							{/* 		<a className="nav-link" */}
							{/* 			href="#">About <span className="sr-only">(current)</span></a> */}
							{/* 	</li> */}
							{/* </ul> */}

							<NavLinkGroup position="left">
								<li className="nav-item">
									<UniversaNavLink
										to="/"
										title="Home"
									/>
								</li>
								<li className="nav-item">
								</li>
							</NavLinkGroup>

							<NavbarAuthSection/>
						</div>
					</nav>
				);
			}}
		</AuthContextConsumer>
	);
};


export default Navbar;
