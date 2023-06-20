
import { createContext, useContext, useReducer } from 'react';

const MealsContext = createContext(null);

const MealsDispatchContext = createContext(null);

export function MealsProvider({ children }) {
  const [meals, dispatch] = useReducer(
    mealsReducer,
    initialMeals
  );

  return (
    <MealsContext.Provider value={meals}>
      <MealsDispatchContext.Provider value={dispatch}>
        {children}
      </MealsDispatchContext.Provider>
    </MealsContext.Provider>
  );
}

export function useMeals() {
  return useContext(MealsContext);
}

export function useMealsDispatch() {
  return useContext(MealsDispatchContext);
}

function mealsReducer(meals, action) {
  switch (action.type) {
    case 'added': {
      return [...meals, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return meals.map(t => {
        if (t.id === action.meal.id) {
          return action.meal;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return meals.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

 
const initialMeals = [
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];