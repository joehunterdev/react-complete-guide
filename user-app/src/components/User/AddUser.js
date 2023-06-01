import React, { useState } from "react";
import "./AddUser.css";
import { v4 as uuid } from 'uuid';
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/Modal/ErrorModal"

const AddUser = (props) => {
  const [inputUser, setInputUser] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [isValid, setIsValid] = useState(true);


  const userInputChangeHandler = (event) => {

    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }

     setInputUser(event.target.value);

  };

  const ageInputChangeHandler = (event) => {

    if (event.target.value < 120) {
      setIsValid(true);
    }

    setInputAge(event.target.value);
  };



  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (inputUser.trim().length === 0) {
      setIsValid(false);
      props.onAddValidData(isValid); // pass state up to app

      // return <ErrorModal>Usernames wrong</ErrorModal>;
      return;
    }

    if (inputAge > 120) {
      setIsValid(false);
      props.onAddValidData(isValid); // pass state up to app

      return;
      // return <ErrorModal>Im something wrong with age</ErrorModal>;
    }

    const userData = {
      key: uuid(),
      user: inputUser,
      age: inputAge, 
    };

    props.onAddUserData(userData); // pass state up to app
    setInputUser("");
    setInputAge("");
    // userData.key = false
  };

  //Todo:
  //${styles['form-control']} ${!isValid && styles.invalid}
  //<Button type="submit">Add Goal</Button> link to css module

  return (
    <form onSubmit={formSubmitHandler}  className={`${'form-control'} ${!isValid && "invalid"}`}>
      <div className="add-user__controls">
        <div className="add-user__control">
          <label>Username</label>
          <input
            type="text"
            name="user"
            value={inputUser}
            onChange={userInputChangeHandler}
          />
        </div>
        <div className="add-user__control">
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={inputAge}
            onChange={ageInputChangeHandler}
          />
        </div>
        <div className="add-user__controls">
          <Button type="submit">Add User</Button> 
        </div>
      </div>
    </form>
  );
};

export default AddUser;
