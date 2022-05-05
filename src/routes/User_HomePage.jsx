// User Homepage After Login
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isLogIn } from "../redux/global_data/action";
import { addUserData, prevSavedImage } from "../redux/user/action";
import { Navbar } from "../components/Navbar/Navbar";
import { UserHomePage } from "../components/HomepageComponents/UserHomePage";
import { Disclaimer } from "../components/Disclaimer";
import constant from "../constant";
export const User_HomePage = () => {
	const dispatch = useDispatch();
	const userData = useDispatch();

	useEffect(() => {
		fetchUserProfile();
	}, []);
	const fetchUserProfile = () => {
		let userID = localStorage.getItem("userID")
		userID = JSON.parse(userID)
		
		fetch(`${constant.API_URL}/users/getUser?id=${userID}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(isLogIn(true));
				userData(addUserData(data));

				localStorage.setItem("userData", JSON.stringify(data));
			});
		fetch(`https://simple-json-db.herokuapp.com/saved_image`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(prevSavedImage(data));
			});
	};

	return (
		<div>
			<div>
				<Disclaimer />
				<Navbar />
			</div>
			<UserHomePage />
		</div>
	);
};
