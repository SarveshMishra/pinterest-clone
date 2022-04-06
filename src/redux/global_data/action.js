export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const isLogIn = (flag) => {
	return {
		type: LOG_IN,
		flag: flag,
	};
};

export const isLogOut = () => {
	return {
		type: LOG_OUT,
		flag: "false",
	};
};
