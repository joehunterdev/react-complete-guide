import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

import './App.css';

function App() {

  
  // instantiate a type todo
   const todos  = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
   ]

   const addTodoHandler = (text:string) => {}

  return (
    <div className="App">
       <NewTodo onAddTodo={addTodoHandler}/>
       <Todos items={todos}/>
    </div>
  );
}

export default App;
