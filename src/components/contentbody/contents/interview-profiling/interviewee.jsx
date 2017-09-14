import React from 'react';
import './interviewee.css';
import Expertise from './expertise';
/**
 * Redux Imports
 *
 */
import {connect} from 'react-redux';
import {fetchInterviewees} from '../../../../redux/actions/rest_service_actions/fetch_interviewees';

class Interviewee extends React.Component{

	componentDidMount() {
		this.props.fetchInterviewees();
	}
  render() {
		let rowsToRender = [];
		if (this.props.interviewees.items.content) {
			this.props.interviewees.items.content.map((interviewee) =>  {
				rowsToRender.push(
					<tr key={interviewee.id}>
						<td>{interviewee.firstName + ' ' + interviewee.middleName + ' ' + interviewee.lastName}</td>
						<td>{interviewee.internal ? 'Internal' : 'External'}</td>
						<td>{interviewee.contactNumber}</td>
						<td>{interviewee.emailAddress}</td>
					</tr>
				);
			});
		}

    return (
      <div className="interviewee-class">
				<Expertise/>
        <table>
          <thead>
            <tr>
              <th>Interviewee's Name</th>
              <th>Source</th>
              <th>Contact Number</th>
							<th>Email Address</th>
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

const mapStateToProps = (state) => ({
	interviewees : state.interviewees
});

export default connect (mapStateToProps, {fetchInterviewees})(Interviewee);
