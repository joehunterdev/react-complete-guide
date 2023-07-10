// import { useState } from 'react';
import useInput from '../hooks/use-input';
import { useState } from 'react';
//rules for validation
const BasicForm = (props) => {

  const [isSubmited, setIsSubmited] = useState(false)
  // const { reset: reset } = useInput(/^([^0-9]*)$/i)
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    isTouched: firstNameIsTouched,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    resetFirstName } = useInput(/^([^0-9]*)$/i)
  //= useInput(value => value.trim() !== '')

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    isTouched: lastNameIsTouched,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    resetLastName } = useInput(/^([^0-9]*)$/i)

  const {
    value: emailValue,
    isValid: emailIsValid,
    isTouched: emailIsTouched,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetEmail } = useInput(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)


  let formIsValid = false

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {

    formIsValid = true

  }

  const submitHandler = (e) => {

    e.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return
    }

    if (formIsValid) {
      formIsValid = true;
      setIsSubmited(true);
    }

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  return (

    <form>
      <div className='control-group'>
        <div className={!firstNameIsValid && firstNameIsTouched ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' value={firstNameValue} onBlur={firstNameBlurHandler} onChange={firstNameChangeHandler} />
          {!firstNameIsValid && <p> First name is invalid</p>}
        </div>
        <div className={!lastNameIsValid && lastNameIsTouched ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' value={lastNameValue} onBlur={lastNameBlurHandler} onChange={lastNameChangeHandler} />
          {!lastNameIsValid && <p> Last name is invalid</p>}
        </div>
        <div className={!emailIsValid && emailIsTouched ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='email'>Email Name</label>
          <input type='text' id='email' value={emailValue} onBlur={emailBlurHandler} onChange={emailChangeHandler} />
          {!emailIsValid && emailIsTouched && <p> Email is invalid</p>}
        </div>
      </div>
      <div>
        <button onClick={submitHandler} disabled={!formIsValid}>Submit</button>
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>{isSubmited && <span>Thanks for submitting</span>} </h1>
      </div>
    </form>
  );
};

export default BasicForm;

/*
  const [isValid,setIsValid] = useState(false);
  const [isChanged,setIsChanged] = useState(false);
*/


  // //firstName
  // const [firstNameEntered, setFirstNameEntered] = useState(false)
  // const [firstNameIsTouched, setFirstNameIsTouched] = useState(false)

  //  //validation
  // const firstNameEnteredIsValid = (/^([^0-9]*)$/i.test(firstNameEntered))
  // const firstNameInputIsInvalid = !firstNameEnteredIsValid && firstNameIsTouched;

  // //lastName
  // const [lastNameEntered, setLastNameEntered] = useState(false)
  // const [lastNameIsTouched, setLastNameIsTouched] = useState(false)

  //  //validation
  // const lastNameEnteredIsValid = (/^([^0-9]*)$/i.test(lastNameEntered))
  // const lastNameInputIsInvalid = !lastNameEnteredIsValid && lastNameIsTouched;

  // //email
  // const [emailEntered, setEmailEntered] = useState(false)
  // const [emailIsTouched, setEmailIsTouched] = useState(false)

  //  //validation
  // const emailEnteredIsValid = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailEntered))
  // const emailInputIsInvalid = !emailEnteredIsValid && emailIsTouched;


  // let formIsValid = false


  // if (firstNameEnteredIsValid && lastNameEnteredIsValid && emailEnteredIsValid) {
  //   formIsValid = true
  // }

  // //submit handler
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   //post this data

  //   if (formIsValid) {
  //     console.log("go fetch")
  //   }

  // if (!firstNameEnteredIsValid || !lastNameEnteredIsValid || !emailEnteredIsValid) {
  //   return
  // }
  //   //reset
  //   setFirstNameEntered('')
  //   setFirstNameIsTouched(false);

  //   setLastNameEntered('')
  //   setLastNameIsTouched(false);

  //   setEmailEntered('')
  //   setEmailIsTouched(false);
  // }

  // //Hnadlers
  // const firstNameChangeHandler = (event) => {

  //   setFirstNameEntered(event.target.value);
  // }


  // const firstNameBlurHandler = (event) => {
  //   setFirstNameIsTouched(true);
  // }

  // const lastNameChangeHandler = (event) => {

  //   setLastNameEntered(event.target.value);
  // }


  // const lastNameBlurHandler = (event) => {
  //   setLastNameIsTouched(true);
  // }


  // const emailChangeHandler = (event) => {

  //   setEmailEntered(event.target.value);
  // }


  // const emailBlurHandler = (event) => {
  //   setEmailIsTouched(true);
  // }
