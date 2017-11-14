import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CardList from './CardList';

export default class Card extends Component { 
	render() {
		return (
			<div className="card">
				<a className="card-link" href={this.props.card.link}>
					<img src={this.props.card.image} />
					<p>{this.props.card.name}</p>
				</a>
			</div>
		)
	}
}
