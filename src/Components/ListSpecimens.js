import React, { Component } from 'react';
import CardAPI from '../api';
import { Link } from 'react-router-dom';

const ListSpecimens = () => (
	<div>
		<ul>
			{
				CardAPI.all().map(c =>(
					<li key={c.id}>
						<Link to={`/specimens/${c.username}`}>{c.name}</Link>
					</li>
				))
			}
		</ul>
	</div>
)

export default ListSpecimens;