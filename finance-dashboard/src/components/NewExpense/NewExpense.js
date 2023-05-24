import React  from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

function NewExpense(props){

    const saveExpenseDataHandler = (inputExpenseData) => {

        const expenseData = {
            ...inputExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData)//passing up as argument
    }

    return(
        <div className='new-expense'>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> 
         </div>
    )

}

export default NewExpense