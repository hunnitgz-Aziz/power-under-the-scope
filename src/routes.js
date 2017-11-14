import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './containers/Home';
import App from './containers/App';
import classNames from 'classnames';

export default (
	<BrowserRouter>
		<div className="main-wrapper">
			<Route path="/" component={App}/>
			<Route path="/" component={Home}/>
		</div>
	</BrowserRouter>
);