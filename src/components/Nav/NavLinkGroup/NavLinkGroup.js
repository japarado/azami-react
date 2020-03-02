import React from "react";
import PropTypes from "prop-types";

const NavLinkGroup = (props) => 
{
	const positionClass=  determinePosition(props.position);
	return(
		<ul className={ `navbar-nav ${positionClass}` }>
			{props.children}
		</ul>
	);
};

function determinePosition(positionProp)
{
	let position = "";
	switch(positionProp.toLowerCase())
	{
	case "left":
		position = "mr-auto";
		break;
	case "right":
		position = "ml-auto";
		break;
	default:
		position = "mr-auto";
		break;
	}
	return position;
}

NavLinkGroup.propTypes = {
	position: PropTypes.oneOf([
		"left",
		"right"
	])
};

export default NavLinkGroup;
