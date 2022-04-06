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
} from "../components/UserProfile/UserProfile";
// import { useSelector } from "react-redux";

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
export const User_ProfilePage = () => {
  // const userData = useSelector((state) => state.user.user_data);

  return (
    <>
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
      </UserProfileWrapper>
    </>
  );
};
