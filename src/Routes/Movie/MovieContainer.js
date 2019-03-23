import React from 'react';
import MoviePresenter from './MoviePresenter';
import { moviesApi } from '../../Api';

export default class extends React.Component {
	state = {
		popular: null,
		nowPlaying: null,
		upcoming: null,
		error: null,
		loading: true
	};

	async componentDidMount() {
		try {
			// 객체 비구조화(object destructuring) -> data 에서 results 를 꺼내고, results 이름을 popular 로 변경.
			const { data: { results: popular } } = await moviesApi.popular();
			const { data: { results: nowPlaying } } = await moviesApi.nowPlaying();
			const { data: { results: upcoming } } = await moviesApi.upcoming();
			// console.log(popular);
			// console.log(nowPlaying);
			// console.log(upcoming);
			this.setState({
				popular: popular,
				nowPlaying: nowPlaying,
				upcoming: upcoming
			});
		} catch {
			this.setState({
				error: "CAN'T FIND MOVIE INFOMATION"
			});
		} finally {
			this.setState({
				loading: false
			});
		}
	}

	render() {
		const { popular, nowPlaying, upcoming, error, loading } = this.state;
		// console.log(this.state);
		return (
			<MoviePresenter
				popular={popular}
				nowPlaying={nowPlaying}
				upcoming={upcoming}
				error={error}
				loading={loading}
			/>
		);
	}
}
