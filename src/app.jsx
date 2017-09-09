import React from 'react';
import './app.css';

// Import Internal Components
import Header from "./header/header.jsx";
import MenuBar from "./menubar/menubar.jsx";
import ContentBody from "./contentbody/content-body.jsx";
import Footer from "./footer/footer.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
      <div className="main-class">
          <Header/>
          <MenuBar/>
          <ContentBody childRoute={this.props.children}/>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default App;
