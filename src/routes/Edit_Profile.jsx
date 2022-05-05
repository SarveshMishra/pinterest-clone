import React from "react";
import { Navbar } from "../components/Navbar/Navbar";
import { Disclaimer } from "../components/Disclaimer";
import styled from "styled-components";
import constant from "../constant";
import { useDispatch } from "react-redux";
import { addUserData } from "../redux/user/action";

const Form = styled.form``;

export const Edit_Profile = () => {
	const [formData, setFormData] = React.useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const userData = useDispatch();
	const [selectedFile, setSelectedFile] = React.useState();

	const [upload, setUpload] = React.useState("Upload");
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const uploadChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleUpload = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", selectedFile);
		formData.append("upload_preset", "react-file-upload");
		let userID = JSON.parse(localStorage.getItem("userID"));

		fetch(`${constant.API_URL}/users/${userID}/avatar`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				setUpload("Uploaded");
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		let payload = {
			name: formData.name,
			email: formData.email,
			password: formData.password,
		};
		let userID = JSON.parse(localStorage.getItem("userID"));
		fetch(`${constant.API_URL}/users/?id=${userID}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())

			.then((data) => {
				console.log(data);
				userData(addUserData(data));
				localStorage.setItem("userData", JSON.stringify(data));
			});
	};

	return (
		<>
			<Disclaimer />
			<Navbar />
			<Form onSubmit={handleSubmit}>
				<h3>Edit Profile</h3>

				<label>Name:</label>
				<input
					type="text"
					placeholder="Name"
					name="name"
					onChange={handleChange}
				/>
				<br />
				<label>Email:</label>
				<input
					type="text"
					placeholder="Email"
					name="email"
					onChange={handleChange}
				/>
				<br />
				<label>Password:</label>
				<input
					type="text"
					placeholder="Password"
					name="password"
					onChange={handleChange}
				/>
				<br />
				<label>Confirm Password:</label>
				<input
					type="text"
					placeholder="Confirm Password"
					name="confirmPassword"
					onChange={handleChange}
				/>
				<br />
				<label>Avatar:</label>
				<input type="file" onChange={uploadChange} />
				<button onClick={handleUpload}>{upload}</button>
				<br />
				<button type="submit">Submit</button>
			</Form>
		</>
	);
};
