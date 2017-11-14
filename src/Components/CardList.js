import React, {Component} from 'react';
import classNames from 'classnames';
import Card from './Card';

const cards = [
	{
		id: 1,
		name: 'Colin',
		link: 'http://hoverstat.es',
		image: 'http://placekitten.com/g/64/64'
	},
	{
		id: 2,
		name: 'Carlson',
		link: 'http://hoverstat.es',
		image: 'http://placekitten.com/g/64/64'
	},
	{
		id: 3,
		name: 'Oskar',
		link: 'http://hoverstat.es',
		image: 'http://placekitten.com/g/64/64'
	},
	{
		id: 4,
		name: 'Rughda',
		link: 'http://hoverstat.es',
		image: 'http://placekitten.com/g/64/64'
	},
	{
		id: 5,
		name: 'Zahir',
		link: 'http://hoverstat.es',
		image: 'http://placekitten.com/g/64/64'
	},
]

export default class Cardlist extends Component {
	render() {
		return (
			<div className="card-container">
				{cards.map((card) => {
					return <Card card={card} key={card.id}/>
				})}
			</div>
		)
	}
}

