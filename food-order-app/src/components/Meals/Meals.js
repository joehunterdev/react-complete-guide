import MealItem from "./MealItem";
import "bootstrap/dist/css/bootstrap.css";
import Section from "../UI/Container/Section";
import useHttp from '../../hooks/use-http.js'
import { Fragment, useEffect, useState } from "react";
import React, { useContext } from "react";
import { Alert, Spinner } from 'react-bootstrap';



// import { CartContext, CartProvider } from "../../store/cart-context";

const MealItems = ({ mealItems }) => {

  if (mealItems.length < 0) {
    // throw new Error("No Meal Items found")

  }

  return mealItems.map((meal) => (

    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    // inputAmount={cart.items.filter(item => item.id === meal.id).map(i => i.amount)}
    />
  ));

}

const Meals = (props) => {
  // const cartState = useContext(CartContext);

  //Get meals from use-https
  const { isLoading, error, sendRequest: fetchMeals } = useHttp(); // neatly unpack declare above top level
  const [mealItems, setMealItems] = useState({})

  useEffect(() => {

    const mealItemsRes = (data) => {
      setMealItems(data)
    }

    fetchMeals({ url: process.env.REACT_APP_FIREBASE_URL }, mealItemsRes)

  }, [fetchMeals])

  return (
    <Fragment>

      {isLoading && !error && <div className="d-flex justify-content-center mb-3"><Spinner> </Spinner>  </div>}

      {error && <Alert variant="danger"> <p className="text-center">{error} </p> </Alert>}

      {mealItems.length > 0 &&
        <Section className="d-flex justify-content-center">
          {/* {mealItems.length > 0 &&  <MealItems mealItems={cartState.availableMeals[0]} />} */}
          {/* {cartState.availableMeals[0]} */}
          <MealItems mealItems={mealItems} />
        </Section>
      }
    </Fragment>
  )
};

export default Meals;
