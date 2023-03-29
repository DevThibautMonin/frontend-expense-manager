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
  const [isEmailTouched, setIsEmailTouched] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [isPasswordTouched, setIsPasswordTouched] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const isLoading = useSelector(state => state.ui.isLoading)
  const error = useSelector(state => state.ui.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isEmailValid = emailInput.trim() !== '' && emailInput.includes('@')
  const isEmailInputInvalid = !isEmailValid && isEmailTouched

  const isPasswordValid = passwordInput.trim().length >= 8
  const isPasswordInputInvalid = !isPasswordValid && isPasswordTouched

  useEffect(() => {
    const identifier = setTimeout(() => {
      if (isEmailValid && isPasswordValid) {
        setIsFormValid(true)
      } else {
        setIsFormValid(false)
      }
    }, 500)

    return () => {
      clearTimeout(identifier)
    }
  }, [isEmailValid, isPasswordValid])

  const emailChangeHandler = (event) => {
    setEmailInput(event.target.value)
    setIsEmailTouched(true)
  }

  const emailInputBlurHandler = () => {
    setIsEmailTouched(true)
  }

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value)
    setIsPasswordTouched(true)
  }

  const passwordInputBlurHandler = () => {
    setIsPasswordTouched(true)
  }

  const submitLoginHandler = async (event) => {
    event.preventDefault()
    dispatch(login(emailInput, passwordInput, navigate))
  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={isEmailInputInvalid ? styles.invalid : ''} id="email" type="email" onChange={emailChangeHandler} onBlur={emailInputBlurHandler} placeholder="john.doe@email.com" />
      {isEmailInputInvalid && <LoginError errorMessage={"Please enter a valid email"} />}
      <label htmlFor="password">Password</label>
      <input className={isPasswordInputInvalid ? styles.invalid : ''} id="password" type="password" onChange={passwordChangeHandler} onBlur={passwordInputBlurHandler} placeholder='********' />
      {isPasswordInputInvalid && <LoginError errorMessage={"Please enter a valid password"} />}
      {error && <LoginError errorMessage={error.message} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      {!error && isLoading && <Loader />}
      <Button type="submit" className={!isFormValid ? styles.disabled : ''}>Login</Button>
    </form>
  )
}

export default LoginForm
