import React from 'react';
import MovieContainer from '../Movie/MovieContainer';
import TvContainer from '../Tv/TvContainer';

const HomePresenter = () => {
	return (
		<div>
			<div>videos banner</div>
			<MovieContainer />
			<TvContainer />
		</div>
	);
};

export default HomePresenter;
