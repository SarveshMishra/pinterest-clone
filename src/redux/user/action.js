export const LOG_USER_DATA = "LOG_USER_DATA";
export const USER_SAVED_IMAGE = "USER_SAVED_IMAGE";
export const USER_LOG_OUT = "USER_LOG_OUT";
export const PREV_SAVED_IMAGE = "PREV_SAVED_IMAGE";
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
export const logOutUser = () => { 
	return {
		type: USER_LOG_OUT,
	};
}

export const prevSavedImage = (payload) => { 
	return {
		type: PREV_SAVED_IMAGE,
		payload,
	};
}

export const addTodo=(data)=>{
	return{
	 type:"ADD_TODO",
	 payload:{
		 id:new Date().getTime().toString(),
		 data:data
	 }
	}
 }
 