import MealItem from "./MealItem";
import "bootstrap/dist/css/bootstrap.css";
import mealItems from "../../store/meal-items";
import Section from "../UI/Container/Section";
 

const MealItems = () =>{

// const cart = useContext(CartContext);
// console.log(cart)
// let amountInit = cart.items.filter(item => item.id === id).map(i => i.amount)

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
//move this to a stateless meal container component
}
const Meals = (props) => {
  return (
        <Section style={{backgroundColor: '#eee' }}>
            <MealItems />
       </Section>
  )
};

export default Meals;
