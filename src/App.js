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

function person()
{
	const operand1 = 12;
	const operan2 = 12;
	if(operan2 === operand1)
	{
		console.log("What is this plac");
	}
}

App.propTypes = {
};

export default App;
