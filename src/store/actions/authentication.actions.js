import { uiActions } from "../slices/ui.slice"
import axios from "axios"

const url = 'http://localhost:4500'

export const register = (username, email, password, navigate) => {
  return async (dispatch) => {
    const register = async () => {
      const response = await axios.post(`${url}/authentication/register`, {
        username: username,
        email: email,
        password: password
      })
      return response
    }

    try {
      dispatch(uiActions.setIsLoading(true))
      const response = await register()
      dispatch(uiActions.setIsLoading(false))
      navigate('/')
      return response
    } catch (error) {
      dispatch(uiActions.setError(error.response.data))
    }
  }
}

export const login = (email, password, navigate) => {

  return async (dispatch) => {
    const login = async () => {
      const response = await axios.post(`${url}/authentication/login`, {
        email: email,
        password: password
      })
      localStorage.setItem('token', response.data.token)
      return response
    }

    try {
      dispatch(uiActions.setIsLoading(true))
      const response = await login()
      dispatch(uiActions.setIsLoading(false))
      navigate('/expenses')
      return response
    } catch (error) {
      dispatch(uiActions.setError(error.response.data))
    }

  }
}

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('token')
    dispatch(uiActions.setError(null))
  }
}

export const getUserToken = () => {
  return localStorage.getItem('token')
}
