import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

import { MovieState } from "../movieState";
import Award from "../components/Award";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
	const history = useHistory();
	const url = history.location.pathname;
	const [movies, setMovies] = useState(MovieState);
	const [movie, setMovie] = useState(null);

	useEffect(() => {
		const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
		setMovie(currentMovie[0]);
		console.log(movie);
	}, [movies, url]);

	return (
		<>
			{movie && (
				<StyledDetails
					variants={pageAnimation}
					initial="hidden"
					animate="show"
					exit="exit"
				>
					<StyledHeadLine>
						<h2> {movie.title} </h2>
						<p> {movie.description} </p>
						<img src={movie.mainImg} alt="movie" />
					</StyledHeadLine>

					<StyledAwards>
						{movie.awards.map((award) => (
							<Award
								title={award.title}
								description={award.description}
								key={award.title}
							/>
						))}
					</StyledAwards>

					<StyledImageDisplay>
						<img src={movie.secondaryImg} alt="movie" />
					</StyledImageDisplay>
				</StyledDetails>
			)}
		</>
	);
};

const StyledDetails = styled(motion.div)`
	color: white;
`;

const StyledHeadLine = styled.div`
	min-height: 90vh;
	padding-top: 25vh;
	position: relative;

	h2,
	p {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
	}
	p {
		margin-top: 3rem;
	}
	img {
		width: 100%;
		height: 70vh;
		object-fit: cover;
	}
`;

const StyledAwards = styled.div`
	min-height: 60vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: 5rem 10rem;
`;

const StyledImageDisplay = styled.div`
	min-height: 50vh;
	img {
		width: 100%;
		height: 100vh;
		object-fit: cover;
	}
`;

export default MovieDetail;
