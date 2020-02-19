import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const Register = (props) => 
{
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	return(
		<Fragment>
			<div className="form-group">
				<input type="email" className="form-control" id="email" name="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
			</div>
			<div className="form-group">
				<input type="password" className="form-control" id="password" name="password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
			</div>
			<div className="form-group">
				<input 
					type="password" 
					className="form-control" 
					id="passwordConfirmation"
					name="passwordConfirmation"
					value={ passwordConfirmation }
					placeholder="Confirm Password"
					onChange={ (e) => setPasswordConfirmation(e.target.value) }/>
			</div>
			<div className="form-group">
				<button className="btn btn-info form-control" onClick={ (e) => props.submit(e, email, password, passwordConfirmation) }>Register</button>
			</div>
		</Fragment>
	);
};

Register.propTypes = {
	submit: PropTypes.func,
};

export default Register;
