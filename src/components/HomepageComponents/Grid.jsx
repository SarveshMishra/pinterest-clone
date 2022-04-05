import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export const Grid = styled.div`
	height: 100%;
	width: 235px;
	background:  ${(props) =>
		props.one
			? "red"
			: props.two
			? "green"
			: props.three
			? "blue"
			: props.four
			? "black"
			: props.five
			? "yellow"
			: props.six
			? "orange"
			: "grey"};
	position: absolute;
	top: ${(props) =>
		props.one
			? "30%"
			: props.two
			? "50%"
			: props.three
			? "60%"
			: props.four
			? "80%"
			: props.five
			? "60%"
			: props.six
			? "50%"
			: "30%"}};
	margin-left: ${(props) =>
		props.one
			? "-130px"
			: props.two
			? "120px"
			: props.three
			? "370px"
			: props.four
			? "620px"
			: props.five
			? "870px"
			: props.six
			? "1120px"
			: "1370px"};
		
		border-radius: 20px;
		
`;
