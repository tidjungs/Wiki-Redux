import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
	render() {
		return(
			<nav>
				<Link to={{ pathname: '/' }}> Wiki </Link>
				<Link to={{ pathname: '/pages' }}> pages </Link>
			</nav>
		)
	}
}