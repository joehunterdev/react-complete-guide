import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData } from './store/cart-slice';

import Notification from './components/UI/Notification';
let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    //Thunk Life
    dispatch(sendCartData(cart));

  }, [cart, dispatch]);

  // if(cart)
  // dispatch(cartActions.replaceCart(response.json().items))

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        <Cart cartItems={cart} />
        <Products />
      </Layout>
    </Fragment>

  );
}

export default App;
