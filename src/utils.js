import axios from "axios";
import qs from "qs";
// import UniversalNavLink from "./components/Nav/NavbarLinks/UniversalNavLink";
// import GuestNavLink from "./components/Nav/NavbarLinks/GuestNavLink";
// import PrivateNavLink from "./components/Nav/NavbarLinks/PrivateNavLink";

// Axios defaults
// axios.defaults.withCredentials = true;
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
	const errorResponse = {
		status: err.response.status,
		statusText: err.response.statusText,
		ok: false,
		data: { _: null }
	};
	return Promise.reject(errorResponse); 
});

// App-level localStorage
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
	// return (navlink.type === PrivateNavLink && isAuth) || (navlink.type === GuestNavLink && !isAuth) || (navlink.type === UniversalNavLink); 
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

export { apiservice,  shouldShowLink, sleep };
