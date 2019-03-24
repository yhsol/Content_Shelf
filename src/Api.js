import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: 'fb2398f0003757361045d72497fe13c3',
		language: 'en-US'
	}
});

// get 메서드를 이용해서 각각의 data 경로로 필요한 api 정보를 가져온다.
export const moviesApi = {
	popular: () => api.get('movie/popular'),
	topRated: () => api.get('movie/top_rated'),
	upcoming: () => api.get('movie/upcoming'),
	movieDetail: (id) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'videos similar'
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
	tvDetail: (id) =>
		api.get(`tv/${id}`, {
			params: {
				append_to_response: 'videos similar'
			}
		}),
	search: (term) =>
		api.get('search/tv', {
			params: {
				query: encodeURIComponent(term)
			}
		})
};
