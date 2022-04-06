// User profile page
import React from "react";
import {UserProfileWrapper} from "../components/UserProfile/UserProfile"
import { useSelector } from "react-redux";

export const User_ProfilePage = () => {
	const userData = useSelector((state) => state.user.user_data);
	return <>
	<UserProfileWrapper>
		
	</UserProfileWrapper>
	
	</>;
};
