var ES6Promise = require('es6-promise');
ES6Promise.polyfill();
var axios = require('axios');


export default store => next => action => {
	const {xhr, types} = action;
	if (xhr == undefined) {
		return next(action);
	}
	else {
		const [REQUEST, SUCCESS, ERROR] =  types;

		next({isFetching: true, errorStatus: null, type: REQUEST});

		//Set timeout to 20000 ms per service call
		xhr.timeout = 20000;
		return axios.request(xhr).then((result) => {
			next({isFetching: false, errorStatus: null, header: result.headers, payload: result.data, type: SUCCESS});
		})
		.catch((error) => {
			let status = error.status || 'undefined error status';
			next({isFetching: false, errorStatus: status, type: ERROR});
			});
	}
};
