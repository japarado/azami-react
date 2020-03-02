import React, { useState } from "react";
import {AuthContextConsumer} from "../../../../../ctx/AuthContextProvider";

const NavbarLoginForm = (props) => 
{
	const [email, setEmail] = useState("person@site.com");
	const [password, setPassword] = useState("password");
	return(
		<AuthContextConsumer>
			{(ctx) => 
			{
				return(
					<form className="form-inline my-2 my-lg-0">
						<input 
							id="email"
							name="email"
							className="form-control mr-sm-2"
							type="text"
							placeholder="Email"
							value={ email }
							onChange={ (e) => setEmail(e.target.value) }
						/>
						<input 
							id="password"
							name="password"
							className="form-control mr-sm-2"
							type="password"
							placeholder="Password"
							value={ password }
							onChange={ (e) => setPassword(e.target.value) }
						/>
						<button 
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
							onClick={ (e) =>  ctx.login(e, email, password) }
						>
						Log in
						</button>
					</form>
				);
			}}
		</AuthContextConsumer>
	);
};

export default NavbarLoginForm;
