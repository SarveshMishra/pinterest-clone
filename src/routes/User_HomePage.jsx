// User Homepage After Login
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { isLogIn } from '../redux/global_data/action';
import { addUserData, prevSavedImage } from '../redux/user/action';
import { Navbar } from '../components/Navbar/Navbar';
import { UserHomePage } from '../components/HomepageComponents/UserHomePage';
import { Disclaimer } from '../components/Disclaimer';
import constant from '../constant';
export const User_HomePage = () => {
	const dispatch = useDispatch();
	const userData = useDispatch();

	useEffect(() => {
		fetchUserProfile();
	}, []);
	const fetchUserProfile = () => {
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/getUser`, {
			headers: {
				token: JSON.parse(localStorage.getItem('token')),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch(isLogIn(true));
				userData(addUserData(data.user));
				localStorage.setItem('userData', JSON.stringify(data.user));
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
