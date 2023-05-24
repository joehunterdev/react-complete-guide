import React from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


//Alternative Syntax
const Expenses = (props) => {


    const setInputFilterDate = (inputExpenseData) => {

        // const expenseData = {
        //     ...inputExpenseData,
        //     id:Math.random().toString()
        // }
        // console.log("New " + expenseData)
        props.onChangeFilter(inputExpenseData)//passing up as argument
    }
    return (
    <div className="expenses">
      <ExpensesFilter onInputFilterDate={setInputFilterDate} />
      <ExpenseItem title={props.expenses[0].title} id={props.expenses[0].id} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} id={props.expenses[1].id} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} id={props.expenses[2].id} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
    </div>
    )
}

export default Expenses