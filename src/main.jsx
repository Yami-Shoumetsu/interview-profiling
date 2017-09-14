import React from 'react';
import { render } from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import routes from './route-config';

import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore();

let history = useRouterHistory(createHashHistory)({
	//nothing
})

render(<Provider store={store}><Router routes={routes} history={history} /></Provider>, document.querySelector("#app"));
