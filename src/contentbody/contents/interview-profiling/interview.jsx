import React from 'react';
import './interview.css';

class Interview extends React.Component{
  render() {
    return (
      <div className="interview-class">
				<select>
					<option value="Java.Core">Java Core</option>
					<option value="Java.Core">Java WebServices</option>
					<option value="Java.Core">BBSI</option>
				</select>
				<br/>
				<a href="#">File Link of Interview Questions</a>
				<br/>
				<br/>
				Upload accomplished Interview Question:
				<br/>
				<input type="file" name="pic" accept="file_extension/*"/>
				<br/><br/>
				Additional notes:
				<br/>
				<br/>
				<textarea>Passing this candidate . ......</textarea>
				<br/>
				<br/>
				<input type="submit" value="Send Interview Report"/>
      </div>
    );
  }
}

export default Interview;
