import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../routes.js'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'

ReactDOM.render(<AppContainer>
		<Root />
		</AppContainer>
		, document.getElementById('app'))
if(module.hot) {
	module.hot.accept('./containers/Root', () => {
		const NextRootApp = require('./containers/Root').default
		ReactDOM.render(<AppContainer>
				<NextRootApp />
				</AppContainer>
				, document.getElementById('app'))
	})
}
