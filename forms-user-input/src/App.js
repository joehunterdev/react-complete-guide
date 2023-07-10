import React from 'react';
import BasicForm from './components/BasicForm';
import { StrictMode } from 'react';
function App() {
  return (
    <StrictMode>
    <div className="app">
      <BasicForm />
    </div>
    </StrictMode>

  );
}

export default App;