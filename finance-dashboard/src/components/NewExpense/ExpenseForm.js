import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // Individual State approach
    // const [userInput,setUserInput] = useState({
    //     inputTitle:'',
    //     inputAmount:'',
    //     inputDate:''
    // })

    const [inputTitle,setInputTitle] = useState('');
    const [inputAmount,setInputAmount] = useState('')
    const [inputDate,setInputDate] = useState('')

    const titleChangeHandler = (event) => {

        setInputTitle(event.target.value);
      
        //Spread for unpacking
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });
        // Prev State best! keeps state up to date
        // setUserInput((prevState) => { 
        //     return {...prevState,enteredTitle:event.target.value}
        // });

    };

    

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    };


    const dateChangeHandler = (event) => {
        setInputDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });
    };

    const submitHandler = (event) => {

        event.preventDefault();

        const expenseData = {
            title: inputTitle,
            amount:inputAmount,
            date: new Date(inputDate)
        }
        
        props.onSaveExpenseData(expenseData)

        titleChangeHandler('');
        amountChangeHandler('');
        dateChangeHandler('');

    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input type="text" value={inputTitle}   onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                  <label>Amount</label>
                  <input type="number" min="0.1" step="0.01" value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                  <label>Date</label>
                  <input type="date" min="2023-05-23" max="2023-07-24" onChange={dateChangeHandler}  value={inputDate}  />
                </div>
                <div className="new-expense__actions">
                   <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )

}

export default ExpenseForm