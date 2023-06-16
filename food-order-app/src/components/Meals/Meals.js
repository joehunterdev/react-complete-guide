import Card from "../UI/Card/Card";
// import DUMMY_MEALS from '../../storage/dummy-meals'
import MealItem from "./MealItem";
import "bootstrap/dist/css/bootstrap.css";
const DUMMY_MEALS = [
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
const MealItems = () =>
  DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      />     
  ));

const Meals = (props) => {
  return (<div className="row row-cols-1 row-cols-md-3 mb-3 text-center"><MealItems/></div>)
};

export default Meals;
