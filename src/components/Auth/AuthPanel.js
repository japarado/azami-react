import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { withRouter } from "react-router-dom";

const AuthPanel = (props) => 
{
	const componentToRender = getComponentToRender(props.location.pathname, props);

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
};

/**
	 * Returns either React.Component.Login or React.Component.Register depending on the current path
	 *
	 * @param {string} path The current path (URL)
	 * @param {object} props Component props
	 * @param {func} props.handleLogin Login callback event handler
	 * @param {func} props.handleRegister Register callback event handler
	 *
	 * @return {React.Component} The component to render. Either <Login/> or <Register/>.
	 */
function getComponentToRender(path, props)
{
	let componentToRender = null;
	switch(path)
	{
	case "/login":
		componentToRender = <Login  submit={ props.handleLogin }/>;
		break;
	case "/register":
		componentToRender = <Register submit={ props.handleRegister }/>;
		break;
	default:
		componentToRender = null;
	}

	return componentToRender;
}

AuthPanel.propTypes = {
	location: PropTypes.any
};

export default withRouter(AuthPanel);
