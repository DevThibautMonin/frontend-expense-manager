import "./ExpenseItem.css"

export default function ExpenseItem() {

  const expenseDate = new Date(2020, 2, 24)
  const expenseTitle = "Azure Subscription"
  const expenseAmount = 500

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}€</div>
      </div>
    </div>
  )
}
