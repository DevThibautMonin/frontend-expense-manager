import "./ExpenseForm.css"
import { useRef, useState } from "react"
import { createExpense } from "../../services/expense.service"
import Button from "../UI/Button"

const ExpenseForm = (props) => {

  const [isEditing, setIsEditing] = useState(false)
  const titleRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const title = titleRef.current.value
    const price = priceRef.current.value
    const date = dateRef.current.value

    const expenseData = {
      title: title,
      amount: +price,
      date: new Date(date)
    }

    createExpense(expenseData)
    props.onAddExpense(expenseData)
    setIsEditing(false)

    titleRef.current.value = ''
    priceRef.current.value = ''
    dateRef.current.value = ''

  }

  const toggleEditingHandler = () => {
    setIsEditing((prevState) => !prevState)
  }

  return (
    <>
      {isEditing && <form onSubmit={submitHandler} className="expense-form">
        <div className="form__controls">
          <div className="form__control">
            <label>Title</label>
            <input type="text" ref={titleRef} required/>
          </div>
          <div className="form__control">
            <label>Price</label>
            <input type="number" min="0.01" step="0.01" ref={priceRef} required/>
          </div>
          <div className="form__control">
            <label>Date</label>
            <input type="date" ref={dateRef} required/>
          </div>
        </div>
        <div className="form__actions">
          <Button type="button" onClick={toggleEditingHandler}>Cancel</Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>}
      {!isEditing && <Button onClick={toggleEditingHandler}>Add new expense</Button>}
    </>
  )
}

export default ExpenseForm
