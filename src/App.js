import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  { date: new Date(2020, 8, 20), title: "First", amount: 234 },
  { date: new Date(2019, 4, 24), title: "Second", amount: 3291 },
  { date: new Date(2017, 2, 25), title: "Third", amount: 98 },
  { date: new Date(2021, 7, 29), title: "Fourth", amount: 9321 },
  { date: new Date(2021, 8, 5), title: "Fifth", amount: 182 },
]

const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
