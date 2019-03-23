import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input``;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, error, loading, handleSubmit }) => (
	<Container>
		<Form onsubmit={handleSubmit}>
			<Input value={searchTerm} placeholder="Search..." />
		</Form>
	</Container>
);

SearchPresenter.propTypes = {
	movieResults: PropTypes.array,
	tvResults: PropTypes.array,
	searchTerm: PropTypes.string,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;
