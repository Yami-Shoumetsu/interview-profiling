import React from 'react';
import './app.css';

// Import Internal Components
import Header from "./components/header/header.jsx";
import MenuBar from "./components/menubar/menubar.jsx";
import ContentBody from "./components/contentbody/content-body.jsx";
import Footer from "./components/footer/footer.jsx";

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
