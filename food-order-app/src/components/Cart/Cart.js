import { useState } from "react";
// import MealItem from "../Meals/MealItem";
//render all items, total amount, close button, order button
//const Cart = ({meals,onChangeMeal,onDeleteMeal}) => {
import "bootstrap/dist/css/bootstrap.css";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {

  const cartItems = (
    <ul className="list-group">
      {[{ key: "c1", id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li className="list-group-item" key={item.key}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    
    <Modal onToggleModalHandler={props.onToggleModalHandler}>
      {cartItems}
      <div className="modal-footer">
        <span>Total Amount:</span>
        <span>32</span>
      </div>
     </Modal>
  );
};

export default Cart;
