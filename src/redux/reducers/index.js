import { combineReducers } from 'redux';
import * as restServiceReducers from './rest_service_reducers'; //TODO

export default combineReducers({
	...restServiceReducers
})
