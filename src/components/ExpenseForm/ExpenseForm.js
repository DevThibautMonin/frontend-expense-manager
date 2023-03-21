import styles from "./ExpenseForm.module.css"
import { useRef, useState } from "react"
import { createExpense } from "../../services/expense.service"
import Button from "../UI/Button"
import jwtDecode from "jwt-decode"
import CategoryFilter from '../ExpensesFilters/CategoryFilter'

const ExpenseForm = (props) => {

  const titleRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()
  const [categoryFilter, setCategory] = useState()

  const categoryFilterHandler = (category) => {
    setCategory(category)
  }

  const submitHandler = async (event) => {
    event.preventDefault()

    const decodedToken = jwtDecode(localStorage.getItem('token'))
    const title = titleRef.current.value
    const price = priceRef.current.value
    const date = dateRef.current.value

    const expenseData = {
      title: title,
      amount: +price,
      date: new Date(date),
      userId: decodedToken.payload.id,
      category: categoryFilter
    }

    const newExpense = await createExpense(expenseData)

    const expenseDataWithId = {
      id: newExpense.data.expense._id,
      title: newExpense.data.expense.title,
      amount: +newExpense.data.expense.amount,
      date: new Date(newExpense.data.expense.date),
      userId: newExpense.data.expense.userId,
      category: newExpense.data.expense.category
    }

    props.onAddExpense(expenseDataWithId)

    titleRef.current.value = ''
    priceRef.current.value = ''
    dateRef.current.value = ''
    setCategory('')

  }

  return (
    <>
      <form onSubmit={submitHandler} className={styles['expense-form']}>
        <div className={styles['form__controls']}>
          <div className={styles['form__control']}>
            <label>Title</label>
            <input type="text" ref={titleRef} required />
          </div>
          <div className={styles['form__control']}>
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" ref={priceRef} required />
          </div>
          <div className={styles['form__control']}>
            <label>Category</label>
            <CategoryFilter onCategoryFilterChange={categoryFilterHandler} />
          </div>
          <div className={styles['form__control']}>
            <label>Date</label>
            <input type="date" ref={dateRef} required />
          </div>
        </div>
        <div className={styles['form__actions']}>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </>
  )
}

export default ExpenseForm
