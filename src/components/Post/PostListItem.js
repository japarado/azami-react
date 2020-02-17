import React from "react";
import PostControls from "./PostControls";
import PropTypes from "prop-types";

const PostListItem = (props) => 
{
	return(
		<li className="list-group-item">
			<h1 className="text-center">{ `${props.title} - ${props.id}` }</h1>
			<p>{ props.body }</p>

			{/* Render post controls if specified by props */}
			<div className="d-flex justify-content-center p-2">
				<PostControls 
					clickDelete={ (e) => props.clickDelete(e, props.id, props.title, props.user_id)}
					clickUpdate={(e) => props.clickUpdate(e, props.id)}
				/>
			</div>
		</li>
	);
}

PostListItem.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string,
	clickDelete: PropTypes.func,
	clickUpdate: PropTypes.func,
	user_id: PropTypes.number,
	children: PropTypes.node
};

export default PostListItem;
