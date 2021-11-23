import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

import { pageAnimation, titleAnimation } from "../animation";
import { StyledHide } from "../styles";

const ContactUs = () => {
	return (
		<StyledContact
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
			className="contact"
			style={{ background: "#fff" }}
		>
			<StyledHide>
				<Title variants={titleAnimation}>
					<motion.h2>Contact Us</motion.h2>
				</Title>
			</StyledHide>

			<StyledHide>
				<Social variants={titleAnimation}>
					<Circle />
					<Link
						to={{ pathname: "https://www.linkedin.com/company/linkedin" }}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<StyledH2>LinkedIn</StyledH2>
					</Link>
				</Social>
			</StyledHide>

			<StyledHide>
				<Social variants={titleAnimation}>
					<Circle />
					<Link
						to={{ pathname: "https://www.linkedin.com/company/linkedin" }}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<StyledH2>Github</StyledH2>
					</Link>
				</Social>
			</StyledHide>

			<StyledHide>
				<Social variants={titleAnimation}>
					<Circle />
					<Link
						to={{ pathname: "https://www.linkedin.com/company/linkedin" }}
						target="_blank"
						style={{ textDecoration: "none" }}
					>
						<StyledH2>Twitter</StyledH2>
					</Link>
				</Social>
			</StyledHide>
		</StyledContact>
	);
};

const StyledContact = styled(motion.div)`
	min-height: 90vh;
	padding: 5rem 10rem;
`;

const Title = styled(motion.div)`
	margin-bottom: 4rem;
	color: black;

	h2 {
		font-weight: normal;
		color: #353535;
	}
`;

const StyledH2 = styled.h2`
	font-weight: 300;
	font-size: 3rem;
	color: #353535;
	margin-left: 1rem;
`;

const Circle = styled(motion.div)`
	background: #353535;
	height: 2rem;
	width: 2rem;
	border-radius: 50%;
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
`;

export default ContactUs;
