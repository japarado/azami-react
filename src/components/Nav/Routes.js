import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import MyPosts from "../../pages/MyPosts/MyPosts";
import AuthPanel from "../Auth/AuthPanel";

const Routes = (props) => 
{
	return(
		<Switch>
			<Route exact path="/" component={ Home }/>
			<Route exact path="/my-posts" component={ MyPosts }/>
			<Route exact path="/login" render={ (_) => <AuthPanel handleLogin={ props.handleLogin }/> }/>
			<Route exact path="/register" render={ (_) => <AuthPanel handleRegister={ props.handleRegister }/> }/>
		</Switch>
	);
};

Routes.propTypes = {
	handleLogin: PropTypes.func,
	handleRegister: PropTypes.func,
};

export default Routes;
