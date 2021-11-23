import React from "react";
import styled from "styled-components";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

import Card from "./Card";
import {
	StyledAbout,
	StyledDescription,
	StyledImage,
	StyledHide,
} from "../styles";
import { useScroll } from "../hooks/useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
	const [element, controls] = useScroll();
	return (
		<StyledHide>
			<StyledServices
				ref={element}
				variants={scrollReveal}
				initial="hidden"
				animate={controls}
			>
				<StyledDescription>
					<h2>
						High <span>quality</span> services.
					</h2>

					<StyledCards>
						<Card icon={clock} description="Efficient" />
						<Card icon={teamwork} description="Teamwork" />
						<Card icon={diaphragm} description="Diaphragm" />
						<Card icon={money} description="Affordable" />
					</StyledCards>
				</StyledDescription>

				<StyledImage>
					<img src={home2} alt="camera" />
				</StyledImage>
			</StyledServices>
		</StyledHide>
	);
};

const StyledServices = styled(StyledAbout)`
	h2 {
		padding-bottom: 5rem;
	}
`;

const StyledCards = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export default ServicesSection;
