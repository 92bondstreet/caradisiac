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
        <Form inline>
        
        <FormGroup row>
          <Label for="brand" sm={5}>Brand</Label>
          <Col sm={10}>
            <Input type="select" bsSize="lg">
           {
            Brand.map(function(brand){
            return <option>{brand}}</option>;
          })
        }
        </Input>
          </Col>
        </FormGroup>
        {' '}


        <FormGroup row>
          <Label for="model" sm={5}>Model</Label>
          <Col sm={10}>
            <Input type="select" bsSize="lg">
           {
            Model.map(function(model){
            return <option>{model.model}</option>;
          })
        }
        </Input>
          </Col>
        </FormGroup>
        {' '}
        
            <Button size="lg">SEARCH</Button>
      
        </Form>
    );
  }
}





