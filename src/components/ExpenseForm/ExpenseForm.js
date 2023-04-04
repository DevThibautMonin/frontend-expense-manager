import styles from "./ExpenseForm.module.css"
import { useRef } from "react"
import { changeFormCategory, createExpense } from "../../store/actions/expense.actions"
import Button from "../UI/Button"
import jwtDecode from "jwt-decode"
import CategoryFilter from '../ExpensesFilters/CategoryFilter'
import { useDispatch, useSelector } from "react-redux"

const ExpenseForm = (props) => {

  const titleRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()
  const dispatch = useDispatch()
  const formCategory = useSelector(state => state.expense.formCategory)
  const defaultDate = new Date().toISOString().substring(0, 10)

  const submitHandler = async (event) => {
    event.preventDefault()

    const decodedToken = jwtDecode(localStorage.getItem('token'))
    const title = titleRef.current.value
    const price = priceRef.current.value
    const date = dateRef.current.value

    const expenseData = {
      title: title,
      amount: +price,
      date: date,
      userId: decodedToken.payload.id,
      category: formCategory
    }

    dispatch(createExpense(expenseData))

    titleRef.current.value = ''
    priceRef.current.value = ''
    dateRef.current.value = defaultDate
    dispatch(changeFormCategory('Default'))

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
            <CategoryFilter type='form' />
          </div>
          <div className={styles['form__control']}>
            <label>Date</label>
            <input type="date" defaultValue={defaultDate} ref={dateRef} required />
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
