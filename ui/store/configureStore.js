import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import rootReducer from '../reducers'

export default () => {
	// const middlewares = [thunk, apiMiddleware]
	const store = createStore(rootReducer)
	// if(module.hot) {
	// 	System.import('../reducers').then(nextRootReducer =>
	// 		store.replaceReducers(nextRootReducer.default)
	// 	)
	// }

	return store
}