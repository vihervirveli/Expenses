import './NewExpense.css'
import NewExpenseForm from './NewExpenseForm';
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
  };
  props.onAddExpense(expenseData);
  };

  return <div className='new-expense'>
    <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  </div>
};
export default NewExpense;