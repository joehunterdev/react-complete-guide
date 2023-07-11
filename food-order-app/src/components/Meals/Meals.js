import MealItem from "./MealItem";
import "bootstrap/dist/css/bootstrap.css";
// import mealItems from "../../store/meal-items";
import Section from "../UI/Container/Section";
import useHttp from '../../hooks/use-http.js'
import { useEffect, useState } from "react";
// import mealItemsArr from "../../store/meal-items-arr";

const MealItems = ({mealItems}) => {
  

  if (!mealItems){
    console.log("no meal items to ")
    return
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

  //Get meals from use-https
  const { isLoading, error, sendRequest: fetchMeals } = useHttp(); // neatly unpack declare above top level
  const [mealItems, setMealItems] = useState({})

  useEffect(() => {

    const mealItemsRes = (data) => {
      setMealItems(data)
    }

    fetchMeals({url: process.env.REACT_APP_FIREBASE_URL}, mealItemsRes)

  }, [fetchMeals])

   return (
    
    <Section style={{ backgroundColor: '#eee' }}>
     {isLoading && <p className="text-info text-center">Loading</p>}
     {error && <p className="text-info text-center">Errors are</p>}
     {mealItems &&  <MealItems mealItems={mealItems} />}
    </Section>
  )
};

export default Meals;
