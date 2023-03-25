import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'
import LoginError from "./LoginError"
import { useDispatch, useSelector } from "react-redux"
import Loader from '../UI/Loader'
import { useNavigate } from "react-router"
import { login } from "../../store/actions/authentication.actions"

const LoginForm = () => {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)
  const isLoading = useSelector(state => state.ui.isLoading)
  const error = useSelector(state => state.ui.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const identifier = setTimeout(() => {
      setIsFormValid(
        emailInput.includes('@') && passwordInput.trim().length >= 8
      )
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  }, [emailInput, passwordInput])

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value)
  }

  const submitLoginHandler = async (event) => {
    event.preventDefault()
    dispatch(login(emailInput, passwordInput, navigate))
  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={error ? styles.invalid : ''} id="email" type="email" onChange={emailChangeHandler} placeholder="john.doe@email.com" />
      <label htmlFor="password">Password</label>
      <input className={error ? styles.invalid : ''} id="password" type="password" onChange={passwordChangeHandler} placeholder='********'/>
      {error && <LoginError errorMessage={error.message} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      {!error && isLoading && <Loader />}
      <Button type="submit" className={!isFormValid ? styles.disabled : ''}>Login</Button>
    </form>
  )
}

export default LoginForm
