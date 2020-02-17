import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Routes from "./components/Nav/Routes";

class App extends Component
{
	state = {
		posts: []
	}

	componentDidMount()
	{
		let authUser = JSON.parse(localStorage.getItem("authUser"));
		console.log(authUser)
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
