import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';

function Clock(props) {
  return (
    <div>
     <h1> Hello, World! </h1>
     <h2> It is {props.date.toLocaleTimeString()}. </h2>
    </div>
  )
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}