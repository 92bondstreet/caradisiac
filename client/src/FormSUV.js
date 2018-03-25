import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText,Col }  from 'reactstrap';
import Brand from './brands.json';
import Model from './models.json';

export default class FormSUV extends React.Component {
  render() {
       let className = 'form';
      if (this.props.isActive) {
    className += ' form-active';
  }
    return (
    
        <ul className="list-group">
        {
          Model.map(function(model){
            return <li className="list-group-item">{model.brand} {model.model} {model.volume}  {model.name} </li>;
          }) 
        }
        </ul>
        
    );
  }
}





