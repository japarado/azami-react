import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar/Navbar";
import { AuthContextConsumer } from "../../ctx/AuthContextProvider";

const Nav = () => 
{
	return(
		<div>
			<Navbar/>
		</div>
	);
};

export default Nav;
