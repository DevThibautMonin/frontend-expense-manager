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
      <ExpenseItem date={props.items[0].date} title={props.items[0].title} amount={props.items[0].amount} />
      <ExpenseItem date={props.items[1].date} title={props.items[1].title} amount={props.items[1].amount} />
      <ExpenseItem date={props.items[2].date} title={props.items[2].title} amount={props.items[2].amount} />
    </Card>
  )
}

export default Expenses
