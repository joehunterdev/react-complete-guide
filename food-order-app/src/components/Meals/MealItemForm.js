import 'bootstrap/dist/css/bootstrap.css';
import React,{useState} from 'react';
const MealItemForm = ({id}) => {

    [amount,setAmount] = useState(0)

    const submitHandler = (event) => {
        event.preventDefault();
    
        const mealData = {id,amount:amount};
    
        props.onSaveOrderData(expenseData);
        

      };
    const  amountHandler  = (event) => {
            setAmount(event.target.value)
     }
    const addToCartHandler = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="container">
            <form>
                <div className="mb-3 row">
                    <label for="inputName" className="col-8 col-form-label">Amount</label>
                    <div className="col-2">
                        <input type="number"  onChange={amountHandler} className="form-control" name="amount"  id="amount"/>
                    </div>
                </div>
                <div className="mb-3 row">
                         <button type="submit" className="btn btn-primary">Add</button>
                         {/* <Button onClick={addToCartHandler} subClass="primary" >Add To Cart</Button> */}

                 </div>
            </form>
        </div>
        )   
}

export default MealItemForm;