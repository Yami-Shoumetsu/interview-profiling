import {REQUEST_INTERVIEWEES, REQUEST_INTERVIEWEES_SUCCESS, REQUEST_INTERVIEWEES_FAILED} from '../../action_types';

export function fetchInterviewees() {
	return {
		types : [
			REQUEST_INTERVIEWEES,
			REQUEST_INTERVIEWEES_SUCCESS,
			REQUEST_INTERVIEWEES_FAILED
		],
		xhr : {
			url : 'http://9.178.151.159:9090/internal-dashboard-services/interviewees',
			method : 'get',
			responseType : 'json',
			withCredentials : false
		}
	}
};
