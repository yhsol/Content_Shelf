import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TvPresenter = (popular, airingToday, topRated, error, loading) => {
	return <div />;
};

TvPresenter.propTypes = {
	popular: PropTypes.array,
	airingToday: PropTypes.array,
	topRated: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default TvPresenter;
