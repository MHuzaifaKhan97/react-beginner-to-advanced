import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

import PropsExample from './components/PropsExample';
import StateExample from './components/StateExample';
import StateFull from './components/StateFull';
import StateLess from './components/StateLess';
import PropsValidation from './components/PropsValidation';
import ComponentAPIExample from './components/ComponentAPIExample';

class App extends Component {

  state = {
    data:[
        {"id":1,"name":"Huzaifa","age":23},
        {"id":2,"name":"Waleed","age":21},
        {"id":3,"name":"Abubakar","age":20},
    ]
}

  render() {
    return (
      <div className="App">
        <h1>React Basic I</h1>
        
        {/* <StateLess /> */}

        {/* <StateFull /> */}
        
        {/* <StateExample /> */}
        
        {/* <PropsExample 
        data={this.state.data} 
        page="Application Page" 
        /> */}
        
        {/* <PropsValidation /> */}
        
        {/* <ComponentAPIExample /> */}
      </div>
    );
  }
}
export default App;
