import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";

import { getAuthUser, isLoggedIn } from "./utils";

class App extends Component
{
	state = {
		posts: []
	}

	componentDidMount()
	{
		console.log(isLoggedIn());
	}

	render()
	{
		return (
			<div>
				<Nav/>
				<main>
					<div className="container-fluid">
						<Routes/>
					</div>
				</main>
			</div>
		);
	}
}

export default App;
