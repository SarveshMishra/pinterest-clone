// User profile page
import React from "react";
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

const userData = {
	id: 1,
	name: "Sarvesh Mishra",
	username: "smishra",
	email: "officialsmishra@gmail.com",
	password: 123,
	saved_image: [
		{
			id: 1,
			img_url:
				"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
			liked: true,
			image_tag: [
				{
					id: 1,
					tag: "tag1",
				},
				{
					id: 2,
					tag: "tag2",
				},
			],
		},
	],
	public_profile: {
		profile_img:
			"https://dsm01pap006files.storage.live.com/y4mQtWseafDY7LK1jUMAx_avTTyjhDJ6d9cSQ36-j5o36k7_SlNoM8FhIV3Ol-bfrb-LrkjMtOik5GwtIPzXSMmuE32pv-pKQiFSEPu-uTRxPozdqfkb1advMPaUHKrCOToh5-MjM9jXQW1q6haU4bBwU9XTm8lwHawshzGm4mNLkOWtYbkMF5fAtgGSOilqSss?width=256&height=256&cropmode=none",
		name: "Sarvesh Mishra",
		username: "smishra",
		email: "officialsmishra@gmail.com",
		age: 25,
		about: "Hello World",
		website: "https://www.google.com/",
		pronoun: "he/him",
		following: [
			{
				id: 1,
				username: "Bret",
				email: "abc@gmail.com",
			},
			{
				id: 1,
				username: "Bret",
				email: "abc@gmail.com",
			},
			{
				id: 1,
				username: "Bret",
				email: "abc@gmail.com",
			},
			{
				id: 1,
				username: "Bret",
				email: "abc@gmail.com",
			},
		],
		followers: [
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
			{
				id: 1,
				username: "Bret",
				email: "",
			},
		],
	},
	personal_info: {
		gender: "male",
		country: "India",
		language: "English",
	},
};

const profile_img = userData.public_profile.profile_img;
const name = userData.public_profile.name;
const username = userData.public_profile.username;
const following = userData.public_profile.following;

export const User_ProfilePage = () => {
	const userSavedImage = useSelector((state) => state.user.saved_image);
	// const userData = useSelector((state) => state.user.user_data);
	// const {
	// 	public_profile: { profile_img, name, username, following },
	// } = userData;
	console.log(userSavedImage);
	return (
		<>
			<Navbar />
			<UserProfileWrapper>
				<ProfileContainer>
					<Img_div>
						<Img src={profile_img} alt="" />
					</Img_div>

					<Name>{name}</Name>

					<User_Name>@{username}</User_Name>

					<Following>{following.length} following</Following>
					<Button_wrapper>
						<Saved_button>Share</Saved_button>
						<Saved_button>Edit Profile</Saved_button>
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
								<ImageCardDelete image={ele.img_url} id={ele.id} />
							);
						})}
					</div>
				</div>
			</UserProfileWrapper>
		</>
	);
};
