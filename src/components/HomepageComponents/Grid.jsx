import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import styled from "styled-components";

export const Grid = styled.div`
	height: 100%;
	width: 20%;
	overflow: hidden;
	
	padding-top: ${(props) =>
		props.one
			? "5%"
			: props.two
			? "15%"
			: props.three
			? "25%"
			: props.four
			? "30%"
			: props.five
			? "25%"
			: props.six
			? "15%"
			: "5%"}};
	
		border-radius: 20px;
		
		div{
			height: 50%;
			width: 100%;
			margin-bottom: 5%;

			img{
				height: 100%;
				width: 100%;
				border-radius: 20px;
			}
		}
		margin-left: ${(props) =>
			props.one
				? "-130px"
				: props.two
				? "10px"
				: props.three
				? "10px"
				: props.four
				? "10px"
				: props.five
				? "10px"
				: props.six
				? "10px"
				: "10px"};
				
	 margin-right:${(props) => (props.seven ? "-130px" : "5px")};
`;
