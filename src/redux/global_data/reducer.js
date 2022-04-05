import { LOG_IN } from "./action";
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
		default:
			return state;
	}
};
