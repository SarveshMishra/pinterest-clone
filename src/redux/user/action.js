export const LOG_USER_DATA = "LOG_USER_DATA";

export const addUserData = (payload) => {
	return {
		type: LOG_USER_DATA,
		payload,
	};
};
