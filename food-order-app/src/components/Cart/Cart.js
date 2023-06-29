
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
  const cartItems = useContext(CartContext);
  console.log(cartItems);

  const total = cartItems.map(t => t.mealTotal).reduce((partialSum, a) => partialSum + a, 0)
  console.log(total);
  // const [total, setTotal] = useState('');
  // // need to count num of meals
  // // add or subtract meal from cart
 
  // const total = cartItems.reduce((total, item) => {
  //   return total + item.amount;
  // }, 0);

  // // create cart list
  // // let total += item.price * item.amount

  // //  let totalAmount = {
  // //   dispatch({type:'getTotal'})
  // // }

  // const amountTotalHandler = (item) => {
  //    setTotal(total + item.price * item.amount)
  // }

  const cartList = (
    <Container>
      {cartItems.map((item) => (
        <CardRounded key={item.id}>
        <div className="col-md-3 col-lg-2 col-xl-2">
          <h5 className="mb-0">{item.name}</h5>
        </div>
          <CartItemForm  id={item.id} amount={item.amount}  /> 
        </CardRounded>
      ))}
    </Container> 
  );

  return (

    <Modal onToggleModalHandler={props.onToggleModalHandler} >
      {cartList}
      <div className="modal-footer">
        <span >Total: </span>
        <span ><FontAwesomeIcon icon={faEuro} color="gold"></FontAwesomeIcon>{total}</span>
      </div>
    </Modal>
  );
};

export default Cart;
