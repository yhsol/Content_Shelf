import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div``;

const TvPresenter = ({ popular, airingToday, topRated, error, loading }) =>
	loading ? (
		<Loader color="#757575">Loading For Tv Data...</Loader>
	) : (
		<Container>
			{popular &&
			popular.length > 0 && (
				<Section title="Popular">{popular.map((tv) => <span key={tv.id}>{tv.name}</span>)}</Section>
			)}

			{airingToday &&
			airingToday.length > 0 && (
				<Section title="Airing Today">{airingToday.map((tv) => <span key={tv.id}>{tv.name}</span>)}</Section>
			)}

			{topRated &&
			topRated.length > 0 && (
				<Section title="Top Rated">{topRated.map((tv) => <span key={tv.id}>{tv.name}</span>)}</Section>
			)}
			{error && <Message color="#757575" text={error} />}
		</Container>
	);

TvPresenter.propTypes = {
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	topRated: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TvPresenter;
