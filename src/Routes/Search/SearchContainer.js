import React, { Component } from 'react';
import SearchPresenter from './SearchPresenter';
import { moviesApi, tvApi } from '../../Api';

export default class extends Component {
	state = {
		movieResults: null,
		tvResults: null,
		searchTerm: "",
		error: null,
		loading: false
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { searchTerm } = this.state;
		if(searchTerm !== "") {
			this.searchByTerm();
		}
	}

	handleInsert = (event) => {
		const { target: { value }} = event;
		this.setState({
			searchTerm: value
		})
	};

	searchByTerm = async () => {
		const { searchTerm } = this.state;
		this.setState({ loading: true });
		try {
			// results 값의 이름을 각각 movieResults, tvResults 로 재설정.
			const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
			const {data: {results: tvResults}} = await tvApi.search(searchTerm);
			this.setState({
				movieResults: movieResults,
				tvResults: tvResults
			})
		} catch {
			this.setState({ error: "CAN'T FIND SEARCH INFOMATION" })
		} finally {
			this.setState({	loading: false })
		}
	}

	render() {
		const { movieResults, tvResults, searchTerm, error, loading } = this.state;
		const { handleSubmit, handleInsert } = this;
		console.log(this.state);
		// console.log(this);
		return <SearchPresenter movieResults={movieResults} tvResults={tvResults} searchTerm={searchTerm} error={error} loading={loading} handleSubmit={handleSubmit} handleInsert={handleInsert} />
	}
}
