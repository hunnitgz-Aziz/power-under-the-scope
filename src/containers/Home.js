import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import CardList from '../Components/CardList';

export default class Home extends Component {
	static propTypes = {};

	render() {
		// console.log(this.props.cards);
		return (
			<div className="home-body">
				<div className="home-description">
					<h4>An examination of human vitality. These subjects were asked about their hair and how it plays into their self-esteem.</h4>
				</div>
				<CardList />
			</div>
		)
	}
}


