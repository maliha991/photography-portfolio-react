import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import home1 from "../img/home1.png";
import {
	StyledAbout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
	return (
		<StyledAbout>
			<StyledDescription>
				<motion.div className="title">
					<StyledHide>
						<motion.h2 variants={titleAnimation}>We work to make</motion.h2>
					</StyledHide>

					<StyledHide>
						<motion.h2 variants={titleAnimation}>
							your <span>dreams</span>
						</motion.h2>
					</StyledHide>

					<StyledHide>
						<motion.h2 variants={titleAnimation}>come true.</motion.h2>
					</StyledHide>
				</motion.div>

				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</motion.p>

				<Link to="/contact">
					<motion.button variants={fade}>Contact Us</motion.button>
				</Link>
			</StyledDescription>

			<StyledImage>
				<motion.img variants={photoAnimation} src={home1} alt="Photographer" />
			</StyledImage>
			<Wave />
		</StyledAbout>
	);
};

export default AboutSection;
