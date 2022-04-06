import React, { useDebugValue } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isLogIn } from "../../redux/global_data/action";
import { addUserData } from "../../redux/user/action";

const Navbar_wrapper = styled.div`
	// background-color: #cecece;
	position: sticky;
	margin-left: 14px;
	margin-right: 14px;
	margin-top: 1%;
	margin-bottom: 2px;
	height: 50px;
	display: flex;
	flex-direction: row;
	font-family: "Segoe UI", Arial, sans-serif;
	z-index: 1;
`;

const Logo_wrapper = styled.div`
	margin-right: 10px;
	border-radius: 50px;
	width: auto;
	padding: auto;
	margin: auto 1%;
`;

const Home_div = styled.div`
	width: auto;
	margin: auto 1%;
	font-weight: bold;
	font-size: 120%;
`;
const Today_div = styled.div`
	width: auto;
	margin: auto 5px;
	font-weight: bold;
	font-size: 120%;
`;
const Search_div = styled.div`
	width: 80%;
	color: rgb(118, 118, 118);
	margin: auto 1%;
	border-radius: 50px;
	// background-color: red;
	height: 100%;

	&:hover {
		background-color: #e1e1e1;
		border: 3px solid #1e97c7;

		 {
			Input {
				background-color: #e1e1e1;
			}
		}
	}
`;
const Notification = styled.div`
	margin: auto 0px;
`;
const Message = styled.div`
	margin: auto 0px;
`;

const Drop_Down = styled.div`
	margin: auto 0px;
	// padding-left: 4%
	cursor: pointer;
`;
const Input = styled.input`
	height: 100%;
	width: 90%;
	// color : #d6d6d6;
	margin: 0px;
	padding: auto;
	outline: none;
	border: none;
	font-size: 100%;
	// margin-bottom: 100px;
	border-radius: 50px;
	&:hover {
		background-color: #e1e1e1;
	}
`;

const Svg = styled.svg`
	margin: 0px;
	margin: auto 10px;
`;
const Navbar_profile = styled.div`
	display: flex;
	flex-direction: row;
	img {
		border-radius: 50%;
	}
`;

const DropDownMenu = styled.div`
	width: 250px;

	background-color: #fff;
	border-radius: 10px;
	position: absolute;
	top: 100%;
	right: 0.5%;

	padding: 2%;
	font-size: 1.1rem;
	box-sizing: border-box;
	p {
		font-size: 0.8rem;
	}
	ul {
		list-style-type: none;

		li {
			margin: 10px;
			cursor: pointer;
		}
	}
`;

export const Navbar = () => {
	// const userData = useSelector((state) => state.user.user_data);
	const logOut = useDispatch();
	const userData = useDispatch();
	const [img_url, setImg_url] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [toggleDropDown, setToggleDropDown] = React.useState(false);
	// console.log(img_url);
	const navigate = useNavigate();
	React.useEffect(() => {
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
				setImg_url(data[0].public_profile.profile_img);
				setUsername(data[0].public_profile.username);
			});
	};
	const handleLogOut = () => {
		logOut(isLogIn(false));
		localStorage.setItem("isLogIn", false);
		localStorage.setItem("userID", "");
		userData(addUserData([]));
	};
	const handleNavigation = () => {
		navigate(`/${username}`);
	};
	
	return (
		<Navbar_wrapper>
			<Logo_wrapper>
				<svg
					class="gUZ lZJ U9O kVc"
					height="24"
					width="24"
					viewBox="0 0 24 24"
					aria-hidden="true"
					aria-label=""
					role="img"
					fill="#E60023"
				>
					<path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
				</svg>
			</Logo_wrapper>
			<Home_div>
				<span>Home</span>
			</Home_div>
			<Today_div>
				<span>Today</span>
			</Today_div>
			<Search_div>
				<Svg
					class="gUZ B9u U9O kVc"
					height="16"
					width="16"
					viewBox="0 0 24 24"
					aria-label="Search icon"
					role="img"
					fill="rgb(118,118,118)"
				>
					<path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
				</Svg>
				<Input type="text" placeholder="Search" />
			</Search_div>

			<Notification>
				<Svg
					class="gUZ B9u U9O kVc"
					height="24"
					width="24"
					viewBox="0 0 24 24"
					aria-hidden="true"
					aria-label=""
					role="img"
					fill="rgb(118,118,118)"
				>
					<path d="M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z"></path>
				</Svg>
			</Notification>

			<Message>
				<Svg
					class="Hn_ gUZ B9u U9O kVc"
					height="24"
					width="24"
					viewBox="0 0 24 24"
					aria-hidden="true"
					aria-label=""
					role="img"
					fill="rgb(118,118,118)"
				>
					<path d="M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0"></path>
				</Svg>
			</Message>

			<Navbar_profile>
				<img onClick={handleNavigation} src={`${img_url}`} alt="" />
				<Drop_Down onClick={() => setToggleDropDown(!toggleDropDown)}>
					<Svg
						class="gUZ B9u U9O kVc"
						height="12"
						width="12"
						viewBox="0 0 24 24"
						aria-hidden="true"
						aria-label=""
						role="img"
						fill="rgb(118,118,118)"
					>
						<path d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z"></path>
					</Svg>
				</Drop_Down>
				{toggleDropDown && (
					<DropDownMenu>
						<p>Your Account</p>
						<ul>
							<li>Add Account</li>
							<li>Convert To Business</li>
						</ul>
						<p>More Options</p>
						<ul>
							<li>Settings</li>
							<li>Tune your home feed</li>
							<li>Install Window App</li>
							<li>Get Help</li>
							<li>See terms and privacy</li>
							<li onClick={handleLogOut}>Logout</li>
						</ul>
					</DropDownMenu>
				)}
			</Navbar_profile>
		</Navbar_wrapper>
	);
};
