import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Login = (props) => 
{
	return(
		<Fragment>
			<div className="form-group">
				<input type="email" className="form-control" id="email" name="email" placeholder="Email" value={ props.email } onChange={ props.change }/>
			</div>
			<div className="form-group">
				<input type="password" className="form-control" id="password" name="password" placeholder="Password" value={ props.password } onChange={ props.change }/>
			</div>
			<div className="form-group">
				<button className="form-control btn btn-primary" onClick={ props.submit }>Log in</button>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	change: PropTypes.func,
	submit: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string
};

export default Login;
