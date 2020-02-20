import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => 
{
	const style={ 
		tranform: props.show ? "translateY(0)" : "translateY(-100vh)", 
		opacity: props.show ? "1" : "0",
		zIndex:  props.show ? "500" : "-500"
	};
	return(
		<Fragment>
			<Backdrop show={ props.show }
				click={ props.dismiss }/>
			<div className="Modal"
				style={ style }>
				<div className="modal-header">
					<h5 className="modal-title">{ props.title ? props.title : "Are you sure?" }</h5>
				</div>
				<div className="modal-body">
					{ props.body ? props.body : "" }
				</div>
				<div className="modal-footer">
					<button className="btn btn-secondary"
						onClick={ props.dismiss }>Cancel</button>
					<button className="btn btn-primary"
						onClick={ props.confirm }>Confirm</button>
				</div>
			</div>
		</Fragment>
	);
};

Modal.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	show: PropTypes.bool,
	dismiss: PropTypes.func,
	confirm: PropTypes.func,
	// children: PropTypes.oneOfType(
	// 	PropTypes.node,
	// 	PropTypes.arrayOf(PropTypes.node)
	// ),
};

export default Modal;
