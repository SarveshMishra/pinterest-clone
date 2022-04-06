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
  Share_button,
  Edit_button,
  Button_wrapper,
  Create_button,
  Saved_button,
  Image_card,
  Middle_div,
  Svg
} from "../components/UserProfile/UserProfile";
// import { useSelector } from "react-redux";
import {Navbar} from "../components/Navbar/Navbar"

let userData = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "abc@xyz.com",
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
      "https://dsm01pap006files.storage.live.com/y4mrTLhVwfdZUEeiloUPmJG8AQNo_AAW7GMHGMbUeKnc-fNAWzLMH8tVEP37EbuAN3KKxvJVmYn_z5u15X9bxdQCfpnhcWL0bA1LQhGx1RUDhq-QDRlegk6DpU6Dgd_ZAcmH1xtUwljSbfsNmIoDnmJy5BpVKTPxY5OtN4ql2I9TA8pSeK2WZTnuuFA6F9t9RTj?width=660&height=634&cropmode=none",
    name: "Leanne Graham",
    username: "Bret",
    email: "abc@gmail.com",
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
    ],
    followers: [
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

const Profile_img = userData.public_profile.profile_img;
const His_Name = userData.public_profile.name;
const User_name = userData.public_profile.username;
const following = userData.public_profile.following.length;
const Img_src = userData.saved_image[0].img_url;
export const User_ProfilePage = () => {
  // const userData = useSelector((state) => state.user.user_data);

  return (
    <>
	<Navbar/>
      <UserProfileWrapper>
        <ProfileContainer>

          <Img_div>
            <Img src={Profile_img} alt="" />
          </Img_div>

          <Name>{His_Name}</Name>

		  <User_Name>
			  @{User_name}
		  </User_Name>

		  <Following>
			  {following} following
		  </Following>
			<Button_wrapper>
			<Share_button>
				Share
			</Share_button>
			<Edit_button>
				Edit Profile
			</Edit_button>
			</Button_wrapper>
			
			<Button_wrapper>
			<Create_button>
				Create
			</Create_button>
			<Saved_button>
				Saved
			</Saved_button>
			</Button_wrapper>
			
        </ProfileContainer>

    <Middle_div>
    <svg class="gUZ pBj U9O kVc left_svg" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img" fill = "#000000"><path d="M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5"></path></svg>

    <Svg class="gUZ pBj U9O kVc right_svg" height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img"><path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path></Svg>

    </Middle_div>

		<Image_card>
			<img src={Img_src} alt="" />
		</Image_card>
      </UserProfileWrapper>
    </>
  );
};
