import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// bootstrap
import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
// styled-components
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrap">
        <SayFullName name='Ivan' surname='Ivanov' link='vk.com' />
        <SayFullName name='Boris' surname='Petrov' link='vk.com' />
        <SayFullName name='Alex' surname='Sidorov' link='vk.com' />
      </div>
    );
  }
}

function SayFullName (props) {
  return (
    <div>
      <h1>
        My name: { props.name }, surname: { props.surname } 
        My link: { props.link }
      </h1>
    </div> 
  )
}
export default App;
