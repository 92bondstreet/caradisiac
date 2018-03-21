import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText,Col }  from 'reactstrap';
import data from './brands.json';
import dataModel from './models.json';

export default class Example extends React.Component {
  render() {
    return (
        <Form inline>
        
        <FormGroup row>
        <Col sm={10}>
          <Input placeholder=" BRANDS " bsSize="lg" />
        <Input type="select" bsSize="lg">
           {
          data.map(function(brand){
            return <option>{brand}}</option>;
          })
        }
        </Input>
           </Col>
        </FormGroup>
        {' '}
        
    <FormGroup row>
        <Col sm={10}>
          <Input placeholder=" MODELS " bsSize="lg" />
        <Input type="select" bsSize="lg">
           {
          dataModel.map(function(model){
            return <option>{model.model}</option>;
          })
        }
        </Input>
           </Col>
        </FormGroup>
        {' '}

        <Button size="lg">Submit</Button>
      
        </Form>
    );
  }
}





