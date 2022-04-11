import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  const handleSelectChange = (selectedYear) => {
    //setFilterYear(event.target.value);
    //console.log(event.target.value);
    //console.log(filterYear + "works")
    //console.log("Expenses.js");
    //console.log(selectedYear);
    setFilterYear(selectedYear);
    
  }
  return (
  <div>
    
    <Card className="expenses">
    <ExpensesFilter selected={filterYear} onHandleSelectChange={handleSelectChange} />
    <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}/>
       
      <ExpenseItem 
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem 
       title={props.expenses[2].title}
       amount={props.expenses[2].amount}
       date={props.expenses[2].date}
      />
      <ExpenseItem 
       title={props.expenses[3].title}
       amount={props.expenses[3].amount}
       date={props.expenses[3].date}
      />
</Card>
</div>)
}

export default Expenses;