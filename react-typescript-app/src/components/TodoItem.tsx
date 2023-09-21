
const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {

    // const removeTodoItem = () => {

    //     props.onRemoveTodo?.(props.id);

    // }
    
    return (<li>{props.text}  - <button onClick={props.onRemoveTodo}>x</button></li>)

}

export default TodoItem;
