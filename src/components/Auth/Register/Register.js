import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Register = (props) => 
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
				<input 
					type="password" 
					className="form-control" 
					id="passwordConfirmation"
					name="passwordConfirmation"
					value={ props.passwordConfirmation }
					placeholder="Confirm Password"
					onChange={ props.change }/>
			</div>
			<div className="form-group">
				<button className="btn btn-info form-control" onClick={ props.submit }>Register</button>
			</div>
		</Fragment>
	);
};

Register.propTypes = {
	change: PropTypes.func,
	submit: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string,
	passwordConfirmation: PropTypes.string
};

export default Register;
