import React from "react";
import styled from "styled-components";

import Question from "./Question";
import { StyledAbout } from "../styles";

const FaqSection = () => {
	const questions = [
		"How Do I Start?",
		"What Products Do You Offer?",
		"Different Payment Methods",
		"Daily Schedule",
	];

	return (
		<StyledFaq>
			<h2>
				Any Questions <span>FAQ</span>
			</h2>

			{questions.map((question) => (
				<Question question={question} />
			))}
		</StyledFaq>
	);
};

const StyledFaq = styled(StyledAbout)`
	display: block;

	span {
		display: block;
	}

	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
`;

export default FaqSection;
