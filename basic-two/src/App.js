import React, { Component } from 'react';
import './App.css';

import ReactRouter from './components/ReactRouter';
import StylingExample from './components/StylingExample';
import ReactBootstrapExample from './components/ReactBootstrapExample';
import TableExample from './components/TableExample';

class App extends Component {
  render() {
    return (
      <div className="App">

        <ReactRouter />

        {/* <StylingExample /> */}

        {/* <ReactBootstrapExample /> */}

        <TableExample />

      </div>
    );
  }
}

export default App;
