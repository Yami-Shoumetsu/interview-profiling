import React from 'react';
import {Route, IndexRoute} from 'react-router';

/**
 * Routes
 */
import App from './app';
import IntervewProfilerHolder from './contentbody/contents/interview-profiling/interview-profiler-holder';
import Interviewer from './contentbody/contents/interview-profiling/interviewer';
import Interviewee from './contentbody/contents/interview-profiling/interviewee';
import ScheduleInterview from './contentbody/contents/interview-profiling/schedule-interview';

export default (
	<Route path="/" component={App}>
		<Route component={IntervewProfilerHolder}>
			<IndexRoute component={Interviewer}/>
			<Route path="/interviewee" component={Interviewee}/>
			<Route path="/schedule-interview" component={ScheduleInterview}/>
		</Route>
	</Route>
)
