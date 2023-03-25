import axios from "axios"
import { expenseActions } from "../slices/expense.slice"
import { getUserToken } from "../../services/authentication.service"
import { uiActions } from "../slices/ui.slice"
import jwtDecode from "jwt-decode"

const url = 'http://localhost:4500'
let firstLoad = true

export const getExpensesData = (category) => {
  return async (dispatch) => {
    const getData = async () => {
      const decodedToken = jwtDecode(getUserToken())
      const userId = decodedToken.payload.id
      const response = await axios.get(`${url}/expense/${userId}/${category}`, {
        headers: { 'Authorization': getUserToken() }
      })
      return await response.data
    }

    try {
      if (firstLoad) {
        firstLoad = false
        dispatch(uiActions.setIsLoading(true))
      }
      dispatch(uiActions.setError({}))
      const expenseData = await getData()

      const transformedExpenses = expenseData.map(data => {
        return {
          id: data._id,
          title: data.title,
          amount: data.amount,
          category: data.category,
          date: data.date
        }
      })

      dispatch(expenseActions.getExpenses({ items: transformedExpenses }))
      dispatch(uiActions.setIsLoading(false))
    } catch (error) {
      dispatch(uiActions.setError({ title: error.response.data }))
    }
  }
}

export const createExpense = (expense) => {
  return async (dispatch) => {
    const create = async () => {
      const response = await axios.post(`${url}/expense`, expense, {
        headers: { 'Authorization': getUserToken() }
      })
      return await response.data
    }

    try {
      const expense = await create()

      const expenseDataWithId = {
        id: expense.expense._id,
        title: expense.expense.title,
        amount: +expense.expense.amount,
        date: expense.expense.date,
        userId: expense.expense.userId,
        category: expense.expense.category
      }

      dispatch(expenseActions.createExpense({ expense: expenseDataWithId }))
    } catch (error) {
      console.log(error);
      dispatch(uiActions.setError({ title: error.response.message }))
    }

  }
}

export const deleteExpense = (expenseId) => {
  return async (dispatch) => {
    const deleteExpense = async () => {
      const response = await axios.delete(`${url}/expense/${expenseId}`, {
        headers: { 'Authorization': getUserToken() }
      })
      return response
    }

    try {
      await deleteExpense()
      dispatch(expenseActions.deleteExpense({ expenseId: expenseId }))
    } catch (error) {
      console.log(error)
    }

  }
}

export const changeFilterCategory = (filterCategory) => {
  return (dispatch) => {
    dispatch(expenseActions.changeFilterCategory({ filterCategory: filterCategory }))
  }
}

export const changeFormCategory = (formCategory) => {
  return (dispatch) => {
    dispatch(expenseActions.changeFormCategory({ formCategory: formCategory }))
  }
}
