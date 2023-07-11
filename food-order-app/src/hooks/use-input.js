
import { useState } from "react";
const useInput = (regex) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [valueIsTouched, setValueIsTouched] = useState(false);

    const valueIsValid = (regex.test(enteredValue))
    //    const valueIsValid =  validationFunction(enteredValue)

    const valueBlurHandler = (e) => {
        setValueIsTouched(true)
    }

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const reset = () => {
        setEnteredValue('');
        setValueIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid, 
        isTouched: valueIsTouched, 
        valueChangeHandler, 
        valueBlurHandler,
        reset   
    }
}

export default useInput