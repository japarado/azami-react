import axios from "axios";
import qs from "qs";

// Axios defaults
axios.defaults.withCredentials = true;
const apiservice = axios.create({
	baseURL: process.env.REACT_APP_PRIMARY_BACKEND_URL,
	withCredentials: true,
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	}
});

apiservice.interceptors.request.use((config) => 
{
	if(config.method.toLowerCase() === "post")
	{
		config.data = qs.stringify(config.data);
	}
	return config;
});

apiservice.interceptors.response.use((res) => 
{
	return res; 
}, (err) => 
{
	console.log(err); return Promise.reject(err); 
});

// App-level localStorage

// Auth utilities
/**
 * Stores user details in localStorage
 *
 * @param {object} userDetails Object representing a user 
 * @returns {void}
 */
function saveAuthUser(userDetails)
{
	localStorage.setItem("authUser", JSON.stringify(userDetails));
	localStorage.setItem("isAuth", true);
}

/**
 * Retrieves the current auth user 
 *
 * @param {null}
 * @returns {object} - The user info stored in localStorage
 */ 
function getAuthUser()
{
	return JSON.parse(localStorage.getItem("authUser"));
}

/**
 * Determines whether user is currently logged in.
 *
 * @param {null}
 * @returns {boolean} - Is user logged in? 
 */ 
function isLoggedIn()
{
	const entryValue = localStorage.getItem("isAuth");
	return entryValue && entryValue.toString().toLowerCase() === "true";
}

/** 
 * Deletes the "isAuth" and "authUser" records from localStorage 
 *
 * @param { null } 
 * @returns { null } 
 */
function deleteAuthUser()
{
	// localStorage.clear();
	localStorage.removeItem("isAuth");
	localStorage.removeItem("authUser");
}

export { apiservice, saveAuthUser, getAuthUser, isLoggedIn, deleteAuthUser };
