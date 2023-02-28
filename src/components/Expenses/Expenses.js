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

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={date} onDateChange={dateChangeHandler} />
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}
    </Card>
  )
}

export default Expenses
