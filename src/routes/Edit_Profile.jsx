import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Disclaimer } from '../components/Disclaimer';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addUserData } from '../redux/user/action';
import { useNavigate } from 'react-router-dom';
const Form = styled.form`
	margin: 1% 2%;
	display: flex;
	flex-direction: column;
	width: 20%;
	& input {
		height: 40px;
		border-radius: 5px;
		margin-top: 10px;
	}
`;
export const Edit_Profile = () => {
	const [formData, setFormData] = React.useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const navigate = useNavigate();
	const userData = useDispatch();
	const [selectedFile, setSelectedFile] = React.useState();
	const [upload, setUpload] = React.useState('Upload Image');
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
		formData.append('image', selectedFile);
		formData.append('upload_preset', 'react-file-upload');
		let userID = JSON.parse(localStorage.getItem('userID'));
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/${userID}/avatar`, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((data) => {
				setUpload('Uploaded');
				alert('Uploaded');
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
		let userID = JSON.parse(localStorage.getItem('userID'));
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/?id=${userID}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				userData(addUserData(data));
				localStorage.setItem('userData', JSON.stringify(data));
				alert('Profile Updated');
				navigate('/');
			});
	};
	return (
		<>
			<Disclaimer />
			<Navbar />
			<h3>Edit Profile</h3>
			<Form onSubmit={handleSubmit}>
				<label>Name:</label>
				<input
					type='text'
					placeholder='Name'
					name='name'
					onChange={handleChange}
				/>
				<br />
				<label>Email:</label>
				<input
					type='text'
					placeholder='Email'
					name='email'
					onChange={handleChange}
				/>
				<br />
				<label>Password:</label>
				<input
					type='text'
					placeholder='Password'
					name='password'
					onChange={handleChange}
				/>
				<br />
				<label>Confirm Password:</label>
				<input
					type='text'
					placeholder='Confirm Password'
					name='confirmPassword'
					onChange={handleChange}
				/>
				<br />
				<label>Avatar:</label>
				<input type='file' onChange={uploadChange} />
				<button onClick={handleUpload}>{upload}</button>
				<br />
				<button type='submit'>Submit</button>
			</Form>
		</>
	);
};
