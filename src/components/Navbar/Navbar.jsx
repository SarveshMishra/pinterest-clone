import React from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { isLogIn } from "../../redux/global_data/action";
import { logOutUser } from "../../redux/user/action";
import "./navbar.css";
import constant from "../../constant";

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
	cursor: pointer;
`;

const Home_div = styled.button`
	width: auto;
	margin: auto 1%;
	font-weight: bold;
	font-size: 1rem;

	border: none;
	cursor: pointer;
	padding: 1% 1.2%;
	border-radius: 50px;
	margin: auto 0 auto auto;
`;

const Search_div = styled.div`
	width: 80%;
	color: rgb(118, 118, 118);
	border-radius: 50px;
	box-sizing: border-box;
	margin-left: 5px;
	height: 100%;
	background-color: #efefef;

	&:hover {
		background-color: #e1e1e1;

		 {
			Input {
				background-color: #e1e1e1;
			}
		}
	}
	&:focus-within {
		border: 3px solid #1e97c7;
		Svg {
			display: none;
		}
		Input {
			padding-left: 2%;
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
	&:active {
		background-color: #e1e1e1;
	}
	border-radius: 50%;
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
	background-color: #efefef;
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
	cursor: pointer;
`;

const DropDownMenu = styled.div`
	width: 300px;
	border: 1px solid #e1e1e1;
	background-color: #fff;
	border-radius: 10px;
	position: absolute;
	top: 100%;
	right: 0.5%;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 1%;

	font-size: 1.1rem;
	box-sizing: border-box;

	p {
		font-size: 0.8rem;
	}
	ul {
		list-style-type: none;

		li {
			width: 100%;
			height: 40px;
			margin: 10px;
			padding: 5px;
			align-items: center;
			cursor: pointer;
			box-sizing: border-box;
			&:hover {
				background-color: #e1e1e1;
				border-radius: 10px;
			}
		}
	}
`;
const CurrentProfile = styled.div`
	display: flex;
	height: 100px;
	width: 100%;
	margin: 10px auto;
	padding: 10px;
	box-sizing: border-box;
	&:hover {
		background-color: #e1e1e1;
		border-radius: 10px;
	}
`;

const SearchResultsDiv = styled.div`
	background-color: white;
	margin: 0px 14% 0px 17%;
	z-index: 1;
	position: absolute;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
	border-radius: 10px;
	width: 70vw;
	height: 40vh;
	padding: 10px 20px;
	display: none;
`;
const HeadingDiv = styled.div`
	margin-top: 50px;
	margin-bottom: -20px;
`;

const ImageCard = styled.div`
	display: flex;
	flex-direction: row;
`;
const ImageDiv = styled.div`
	width: 12rem;
	height: 5rem;
	border-radius: 18px;
	box-sizing: border-box;
	text-align: center;
	font-weight: 700;
	position: relative;
	margin-left: 2rem;

	img {
		border-radius: 18px;
		display: block;
		opacity: 0.3;
		width: 12rem;
		height: 5rem;
		margin-top: 0px;
	}
	h3 {
		position: relative;
		top: 3.5rem;
		bottom: 0px;
		font-weight: 700;
		// color : white;
		opacity: 100;
	}
`;

export const Navbar = () => {
	const logOut = useDispatch();
	const userLogOut = useDispatch();
	const savedImage = useDispatch();
	const [active, setActive] = React.useState(true);
	const [img_url, setImg_url] = React.useState("");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [username, setUsername] = React.useState("");
	const [toggleDropDown, setToggleDropDown] = React.useState(false);
	const navigate = useNavigate();
	const [SearchBarActive, setSearchBarActive] = React.useState(false);
	console.log(SearchBarActive);
	React.useEffect(() => {
		activeBtn();
		fetchUserProfile();
	}, []);
	const fetchUserProfile = () => {
		fetch(`${constant.API_URL}/users/getUser`, {
			headers: {
				token: JSON.parse(localStorage.getItem("token")),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				data = data.user;
				setImg_url(`${data.avatar}`);
				setUsername(data.name);
				setEmail(data.email);
				setName(data.name);
			});
	};
	const handleLogOut = () => {
		logOut(isLogIn(false));
		localStorage.setItem("isLogIn", false);
		localStorage.setItem("userID", "");
		localStorage.setItem("userData", "");
		userLogOut(logOutUser());
		navigate("/");
	};
	const handleNavigation = () => {
		navigate(`/${username}`);
	};

	const activeBtn = () => {
		let flag = window.location.href == "http://localhost:3000/" ? true : false;
		setActive(flag);
	};

	return (
		<>
			<Navbar_wrapper>
				<Logo_wrapper
					onClick={() => {
						navigate("/");
					}}
				>
					<svg
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
				<Home_div
					id="home_btn"
					onClick={() => {
						navigate("/");
					}}
					className={active ? "active" : "notActive"}
					style={{}}
				>
					<span>Home</span>
				</Home_div>
				<Home_div className="today">
					<span>Today</span>
				</Home_div>
				<Search_div id="search_bar">
					<Svg
						height="16"
						width="16"
						viewBox="0 0 24 24"
						aria-label="Search icon"
						role="img"
						fill="rgb(118,118,118)"
					>
						<path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24"></path>
					</Svg>
					<Input
						onFocus={() => {
							setSearchBarActive(true);
						}}
						type="text"
						placeholder="Search"
					/>
				</Search_div>

				<Notification>
					<Svg
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
							<p>Currently in</p>
							<CurrentProfile onClick={handleNavigation}>
								<img src={`${img_url}`} alt="" />
								<div style={{ marginLeft: "10px" }}>
									<h3>{name}</h3>
									<h5>Personal</h5>
									<h5>{email}</h5>
								</div>
							</CurrentProfile>
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
			{SearchBarActive && (
				<SearchResultsDiv
					onClick={() => {
						setSearchBarActive(false);
					}}
					className="SearchResultsDiv"
					style={{ display: `${SearchBarActive ? "block" : "none"}` }}
				>
					<HeadingDiv>Ideas for you</HeadingDiv>
					<ImageCard>
						<ImageDiv style={{ marginLeft: "0px" }}>
							<h3>Closet Layout</h3>
							<img
								src="https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg"
								alt=""
							/>
						</ImageDiv>
						<ImageDiv>
							<h3>Closet Layout</h3>
							<img
								src="https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg"
								alt=""
							/>
						</ImageDiv>
					</ImageCard>
					<HeadingDiv>Popular on pinterest</HeadingDiv>
					<ImageCard>
						<ImageDiv style={{ marginLeft: "0px" }}>
							<h3>Closet Layout</h3>
							<img
								src="https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg"
								alt=""
							/>
						</ImageDiv>
						<ImageDiv>
							<h3>Closet Layout</h3>
							<img
								src="https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg"
								alt=""
							/>
						</ImageDiv>
						<ImageDiv>
							<h3>Closet Layout</h3>
							<img
								src="https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg"
								alt=""
							/>
						</ImageDiv>
					</ImageCard>
				</SearchResultsDiv>
			)}
		</>
	);
};
