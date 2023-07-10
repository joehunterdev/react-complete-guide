import { useState } from 'react';

const BasicForm = (props) => {

  const [firstNameEntered, setFirstNameEntered] = useState(false)

  //instructor has done one for each field
  const [isValid, setIsValid] = useState({})
  // const [isTouched,setIsTouched] = useState(false)
  const [isTouched, setIsTouched] = useState('')



  // const [data,setData] = useState(false)
  //inline implied: its own useState would be overkill
  // const firstNameValid = firstNameEntered.trim() !== '';
  const firstNameEnteredIsValid = (/^([^0-9]*)$/i.test(firstNameEntered))
  const firstNameInputIsInvalid = !firstNameEnteredIsValid && isTouched.includes("firstName");


  let formIsValid = false


  if (firstNameEntered) {
    formIsValid = true
  }

  //also do touch

  //check for touch

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    //post this data

    if (formIsValid) {
      console.log("go fetch")
    }

    if (!firstNameEntered) {
      formIsValid = false
    }

    //reset
    setFirstNameEntered('')
    setIsTouched(false);

  }

  //
  const firstNameChangeHandler = (event) => {

    setFirstNameEntered(event.target.value);

    setIsValid(...event.target.id)
  }
  // const test = isValid.filter(t => t !== 'firstName')

  // //This is a case for reducer () 
  // const changeHandler = (event) => {
  //   const firstNameEnteredIsValid = (/^([^0-9]*)$/i.test(firstNameEntered))

  //   switch (event.target.id) {

  //     case "lastName":

  //       (/^([^0-9]*)$/i.test(event.target.value)) ? setIsValid([event.target.id]) : setIsValid((current) => current.filter(current) !== event.target.id)



  //       break;



  //     case "email":

  //       (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) ? setIsValid([...prevState,event.target.id]) : setIsValid((current) => current.filter(current) !== event.target.id)

  //       break;

  //     default:

  //   }
  //   // keep all other key-value pairs
  //   // update the value of specific key
  // }



  const blurHandler = (event) => {
    // init = {inputId:''}
    setIsTouched(event.target.id);
    // console.log(isTouched === "firstName")

  }

  // Generic Change handler =?

  // const onChangeHandler = (event) => {

  //   setData({name:event.target.name,value: event.target.value})

  // }

  const className = formIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form>
      <div className='control-group'>
        <div className={firstNameInputIsInvalid ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' onBlur={blurHandler} onChange={firstNameChangeHandler} />
          {isTouched.includes("firstName") && !firstNameEnteredIsValid && <p> Firstname is empty or invalid</p>}
        </div>
        <div className={isTouched.lastName ? 'form-control invalid' : 'form-control'}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={changeHandler} onBlur={blurHandler} />
          {/* {isTouched && !isValid.includes("lastName") &&  <p> Firstname is empty or invalid</p>} */}
        </div>
      </div>
      <div className={isTouched.includes("email") ? 'form-control invalid' : 'form-control'}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' onChange={changeHandler} onBlur={blurHandler} />
      </div>
      <div className='form-actions'>
        <button onSubmit={submitHandler} disabled={formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

/*
  const [isValid,setIsValid] = useState(false);
  const [isChanged,setIsChanged] = useState(false);
*/