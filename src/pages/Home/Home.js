import React, { Component } from "react";
import { PostService } from "../../services/ServiceIndex";
import PostList from "../../components/Post/PostList";
import UniversalPage from "../../components/Pages/UniversalPage";

class Home extends Component 
{
	state = {
		posts: []
	};

	async componentDidMount()
	{
		console.log("Mounting home components");
		const posts = await PostService.all();
		this.setState({ posts });
	}

	render()
	{
		return(
			<UniversalPage>
				<div className="row">
					<div className="col-md-3">
						<PostList posts={ this.state.posts }
							confirmDelete={ this.handleDelete }/>
					</div>
				</div>
			</UniversalPage>
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
