import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { Fragment, useState } from "react"

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
    <Fragment className="new-expense">
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
      {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>}
    </Fragment>
  )
}

export default NewExpense
