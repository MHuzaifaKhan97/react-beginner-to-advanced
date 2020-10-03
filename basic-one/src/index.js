import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// setTimeout(()=>{
//   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
// },10000)