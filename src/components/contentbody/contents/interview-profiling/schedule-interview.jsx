import React from 'react';
import './schedule-interview.css';
import Datetime from 'react-datetime';
import Expertise from './expertise';

class ScheduleInterview extends React.Component{
  render() {
		let date = new Date();
    return (
      <div className="schedule-interview-class">
				<Expertise/>
				<br/>
        Choose Date and Time: <Datetime closeOnSelect={true}/>
      </div>
    );
  }
}

export default ScheduleInterview;
