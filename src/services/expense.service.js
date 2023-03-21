import axios from "axios"
import jwtDecode from "jwt-decode"
import { getUserToken } from "./authentication.service"

const url = 'http://localhost:4500'

export const getExpenses = async () => {

  try {
    const response = await axios.get(`${url}/expense`, {
      headers: { 'Authorization': getUserToken() }
    })
    return response.data
  } catch (error) {
    return error
  }

}

export const getExpensesByUser = async () => {

  const token = getUserToken()
  const decodedToken = jwtDecode(getUserToken())
  const userId = decodedToken.payload.id

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
    const response = await axios.post(`${url}/expense`, expense, {
      headers: { 'Authorization': getUserToken() }
    })
    return response
  } catch (error) {
    return error
  }

}

export const deleteExpense = async (expenseId) => {
  try {
    const response = await axios.delete(`${url}/expense/${expenseId}`, {
      headers: { 'Authorization': getUserToken() }
    })
    return response
  } catch (error) {
    return error
  }
}
