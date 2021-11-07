import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { pageAnimation } from "../animation";

const OurWork = () => {
	return (
		<StyledWork
			exit="exit"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			style={{ background: "#fff" }}
		>
			<StyledMovie>
				<h2>The Athlete</h2>
				<div className="line"></div>
				<Link to="/work/the-athelete">
					<img src={athlete} alt="athlete" />
				</Link>
			</StyledMovie>

			<StyledMovie>
				<h2>The Racer</h2>
				<div className="line"></div>
				<Link to="/work/the-racer">
					<img src={theracer} alt="the-racer" />
				</Link>
			</StyledMovie>

			<StyledMovie>
				<h2>Good Times</h2>
				<div className="line"></div>
				<Link to="/work/good-times">
					<img src={goodtimes} alt="good-times" />
				</Link>
			</StyledMovie>
		</StyledWork>
	);
};

const StyledWork = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;

	h2 {
		padding: 1rem 0rem;
	}
`;

const StyledMovie = styled.div`
	padding-bottom: 10rem;

	.line {
		height: 0.5rem;
		background: #cccccc;
		margin-bottom: 3rem;
	}

	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

export default OurWork;
