import { apiservice, saveAuthUser, deleteAuthUser, isLoggedIn, getAuthUser } from "../utils";

class AuthService 
{
	static async login(email, password)
	{
		let res;
		try 
		{
			res = await apiservice.post("/auth/login", { email, password });
		}
		catch(e)
		{
			res = e;
		}
		finally
		{
			return res;
		}
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
		}
		catch(e)
		{
			res = e;
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
			res = await apiservice.get("/auth/me");
		}
		catch(e)
		{
			res = e;
		}
		finally
		{
			return res;
		}
	}
}

export default AuthService; 
