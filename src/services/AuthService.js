import {apiservice, saveAuthUser, deleteAuthUser, isLoggedIn, getAuthUser } from "../utils";

class AuthService 
{
	static async login(email, password)
	{
		let user;
		try 
		{
			const res = await apiservice.post("/auth/login", { email, password });
			const user = res.data.user;
			saveAuthUser(user)
		}
		catch(e)
		{
			console.error(e);
		}
		return user;
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
			deleteAuthUser();
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
		let user;
		try 
		{
			const res = await apiservice.get("/auth/me");
			deleteAuthUser();
		}
		catch(e)
		{
			console.error(e);
		}
		return user;
	}
}

export default AuthService; 
