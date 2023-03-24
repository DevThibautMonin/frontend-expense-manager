import axios from "axios"
import jwtDecode from "jwt-decode"
import { getUserToken } from "./authentication.service"

const url = 'http://localhost:4500'

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
