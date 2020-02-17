import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PostControls = (props) => {
	return(
		<Fragment>
			<button className="btn btn-danger mx-2" onClick={ props.clickDelete }>Delete</button>
			<button className="btn btn-info mx-2" onClick={ props.clickUpdate }>Update</button>
		</Fragment>
	)
}

PostControls.propTypes = {
	clickDelete: PropTypes.func,
	clickUpdate: PropTypes.func
}

export default PostControls;
