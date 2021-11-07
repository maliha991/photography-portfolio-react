import React from "react";
import { motion } from "framer-motion";

import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import { pageAnimation } from "../animation";

const AboutUs = () => {
	return (
		<motion.div
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};

export default AboutUs;
