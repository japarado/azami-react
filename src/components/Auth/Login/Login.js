import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';

const Login = (props) => 
{
	console.log("Mounting login comp")
	const [email, setEmail] = useState("person@site.com");
	const [password, setPassword] = useState("password");
	return(
		<Fragment>
			<div className="form-group">
				<input type="email" className="form-control" id="email" name="email" placeholder="Email" value={ email } onChange={ (e) => setEmail(e.target.value) }/>
			</div>
			<div className="form-group">
				<input type="password" className="form-control" id="password" name="password" placeholder="Password" value={ password } onChange={ (e) => setPassword(e.target.value) }/>
			</div>
			<div className="form-group">
				<button className="form-control btn btn-primary" onClick={ (e) => props.submit(e, email, password) }>Log in</button>
			</div>
		</Fragment>
	);
};

Login.propTypes = {
	submit: PropTypes.func,
};

export default Login;
