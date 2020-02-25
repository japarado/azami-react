import { apiservice } from "../utils";

class PostService 
{
	static async all()
	{
		let res;
		try 
		{
			res = await apiservice.get("/posts/all", { withCredentials: true });
		}
		catch(e)
		{
			res = e;
		}
		return res;
	}

	static async index()
	{
		let res;
		try 
		{
			res = await apiservice.get("/posts");
		}
		catch(e)
		{
			res = e;
		}
		return res;
	}

	static async destroy(id)
	{
		let res;
		try
		{
			res = await apiservice.delete(`/posts/${id}`,);
		}
		catch(e)
		{
			res = e;
		}
		return res;
	}
}

export default PostService;
