export const getUserDetails = () => ({
	type: "GET_USER_DETAILS",
});
export const LogOutUser = () => ({
	type: "USER_LOG_OUT",
});

export const setUserDetails = payload => ({
	type: "SET_USER_DETAILS",
	payload,
});
export const toggleLoader = payload => ({
	type: "TOGGLE_LOADING",
	payload,
});
