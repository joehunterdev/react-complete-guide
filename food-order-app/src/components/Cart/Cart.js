
import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "../UI/Modal/Modal";
import { CartContext, CartDispatchContext } from "./CartContext";
import CartItemForm from "./CartItemForm";
import Container from "../UI/Container/Section";
import CardRounded from "../UI/Card/CardRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEur, faEuro } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  // const dispatch = useContext(CartDispatchContext);
  const state = useContext(CartContext);

  const cartList = (
    <Container>
      {state.items.map((item) => (
        <CardRounded  key={item.id+"_rn"+1} >
        <div className="col-md-3 col-lg-2 col-xl-2">
          <h5 className="mb-0">{item.name}</h5>
        </div>
          <CartItemForm   id={item.id} amountInput={item.amount}  /> 
        </CardRounded>
      ))}
    </Container> 
  );

  return (

    <Modal onToggleModalHandler={props.onToggleModalHandler} >
      {cartList}
      <div className="modal-footer">
        <span >Total: {state.totalAmount.toFixed()} </span>
        <span ><FontAwesomeIcon icon={faEuro} color="gold"></FontAwesomeIcon></span>
      </div>
    </Modal>
  );
};

export default Cart;
