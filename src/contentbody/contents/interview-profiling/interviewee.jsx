import React from 'react';
import './interviewee.css';

const DUMMY_INTERVIEWEES = {
	interviewee_name : 'Interviewee Name',
	available_day : 'Available Day/s',
	available_time : 'Available Time',
	contact_num : 'Contact Number',
	status : 'Status'
};
class Interviewee extends React.Component{
  render() {
		let rowsToRender = [];
		for (var i=0; i<10; i++) {
			rowsToRender.push(
				<tr key={i}>
					<td>{DUMMY_INTERVIEWEES.interviewee_name}</td>
					<td>{DUMMY_INTERVIEWEES.available_day}</td>
					<td>{DUMMY_INTERVIEWEES.available_time}</td>
					<td>{DUMMY_INTERVIEWEES.contact_num}</td>
					<td>{DUMMY_INTERVIEWEES.status}</td>
				</tr>
			);
		}

    return (
      <div className="interviewee-class">
      <select>
        <option value="Java.Core">Java Core</option>
        <option value="Java.Core">Java WebServices</option>
        <option value="Java.Core">BBSI</option>
      </select>
        <table>
          <thead>
            <tr>
              <th>Interviewee's Name</th>
              <th>Source</th>
              <th>Contact Number</th>
              <th>Overall Status</th>
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

export default Interviewee;
