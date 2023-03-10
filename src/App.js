import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const [expenses, setExpenses] = useState([])

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  const getExpensesHandler = async () => {
    const response = await fetch('http://localhost:4500/expense')
    const data = await response.json()

    const transformedExpenses = data.map(data => {
      return {
        id: data._id,
        title: data.name,
        amount: data.amount,
        date: new Date(data.date)
      }
    })
    
    setExpenses(transformedExpenses)
  }

  return (
    <div>
      <button onClick={getExpensesHandler}>Click to fetch</button>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
