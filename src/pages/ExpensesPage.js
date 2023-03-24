import { useState, useEffect, useCallback } from 'react'
import Expenses from '../components/Expenses/Expenses'
import ExpenseForm from "../components/ExpenseForm/ExpenseForm"
import Navbar from "../components/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getExpensesData } from "../store/expense.actions"
import Error from '../components/UI/Error'
import Loader from '../components/UI/Loader'

const ExpensesPage = () => {

  const error = useSelector(state => state.ui.error)
  const isLoading = useSelector(state => state.ui.isLoading)

  // const onRefreshExpensesHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses]
  //   })
  // }

  // const deleteExpense = (id) => {
  //   const updatedExpenses = expenses.filter((expense) => expense.id !== id)
  //   setExpenses(updatedExpenses)
  // }

  const dispatch = useDispatch()
  const expenses = useSelector(state => state.expense.items)

  useEffect(() => {
    dispatch(getExpensesData())
  }, [dispatch])

  return (
    <>
      <div>
        <Navbar />
        {!isLoading && <ExpenseForm />}
        {!isLoading && <Expenses items={expenses} />}
        {isLoading && <Loader />}
        {isLoading && error && <Error title={error.title} />}
      </div>
    </>
  )
}

export default ExpensesPage
