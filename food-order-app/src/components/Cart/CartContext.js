import mealItems from '../../store/meal-items';
import { createContext, useReducer } from 'react';

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {

  const [cart, dispatch] = useReducer(
    cartReducer,
    []
  );
 
 // mealItems.filter(cid => cid.id === action.id).values.price
 
  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function cartReducer(cartItems, action) {

  let meal = mealItems.filter((mid) => mid.id === action.id);
  // console.log(meal.concat(...meal));
  let price = meal.map((mid) => mid.price).toString();
  let description = meal.map((mid) => mid.description).toString();
  let name = meal.map((mid) => mid.name).toString();
 
  if (cartItems.map(t => t.id).includes(action.id)) {
    action.type = 'updated';
  }
  const updatedTotalAmount =  cartItems.map(t => t.amount * t.price);

  console.log(updatedTotalAmount)

  switch (action.type) {
    case 'added': {
      return [...cartItems, {
        id: action.id,
        amount: action.amount,
        price: price,
        description: description, 
        name: name,
        mealTotal:updatedTotalAmount
      }];
      
    }
    case 'updated': {
      return cartItems.map(t => {
        if (t.id === action.id) {
          return {
            id: action.id,
            amount: t.amount + action.amount,
            price: price,
            description: description, 
            name: name,
            mealTotal:updatedTotalAmount
          }
        } else {
          return t;
        }
      });
    }

    // case 'deleted': {
    //   return cart.filter(t => t.id !== action.id);
    // }

    //  case 'getTotal': {
    //   return [...cartItems,{
    //         totalAmount: updatedTotalAmount
    //   }];
    //  }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
 
  }

 
}
 

