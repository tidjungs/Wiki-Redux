import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'

export default () => {
	const middlewares = [thunk, apiMiddleware]
	if(process.env.NODE_ENV !== 'production')
		middlewares.push(createLogger())
	const store = createStore(rootReducer, applyMiddleware(...middlewares))
	// if(module.hot) {
	// 	System.import('../reducers').then(nextRootReducer =>
	// 		store.replaceReducers(nextRootReducer.default)
	// 	)
	// }

	return store
}

