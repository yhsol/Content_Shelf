import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Container = styled.div``;

const Form = styled.form`
	margin: 10px 0px 20px;
	width: 100%;
`;

const Input = styled.input`
	all: unset;
	font-size: 24px;
	padding: 2px 8px;
	width: 90%;
	border-bottom: 1.9px solid #757575;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit, handleInsert }) => (
	<Container>
		<Form onSubmit={handleSubmit}>
			<Input value={searchTerm} onChange={handleInsert} placeholder="Search..." />
		</Form>
		{loading ? (
			<Loader color="#757575">Loading For Search Results...</Loader>
		) : (
			<React.Fragment>
				{movieResults &&
				movieResults.length > 0 && (
					<Section title="Movie">
						{movieResults.map((movieResult) => <span key={movieResult.id}>{movieResult.title}</span>)}
					</Section>
				)}
				{tvResults &&
				tvResults.length > 0 && (
					<Section title="Tv">
						{tvResults.map((tvResult) => <span key={tvResult.id}>{tvResult.name}</span>)}
					</Section>
				)}
				{error && <Message color="#757575" text={error} />}
				{movieResults &&
				tvResults &&
				movieResults.length === 0 &&
				tvResults.length === 0 && <Message color="#757575" text="Nothing Found" />}
			</React.Fragment>
		)}
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleInsert: PropTypes.func.isRequired
};

export default SearchPresenter;
