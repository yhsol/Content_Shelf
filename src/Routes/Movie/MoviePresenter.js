import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoviePresenter = (popular, nowPlaying, upcoming, error, loading) => {
	return <div />;
};

MoviePresenter.propTypes = {
	popular: PropTypes.array,
	nowPlaying: PropTypes.array,
	upcoming: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default MoviePresenter;
