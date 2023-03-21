import axios from "axios"
import jwtDecode from "jwt-decode"

const url = 'http://localhost:4500'

export const getExpenses = async (token) => {

  try {
    const response = await axios.get(`${url}/expense`, {
      headers: { 'Authorization': token }
    })
    return response.data
  } catch (error) {
    return error
  }

}

export const getExpensesByUser = async (token) => {

  const decodedToken = jwtDecode(token)
  const userId = decodedToken.id

  try {
    const response = await axios.get(`${url}/expense/${userId}`, {
      headers: { 'Authorization': token }
    })
    return response.data
  } catch (error) {
    return error
  }
}

export const createExpense = async (expense) => {

  try {
    const response = await axios.post(`${url}/expense`, expense)
    return response
  } catch (error) {
    return error
  }

}

export const deleteExpense = async (expenseId) => {
  try {
    const response = await axios.delete(`${url}/expense/${expenseId}`)
    return response
  } catch (error) {
    return error
  }
}
