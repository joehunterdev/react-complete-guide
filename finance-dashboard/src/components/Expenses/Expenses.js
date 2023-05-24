import React,{useState} from "react";
import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";


//Alternative Syntax
const Expenses = (props) => {
    //Step 3: Define state + default
    const [inputDateFilter,setFilterDate] = useState(false)

   //Step 1: Setup function recieved by child
    // pass param could be called anything
   const saveFilterDataHandler = (inputFilterData) => {

     const filterData = {inputFilterData}

     //Step 3.5: Define state + default
      setFilterDate(filterData)

   }

    return (
    <div className="expenses">
      <ExpensesFilter onSaveFilterData={saveFilterDataHandler} />
      <ExpenseItem title={props.expenses[0].title} id={props.expenses[0].id} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[1].title} id={props.expenses[1].id} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
      <ExpenseItem title={props.expenses[2].title} id={props.expenses[2].id} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
    </div>
    )
}

export default Expenses