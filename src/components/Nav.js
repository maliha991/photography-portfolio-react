import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
	const { pathname } = useLocation();

	return (
		<StyledNav>
			<h1>
				<Link id="logo" to="/">
					Capture
				</Link>
			</h1>

			<ul>
				<li>
					<Link to="/">1. About Us</Link>
					<Line
						transition={{ duration: 0.75 }}
						animate={{ width: pathname === "/" ? "50%" : "0%" }}
						initial={{ width: "0%" }}
					/>
				</li>
				<li>
					<Link to="/work">2. Our Work</Link>
					<Line
						transition={{ duration: 0.75 }}
						animate={{ width: pathname === "/work" ? "50%" : "0%" }}
						initial={{ width: "0%" }}
					/>
				</li>
				<li>
					<Link to="/contact">3. Contact Us</Link>
					<Line
						transition={{ duration: 0.75 }}
						animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
						initial={{ width: "0%" }}
					/>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	background: #282828;
	padding: 1rem 10rem;
	position: sticky;
	top: 0;
	z-index: 5;

	a {
		text-decoration: none;
		color: white;
	}

	#logo {
		font-size: 1.5rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}

	ul {
		display: flex;
	}

	li {
		list-style: none;
		padding-left: 10rem;
		position: relative;
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 60%;
`;

export default Nav;
