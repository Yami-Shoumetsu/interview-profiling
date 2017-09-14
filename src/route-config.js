import React from 'react';
import {Route, IndexRoute} from 'react-router';

/**
 * Routes
 */
import App from './app';
import IntervewProfilerHolder from './components/contentbody/contents/interview-profiling/interview-profiler-holder';
import Interviewer from './components/contentbody/contents/interview-profiling/interviewer';
import Interviewee from './components/contentbody/contents/interview-profiling/interviewee';
import Interview from './components/contentbody/contents/interview-profiling/interview';
import ScheduleInterview from './components/contentbody/contents/interview-profiling/schedule-interview';

export default (
	<Route path="/" component={App}>
		<Route component={IntervewProfilerHolder}>
			<IndexRoute component={Interviewer}/>
			<Route path="/interviewee" component={Interviewee}/>
			<Route path="/interview" component={Interview}/>
			<Route path="/schedule-interview" component={ScheduleInterview}/>
		</Route>
	</Route>
)
