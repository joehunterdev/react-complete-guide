import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  // function filteredExpenses(){

  //   return inputDateFilter ? props.expenses.filter((expense) => expense.date.getUTCFullYear().toString() === inputDateFilter) : props.expenses

  // }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === inputDateFilter;
  });
  
  return (
    <div className="expenses">
      <ExpensesFilter onSaveFilterData={saveFilterDataHandler} />
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </div>
  );
};

export default Expenses;
