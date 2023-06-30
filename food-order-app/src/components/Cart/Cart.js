
import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "../UI/Modal/Modal";
import { CartContext } from "./../../store/cart-context";
import CartItemForm from "./CartItemForm";
import Container from "../UI/Container/Section";
import CardRounded from "../UI/Card/CardRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEuroSign } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {

  const state = useContext(CartContext);

  const cartList = (
    <Container>
      {state.items.map((item) => (
        <CardRounded  key={item.id} >
        <div className="col-md-3 col-lg-2 col-xl-3">
          <span className="mb-0">{item.name}</span>
        </div>
          <CartItemForm id={item.id} amountInput={item.amount}  /> 
        </CardRounded>
      ))}
    </Container> 
  );
 

  return (

    <Modal onToggleModalHandler={props.onToggleModalHandler}  showCheckOut={state.totalAmount.toFixed() > 0}>
     {state.totalAmount.toFixed() <= 0 && <h3 className="text-center py-5">Theres nothing in this cart</h3>} 
     {state.totalAmount.toFixed() > 0 && cartList} 
      <div className="modal-footer">
        <span >Total: <FontAwesomeIcon icon={faEuroSign} color="grey"></FontAwesomeIcon> {state.totalAmount.toFixed()} </span>
      </div>
    </Modal>
  );
};

export default Cart;
