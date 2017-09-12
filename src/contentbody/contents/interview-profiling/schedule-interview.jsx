import React from 'react';
import './schedule-interview.css';
import Datetime from 'react-datetime';

class ScheduleInterview extends React.Component{
  render() {
		let date = new Date();
    return (
      <div className="schedule-interview-class">
				<select>
					<option value="Java.Core">Java Core</option>
					<option value="Java.Core">Java WebServices</option>
					<option value="Java.Core">BBSI</option>
				</select>
				<br/>
        Choose Date and Time: <Datetime closeOnSelect={true}/>
      </div>
    );
  }
}

export default ScheduleInterview;
