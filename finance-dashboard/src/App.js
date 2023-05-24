import NewExpense from './components/NewExpense/NewExpense'
import Expenses from "./components/Expenses/Expenses";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2023, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
      console.log("im in app.js");
      console.log(expenses)
  }

  return (
    <div>
       <NewExpense onAddExpense={addExpenseHandler} />
       <Expenses expenses={expenses}/>
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Lets Get Started"),
  //   React.createElement(Expenses,{items:expenses}) //Pass just component and props
  // )
}

export default App;
