import React,{useState} from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

   // Step 2: can now extract prop
   const [inputFilter,setInputFilter] = useState(false)

   const dateFilterHandler = (event) => {

      setInputFilter(event.target.value)   
      props.onSaveFilterData(event.target.value)//This param passes back the prop value defined in parent

   }
 
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select  onChange={dateFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;