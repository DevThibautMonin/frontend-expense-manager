import styles from "./ExpenseForm.module.css"
import { useRef } from "react"
import { createExpense } from "../../services/expense.service"
import Button from "../UI/Button"
import jwtDecode from "jwt-decode"

const ExpenseForm = (props) => {

  const titleRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()
  const categoryRef = useRef()

  const submitHandler = async (event) => {
    event.preventDefault()

    const decodedToken = jwtDecode(localStorage.getItem('token'))
    const title = titleRef.current.value
    const price = priceRef.current.value
    const date = dateRef.current.value
    const category = categoryRef.current.value

    const expenseData = {
      title: title,
      amount: +price,
      date: new Date(date),
      userId: decodedToken.payload.id,
      category: category
    }

    const newExpense = await createExpense(expenseData)

    const expenseDataWithId = {
      id: newExpense.data.expense._id,
      title: newExpense.data.expense.title,
      amount: +newExpense.data.expense.amount,
      date: new Date(newExpense.data.expense.date),
      userId: newExpense.data.expense.userId
    }

    props.onAddExpense(expenseDataWithId)

    titleRef.current.value = ''
    priceRef.current.value = ''
    dateRef.current.value = ''
    categoryRef.current.value = ''

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
            <select ref={categoryRef}>
              <option value="Default">No category</option>
              <option value="Food">Food</option>
            </select>
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
