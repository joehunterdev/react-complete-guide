import classes from './CartButton.module.css';
import { useSelector,useDispatch } from 'react-redux';
 
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  console.log(cart.items)
  let total = 0

  cart.items.map((t) => {
      total += t.quantity
  } ) 

  const cartDisplayHandler = () => {
     dispatch(uiActions.toggleCart())
     
  }

  return (
    <button className={classes.button} onClick={cartDisplayHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
