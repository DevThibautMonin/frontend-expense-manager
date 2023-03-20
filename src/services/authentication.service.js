import axios from "axios"

const url = 'http://localhost:4500'

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${url}/authentication/login`, {
      email: email,
      password: password
    })
    localStorage.setItem('token', response.data.token)
    return response.status
  } catch (error) {
    return error.response.status
  }

}

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
