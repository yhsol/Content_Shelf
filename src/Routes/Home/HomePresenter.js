import React from 'react';
import MovieContainer from '../Movie/MovieContainer';
import TvContainer from '../Tv/TvContainer';
import styled from 'styled-components';

const VideoSection = styled.div`
	width: 100%;
	height: 200px;
	background-color: rgba(255, 255, 255, 0.2);
	margin-bottom: 10px;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	margin-top: 50px;
`;

const HomePresenter = () => {
	return (
		<div>
			<VideoSection>videos banner</VideoSection>
			<Title>Movie</Title>
			<MovieContainer />
			<Title>Tv</Title>
			<TvContainer />
		</div>
	);
};

export default HomePresenter;
