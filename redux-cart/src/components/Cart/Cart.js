import { Fragment } from 'react';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const CartList = () => {
  const cart = useSelector(state => state.cart)
  
  return cart.items.map((item) => (
    <CartItem key={item.id}
      item={{ id: item.id, title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price }}></CartItem>
  ));
}

const Cart = (props) => {

  console.log(props.cartItems.items);

  const ui = useSelector(state => state.ui)
  
  return (
    <Fragment>
      {ui.isShown &&
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartList />
          </ul>
        </Card>
      }
    </Fragment>

  );
};

export default Cart;
