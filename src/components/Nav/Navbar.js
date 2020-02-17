import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthService } from "../../services/ServiceIndex";


const Navbar = () => 
{
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink className="navbar-brand" to="/">Navbar</NavLink>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavLink to="/" className="nav-link">Home</NavLink>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					<NavLink activeClassName="active" className="btn btn-outline-warning text-white mx-1 mb-2" to="/notifications">Notifications</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
