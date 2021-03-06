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
  const color = "#000000";
  const color2 = "#fef3e3";
  const  switchTheme = () => {
    const newTheme = theme ==='light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (theme === 'dark') { 
      document.body.style.backgroundColor = color2;
    } else {
      document.body.style.backgroundColor = color;
    }

  }



  return (
    <div data-theme={theme}>
      <Navbar data={switchTheme} ></Navbar>
      <Home id="home"></Home>
      <Line></Line>
      <Works id="works" ></Works>
      <Line></Line>
      <Skills id="skills"></Skills>
      <Line></Line>
      <City id="contact"></City>
      <Line></Line>
      <Footer></Footer>
    </div>
  );
}

export default App;
