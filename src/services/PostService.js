import { apiservice } from "../utils";

class PostService 
{
	static async all()
	{
		let posts = [];
		try 
		{
			const res = await apiservice.get("/posts/all", { withCredentials: true });
			posts = res.data.posts;
		}
		catch(e)
		{
			console.log("An error has occurred");
			// console.log(e);
		}
		return posts;
	}

	static async index()
	{
		let posts = [];
		try 
		{
			const res = await apiservice.get("/posts");
			posts = res.data.posts;
		}
		catch(e)
		{
			console.error(e);
		}
		return posts;
	}

	static async destroy(id)
	{
		let post = {};
		try
		{
			const res = await apiservice.delete(`/posts/${id}`,);
			post = res.data.post;
		}
		catch(e)
		{
			console.error(e);
		}
		return post;
	}
}

export default PostService;
