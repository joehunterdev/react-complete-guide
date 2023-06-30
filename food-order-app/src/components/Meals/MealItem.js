
import 'bootstrap/dist/css/bootstrap.css';
import MealItemForm from './MealItemForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood } from '@fortawesome/free-solid-svg-icons'
import CardRounded from '../UI/Card/CardRounded'


const MealItem = ({ id, name, price, description,inputAmount }) => {


  return (

    <CardRounded>
      <div className="col-md-2 col-lg-2 col-xl-2 text-center">
        <FontAwesomeIcon icon={faBowlFood} className='fa-6x' color='grey' />
      </div>
      <div className="col-md-3 col-lg-3 col-xl-3">
        <p className="lead fw-normal mb-2">{name}  </p>
        <p><span className="text-muted">Description: </span> {description} </p>
      </div>
      <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <h5 className="mb-2"> € {price}</h5>
      </div>
      <MealItemForm id={id} inputAmount={inputAmount}></MealItemForm>
    </CardRounded>

  )

}

export default MealItem
