import React from 'react';
import './menubar.css';

class MenuBar extends React.Component{
  render() {
    return (
      <div className="menu-bar">
        <ul>
          <li><a href="#">PUM</a></li>
          <li><a className="active" href="#">Interview Profiling</a></li>
          <li><a href="#">CBKI</a></li>
        </ul>
      </div>
    );
  }
}

export default MenuBar;
