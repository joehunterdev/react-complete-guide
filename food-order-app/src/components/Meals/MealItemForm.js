import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";

const MealItemForm = ({ onAddMeal }) => {

  const [amount, setAmount] = useState('');

  return (
    <div className="container">
      {/* <form> */}
        <div className="mb-3 row">
          <label htmlFor="inputName" className="col-8 col-form-label">
            Amount
          </label>
          <div className="col-6">
            <input
              type="number"
              value={amount}
              min='1'
              max='5'
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              name="amount"
              id="amount"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <button
            onClick={() => {
              setAmount("");
              onAddMeal(amount);
            }}
          >Add
          </button>
        </div>
      {/* </form> */}
    </div>
  );
};

export default MealItemForm;

        //   {/* <button type="submit" onSubmit={submitHandler} className="btn btn-primary">Add</button> */}
        //   {/* <Button onClick={addToCartHandler} subClass="primary" >Add To Cart</Button> */}

