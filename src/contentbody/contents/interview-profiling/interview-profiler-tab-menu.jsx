import React from 'react';
import './interview-profiler-tab-menu.css';
import {IndexLink, Link} from 'react-router';

class InterviewProfilerTabMenu extends React.Component{
  render() {
    return (
      <div className="interview-profiler-tab-menu">
				<ul>
					<li><IndexLink to="/">Interviewer</IndexLink></li>
					<li className="margin-left" ><Link to="/interviewee">Interviewee</Link></li>
					<li className="margin-left" ><Link to="/interview">Interview</Link></li>
					<li className="margin-left" ><Link to="/schedule-interview">Schedule an Interview</Link></li>
				</ul>
      </div>
    );
  }
}

export default InterviewProfilerTabMenu;
