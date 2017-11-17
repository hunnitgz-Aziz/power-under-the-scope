import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Footer from '../Components/Footer';
import classNames from 'classnames';


class App extends Component {
  render() {
    return (
    	<div className="main-wrapper">
	       <Navbar />
	       <Main />
	       <Footer />
       </div>
    );
  }
}

export default App;