import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import CardList from './CardList';
import CardAPI from '../api';
import { Link } from 'react-router-dom';

export default class Card extends Component { 
	render() {
		return (
			<div className="card">
				<Link key={this.props.card.id} to={`/specimens/${this.props.card.id}`} className="card-link">
					<img src={this.props.card.image} />
					<p>{this.props.card.name}</p>
				</Link>
			</div>
		)
	}
}
