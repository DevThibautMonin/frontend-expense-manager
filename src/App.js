import { useState, useEffect, useCallback } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

  const [expenses, setExpenses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const getExpensesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:4500/expense')

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

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
      setIsLoading(false)
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    getExpensesHandler()
  }, [getExpensesHandler])

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {!isLoading && <Expenses items={expenses} />}
      {isLoading && <div>Loading...</div>}
      {isLoading && error && <div>{error}</div>}
    </div>
  )
}

export default App
