import React from 'react';
import './interview.css';
import Expertise from './expertise';

class Interview extends React.Component{
  render() {
    return (
      <div className="interview-class">
				<Expertise/>
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
				<textarea defaultValue="Passing this candidate . ......"/>
				<br/>
				<br/>
				<input type="submit" value="Send Interview Report"/>
      </div>
    );
  }
}

export default Interview;
