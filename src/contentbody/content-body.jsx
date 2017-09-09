import React from 'react';
import './content-body.css';

class ContentBody extends React.Component{

  render() {
    return (
      <div className="content-body">
				{this.props.childRoute}
      </div>
    );
  }
}

export default ContentBody;
