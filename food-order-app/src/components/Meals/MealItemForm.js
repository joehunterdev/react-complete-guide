

import React, { useState, useContext, Fragment } from "react";
import { CartDispatchContext } from "../../store/cart-context";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

const MealItemForm = ({ id }) => {

  const [amount, setAmount] = useState(1);
  const dispatch = useContext(CartDispatchContext);

  const decreaseAmountHandler = (event) => {

    if (amount > 1) {
      setAmount(amount - 1);
    }
    // is-invalid
  }

  const increaseAmountHandler = (event) => {
    if (amount < 9) {
      setAmount(amount + 1);
    }
  }

  return (
    <Fragment>
      <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
        <button className="btn btn-link px-2" onClick={decreaseAmountHandler}>
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <input className="form-control form-control-sm" style={{maxWidth:'40%'}}
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          name="amount"
        />
        <button className="btn btn-link px-2" onClick={increaseAmountHandler}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="col-md-1 col-lg-1 col-xl-1 mt-3 text-end">
        <button className="btn btn-md btn-success" onClick={() => {
          dispatch({
            type: 'added',
            id: id,
            amount: amount,
          });
        }}><FontAwesomeIcon icon={faCartPlus} /> Add</button>
      </div>
    </Fragment >
  );
};


export default MealItemForm;
