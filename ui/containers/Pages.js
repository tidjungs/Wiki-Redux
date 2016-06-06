import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Pages from '../components/Pages'

export default class PagesContainer extends Component {
  constructor() {
    super()
    this.state = {
      pages: []
    }
  }
  onReloadPages = () => {
    fetch('/api/v1/pages')
      .then((response) => response.json())
      .then((pages) => this.setState({ pages }))
  }
  componentDidMount() {
    this.onReloadPages()
  }
  render() {
    return <Pages pages={this.state.pages} onReloadPages={this.onReloadPages} />
  }
}
