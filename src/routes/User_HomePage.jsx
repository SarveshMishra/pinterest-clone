// User Homepage After Login
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isLogIn } from "../redux/global_data/action";
import { addUserData } from "../redux/user/action";
import { Navbar } from "../components/Navbar/Navbar";
import {UserHomePage} from "../components/HomepageComponents/UserHomePage";
export const User_HomePage = () => {
	const dispatch = useDispatch();
	const userData = useDispatch();

	useEffect(() => {
		fetchUserProfile();
	}, []);
	const fetchUserProfile = () => {
		fetch(
			`https://simple-json-db.herokuapp.com/users?id=${localStorage.getItem(
				"userID"
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				dispatch(isLogIn(true));
				userData(addUserData(data[0]));
				localStorage.setItem("userData", JSON.stringify(data[0]));
			});
	};

	
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<UserHomePage />
		</div>
	);
};
