import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";
import { withRouter } from "react-router-dom";

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
		const res = await AuthService.login(email, password);
		if(res.ok)
		{
			this.setState({ isAuth: true, email, password });
			this.props.history.push("/");
		}
	}

	handleRegister = async (_, email, password, passwordConfirmation) => 
	{
		const res = await AuthService.register(email, password);
		if(res.ok)
		{
			this.setState({ isAuth: true, email, password });
			this.props.history.push("/");
		}
	}

	handleLogout = async () => 
	{
		const res = await AuthService.logout();
		console.log(res);
		if(res.ok)
		{
			this.setState({ isAuth: false, id: NaN, email: "person@site.com" });
			this.props.history.push("/");
		}
		else 
		{
			alert("Log out has failed...");
		}
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
				<Nav isAuth={ this.state.isAuth }
					handleLogout={ this.handleLogout }/>
				<main>
					<div className="container-fluid">
						<Routes 
							isAuth={ this.state.isAuth }
							handleLogin={ this.handleLogin }
							handleRegister={ this.handleRegister }
						/>
					</div>
				</main>
			</Fragment>
		);
	}
}

App.propTypes = {
	history: PropTypes.object
};

export default withRouter(App);
