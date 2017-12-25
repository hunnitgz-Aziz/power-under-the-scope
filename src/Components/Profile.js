import React, {Component} from 'react';
import classNames from 'classnames';
import CardAPI from '../api';
import { Link } from 'react-router-dom';

const Profile = (props) => {
	const card = CardAPI.get(
		parseInt(props.match.params.id, 10)
	)

	if (!card) {
		return <div>Sorry, but the person was not found</div>
	}

	return (
		<div className="profile">
			<div className="profile-hero">
				<div className="profile-info-body">
					<div className="character-block">
						<h6 className="title">fictional character</h6>
						<h5 className="character-name">{card.fictional_character}</h5>
					</div>
					<div className="primary-info-block">
						<h1 className="first-name">{card.name}</h1>
						<h1 className="last-name">{card.l_name}</h1>
						<h4>{card.occupation}</h4>
					</div>
				</div>
				<div className="profile-console-body">
					<div className="age-block"><h6>Age: {card.age}</h6></div>
					<div className="gender-block"><h6>Gender: {card.gender}</h6></div>
					<div className="hair-strand-block"><h6>View hair strand</h6></div>
				</div>	
			</div>
			
			<div className="pager-body">
				<Link to={card.prevPage}>PrevPage</Link>
				<Link to="/">Return to Home</Link>
				<Link to={card.nextPage}>NextPage</Link>
			</div>
		</div>

		
	)
	console.log(props.location.pathname)
}

export default Profile;