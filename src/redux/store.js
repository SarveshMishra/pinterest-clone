import { createStore, combineReducers } from "redux";
import { userReducer } from "./user/reducer";
import { globalReducer } from "./global_data/reducer";
const rootReducer = combineReducers({
	user: userReducer,
	global: globalReducer,
});
export const store = createStore(rootReducer);
