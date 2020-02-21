import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MyPosts from "../../pages/MyPosts/MyPosts";
import LoginPage from "../../pages/LoginPage/LoginPage";

const Routes = (props) => 
{
	return(
		<Switch>
			<Route exact
				path="/"
				component={ Home }/>
			<Route exact
				path="/my-posts"
				component={ MyPosts }/>
			<Route exact
				path="/login"
				render={ () => <LoginPage/> }/>
			<Route exact
				path="/register"
				render={ () => <LoginPage/> }/>

			<Redirect to="/"/>
		</Switch>
	);
};

Routes.propTypes = {
	handleLogin: PropTypes.func,
	handleRegister: PropTypes.func,
	isAuth: PropTypes.bool,
};

export default Routes;
