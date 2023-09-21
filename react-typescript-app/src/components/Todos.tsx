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


const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos} >
      {props.items.map((item) => (
      //  <li key={item.id}>{item.text}</li>
          <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
}

export default Todos;
