import "./ExpenseForm.css"
import { useRef, useState } from "react"
import { createExpense } from "../../services/expense.service"
import Button from "../UI/Button"

const ExpenseForm = (props) => {

  const [isEditing, setIsEditing] = useState(false)
  const titleRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const title = titleRef.current.value
    const amount = amountRef.current.value
    const date = dateRef.current.value

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    }

    saveExpenseDataHandler(expenseData)
    createExpense(expenseData)

    titleRef.current.value = ''
    amountRef.current.value = ''
    dateRef.current.value = ''

  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const toggleEditingHandler = () => {
    setIsEditing((prevState) => !prevState)
  }

  return (
    <>
      {isEditing && <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" ref={titleRef} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" ref={amountRef} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2018-01-01" max="2025-12-31" ref={dateRef} />
          </div>
        </div>
        <div className="new-expense__actions">
          <Button type="button" onClick={toggleEditingHandler}>Cancel</Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>}
      {!isEditing && <Button onClick={toggleEditingHandler}>Add new expense</Button>}
    </>
  )
}

export default ExpenseForm
