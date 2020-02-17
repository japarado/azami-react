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

// Auth utilities
/**
 * Stores user details in localStorage
 *
 * @param {object} userDetails - Object representing a user 
 * @returns {void}
 */
function saveUserDetails(userDetails)
{
	localStorage.setItem("authUser", JSON.stringify(userDetails));
	localStorage.setItem("isLoggedIn", true);
}

/**
 * Retrieves the current auth user 
 *
 * @param {void}
 * @returns {object} - The user info stored in localStorage
 */ 
function getAuthUser()
{
	return JSON.parse(localStorage.getItem("authUser"));
}

/**
 * Determines whether user is currently logged in 
 *
 * @param {void}
 * @returns {boolean} - Is user logged in? 
 */ 
function isLoggedIn()
{
	return localStorage.getItem("isLoggedIn");
}

export { apiservice, saveUserDetails, getAuthUser, isLoggedIn };
