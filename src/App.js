import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Footer from './components/Footer';
import Works from './components/Works';
import Skills from './components/Skills';
import Line from './components/Line';
import City from './components/City';
import useLocalStorage from 'use-local-storage';



function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const  switchTheme = () => {
    const newTheme = theme ==='light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <div data-theme={theme}>
      <Navbar data={switchTheme}></Navbar>
      <Home></Home>
      <Line></Line>
      <Works></Works>
      <Line></Line>
      <Skills></Skills>
      <Line></Line>
      <City></City>
      <Line></Line>
      <Footer></Footer>
    </div>
  );
}

export default App;
