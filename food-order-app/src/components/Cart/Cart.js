
import React, { Fragment, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "../UI/Modal/Modal";
import { CartContext } from "./../../store/cart-context";
import CartItemForm from "./CartItemForm";
import Container from "../UI/Container/Section";
import CardRounded from "../UI/Card/CardRounded";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEuroSign } from "@fortawesome/free-solid-svg-icons";
import CheckoutForm from "./CheckoutForm";
import { CardGroup } from "react-bootstrap";

const Cart = (props) => {

  const cart = useContext(CartContext);
 
  const cartList = (
    <div>

      {cart.items.map((item) => (
        <CardRounded  key={item.id} >
        <div className="col-md-3 col-lg-3 col-xl-3">
          <span className="mb-0">{item.name}</span>
        </div>
          <CartItemForm id={item.id} amountInput={item.amount}  /> 
        </CardRounded>
      ))}
    </div> 
  );
 

  return (

    <Modal onToggleModalHandler={props.onToggleModalHandler}  showCheckOut={cart.totalAmount.toFixed() > 0}>
     {cart.totalAmount.toFixed() <= 0 && <h3 className="text-center py-5">Theres nothing in this cart</h3>} 
     {cart.totalAmount.toFixed() > 0 && cartList} 
     <hr></hr>
     {cart.totalAmount.toFixed() > 0 && <CheckoutForm totalAmount={cart.totalAmount} cartItems={cart.items}/>}
      {/* <div className="modal-footer">
        <span >Total: <FontAwesomeIcon icon={faEuroSign} color="grey"></FontAwesomeIcon> {cart.totalAmount.toFixed()} </span>
      </div> */}

    </Modal>
  );
};

export default Cart;
