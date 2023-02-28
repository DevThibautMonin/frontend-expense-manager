import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import { useState } from 'react'

const Expenses = (props) => {

  const [date, setDate] = useState('2020')

  const dateChangeHandler = (selectedDate) => {
    setDate(selectedDate)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === date
  })

  let expensesContent = <div>No expenses for this year.</div>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />))
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={date} onDateChange={dateChangeHandler} />
      {expensesContent}
    </Card>
  )
}

export default Expenses
