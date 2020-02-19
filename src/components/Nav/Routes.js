import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import AuthPanel from "../Auth/AuthPanel";

const Routes = (props) => 
{
	return(
		<Switch>
			<Route exact path="/" component={ Home }/>
			<Route exact path="/login" render={ (props) => <AuthPanel submit={props.handleLogin}/> }/>
			<Route exact path="/register" render={ (props) => <AuthPanel submit={props.handleLogin}/> }/>
		</Switch>
	);
};

Routes.propTypes = {
	handleLogin: PropTypes.func,
	handlRegister: PropTypes.func,
};

export default Routes;
