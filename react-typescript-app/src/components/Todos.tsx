// function Todos(props:{items:string[]}){

//     return(
//         <ul>
//             {}
//         </ul>
//     )
// }

// export default Todos;

// Functional Component with React.FC generic type
import Todo from "../models/todos";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';   

// passing prop chains using ts
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (props) => {

  return (
    <ul className={classes.todos} >
      {props.items.map((item) => (
          <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
}

export default Todos;
