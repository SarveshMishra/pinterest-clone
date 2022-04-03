import { ADD_USER } from "./action";

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};
