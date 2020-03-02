import React, { Component } from "react";
import PropTypes from "prop-types";

import { AuthService } from "../services/";

const { Provider , Consumer } = React.createContext();

class AuthContextProvider extends Component 
{
	state = {
		isAuth: false,
		user: {
			id: undefined,
			email: undefined
		}
	}

	register = async (email, password, passwordConfirmation) =>
	{
		const res = await AuthService.register(email, password);
		if(res.ok)
		{
			this.setState({
				isAuth: true,
				user: res.data.user
			});
		}
	}

	login = async (e, email, password) => 
	{
		e.preventDefault();
		const res = await AuthService.login(email, password);
		if(res.ok)
		{
			this.setState({
				isAuth: true,
				user: res.data.user
			});
		}
	}

	logout = async () => 
	{
		const res = await AuthService.logout();
		if(res.ok)
		{
			this.setState({
				isAuth: false,
				user: {
					id: undefined,
					email: undefined
				}
			});
		}
	}

	me = async () => 
	{
		const res = await AuthService.me();
		if(res.ok)
		{
			this.setState({
				isAuth: true,
				user: {
					id: res.data.user.id,
					email: res.data.user.email
				}
			});
		}
	}

	async componentDidMount()
	{
		this.me();
	}

	render()
	{
		const propsToPass = {
			login: this.login,
			register: this.register,
			logout: this.logout,
			me: this.me,
			isAuth: this.state.isAuth,
			user: this.state.user
		};

		return(
			<Provider value={propsToPass}>
				{ this.props.children }
			</Provider>
		);
	}
}

AuthContextProvider.propTypes = {
	children: PropTypes.node,
};

export { AuthContextProvider, Consumer as AuthContextConsumer };
