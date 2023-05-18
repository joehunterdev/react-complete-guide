import React from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
    return (
    <div className="expenses">
      <ExpenseItem title={props.expenses[0].title} id={props.expenses[0].id} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} id={props.expenses[1].id} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} id={props.expenses[2].id} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
    </div>
    )
}

export default Expenses