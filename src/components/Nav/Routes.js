import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import AuthPanel from "../Auth/AuthPanel";

const Routes = (_) => 
{
	return(
		<Switch>
			<Route exact path="/" component={ Home }/>
			<Route exact path="/login" component={ AuthPanel }/>
			<Route exact path="/register" component={ AuthPanel }/>
		</Switch>
	);
};

export default Routes;
