import React from 'react';
import './interview-profiler-holder.css';
import InterviewProfilerTabMenu from './interview-profiler-tab-menu';

class IntervewProfilerHolder extends React.Component{
  render() {
    return (
      <div className="interview-profiler-holder">
        <InterviewProfilerTabMenu/>
				{this.props.children}
      </div>
    );
  }
}

export default IntervewProfilerHolder;
