
import mealItemsArr from "../store/meal-items-arr"
import mealItems from './meal-items';
// import MealItemResponse from './meal-items';

import {createContext, useReducer, useEffect,useState } from 'react';
import useHttp from '../hooks/use-http';
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);


const initialState = { items: [], totalAmount: 0 };

export function CartProvider({ children }) {

  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

function cartReducer(state, action) {

  //Todo: just pass item as {} from dispatch
  let meal = mealItems.filter((mid) => mid.id === action.id);
  let price = meal.map((mid) => mid.price).toString();
  // let description = meal.map((mid) => mid.description).toString();
  let name = meal.map((mid) => mid.name).toString();

  if (state.items.map(t => t.id).includes(action.id) && action.type !== 'deleted') {
    action.type = 'updated';
  }

  switch (action.type) {
    case 'added': {
      return {
        items: [...state.items, {
          id: action.id,
          price: price,
          amount: action.amount,
          name: name,
        }], totalAmount: state.totalAmount + price * action.amount
      };

    }

    case 'updated': {
      return {
        items: state.items.map(t => {
          if (t.id === action.id) {
            return {
              id: action.id,
              price: price,
              amount: t.amount + action.amount,
              name: name,
            }
          } else {
            return t;
          }
        }), totalAmount: state.totalAmount + price * action.amount
      };
    }

    case 'deleted': {
      return {
        items: [...state.items.filter(t => t.id !== action.id)],
        totalAmount: state.totalAmount - (price * action.amount)
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }

  }


}


