import {REQUEST_EXPERTISES, REQUEST_EXPERTISES_SUCCESS, REQUEST_EXPERTISES_FAILED} from '../../action_types';

const defaultState = {isFetching: true, errorStatus: null, items: {}};

export function expertises(state= defaultState, action) {
	switch (action.type) {
		case REQUEST_EXPERTISES:
			return {...state, isFetching: action.isFetching, errorStatus: action.errorStatus};
		case REQUEST_EXPERTISES_SUCCESS:
			return {...state, isFetching: action.isFetching, items: (action.payload == null ? [] : action.payload), errorStatus: action.errorStatus};
		case REQUEST_EXPERTISES_FAILED:
			return {...state, isFetching: action.isFetching, items: [], errorStatus: action.errorStatus};
		default:
			return state;
	}
};
