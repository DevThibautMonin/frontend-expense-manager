import "./ExpenseDate.css"

const ExpenseDate = (props) => {

  const transformedDate = new Date(props.date)

  const month = transformedDate.toLocaleString("fr-FR", { month: "long" })
  const year = transformedDate.getFullYear()
  const day = transformedDate.toLocaleString("fr-FR", { day: "2-digit" })

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  )
}

export default ExpenseDate
