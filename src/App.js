import React from "react";
import Nav from "./components/Nav/Nav";
import { AuthContextProvider, AuthContextConsumer } from "./ctx/AuthContextProvider";
import Backdrop from "./components/UI/Backdrop";
import Routes from "./Routes/Routes";

const App = () =>
{
	return(
		<>
			<AuthContextConsumer>
				{(ctx) => 
				{
					return(
						<>
							<Nav/>
							<Routes/>
						</>
					);
				}}
			</AuthContextConsumer>
		</>
	);
};


App.propTypes = {
};

export default App;
