import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { date: new Date(2020, 8, 20), title: "First", amount: 234 },
    { date: new Date(2019, 4, 24), title: "Second", amount: 3291 },
    { date: new Date(2017, 2, 25), title: "Third", amount: 98 }
  ]

  return (
    <div>
      <ExpenseItem date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
      <ExpenseItem date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
      <ExpenseItem date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
    </div>
  );
}

export default App;
