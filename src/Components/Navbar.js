import React, {Component} from 'react';
import classNames from 'classnames';
import brand from '../images/logo.svg';

export class Navbar extends React.Component {
	render() {
		const _className = classNames("navbar", this.props.className);

		return (
			<nav className={_className}>
				<a className="brand-logo" href="/"><img src={brand}/></a>
			</nav>
		)
	}
}

export default Navbar;

