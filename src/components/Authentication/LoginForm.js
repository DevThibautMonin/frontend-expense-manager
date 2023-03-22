import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { login } from "../../services/authentication.service"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'
import LoginError from "./LoginError"

const LoginForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState()
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

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

    const response = await login(emailInput, passwordInput)

    if (response === 404) {
      setError({
        message: "This user doesn't exists. Please verify your email and password."
      })
    } else {
      navigate('/expenses')
    }

  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={error ? styles.invalid : ''} id="email" type="email" onChange={emailChangeHandler} placeholder="john.doe@email.com" />
      <label htmlFor="password">Password</label>
      <input className={error ? styles.invalid : ''} id="password" type="password" onChange={passwordChangeHandler} />
      {error && <LoginError errorMessage={error.message} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      <Button type="submit" className={!isFormValid ? styles.disabled : ''}>Login</Button>
    </form>
  )
}

export default LoginForm
