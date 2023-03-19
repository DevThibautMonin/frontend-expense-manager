import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteExpense } from "../../services/expense.service"

const ExpenseItem = (props) => {

  const deleteExpenseHandler = () => {
    deleteExpense(props.id)
    props.deleteExpenseHandler(props.id)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
        <FontAwesomeIcon icon={faEdit} onClick={deleteExpenseHandler} />
        <FontAwesomeIcon icon={faTrash} onClick={deleteExpenseHandler} />
      </div>
    </Card>
  )
}

export default ExpenseItem
