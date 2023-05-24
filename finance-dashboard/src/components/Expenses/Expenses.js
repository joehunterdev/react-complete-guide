import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

//Alternative Syntax to function
const Expenses = (props) => {
  //Step 3: Define state + default
  const [inputDateFilter, setFilterDate] = useState(false);
//   const [expensesFiltered, setFilterDate] = useState(false);

  //Step 1: Setup function recieved by child
  // pass param could be called anything
  const saveFilterDataHandler = (inputFilterYear) => {
    //  const filterYear = {inputFilterYear}

    //Step 3.5: Define state + default
    setFilterDate(inputFilterYear);
    //   console.log(filterYear)
  };

//   const filterExpenses = () => {

//      if(inputDateFilter){

//      } else {

//         props.expenses.filter(expense => expense.date.getUTCFullYear().toString() === inputDateFilter);

//      }


//   }

  //    const date

  return (
    <div className="expenses">
      <ExpensesFilter onSaveFilterData={saveFilterDataHandler} />

      {/* {props.expenses.map(expense =>
             <ExpenseItem
              title={expense.title}
              key={expense.id}
              amount={expense.amount}
              date={expense.date}></ExpenseItem>
              )} */}
      {/* {props.expenses.map((expense) => console.log(typeof inputDateFilter))}
      {console.log(inputDateFilter)} */}
      {/* {console.log())} */}

      {inputDateFilter
        ? props.expenses.filter((expense) => expense.date.getUTCFullYear().toString() === inputDateFilter).map(expense =>
            <ExpenseItem
             title={expense.title}
             key={expense.id}
             amount={expense.amount}
             date={expense.date}></ExpenseItem>
             )
        : props.expenses.map((expense) =>
            <ExpenseItem
             title={expense.title}
             key={expense.id}
             amount={expense.amount}
             date={expense.date}></ExpenseItem>
             )
      }
 
      {/* {inputDateFilter === "all"
        ? props.expenses
        : props.expenses
            .filter(
              (expense) =>
                expense.date.getUTCFullYear().toString() === inputDateFilter
            )
            .map((expense) => (
            console.log(expense.title)
                //   <ExpenseItem
            //     title={expense.title}
            //     key={expense.id}
            //     amount={expense.amount}
            //     date={expense.date}
            //   ></ExpenseItem>
            ))} */}

    </div>
  );
};

export default Expenses;
