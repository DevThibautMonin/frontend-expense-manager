import "./ExpenseItem.css"

export default function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>10/02/2023</div>
      <div className="expense-item__description">
        <h2>Subscription renew</h2>
        <div className="expense-item__price">250€</div>
      </div>
    </div>
  )
}
