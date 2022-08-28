import {
	LOG_USER_DATA,
	USER_SAVED_IMAGE,
	USER_LOG_OUT,
	PREV_SAVED_IMAGE,
} from './action';
const initState = {
	user_data: [],
	saved_image: [],
};
export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case LOG_USER_DATA:
			return {
				...state,
				user_data: action.payload,
			};
		case USER_SAVED_IMAGE:
			return {
				saved_image: [...state.saved_image, action.payload],
			};
		case USER_LOG_OUT:
			return {
				user_data: [],
				saved_image: [],
			};
		case PREV_SAVED_IMAGE:
			return {
				saved_image: action.payload,
			};
		default:
			return state;
	}
};
