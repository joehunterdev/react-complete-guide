import Card from '../UI/Card/Card'
import Button from '../UI/Button/Button'
import 'bootstrap/dist/css/bootstrap.css';
import MealItemForm from './MealItemForm'
const MealItem = ({name,price,description}) => {

    const addToCartHandler = () => {
        console.log('clicked')
    }
    
    return ( 
    <Card title={name}>
         <h1 className='card-title pricing-card-title'>{price}<span className='text-body-secondary fw-light'> EUR</span></h1>
            <div className='mt-3 mb-4'>
              <span>{description}</span>
              <MealItemForm />
            </div>
    </Card>
    )

            
}
export default MealItem