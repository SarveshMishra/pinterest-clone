import styled from "styled-components";

export const UserProfileWrapper = styled.div`
	margin: 0px;
	margin-top: 2%;
	font-family: "Segoe UI", Arial, sans-serif;
`;

export const ProfileContainer = styled.div`
	//   background-color: red;
	// padding: 0px 20%;
	margin: 0px 32%;
`;

export const Img_div = styled.div`
	// background-color : yellow;
	height: 24%;
	width: 24%;
	padding: 0px auto;
	text-align: center;
	margin: 0px auto;
	border-radius: 50px;
`;

export const Name = styled.h1`
	text-align: center;
	font-weight: 750;
	margin-top: 6%;
`;
export const Img = styled.img`
	height: 100%;
	width: 100%;
	border-radius: 500px;
`;

export const User_Name = styled.div`
	font-size: 100%;
	color: #8c76a2;
	text-align: center;
	margin: auto;
	margin-top: 2%;
`;

export const Following = styled.div`
	text-align: center;
	margin-top: 2%;
	color: #78727d;
`;

export const Button_wrapper = styled.div`

	display: flex;
	margin-top: 3%;
	justify-content: center;
`;


export const Saved_button = styled.button`

	height: 2.5rem;
	padding: 10px;
	margin-left: 3%;
	border: none;
	font-size: 98%;
	font-weight: 600;
	background-color: none;
	margin-top: 3%;
	border-radius: 10px;
	align-items: center;
`;

export const Image_card = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 10px;
	column-gap: 20px;
	padding-left: 300px;
	margin-top: 80px;
	img {
		border-radius: 30px;
	}
`;
export const Middle_div = styled.div`
	// background-color : yellow;
	width: 100%;
	height: 120%;
	padding-left: 2%;
`;

export const Svg = styled.svg`
	margin: 10px;
	margin-left: 93%;
`;

export const SavedImg = styled.div`
	width: 80%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	padding: 10px;

	div {
		height: 80%;
		width: 80%;
		display: flex;
		margin: 10px;
		justify-content: space-between;
		wrap-content: no wrap;
		padding-left: 50%;
		img {
			width: 100%;
			height: 100%;
		}
	}
`;
