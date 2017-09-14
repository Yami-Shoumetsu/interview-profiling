import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers';

/**
 * Middlewares
 */
import restMiddleware from './middlewares/rest_service_middleware'

export default function configureStore(initialState) {
	return createStore(combineReducers, initialState, applyMiddleware(restMiddleware));
};
