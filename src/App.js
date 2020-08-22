import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import Projects from './components/Projects'


const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Projects />
    </div>
  );
}

export default App;
