import { Fragment } from "react"
import { useState, useEffect, useCallback } from 'react'
import Expenses from '../components/Expenses/Expenses'
import NewExpense from '../components/NewExpense/NewExpense'
import { getExpenses } from '../services/expense.service'

const ExpensesPage = () => {

  const [expenses, setExpenses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onRefreshExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const getExpensesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await getExpenses(localStorage.getItem('token'))

      const transformedExpenses = data.map(data => {
        return {
          id: data._id,
          title: data.title,
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
    <Fragment>
      <div>
        <NewExpense onAddExpense={onRefreshExpensesHandler} />
        {!isLoading && <Expenses items={expenses} />}
        {isLoading && <div>Loading...</div>}
        {isLoading && error && <div>{error}</div>}
      </div>
    </Fragment>
  )
}

export default ExpensesPage
