import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

import Question from "./Question";
import { StyledAbout, StyledHide } from "../styles";
import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
	const [element, controls] = useScroll();

	const questions = [
		"How Do I Start?",
		"What Products Do You Offer?",
		"Different Payment Methods",
		"Daily Schedule",
	];

	return (
		<StyledHide>
			<AnimateSharedLayout>
				<StyledFaq
					ref={element}
					variants={scrollReveal}
					initial="hidden"
					animate={controls}
				>
					<h2>
						Any Questions <span>FAQ</span>
					</h2>

					{questions.map((question) => (
						<Question question={question} />
					))}
				</StyledFaq>
			</AnimateSharedLayout>
		</StyledHide>
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
