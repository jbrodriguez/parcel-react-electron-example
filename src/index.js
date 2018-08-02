import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// NOTE: uncomment to get fs.existsSync module error due to
// not using target=electron
// console.log('Accessing Electron modules!');
// import { remote } from 'electron';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
