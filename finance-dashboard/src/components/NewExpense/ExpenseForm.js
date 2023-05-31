import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {


  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputOpenNewExpenseHandler, setOpenNewExpenseHandler] = useState(false);

  const openNewExpenseHandler = (event) => {
      setOpenNewExpenseHandler(true)
  }

  const closeExpenseHandler = (event) => {
      setOpenNewExpenseHandler(false)
  }

  if (!inputOpenNewExpenseHandler) {
    return <button onClick={openNewExpenseHandler}>Add New Expense</button>;
  }


  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);

  };

  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);

  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);

  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveExpenseData(expenseData);
    setInputTitle('');
    setInputAmount('');
    setInputDate('');
  };

    
  
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={inputTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2024-12-31'
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={closeExpenseHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;