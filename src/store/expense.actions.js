import axios from "axios"
import { expenseActions } from "./expense.slice"
import { getUserToken } from "../services/authentication.service"
import { uiActions } from "./ui.slice"

const url = 'http://localhost:4500'

export const getExpensesData = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = await axios.get(`${url}/expense`, {
        headers: { 'Authorization': getUserToken() }
      })
      const data = await response.data
      return data
    }

    try {
      dispatch(uiActions.setIsLoading(true))
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
