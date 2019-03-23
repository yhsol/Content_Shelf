import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div``;

const MoviePresenter = ({ popular, nowPlaying, upcoming, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{popular &&
			popular.length > 0 && (
				<Section title="Popular">{popular.map((movie) => <span key={movie.id}>{movie.title}</span>)}</Section>
			)}
			{nowPlaying &&
			nowPlaying.length > 0 && (
				<Section title="Now Playing">
					{nowPlaying.map((movie) => <span key={movie.id}>{movie.title}</span>)}
				</Section>
			)}
			{upcoming &&
			upcoming.length > 0 && (
				<Section title="Upcoming">{upcoming.map((movie) => <span key={movie.id}>{movie.title}</span>)}</Section>
			)}
			{error && <Message color="#757575" text={error} />}
		</Container>
	);

MoviePresenter.propTypes = {
	popular: PropTypes.array,
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
