import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText }  from 'reactstrap';


class App extends Component {
  render() {
    return (
    <div id="header">
      <div id="logo">
        <div id="logo_text">
          <h1><a href="index.html"><span class="logo_colour"> Convargo </span> Ship your goods easily</a></h1>
        </div>
      </div>
    </div>
    );
  }
}



export default App;