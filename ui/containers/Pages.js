import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import Pages from '../components/Pages'
import { loadPages } from '../actions/page'

class PagesContainer extends Component {
  onReloadPages = () => {
    this.props.onLoadPages()
    // fetch('/api/v1/pages')
    //   .then((response) => response.json())
    //   .then((pages) => this.setState({ pages }))
  }
  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages
  }
  componentDidMount() {
    this.onReloadPages()
  }
  render() {
    console.log(this.props.pages)
    return <Pages pages={this.props.pages} onReloadPages={this.onReloadPages} />
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

export default connect(
  (state) => ({
    pages: state.pages
  }),
  { onLoadPages: loadPages }
)(PagesContainer)