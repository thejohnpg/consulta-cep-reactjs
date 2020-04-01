import React from 'react';
import './App.css';

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Consulta from './components/Consulta'

function App() {
  return (
    <div className="App">
      <h1>:: Consulta CEP ::</h1>

      <div className="header">
        <a href="https://github.com/thejohnpg/consulta-cep-reactjs/" target="_blank" className="header-icon"><FaGithub /></a> 
        <a href="https://www.linkedin.com/in/thejohnpg/" target="_blank" className="header-icon" ><FaLinkedin /></a> 
      </div>

     <Consulta />
    </div>
  );
}

export default App;
