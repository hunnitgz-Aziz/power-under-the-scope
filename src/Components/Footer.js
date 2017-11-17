import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<a href="/about">Learn more about this project.</a>
			</footer>
		)
	}
}