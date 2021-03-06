import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Routes/Home';
import Tv from '../Routes/Tv';
import Movie from '../Routes/Movie';
import Search from '../Routes/Search';
import Detail from '../Routes/Detail';
import Header from './Header';

export default () => (
	<Router>
		<React.Fragment>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/movie" exact component={Movie} />
				<Route path="/tv" exact component={Tv} />
				<Route path="/search" component={Search} />
				<Route path="/movie/:id" component={Detail} />
				<Route path="/tv/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</React.Fragment>
	</Router>
);
