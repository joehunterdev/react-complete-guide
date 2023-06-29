

import React, { useState, useContext, Fragment } from "react";
import { CartDispatchContext, CartContext, CartProvider } from "../Cart/CartContext";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const MealItemForm = ({ id }) => {
  const [amount, setAmount] = useState(1);
  const dispatch = useContext(CartDispatchContext);

// Todo: validate range

  const decreaseAmountHandler = (event) => {
    setAmount(amount - 1);
  }

  const increaseAmountHandler = (event) => {
    setAmount(amount + 1);
  }

  

  return (

    <Fragment>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2" onClick={decreaseAmountHandler}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input className="form-control form-control-sm"
          type="number"
          value={amount}
          min='1'
          max='5'
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
        />
        <button className="btn btn-link px-2" onClick={increaseAmountHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>

      <div className="col-md-1 col-lg-1 col-xl-1 text-end">

        <button className="btn text-primary" onClick={() => {
          dispatch({
            type: 'added',
            id: id,
            amount: amount,
          });
        }}>
          <FontAwesomeIcon icon={faCartPlus} /></button>

      </div>
    </Fragment>
  );
};
 

export default MealItemForm;
