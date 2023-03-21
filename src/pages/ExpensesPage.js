import { Fragment } from "react"
import { useState, useEffect, useCallback } from 'react'
import Expenses from '../components/Expenses/Expenses'
import ExpenseForm from "../components/ExpenseForm/ExpenseForm"
import { getExpensesByUser } from '../services/expense.service'
import Navbar from "../components/UI/Navbar"
import { getUserToken } from '../services/authentication.service'

const ExpensesPage = () => {

  const [expenses, setExpenses] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onRefreshExpensesHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id)
    setExpenses(updatedExpenses)
  }

  const getExpensesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await getExpensesByUser()

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
        <Navbar />
        {!isLoading && <ExpenseForm onAddExpense={onRefreshExpensesHandler} />}
        {!isLoading && <Expenses items={expenses} deleteExpenseHandler={deleteExpense} />}
        {isLoading && <div>Loading...</div>}
        {isLoading && error && <div>{error}</div>}
      </div>
    </Fragment>
  )
}

export default ExpensesPage
