import { useEffect } from 'react'
import Expenses from '../components/Expenses/Expenses'
import ExpenseForm from "../components/ExpenseForm/ExpenseForm"
import Navbar from "../components/UI/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { getExpensesData } from "../store/expense.actions"
import Error from '../components/UI/Error'
import Loader from '../components/UI/Loader'

const ExpensesPage = () => {

  const dispatch = useDispatch()
  const error = useSelector(state => state.ui.error)
  const isLoading = useSelector(state => state.ui.isLoading)
  const expenses = useSelector(state => state.expense.items)
  const filterCategory = useSelector(state => state.expense.filterCategory)

  useEffect(() => {
    dispatch(getExpensesData(filterCategory))
  }, [filterCategory, dispatch])

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
