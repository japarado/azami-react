import React, { Component, Fragment } from "react";
import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";

import { AuthService } from "./services/ServiceIndex";

class App extends Component
{
	state = {
		posts: [],
		isAuth: false,

		id: NaN,
		email: "person@site.com",

		isLoading: false,
	}

	// Lifecycle hooks
	async componentDidMount()
	{
		this.setState({ isLoading: true });
		const res = await AuthService.me();
		if(res.ok)
		{
			const user = res.data.user;
			this.setAuthUserHelper(user.id, user.email);
		}
		this.setState({ isLoading: false });
	}

	// Event handlers
	handleLogin = async (_, email, password) => 
	{
		const checkIfLoggedInCallback = async() => 
		{
			const res = await AuthService.login(email, password);
			const user = res.data.user;
			this.setAuthUserHelper(user.id, user.email);
		};
		this.loadingAnimationProcessHelper(checkIfLoggedInCallback);
		// this.setState({ isLoading: true });
		// const res = await AuthService.login(email, password);
		// const user = res.data.user;
		// this.setAuthUserHelper(user.id, user.email);
		// this.setState({ isLoading: false });
		// this.loadingAnimationProcessHelper(async () => 
		// {
		// 	const res = await AuthService.login(email, password);
		// 	const user = res.data.user;
		// 	this.setAuthUserHelper(user.id, user.email);
		// });
	}

	handleRegister = (_, email, password, passwordConfirmation) => 
	{
		console.log("REGISTER");
		console.log({ email, password, passwordConfirmation });
	}

	handleLogout = async (_) => 
	{
		const res = await AuthService.logout();
	}

	// Helper functions
	setAuthUserHelper(id, email)
	{
		this.setState({ isAuth: true, id, email });
	}

	loadingAnimationProcessHelper(process)
	{
		this.setState({ isLoading: true });
		if (process instanceof Promise)
		{
			process().then(() => 
			{ 
				this.setState({ isLoading: false });
			});
		}
		else 
		{
			process();
			this.setState({ isLoading: false });
		}
	}

	render()
	{
		return (
			<Fragment>
				<Nav isAuth={ this.state.isAuth }/>
				<main>
					<div className="container-fluid">
						<Routes handleLogin={ this.handleLogin }
							handleRegister={ this.handleRegister }
							handleLogout={ this.handleLogout }/>
					</div>
				</main>
			</Fragment>
		);
	}
}

export default App;
