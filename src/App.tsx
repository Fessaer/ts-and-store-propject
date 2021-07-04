import React from 'react';
import './App.css';
import Store from './Components/Store';
import Navigations from './Components/Navigations'

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Store>
        <Navigations />
      </Store>
    </div>
  );
}

export default App;
