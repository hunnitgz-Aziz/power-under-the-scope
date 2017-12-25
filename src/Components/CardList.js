import React, {Component} from 'react';
import classNames from 'classnames';
import Card from './Card';
import CardAPI from '../api';


export default class Cardlist extends Component {
	render() {
		return (
			<div className="card-container">
				{CardAPI.all().map((c) => {
					return <Card card={c} key={c.id}/>
				})}
			</div>
		)
	}
}

