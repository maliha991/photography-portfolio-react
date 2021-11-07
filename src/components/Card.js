import React from "react";
import styled from "styled-components";

const Card = ({ icon, description }) => {
	return (
		<StyledCard>
			<div className="icon">
				<img src={icon} alt="icon" />
				<h3> {description} </h3>
			</div>

			<p>Lorem ipsum dolor sit amet.</p>
		</StyledCard>
	);
};

const StyledCard = styled.div`
	p {
		width: 70%;
		padding: 2rem 0rem 4rem 0rem;
	}
	flex-basis: 20rem;

	.icon {
		display: flex;
		align-items: center;
	}
	h3 {
		margin-left: 1rem;
		background: white;
		color: black;
		padding: 1rem;
	}
`;

export default Card;
