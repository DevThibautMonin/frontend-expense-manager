import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  const [currentDate, setCurrentDate] = useState(new Date().getFullYear().toString())

  const dateChangeHandler = (selectedDate) => {
    setCurrentDate(selectedDate)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === currentDate
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={currentDate} onDateChange={dateChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
