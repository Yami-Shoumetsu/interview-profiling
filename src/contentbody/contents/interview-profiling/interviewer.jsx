import React from 'react';
import './interviewer.css';

const DUMMY_INTERVIEWERS = {
	interviewer_name : 'Interviewer Name',
	available_day : 'Available Day/s',
	available_time : 'Available Time',
	contact_num : 'Contact Number',
	status : 'Status'
};
class Interviewer extends React.Component{
  render() {
		let rowsToRender = [];
		for (var i=0; i<10; i++) {
			rowsToRender.push(
				<tr key={i}>
					<td>{DUMMY_INTERVIEWERS.interviewer_name}</td>
					<td>{DUMMY_INTERVIEWERS.available_day}</td>
					<td>{DUMMY_INTERVIEWERS.available_time}</td>
					<td>{DUMMY_INTERVIEWERS.contact_num}</td>
					<td>{DUMMY_INTERVIEWERS.status}</td>
				</tr>
			);
		}

    return (
      <div className="interviewer-class">
      <select>
        <option value="Java.Core">Java Core</option>
        <option value="Java.Core">Java WebServices</option>
        <option value="Java.Core">BBSI</option>
      </select>
        <table>
          <thead>
            <tr>
              <th>Interviewer's Name</th>
              <th>Available Day/s</th>
              <th>Available Time</th>
              <th>Contact Number</th>
              <th>Status</th>
            </tr>
          </thead>
					<tbody>
						{rowsToRender}
					</tbody>
        </table>
      </div>
    );
  }
}

export default Interviewer;
