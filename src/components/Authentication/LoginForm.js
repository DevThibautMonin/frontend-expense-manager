import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { login } from "../../services/authentication.service"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'
import LoginError from "./LoginError"

const LoginForm = () => {
  const navigate = useNavigate()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoginValid, setIsLoginValid] = useState(true)
  const [error, setError] = useState()

  const inputsAreEmpty = (email, password) => {
    const emailIsEmpty = !email || email.trim().length === 0
    const passwordIsEmpty = !password || password.trim().length === 0

    return emailIsEmpty || passwordIsEmpty
  }

  const submitLoginHandler = async (event) => {
    event.preventDefault()

    if (inputsAreEmpty(emailRef.current.value, passwordRef.current.value)) {
      setIsLoginValid(false)
      setError({
        message: "Email and password can't be empty values."
      })
    } else {
      const response = await login(emailRef.current.value, passwordRef.current.value)
      console.log(response);

      if (response === 404) {
        setError({
          message: "This user doesn't exists. Please verify your email and password."
        })
      } else {
        navigate('/expenses')
      }
    }

  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={!isLoginValid ? styles.invalid : ''} id="email" type="text" placeholder="john.doe@email.com" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input className={!isLoginValid ? styles.invalid : ''} id="password" type="password" ref={passwordRef} />
      {!isLoginValid && <LoginError errorMessage={error.message} />}
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm
