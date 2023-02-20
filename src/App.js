import './App.css';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  const expenses = [
    { date: new Date(2020, 8, 20), title: "First", amount: 234 },
    { date: new Date(2019, 4, 24), title: "Second", amount: 3291 },
    { date: new Date(2017, 2, 25), title: "Third", amount: 98 }
  ]

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
