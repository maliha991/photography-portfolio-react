import React from "react";
import styled from "styled-components";

const Question = ({ question }) => {
	return (
		<StyledQuestion>
			<h4> {question} </h4>
			<div className="answer">
				<p>Lorem ipsum dolor sit amet.</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
					modi!
				</p>
			</div>

			<div className="faq-line"></div>
		</StyledQuestion>
	);
};

const StyledQuestion = styled.div`
	padding: 3rem 0rem;
	cursor: pointer;

	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}

	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default Question;
