

import React, { useState, useContext, Fragment } from "react";
import { CartDispatchContext } from "../../store/cart-context";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const CartItemForm = ({ id, amountInput }) => {
  const [amount, setAmount] = useState(amountInput);

  const dispatch = useContext(CartDispatchContext);

  const decreaseAmountHandler = (event) => {

    if (amount > 1) {
      setAmount(amount - 1);
      dispatch({
        type: 'updated',
        id: id,
        amount: -1
      });

    } else {
      dispatch({
        type: 'deleted',
        id: id,
        amount: amount
      });
    }
  }

  const increaseAmountHandler = (event) => {
    if (amount < 10) {
      setAmount(amount + 1);
      dispatch({
        type: 'updated',
        id: id,
        amount: +1
      });
    }
  }

  const onDeleteHandler = (event) => {
    dispatch({
      type: 'deleted',
      id: id,
      amount: amount
    });
  }

  return (

    <Fragment>
      <div className="col-md-4 col-lg-4 col-xl-4 d-flex">
        <button className="btn btn-link px-2" onClick={decreaseAmountHandler} >
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

      <div className="col-md-1 col-lg-1 col-xl-2 text-end">
        <button className="btn text-danger" onClick={onDeleteHandler}>
          <FontAwesomeIcon icon={faTrash} /></button>
      </div>
    </Fragment>
  );
};


export default CartItemForm;
