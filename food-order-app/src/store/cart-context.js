
import { createContext, useReducer, useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);


let availableMeals = []
const initialState = { items: [], totalAmount: 0, availableMeals:availableMeals};

export function CartProvider({ children }) {

  const { isLoading, error, sendRequest: fetchMeals } = useHttp(); // neatly unpack declare above top level
  // const [mealItems,setMealItems] = useState({})


  useEffect(() => {

    const addToAvailableMeals = (data) => {
      // availableMeals = [...availableMeals, data];
      availableMeals.push(data)
    }
    fetchMeals({ url: process.env.REACT_APP_FIREBASE_URL }, addToAvailableMeals)

  }, [fetchMeals])


  // console.log(fetch(process.env.REACT_APP_FIREBASE_URL).response.mealItems);
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState,
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

  // console.log(availableMeals)
  // availableMeals = availableMeals[0]
  //Todo: bug here better as 1d array
  let meal = availableMeals[0].filter((mid) => mid.id === action.id);

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
        }], totalAmount: state.totalAmount + price * action.amount,availableMeals:availableMeals[0]
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
        }), totalAmount: state.totalAmount + price * action.amount,availableMeals:availableMeals[0]
      };
    }

    case 'deleted': {
      return {
        items: [...state.items.filter(t => t.id !== action.id)],
        totalAmount: state.totalAmount - (price * action.amount),
        availableMeals:availableMeals[0]
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }

  }


}


