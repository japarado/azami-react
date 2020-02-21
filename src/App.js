import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";
import { withRouter } from "react-router-dom";

import { AuthContextConsumer } from "./contexts/AuthContextProvider";

const App = () =>
{
	return (
		<Fragment>
			<Nav/>
			<main>
				<div className="container-fluid">
					<Routes/>
				</div>
			</main>
		</Fragment>
	);
};

App.propTypes = {
	history: PropTypes.object
};

export default App;
