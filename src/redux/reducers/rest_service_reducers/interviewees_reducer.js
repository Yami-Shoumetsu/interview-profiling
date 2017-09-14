import {REQUEST_INTERVIEWEES, REQUEST_INTERVIEWEES_SUCCESS, REQUEST_INTERVIEWEES_FAILED} from '../../action_types';

const defaultState = {isFetching: true, errorStatus: null, items: {}};

export function interviewees(state= defaultState, action) {
	switch (action.type) {
		case REQUEST_INTERVIEWEES:
			return {...state, isFetching: action.isFetching, errorStatus: action.errorStatus};
		case REQUEST_INTERVIEWEES_SUCCESS:
			return {...state, isFetching: action.isFetching, items: (action.payload == null ? [] : action.payload), errorStatus: action.errorStatus};
		case REQUEST_INTERVIEWEES_FAILED:
			return {...state, isFetching: action.isFetching, items: [], errorStatus: action.errorStatus};
		default:
			return state;
	}
};
