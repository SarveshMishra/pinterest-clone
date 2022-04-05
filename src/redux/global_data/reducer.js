import { LOG_IN, LOG_OUT } from "./action";

const initState = {
	isLogIn: "false",
};
export const globalReducer = (state = initState, action) => {
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				isLogIn: action.flag,
			};
		case LOG_OUT:
			return {
				...state,
				isLogIn: action.flag,
			};
		default:
			return state;
	}
};
