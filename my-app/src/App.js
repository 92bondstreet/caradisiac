import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText }  from 'reactstrap';
import data from './models.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
         <div id="logo">
        <div id="logo_text">
          <h1><a href="index.html"><span class="logo_colour"> Carminiac </span> Find your dream SUV</a></h1>
        </div>
      </div>
        
        </header>
      </div>
    );
  }
}


export default App;