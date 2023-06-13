import React,{useState} from "react";
import AddUser from "./components/User/AddUser";
import ListUsers from "./components/User/ListUsers";
import Card from "./components/UI/Card/Card";
import ErrorModal from "./components/UI/Modal/ErrorModal";
import { v4 as uuid } from 'uuid';

const INIT_STATE= [
  {key: uuid(),user: 'joey',age:'37'},
  {key: uuid(),user: 'ben', age:'32'}
];

function App() {

  const [users,setUsers] = useState(INIT_STATE)
  const [showModal,setShowModal] = useState(false)


  const modalHandler = isValid => {

      console.log(isValid)
      
      let  show = isValid = !isValid;

      setShowModal(show);

  }
  const addUserHandler = user => {
     setUsers((prevUsers) => {return [user,...prevUsers]})
  }



  return (
    <div className="container">
      {showModal === true && <ErrorModal display={true} onDismissModalHandler={modalHandler}>Some spefic error</ErrorModal> }
      <Card>
        <AddUser onAddUserData={addUserHandler} onAddValidData={modalHandler} />
      </Card>
      <Card>
        <ListUsers users={users}></ListUsers>
      </Card>
    </div>
  );
}

export default App;
