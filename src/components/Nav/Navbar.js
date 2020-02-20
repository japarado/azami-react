import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { AuthService } from "../../services/ServiceIndex";

import NavLinkGroup from "./NavbarLinks/NavLinkGroup";
import UniversalNavLink from "./NavbarLinks/UniversalNavLink";
import GuestNavLink from "./NavbarLinks/GuestNavLink";
import PrivateNavLink from "./NavbarLinks/PrivateNavLink";

const Navbar = (props) => 
{
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink className="navbar-brand"
				to="/">Navbar</NavLink>

			<button className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse"
				id="navbarNav">

				<NavLinkGroup position="left"
					isAuth={ props.isAuth }>

					<UniversalNavLink>
						<NavLink to="/"
							activeClassName="active"
							className="nav-link">Home</NavLink></UniversalNavLink>

					<PrivateNavLink>
						<NavLink to="/my-posts"
							activeClassName="active"
							className="nav-link">My Posts</NavLink>
					</PrivateNavLink>
				</NavLinkGroup>

				<NavLinkGroup position="right"
					isAuth={ props.isAuth }>
					<GuestNavLink>
						<NavLink activeClassName="active"
							className="btn btn-outline-primary text-white mx-1 mb-2"
							to="/login">Log in</NavLink>
					</GuestNavLink>
					<GuestNavLink>
						<NavLink activeClassName="active"
							className="btn btn-outline-info text-white mx-1 mb-2"
							to="/register">Register</NavLink>
					</GuestNavLink>

					<PrivateNavLink>
						<button className="btn btn-danger" onClick={ props.handleLogout }>Log out</button>
						{/*<NavLink activeClassName="active"
							className="btn btn-outline-danger text-white mx-1 mb-2"
							to="/"
							onClick={ props.handleLogout }>Log out</NavLink>*/}
					</PrivateNavLink>
				</NavLinkGroup>

			</div>
		</nav>
	);
};

Navbar.propTypes = {
	isAuth: PropTypes.bool,
	handleLogout: PropTypes.func
};

export default Navbar;
