import React from "react";
import "./Loader.css";

const Loader = (props) => 
{
	return(
		<div className="d-flex justify-content-center loader-container">
			<div className="loader">{ props.children }</div>
		</div>
	);
};

export default Loader;
