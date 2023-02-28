import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const addExpenseHandler = (expense) => {
    
  }

  const expenses = [
    { date: new Date(2020, 8, 20), title: "First", amount: 234 },
    { date: new Date(2019, 4, 24), title: "Second", amount: 3291 },
    { date: new Date(2017, 2, 25), title: "Third", amount: 98 },
    { date: new Date(2012, 7, 29), title: "Fourth", amount: 9321 },
    { date: new Date(2011, 8, 5), title: "Fifth", amount: 182 },
  ]

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
