import React from 'react';
import TvPresenter from './TvPresenter';
import { tvApi } from '../../Api';

export default class extends React.Component {
	state = {
		popular: null,
		airingToday: null,
		topRated: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			const { data: { results: popular } } = await tvApi.popular();
			const { data: { results: airingToday } } = await tvApi.airingToday();
			const { data: { results: topRated } } = await tvApi.topRated();
			// console.log(popular);
			// console.log(airingToday);
			// console.log(topRated);
			this.setState({
				popular: popular,
				airingToday: airingToday,
				topRated: topRated
			});
		} catch (error) {
			this.setState({
				error: "CAN'T FIND TV INFOMATION"
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const { popular, airingToday, topRated, error, loading } = this.state;
		// console.log(this.state);
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
