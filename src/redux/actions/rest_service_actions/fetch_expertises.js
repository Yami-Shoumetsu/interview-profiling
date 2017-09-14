import {REQUEST_EXPERTISES, REQUEST_EXPERTISES_SUCCESS, REQUEST_EXPERTISES_FAILED} from '../../action_types';

export function fetchExpertises() {
	return {
		types : [
			REQUEST_EXPERTISES,
			REQUEST_EXPERTISES_SUCCESS,
			REQUEST_EXPERTISES_FAILED
		],
		xhr : {
			url : 'http://9.178.151.159:9090/internal-dashboard-services/expertises',
			method : 'get',
			responseType : 'json',
			withCredentials : false
		}
	}
};
