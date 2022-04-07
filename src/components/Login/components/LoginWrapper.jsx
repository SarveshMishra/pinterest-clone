import styled from "styled-components";

export const LoginWrapper = styled.div`
	width: 484px;
	background-color: rgb(255, 255, 255);
	border-radius: 32px;
	position: absolute;
	text-align: center;
	margin: auto 0px auto 4%;

	box-shadow: rgb(0 0 0 / 45%) 0px 2px 10px;
	padding-bottom: 55px;
	box-sizing: border-box;
	top: 120%;
	left: 60%;
	z-index: 100;
	padding-bottom: 0px;
`;

export const Overlay = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	height: 100%;
	width: 100%;
`;

export const HeadText = styled.h1`
	color: rgb(51, 51, 51);
	font-size: 36px;
	font-weight: 600;
	letter-spacing: -1.2px;
	padding-left: 16px;
	padding-right: 16px;
	-webkit-font-smoothing: antialiased;
	word-break: break-word;
	margin-bottom: 0;
`;

export const Logo = styled.div`
	margin-top: 20px;
`;

export const Text = styled.div`
	font-size: ${(props) => (props.bottomNormal ? "10px" : "16px")};
	font-weight: ${(props) => (props.bottomBold ? "500" : "400")};
`;
export const Form = styled.form`
	margin-top: 30px;
`;

export const Input = styled.input`
	border-radius: ${(props) =>
		props.button || props.facebook ? "30px" : "16px"};

	border: ${(props) =>
		props.button || props.facebook ? "0px none " : "2px solid #cdcdcd"};

	height: ${(props) => (props.button || props.facebook ? "40px" : "50px")};
	width: 60%;
	padding: 10px;
	box-sizing: border-box;
	font-size: 16px;
	margin-top: ${(props) => (props.button ? "10px" : "5px")};
	background-color: ${(props) =>
		props.button ? "#E60023" : props.facebook ? "#1877F2" : "#fff"};
	color: ${(props) =>
		props.button ? "white" : props.facebook ? "#fff" : "#cecece"};
	cursor: ${(props) => (props.button ? "pointer" : "auto")};
	font-weight: ${(props) =>
		props.button || props.facebook ? "bold" : "normal"};
`;
export const Button = styled.button`
	background-color: ${(props) => (props.signup ? "#EFEFEF" : "#E60023")};
	border-radius: 20px;
	border: none;
	color: ${(props) => (props.signup ? "#000" : "white")};
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	width: 100px;
	margin: 5px;

	&:hover {
		background-color: ${(props) => (props.signup ? "#ddd" : "#a3081a;")};
	}
`;
export const Business = styled.div`
	width: 100%;
	height: 65px;
	background-color: #efefef;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 30px 30px;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
	margin-top: 100px;
`;
