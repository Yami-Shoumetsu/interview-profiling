import React from 'react';
import { render } from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import routes from './route-config';

let history = useRouterHistory(createHashHistory)({
	//nothing
})

render(<Router routes={routes} history={history} />, document.querySelector("#app"));
