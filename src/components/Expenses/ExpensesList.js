import ExpenseItem from "./ExpenseItem"
import './ExpensesList.css'

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return (<h2 className="expenses-list__fallback">Found no expenses.</h2>)
  }

  const deleteExpenseHandler = (expenseId) => {
    props.deleteExpenseHandler(expenseId)
  }

  return (
    <li className="expenses-list">
      {
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            category={expense.category}
            deleteExpenseHandler={deleteExpenseHandler}
          />))
      }
    </li>
  )

}

export default ExpensesList
