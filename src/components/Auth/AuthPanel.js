import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

import { AuthService, PostService } from "../../services/ServiceIndex";

class AuthPanel extends Component 
{
	state = {
		email: "person@site.com",
		password: "password",
		passwordConfirmation: "",
	}

	render()
	{
		const componentToRender = this.getComponentToRender(this.props.location.pathname);
		return(
			<Fragment>
				<div className="d-flex justify-content-center">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/login">Log in</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
						</li>
					</ul>
				</div>

				<div className="mt-4">
					<div className="row">
						<div className="col-md-2 offset-md-5">
							{ componentToRender }
						</div>
					</div>
				</div>
			</Fragment>
		);
	}

	// Event Handlers 
	handleLogin = async () =>
	{
		await AuthService.login(this.state.email, this.state.password);
	}

	handlRegister = async () =>
	{
		console.log("Registering...");
	}

	handleChange = (e) => 
	{
		const value = e.target.value;
		switch(e.target.id)
		{
		case "email":
			this.setState({ email: value });
			break;
		case "password":
			this.setState({ password: value });
			break;
		case "passwordConfirmation":
			this.setState({ passwordConfirmation: value });
			break;
		}
	}

	/**
	 * Returns either React.Component.Login or React.Component.Register depending on the current path
	 *
	 * @param {string} path The current path (URL)
	 * @return {React.Component} The component to render. Either <Login/> or <Register/>.
	 */
	getComponentToRender(path) 
	{
		let componentToRender = null;
		switch(path)
		{
		case "/login":
			componentToRender = <Login change={ this.handleChange } submit={ this.handleLogin } {...this.state}/>;
			break;
		case "/register":
			componentToRender = <Register change={ this.handleChange } submit={ this.handlRegister }/>;
			break;
		default:
			componentToRender = null;
		}

		return componentToRender;
	}
}	

AuthPanel.propTypes = {
	location: PropTypes.any
};

export default AuthPanel;
