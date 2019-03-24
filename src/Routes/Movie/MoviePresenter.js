import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';
import Poster from '../../Components/Poster';

const Container = styled.div``;

const MoviePresenter = ({ popular, topRated, upcoming, error, loading }) =>
	loading ? (
		<Loader color="#757575">Loading For Movie Data...</Loader>
	) : (
		<Container>
			{popular &&
			popular.length > 0 && (
				<Section title="Popular">
					{popular.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							year={movie.release_date}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{topRated &&
			topRated.length > 0 && (
				<Section title="Top Rated">
					{topRated.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							year={movie.release_date}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{upcoming &&
			upcoming.length > 0 && (
				<Section title="Upcoming">
					{upcoming.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							imageUrl={movie.poster_path}
							title={movie.original_title}
							rating={movie.vote_average}
							year={movie.release_date}
							isMovie={true}
						/>
					))}
				</Section>
			)}
			{error && <Message color="#757575" text={error} />}
		</Container>
	);

MoviePresenter.propTypes = {
	popular: PropTypes.array,
	topRated: PropTypes.array,
	upcoming: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
