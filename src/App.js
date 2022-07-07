import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Footer from './components/Footer';
import Works from './components/Works';



function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Home></Home>
      <Works></Works>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
