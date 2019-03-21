import React from 'react';
import TvPresenter from './TvPresenter';

export default class extends React.Component {
	state = {
		popular: null,
		airingToday: null,
		topRated: null,
		error: null,
		loading: true
	};

	render() {
		const { popular, airingToday, topRated, error, loading } = this.state;
		return (
			<TvPresenter
				popular={popular}
				airingToday={airingToday}
				topRated={topRated}
				error={error}
				loading={loading}
			/>
		);
	}
}
