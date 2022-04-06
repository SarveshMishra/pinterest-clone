import { LOG_USER_DATA } from "./action";

export const userReducer = (state = { user_data: [] }, action) => {
	switch (action.type) {
		case LOG_USER_DATA:
			return {
				...state,
				user_data: action.payload,
			};
		default:
			return state;
	}
};
