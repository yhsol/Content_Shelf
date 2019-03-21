import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'fb2398f0003757361045d72497fe13c3',
		language: 'en-US'
	}
});

export const moviesApi = {
	popular: () => api.get('movie/popular'),
	nowPlaying: () => api.get('movie/now_playing'),
	upcoming: () => api.get('movie/upcoming'),
	movieDetail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos, silmilar'
			}
		}),
	search: (term) =>
		api.get('search/movie', {
			params: {
				query: encodeURIComponent(term)
			}
		})
};

export const tvApi = {
	popular: () => api.get('tv/popular'),
	airingToday: () => api.get('tv/airing_today'),
	topRated: () => api.get('tv/top_rated'),
	showDetail: (id) =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: 'videos, silmilar'
			}
		}),
	search: (term) =>
		api.get('search/tv', {
			params: {
				query: encodeURIComponent(term)
			}
		})
};
