import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';

export default class Main extends Component {
	render() {
		return (
			<main className="main">
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
				</Switch>
			</main>
		)
	}
}