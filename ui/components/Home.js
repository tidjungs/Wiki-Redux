import React, { Component } from 'react'
export default class Home extends Component {

	render() {
		return <h1>Hello {this.props.message}</h1>
	}
}