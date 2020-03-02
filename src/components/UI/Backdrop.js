import React from 'react';
import "./Backdrop.css"

const Backdrop = (props) => {
	const componentToRender = props.show ? <div className="backdrop"></div> : null;
	return componentToRender;
}

export default Backdrop;
