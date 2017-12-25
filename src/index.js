import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import {HashRouter, BrowserRouter, Route} from 'react-router-dom';
import App from './containers/App';

ReactDOM.render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
), document.getElementById('app-root'));

