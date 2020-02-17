import React from "react";
import PropTypes from "prop-types";

const Post = (props) => 
{
	return(
		<div className="w-100">
			<div>
				<h1>{ props.title }</h1>
				<div className="bg-info p-1"></div>
			</div>
			<div className="mt-3">
				<p>{ props.body }</p>
			</div>
		</div>
	);
};

Post.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string
};

export default Post;
