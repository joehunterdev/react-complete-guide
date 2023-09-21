import React from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todos';

function App() {

  const [todos,setTodos] = React.useState<Todo[]>([]); // array of type todo [
  // instantiate a type todo
  //  const todos  = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript'),
  //  ]

   const addTodoHandler = (text:string) => {
      const newTodo = new Todo (text);
      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      });
   }


  return (
    <div className="App">
       <NewTodo onAddTodo={addTodoHandler}/>
       <Todos items={todos}/>
    </div>
  );
}

export default App;
