import React from "react";
import NavigationBar from "./components/Nav/NavigationBar/NavigationBar";
import { AuthContextProvider } from "./ctx/AuthContextProvider";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Posts from "./components/Posts/Posts";
import Routes from "./pages/Routes";

const App = () =>
{
	return(
		<>
			<div className="mb-5">
				<NavigationBar/>
			</div>
			<div>
				<Routes/>
			</div>
		</>
	);
	// return (
	// 	<AuthContextProvider>
	// 		<NavigationBar/>
	// 	</AuthContextProvider>
	// );
};

App.propTypes = {
};

export default App;
