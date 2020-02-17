import React, { Component } from "react";
import { AuthService, PostService } from "../../services/ServiceIndex";
import PostList from "../../components/Post/PostList";
import {apiservice} from "../../utils";

class Home extends Component 
{
	constructor(props)
	{
		super(props);
	}

	state = {
		posts: []
	};

	async componentDidMount()
	{
		const posts = await PostService.index();
		console.log(posts)
	}

	render()
	{
		return(
			<PostList posts={ this.state.posts } confirmDelete={ this.handleDelete }/>
		);
	}

	handleDelete = async (_, postId) => 
	{
		await PostService.destroy(postId);
		const postsFromApi = await PostService.index();

		const updatedPosts = this.state.posts.filter((post) => post.id !== postId);
		if(updatedPosts !== postsFromApi) 
		{ 
			this.setState({ posts: updatedPosts });
		}
	}
}

export default Home;
