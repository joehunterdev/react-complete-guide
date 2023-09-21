import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div className="App">
       <Todos items={['First Item','Second Item']}/>
    </div>
  );
}

export default App;
