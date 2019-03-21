# Content_Shelf
with React JS

## Git refs error
- git pull origin master 에 --allow-unrelated-histories 를 붙여서 진행한다.

## Building Process
- make Components, Routes directory.
- in Routes directory have Home, Movie, Tv, Search, Deatil components.
- add react-router-dom
  - Router 를 가져와서 감싸고, 각각의 라우트와 라우트의 경로 및 보여줄 컴포넌트를 설정한다.
- Header 설정 및 스타일링
  - styled-components
  - styled-reset for GlobalStyles
  - withRouter 를 이용해서 Route 의 props 를 활용, 위치를 추적해서 props 에 따라 헤더에 변경사항 적용.
- API
  - The Movie Database API 사용.
  - axios
    - api 기본 정버(baseURL, params) 등을 먼저 설정하고, 세부 내용은 api.get()을 써서 가져온다.
    - api 기본 설정 (baseURL, params)
    - movie, tv 각각의 세부 api 설정
    - detail
	  - id 를 props 로 넣고 불러오는 정보를 `` 을 써서 props를 적용한다. 
	  - append_to_response 값으로 videos 와 similar 설정한다.
	- search
	  - term 을 props 로 넣고 params 를 새로 만들어 term 을 넣고 encode 한다.
- Container - Presenter Pattern
  - Container - data (logic, api...)
  - Presenter - show!
  - index - export Container!
- Container
  - Movie, Tv Container
    - state 에 필요한 api 및 error, loading 값을 설정한다.
    - componentDidMount 메서드에서 각각 필요한 api 를 정의하고, 그 값들을 this.setState 를 통해 state 값에 넣는다.
    - 해당 컴포넌트의 프레젠터를 return 하며 props들을 넣는다.
  - Search Container
    - movieResults, tvRestuls 값을 각각 state 에 설정한다.
    - searchTerm 역시 설정한다. (search API 에 term 이 필요하기 때문이다.)
    - handleSubmit 메서드를 설정하고, 해당 메서드가 실행될 때, searchByTerm 메서드를 실행하게 한다.
    - searchByTerm 에서 api 를 정의하고 state 에 값을 넣는다.
    - 프레젠터로 state 값과 handleSubmit 메서드를 넣는다.

## Composition in Router
- 하나의 라우터에 추가적으로 다른 기능 혹은 컴포넌트가 필요할 때 사용할 수 있다.
```
<Router>
	<>
		<Route path="/tv component={Tv} />
		<Route path="/tv/popular render={() => <h1>Popular</h1>}>
	</>
</Router>
```

## Screens (Routes)
- Content_Shelf (have Movie and Tv Container)
- Movie
- Tv
- Search
- Detail

## Api verbs
- Movie
  - Popular
  - Now Playing
  - Upcoming
  - Search
  - Detail(add videos, similar)

- Tv
  - Popular
  - Top Rated
  - Airing Today
  - Search
  - Detail(add vides, similar)