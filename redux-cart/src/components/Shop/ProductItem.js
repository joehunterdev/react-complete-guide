import Card from '../UI/Card';
import classes from './ProductItem.module.css';
// Todo: dispatch add or update
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.counter)
  const addToCartHandler = () => {
    var payload = {id:id,title:title,quantity:1,description: description, price:price}
 
    dispatch(cartActions.updateCart(payload))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>€ {price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
