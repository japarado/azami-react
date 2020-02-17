import {apiservice} from "../utils";

class AuthService 
{
	static async login(email, password)
	{
		let user;
		try 
		{
			res = await apiservice.post("/auth/login", { email, password });
			user = res.data.posts;
		}
		catch(e)
		{
			console.error(e)
		}
		return user;
		// let user;
		// try
		// {
		// 	res = await apiservice.post("/auth/login", { email, password });
		// 	localStorage.setItem("authUser", JSON.stringify(res.data.user));
		// 	localStorage.setItem("isLoggedIn", true);
		// }
		// catch (e)
		// {
		// 	res = e;
		// }
		// return res;
	}

	static async register(email, password)
	{
		let res;
		try
		{
			const data = { email, password };
			res = await apiservice.post("/auth/login", data);
		}
		catch (e)
		{
			res = e;
		}
		finally
		{
			return res;
		}
	}

	static async logout()
	{
		let res;
		try 
		{
			res = await apiservice.delete("/auth/logout");
			localStorage.removeItem("authUser");
			localStorage.setItem("isLoggedIn", false);
		}
		catch(e)
		{
			console.error(e);
		}
		finally
		{
			return res;
		}
	}

	static async me()
	{
		let res;
		try 
		{

		}
	}
}

export default AuthService; 
