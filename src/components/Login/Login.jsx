import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import './components/Login.css';
import {
	Form,
	HeadText,
	LoginWrapper,
	Logo,
	Overlay,
	Text,
	Input,
	Business,
	SignUpText,
} from './components/LoginWrapper';
import constant from '../../constant';
import FacebookLogin from 'react-facebook-login';

export const Login = () => {
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
		age: '',
	});
	const [toggleForm, setToggleForm] = React.useState(true);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	const { email, password, age } = formData;

	const handleSignUp = () => {
		const payload = {
			email,
			password,
			age,
		};
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					return data;
				} else {
					alert(data.message);
				}
			})
			.then((data) => {
				localStorage.setItem('isLogIn', 'true');
				localStorage.setItem('token', JSON.stringify(data.token.token));
				localStorage.setItem('userID', JSON.stringify(data.token.userId));
				navigate('/');
				window.location.reload();
			});
	};

	const handleLogin = () => {
		const payload = {
			email,
			password,
		};
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					return data;
				} else {
					alert(data.message);
				}
			})
			.then((data) => {
				localStorage.setItem('isLogIn', 'true');
				localStorage.setItem('token', JSON.stringify(data.token.token));
				localStorage.setItem('userID', JSON.stringify(data.token.userId));
				navigate('/');
				window.location.reload();
			});
	};

	const responseFacebook = (response) => {
		const payload = {
			email: response.email,
			name: response.name,
			facebookId: response.id,
			avatar: response.picture.data.url,
			password: process.env.REACT_APP_DEFAULT_PASSWORD,
		};
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					return data;
				} else {
					const payload = {
						email: response.email,
						password: process.env.REACT_APP_DEFAULT_PASSWORD,
					};
					fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(payload),
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							if (data.success) {
								return data;
							} else {
								alert(data.message);
							}
						})
						.then((data) => {
							localStorage.setItem('isLogIn', 'true');
							localStorage.setItem('token', JSON.stringify(data.token.token));
							localStorage.setItem('userID', JSON.stringify(data.token.userId));
							navigate('/');
							window.location.reload();
						});
				}
			})
			.then((data) => {
				localStorage.setItem('isLogIn', 'true');
				localStorage.setItem('token', JSON.stringify(data.token.token));
				localStorage.setItem('userID', JSON.stringify(data.token.userId));
				navigate('/');
				window.location.reload();
			});
	};
	const handleGoogleLogin = (response) => {
		const payload = {
			email: response.profileObj.email,
			name: response.profileObj.name,
			googleId: response.profileObj.googleId,
			avatar: response.profileObj.imageUrl,
			password: process.env.REACT_APP_DEFAULT_PASSWORD,
		};
		console.log(payload.email);
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (data.success) {
					return data;
				} else {
					const payload = {
						email: response.profileObj.email,
						password: process.env.REACT_APP_DEFAULT_PASSWORD,
					};
					fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(payload),
					})
						.then((res) => {
							return res.json();
						})
						.then((data) => {
							if (data.success) {
								return data;
							} else {
								alert(data.message);
							}
						})
						.then((data) => {
							localStorage.setItem('isLogIn', 'true');
							localStorage.setItem('token', JSON.stringify(data.token.token));
							localStorage.setItem('userID', JSON.stringify(data.token.userId));
							navigate('/');
							window.location.reload();
						});
				}
			})
			.then((data) => {
				localStorage.setItem('isLogIn', 'true');
				localStorage.setItem('token', JSON.stringify(data.token.token));
				localStorage.setItem('userID', JSON.stringify(data.token.userId));
				navigate('/');
				window.location.reload();
			});
	};
	const facebookLogin = (data) => {
		console.log(data);
	};

	return (
		<>
			<Overlay>
				<div className='overlay-container'>
					<SignUpText>Sign up to get your ideas</SignUpText>

					{toggleForm && (
						<LoginWrapper id='login'>
							<Logo>
								<svg
									fill='#E60023'
									height='32'
									width='32'
									viewBox='0 0 24 24'
									aria-label='Pinterest logo'
									role='img'
								>
									<path d='M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12'></path>
								</svg>
							</Logo>
							<HeadText>Welcome to Pinterest</HeadText>
							<Text>Find new ideas to try</Text>
							<Form>
								<Input
									onChange={handleChange}
									placeholder='Email'
									id='email'
									value={email}
									type='email'
								></Input>
								<Input
									onChange={handleChange}
									placeholder='Enter password'
									id='password'
									value={password}
									type='password'
								></Input>
								<Input
									onChange={handleChange}
									placeholder='Age'
									id='age'
									value={age}
								></Input>
								<Input
									onClick={handleSignUp}
									button
									type='button'
									value='Continue'
								></Input>
							</Form>
							<Text style={{ margin: `20px 0` }}>OR</Text>

							<FacebookLogin
								appId={process.env.REACT_APP_FACEBOOK_APP_ID}
								autoLoad={false}
								fields='name,email,picture'
								onClick={facebookLogin}
								cssClass='facebook-button'
								callback={responseFacebook}
							/>
							<br />
							<br />
							<GoogleLogin
								clientId={process.env.REACT_APP_GOOGLE_APP_ID}
								render={(renderProps) => (
									<button
										className='google-button'
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										Login with Google
									</button>
								)}
								onSuccess={handleGoogleLogin}
								onFailure={handleGoogleLogin}
								cookiePolicy={'single_host_origin'}
							/>
							<Text bottomNormal style={{ margin: `10px 0` }}>
								By continuing, you agree to Pinterest's
							</Text>
							<Text bottomNormal style={{ margin: `10px 0` }}>
								Terms of Service and acknowledge you've read our
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Privacy Policy
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Already a member?{' '}
								<button
									style={{
										cursor: `pointer`,
										border: `none`,
										background: `none`,
										fontSize: `1rem`,
									}}
									onClick={() => {
										setToggleForm(false);
									}}
								>
									Login
								</button>
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Are you a business? Get started here!
							</Text>
							<Business>Create a free business account</Business>
						</LoginWrapper>
					)}
					{!toggleForm && (
						<LoginWrapper id='login'>
							<Logo>
								<svg
									fill='#E60023'
									height='32'
									width='32'
									viewBox='0 0 24 24'
									aria-label='Pinterest logo'
									role='img'
								>
									<path d='M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12'></path>
								</svg>
							</Logo>
							<HeadText>Welcome to Pinterest</HeadText>
							<Text>Find new ideas to try</Text>
							<Form>
								<Input
									onChange={handleChange}
									placeholder='Email'
									id='email'
									value={email}
									type='email'
								></Input>
								<Input
									onChange={handleChange}
									placeholder='Enter password'
									id='password'
									value={password}
									type='password'
								></Input>

								<Input
									onClick={handleLogin}
									button
									type='button'
									value='Login'
								></Input>
							</Form>
							<Text style={{ margin: `20px 0` }}>OR</Text>
							<FacebookLogin
								appId={process.env.REACT_APP_FACEBOOK_APP_ID}
								autoLoad={false}
								fields='name,email,picture'
								onClick={facebookLogin}
								cssClass='facebook-button'
								callback={responseFacebook}
							/>
							<br />
							<br />
							<GoogleLogin
								clientId={process.env.REACT_APP_GOOGLE_APP_ID}
								render={(renderProps) => (
									<button
										className='google-button'
										onClick={renderProps.onClick}
										disabled={renderProps.disabled}
									>
										Login with Google
									</button>
								)}
								onSuccess={handleGoogleLogin}
								onFailure={handleGoogleLogin}
								cookiePolicy={'single_host_origin'}
							/>
							<Text bottomNormal style={{ margin: `10px 0` }}>
								By continuing, you agree to Pinterest's
							</Text>
							<Text bottomNormal style={{ margin: `10px 0` }}>
								Terms of Service and acknowledge you've read our
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Privacy Policy
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Join Us...{'   '}
								<button
									style={{
										cursor: `pointer`,
										border: `none`,
										background: `none`,
										fontSize: `1rem`,
									}}
									onClick={() => setToggleForm(true)}
								>
									{() => {
										setToggleForm(true);
									}}
									Sign up
								</button>
							</Text>
							<Text bottomBold style={{ margin: `10px 0` }}>
								Are you a business? Get started here!
							</Text>
							<Business>Create a free business account</Business>
						</LoginWrapper>
					)}
				</div>
			</Overlay>
		</>
	);
};
