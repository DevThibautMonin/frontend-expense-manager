import { Link } from "react-router-dom"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'
import LoginError from "./LoginError"
import { useDispatch, useSelector } from "react-redux"
import Loader from '../UI/Loader'
import { useNavigate } from "react-router"
import { login } from "../../store/actions/authentication.actions"
import useInput from "../../hooks/use-input"

const LoginForm = () => {
  const { value: emailValue, isValueValid: isEmailValid, hasError: emailHasError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailBlurHandler } = useInput(value => value.trim() !== '' && value.includes('@'))
  const { value: passwordValue, isValueValid: isPasswordValid, hasError: passwordHasError, valueChangeHandler: passwordChangeHandler, inputBlurHandler: passwordBlurHandler } = useInput(value => value.trim().length >= 8)

  const isLoading = useSelector(state => state.ui.isLoading)
  const error = useSelector(state => state.ui.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let isFormValid = false

  if (isEmailValid && isPasswordValid) {
    isFormValid = true
  }

  const submitLoginHandler = async (event) => {
    event.preventDefault()
    dispatch(login(emailValue, passwordValue, navigate))
  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={emailHasError ? styles.invalid : ''} id="email" type="email" onChange={emailChangeHandler} onBlur={emailBlurHandler} placeholder="john.doe@email.com" />
      {emailHasError && <LoginError errorMessage={"Please enter a valid email"} />}
      <label htmlFor="password">Password</label>
      <input className={passwordHasError ? styles.invalid : ''} id="password" type="password" onChange={passwordChangeHandler} onBlur={passwordBlurHandler} placeholder='********' />
      {passwordHasError && <LoginError errorMessage={"Please enter a valid password"} />}
      {error && <LoginError errorMessage={error.message} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      {!error && isLoading && <Loader />}
      <Button type="submit" className={!isFormValid ? styles.disabled : ''}>Login</Button>
    </form>
  )
}

export default LoginForm
