import React, { Component } from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../Api';

export default class extends Component {
	constructor(props) {
		super(props);
		const { location: { pathname } } = props;
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes('/movie/')
		};
	}

	async componentDidMount() {
		const { match: { params: { id } }, history: { push } } = this.props;
		// 여기서 props 를 전달받을 수 있는 것은 Header 에서 withRouter 로 감싸주었고,
		// react Router 는 기본적으로 각 정보들을 Route 로 주기 때문이다.
		// id 는 숫자값이 들어가므로 parseInt 를 통해 number 값으로 설정한다.
		// console.log(typeof parseInt(id));
		// console.log(this.props);
		const parsedId = parseInt(id);
		// history 의 push 를 이용해서 parsedId 값이 NaN 일때 홈으로 이동하게 한다.
		if (isNaN(parsedId)) {
			return push('/');
		}
		// 검색하는 대상이 movie 인지 tv 인지 판별할 수 있는 로직.
		// 아래와 같이 const 에 담아도 되지만 그러면 이 메서드안에 속하게 된다. this.isMovie 와 같이 써서 class 전체에서 사용 가능하도록 만들 수 있다.
		// const { location: { pathname } } = this.props;
		// const isMovie = pathname.includes("/movie/");
		// this.isMovie = pathname.includes('/movie/');
		// constructor 를 써서 새 클래스를 생성하고, 거기에 props 로 부터 가져온 pathname 을 정의하고,
		// state 에 isMovie 값을 쓴다.
		// 그 과정을 거쳐 아래와 같이 쓸 수 있다.
		const { isMovie } = this.state;
		let result = null;
		try {
			if(isMovie) {
				// 구문 전체를 괄호로 감싸주면 앞에 const 를 붙인 것과 같이 동작한다.
				// result 를 let 으로 선언했기 때문에 현재 const 를 쓸 수 없어서 data 에서 result 를 꺼낼 다른 방법이 필요할 때
				// 아래와 같이 쓸 수 있겠다.
				// result 는 api 에서 새로운 정보를 가져왔을 때 덮어 쓸 수 있기위해 let 으로 선언 한다.
				({ data: result} = await moviesApi.movieDetail(parsedId));
			} else {
				({ data: result} = await tvApi.tvDetail(parsedId));
			}
		} catch {
			this.setState({
				error: "Can't find info"
			})
		} finally {
			this.setState({
				loading: false, result
			})
		}
	}

	render() {
		console.log(this.state);
		const { result, error, loading } = this.state;
		return <DetailPresenter result={result} error={error} loading={loading} />;
	}
}
