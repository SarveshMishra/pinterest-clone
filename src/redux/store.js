import { createStore, combineReducers } from 'redux';
import { userReducer } from './user/reducer';
import todoreducer from './user/todoreducer';
import { globalReducer } from './global_data/reducer';
const rootReducer = combineReducers({
	user: userReducer,
	global: globalReducer,
	todoreducer: todoreducer,
});
export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
