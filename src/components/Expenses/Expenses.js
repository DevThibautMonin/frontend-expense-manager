import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import { useState } from 'react'

const Expenses = (props) => {

  const [date, setDate] = useState('2020')

  const dateChangeHandler = (selectedDate) => {
    setDate(selectedDate)
    console.log(date)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={date} onDateChange={dateChangeHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />))}
    </Card>
  )
}

export default Expenses
