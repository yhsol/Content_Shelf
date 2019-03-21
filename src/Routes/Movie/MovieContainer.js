import React from 'react';
import MoviePresenter from './MoviePresenter';

export default class extends React.Component {
	state = {
		poplular: null,
		nowPlaying: null,
		upcoming: null,
		error: null,
		loading: true
	};

	render() {
		const { poplular, nowPlaying, upcoming, error, loading } = this.state;
		return (
			<MoviePresenter
				poplular={poplular}
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				error={error}
				loading={loading}
			/>
		);
	}
}
