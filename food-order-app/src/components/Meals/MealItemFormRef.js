

import React, { useState, useContext, useRef, Fragment } from "react";
import { CartDispatchContext, CartContext } from "../Cart/CartContext";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from "../UI/Input/Input";

const MealItemForm = ({ id }) => {

  const [amountIsValid, setAmountIsValid] = useState(true);
  const dispatch = useContext(CartDispatchContext);
  const amountInputRef = useRef();

  const submitHandler = (event) => {  

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(enteredAmountNumber);
    dispatch({
      type: 'added',
      id: id,
      amount: amountInputRef.current.value,
    });

  }
  // dispatch({
  //   type: 'added',
  //   id: id,
  //   amount: enteredAmountNumber,
  // });
   
  // const decreaseAmountHandler = (event) => {

  // amountInputRef.current.value -= amountInputRef.current.value;

  //  console.log(amountInputRef)

  // }

  // const increaseAmountHandler = (event) => {
  //   amountInputRef.current.value += amountInputRef.current.value  +1;
  //   console.log(amountInputRef.current.value += amountInputRef.current.value)
  // }

  return (
    <Fragment>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2" >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        {/*         
        <input 
          type="number"
          value={amount}
          min='1'
          max='5'
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
        /> */}
        <Input
          ref={amountInputRef}
          label='Amount'
          input={{
            id: 'amount_' + id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1',
          }}
        />
        <button className="btn btn-link px-2"  >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 text-end">
        <button className="btn text-primary" onClick={submitHandler}>
          <FontAwesomeIcon icon={faCartPlus} />
          </button> 
      </div>
    </Fragment>
  );
};


export default MealItemForm;
