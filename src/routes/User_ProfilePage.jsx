// User profile page
import React, { useEffect } from "react";
import {
	UserProfileWrapper,
	ProfileContainer,
	Img_div,
	Name,
	Img,
	User_Name,
	Following,
	Button_wrapper,
	Saved_button,
	Image_card,
	Middle_div,
	Svg,
	SavedImg,
} from "../components/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import { Navbar } from "../components/Navbar/Navbar";
import ImageCardDelete from "../components/ImageCard/ImageCardDelete";
import "../css/user_profilepage.css";
import { Disclaimer } from "../components/Disclaimer";
import { useNavigate } from "react-router-dom";
import constant from "../constant";
export const User_ProfilePage = () => {
	let userData = JSON.parse(localStorage.getItem("userData"));
	const avatar = `${userData.avatar}`;
	const [userSavedImage, setUserSavedImage] = React.useState([]);
	const userID = JSON.parse(localStorage.getItem("userID"));
	const name = userData.name;
	const email = userData.email || "";
	const following = userData.following || [];
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`${constant.API_URL}/save/?id=${userID}`)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setUserSavedImage(res);
			});
	}, []);
	return (
		<>
			<Disclaimer />
			<Navbar />
			<UserProfileWrapper>
				<ProfileContainer>
					<Img_div>
						<Img src={avatar} alt="" />
					</Img_div>

					<Name>{name}</Name>

					<User_Name>{email}</User_Name>

					<Following>{following.length} following</Following>
					<Button_wrapper>
						<Saved_button>Share</Saved_button>
						<Saved_button
							style={{ cursor: "pointer" }}
							onClick={() => {
								navigate("/user/profile/edit");
							}}
						>
							Edit Profile
						</Saved_button>
					</Button_wrapper>

					<Button_wrapper>
						<Saved_button>Create</Saved_button>
						<Saved_button>Saved</Saved_button>
					</Button_wrapper>
				</ProfileContainer>

				<Middle_div>
					<svg
						height="20"
						width="20"
						viewBox="0 0 24 24"
						aria-hidden="true"
						aria-label=""
						role="img"
						fill="#000000"
					>
						<path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path>
					</svg>

					<Svg
						height="20"
						width="20"
						viewBox="0 0 24 24"
						aria-hidden="true"
						aria-label=""
						role="img"
					>
						<path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
					</Svg>
				</Middle_div>

				<div className="save_main">
					<div className="save_div">
						{userSavedImage.map((ele) => {
							return (
								//image.img_url
								<ImageCardDelete image={ele.image_url} id={ele.image_id} />
							);
						})}
					</div>
				</div>
			</UserProfileWrapper>
		</>
	);
};
