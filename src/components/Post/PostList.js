import React, { Component } from "react";
import PropTypes from "prop-types";
import PostListItem from "./PostListItem";
import Modal from "../UI/Modal/Modal";


class PostList extends Component
{
	state = {
		showModal: false,
		
		// Strictly for modal use 
		modalTitle: null,
		modalBody: null,

		// Post ID slated for a delete/update
		postId: null,

		// Should the Update/Delete controls be shown?
		showPostControls: false
	}

	render()
	{
		return(
			<div>
				<Modal 
					title={ this.state.modalTitle }
					body={ this.state.modalBody }
					show={ this.state.showModal }
					dismiss={ this.handleModalDismiss }
					confirm={ (_) => this.confirmDeleteWrapper(_, this.state.postId) }
				>
					<h1>Confirmation</h1>
				</Modal>
				<ul className="list-group">
					{this.props.posts.map((post) => (
						<PostListItem
							key={post.id}
							id={post.id}
							title={post.title} 
							body={post.body}
							user_id={post.user_id}
							clickDelete={this.handleDelete}
							clickUpdate={this.handleUpdate}
							showControls={this.state.showControls}
						/>
					))}
				</ul>
			</div>
		);
	}

	// Event handlers

	handleDelete = (_, id, postTitle, postUserId) => 
	{
		console.log(`This post is owned by ${postUserId}`);
		this.setState({ showModal: true, 
			modalTitle: `Delete post '${postTitle}'?`,
			modalBody: "This action cannot be undone!",
			postId: id
		});
	}

	handleUpdate = (_ ,id) => 
	{
		console.log(`Updating post ID ${id}`);
	}

	handleModalDismiss = () => 
	{
		this.setState({ showModal: false });
	}


	// Helpers 
	dismissModalHelper = () => 
	{
		this.setState({ showModal: false });
	}


	// Wrapper 
	confirmDeleteWrapper = (_, postId) => 
	{
		this.props.confirmDelete(_, postId);
		this.setState({ showModal: false });
	}
}

PostList.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string,
		user_id: PropTypes.user_id
	})),
	confirmDelete: PropTypes.func.isRequired
};

export default PostList;
