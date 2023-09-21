// function Todos(props:{items:string[]}){

//     return(
//         <ul>
//             {}
//         </ul>
//     )
// }

// export default Todos;
// Functional Component with React.FC generic type

const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default Todos;
