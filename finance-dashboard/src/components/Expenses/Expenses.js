import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

//Alternative Syntax to function
const Expenses = (props) => {

  //Step 3: Define state + default
  const [inputDateFilter, setFilterDate] = useState(false);
  
  //Lifing state Step 1: Setup function recieved by child

  // pass param could be called anything
  const saveFilterDataHandler = (inputFilterYear) => {
    //Step 3.5: Define state + default
    setFilterDate(inputFilterYear);
  };

  const filteredExpenses = () => {

    return  inputDateFilter ? props.expenses.filter((expense) => expense.date.getUTCFullYear().toString() === inputDateFilter) : props.expenses 

  }


  return (
    <div className="expenses">
      <ExpensesFilter onSaveFilterData={saveFilterDataHandler} />
      {filteredExpenses().map((expense) =>
            <ExpenseItem
             title={expense.title}
             key={expense.id}
             amount={expense.amount}
             date={expense.date}></ExpenseItem>
             )}
 
    </div>
  );
};

export default Expenses;
