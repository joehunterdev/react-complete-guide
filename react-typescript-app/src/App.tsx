import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todos';
import './App.css';

function App() {

  // instantiate a type todo
   const todos  = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
   ]

  return (
    <div className="App">
       <Todos items={todos}/>
    </div>
  );
}

export default App;
