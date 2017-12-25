import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListSpecimens from './ListSpecimens';
import Profile from './Profile';

const Specimens = () => (
	<Switch>
		<Route exact path="/specimens" component={ListSpecimens} />
		<Route path="/specimens/:id" component={Profile} />
	</Switch>
)

export default Specimens;
	