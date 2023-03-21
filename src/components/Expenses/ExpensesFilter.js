import React from 'react'
import CategoryFilter from '../ExpensesFilters/CategoryFilter'
import YearFiler from '../ExpensesFilters/YearFilter'
import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

  const filterDateHandler = (year) => {
    props.onDateChange(year)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filters</label>
        <CategoryFilter />
        <YearFiler year={props.selected} onYearChange={filterDateHandler} />
      </div>
    </div>
  )
}

export default ExpensesFilter
