import Card from "../UI/Card/Card";
import MealItem from "./MealItem";
import "bootstrap/dist/css/bootstrap.css";
import mealItems from "../../store/meal-items";
import Section from "../UI/Container/Section";

const MealItems = () =>
mealItems.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
//move this to a stateless meal container component

const Meals = (props) => {
  return (
        <Section>
            <MealItems />
       </Section>
  )
};

export default Meals;
