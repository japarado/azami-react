import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";

import { getAuthUser, isLoggedIn, sleep } from "./utils";
import { AuthService } from "./services/ServiceIndex";

class App extends Component
{
	state = {
		posts: [],
		isAuth: false,
		authUser: null,

		// Login/Register component props
		email: "person@site.com",
		password: "password",
		passwordConfirmation: "",
	}
	

	render()
	{
		return (
			<div>
				<Nav isAuth={ this.state.isAuth }/>
				<main>
					<div className="container-fluid">
						<Routes handleLogin={ this.handleLogin } handlRegister={ this.handleRegister }/>
					</div>
				</main>
			</div>
		);
	}

	handleLogin = (_, username, password) => 
	{
		console.log("LOGIN");
		console.log({ username, password });
	}

	handleRegister = (_, username, password, passwordConfirmation) => 
	{
		console.log("REGISTER");
		console.log({ username, password, passwordConfirmation });
	}
}

export default App;
