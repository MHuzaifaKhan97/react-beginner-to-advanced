import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

import PropsExample from './components/PropsExample';
import StateExample from './components/StateExample';
import StateFull from './components/StateFull';
import StateLess from './components/StateLess';
import PropsValidation from './components/PropsValidation';
import ComponentAPIExample from './components/ComponentAPIExample';
import ComponentLifeCycleExample from './components/ComponentLifeCycleExample';
import { SimpleExample, ReactFormExample } from './components/ReactFormExample';
import ReactEventExample from './components/ReactEventExample';
import ConditionalRenderingExample from './components/ConditionalRenderingExample';
import ReactListExample from './components/ReactListExample';
import ReactRefsExample from './components/ReactRefsExample';
import ReactFragmentExample from './components/ReactFragmentExample';
import ReactRouterExample from './components/ReactRouterExample';
import ReactHOC from './components/ReactHOC';
import ConstructorExample from './components/ConstructorExample';
import ReactAnimationExample from './components/ReactAnimationExample';

class App extends Component {

  state = {
    data: [
      { "id": 1, "name": "Huzaifa", "age": 23 },
      { "id": 2, "name": "Waleed", "age": 21 },
      { "id": 3, "name": "Abubakar", "age": 20 },
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

        {/* <ComponentLifeCycleExample /> */}

        {/* <SimpleExample />
        <ReactFormExample /> */}

        {/* <ReactEventExample /> */}

        {/* <ConditionalRenderingExample /> */}

        {/* <ReactListExample /> */}

        {/* <ReactRefsExample /> */}

        {/* <ReactFragmentExample /> */}

        {/* <ReactRouterExample /> */}

        {/* <ReactHOC /> */}

        {/* <ConstructorExample /> */}

        <ReactAnimationExample />

      </div>
    );
  }
}
// App = ReactHOC(App)
export default App;
