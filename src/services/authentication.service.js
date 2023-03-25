import axios from "axios"

const url = 'http://localhost:4500'

export const register = async (username, email, password) => {
  try {
    const response = await axios.post(`${url}/authentication/register`, {
      username: username,
      email: email,
      password: password
    })
    return response
  } catch (error) {
    return error.response.status
  }
}

export const getUserToken = () => {
  return localStorage.getItem('token')
}
