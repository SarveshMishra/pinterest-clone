import React from 'react';
import styled from 'styled-components';
const DisclaimerDiv = styled.div`
	font-size: 1rem;
	background-color: red;
	text-align: center;
`;
export const Disclaimer = () => {
	return (
		<DisclaimerDiv>
			“It’s a project for educational purpose only and not commercial purpose”
		</DisclaimerDiv>
	);
};
