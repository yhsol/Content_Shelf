# Content_Shelf

## Git refs error
- git pull origin master 에 --allow-unrelated-histories 를 붙여서 진행한다.

## Building Process
- make Components, Routes directory.
- in Routes directory have Home, Movie, Tv, Search, Deatil components.
- add react-router-dom
- Router 를 가져와서 감싸고, 각각의 라우트와 라우트의 경로 및 보여줄 컴포넌트를 설정한다.
- Header 설정 및 스타일링


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
- Movie
- Tv
- Search
- Detail

