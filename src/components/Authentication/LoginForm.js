import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'
import LoginError from "./LoginError"
import { useDispatch, useSelector } from "react-redux"
import Loader from '../UI/Loader'
import { useNavigate } from "react-router"
import { login } from "../../store/actions/authentication.actions"
import { uiActions } from "../../store/slices/ui.slice"

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
    setIsEmailTouched(true)
    if (isEmailInputInvalid) {
      dispatch(uiActions.setError("Please provide a valid email."))
    } else {
      dispatch(uiActions.setError(null))
    }
  }

  const emailInputBlurHandler = () => {
    setIsEmailTouched(true)
  }

  const passwordChangeHandler = (event) => {
    setPasswordInput(event.target.value)
    setIsPasswordTouched(true)
    if (isPasswordInputInvalid) {
      dispatch(uiActions.setError("Please provide a valid password."))
    } else {
      dispatch(uiActions.setError(null))
    }
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
      <label htmlFor="password">Password</label>
      <input className={isPasswordInputInvalid ? styles.invalid : ''} id="password" type="password" onChange={passwordChangeHandler} onBlur={passwordInputBlurHandler} placeholder='********' />
      {error && <LoginError errorMessage={error} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      {!error && isLoading && <Loader />}
      <Button type="submit" className={!isFormValid ? styles.disabled : ''}>Login</Button>
    </form>
  )
}

export default LoginForm
