import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"
import Button from '../UI/Button'

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
      {!isEditing && <Button onClick={startEditingHandler}>Add new expense</Button>}
    </div>
  )
}

export default NewExpense
