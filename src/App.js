import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent'

class App extends Component {
  render() {
    return (
  <MuiThemeProvider>
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a React Template using Material Design. Do not edit it. Clone it from Github so you can use it over and over.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      <MyAwesomeReactComponent />

  </MuiThemeProvider>
    );
  }
}

export default App;
