import axios from "axios";
import qs from "qs";
import UniversalNavLink from "./components/Nav/NavbarLinks/UniversalNavLink";
import GuestNavLink from "./components/Nav/NavbarLinks/GuestNavLink";
import PrivateNavLink from "./components/Nav/NavbarLinks/PrivateNavLink";

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
	res.ok = true;
	return res; 
}, (err) => 
{
	console.log("IN UTILS")
	console.log(err)
	console.log("END UTILS")
	const errorResponse = {
		status: err.response.status,
		statusText: err.response.statusText,
		ok: false,
		data: { _: null }
	};
	return Promise.reject(errorResponse); 
	// console.log(err.response.status);
	// console.log(err.response.data);
	// console.log(err.response);
	// return Promise.reject(err);
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
 * @param {void} void
 * @returns {boolean} Is user logged in? 
 */ 
function isLoggedIn()
{
	const entryValue = localStorage.getItem("isAuth");
	if(entryValue)
	{
		if(entryValue.toString().toLowerCase() === "true") 
		{
			return true;
		}
	}
	else 
	{
		return false;
	}
}

/** 
 * Deletes the "isAuth" and "authUser" records from localStorage 
 * @returns { void } <Does not return anything>
 */
function deleteAuthUser()
{
	// localStorage.clear();
	localStorage.removeItem("isAuth");
	localStorage.removeItem("authUser");
}

/**
 * Outputs a boolean value that dictates whether the given link should show  
 *
 * @param {UniversalNavLink | GuestNavLink | PrivateNavLink} navlink Navlink whose visibility is to be tested
 * @param {bool} isAuth Indicates whether the current session is authenticated 
 *
 * @returns {bool} Is true if the supplied link shoud be shown
 */
function shouldShowLink(navlink, isAuth) 
{
	return (navlink.type === PrivateNavLink && isAuth) || (navlink.type === GuestNavLink && !isAuth) || (navlink.type === UniversalNavLink); 
}

/**
 * Returns true if the supplied parameter is undefined or null
 *
 * @param {any} someVar - A variable to be tested if it is defined
 * @returns {bool} - Whether the input is defined or not
 */
function isNull(someVar)
{
	return typeof someVar === "undefined" || someVar === null;
}

/**
 * Stops the execution context for the indicated milliseconds
 *
 * @param {number} ms Time to delay in milliseconds
 * @returns {Promise} Task Promise
 */
function sleep(ms)
{
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export { apiservice, saveAuthUser, getAuthUser, isLoggedIn, shouldShowLink, isNull, sleep, deleteAuthUser };
