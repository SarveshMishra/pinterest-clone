export const LOG_USER_DATA = "LOG_USER_DATA";
export const USER_SAVED_IMAGE = "USER_SAVED_IMAGE";
export const addUserData = (payload) => {
	return {
		type: LOG_USER_DATA,
		payload,
	};
};

export const addUserSavedImage = (payload) => { 
	return {
		type: USER_SAVED_IMAGE,
		payload,
	};
}