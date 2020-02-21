import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";
import { withRouter } from "react-router-dom";

import { AuthService } from "./services/ServiceIndex";
import { AuthContextConsumer } from "./contexts/AuthContextProvider";

const App = () =>
{
	return (
		<AuthContextConsumer>
			{(context) => 
			{
				return(
					<Fragment>
						<Nav isAuth={ context.isAuth }
							handleLogout={ context.handleLogout }/>
						<main>
							<div className="container-fluid">
								<Routes 
									isAuth={ context.isAuth }
									handleLogin={ context.handleLogin }
									handleRegister={ context.handleRegister }
								/>
							</div>
						</main>
					</Fragment>
				);
			}}
		</AuthContextConsumer>
	);
};

App.propTypes = {
	history: PropTypes.object
};

export default withRouter(App);
