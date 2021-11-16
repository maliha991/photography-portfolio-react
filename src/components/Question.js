import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Question = ({ question }) => {
	const [faqToggle, setFaqToggle] = useState(false);
	return (
		<StyledQuestion
			layout
			onClick={() => {
				setFaqToggle(!faqToggle);
			}}
		>
			<motion.h4 layout> {question} </motion.h4>

			{faqToggle && (
				<motion.div className="answer">
					<p>Lorem ipsum dolor sit amet.</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
						modi!
					</p>
				</motion.div>
			)}
			<div className="faq-line"></div>
		</StyledQuestion>
	);
};

const StyledQuestion = styled(motion.div)`
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
