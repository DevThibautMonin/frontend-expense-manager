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

  const submitLoginHandler = (event) => {
    event.preventDefault()

    if (emailRef.current.value === '' || emailRef.current.value === '') {
      setIsLoginValid(false)
      setError({
        message: "Email and password can't be empty values."
      })
    }

    const request = login(emailRef.current.value, passwordRef.current.value)
    request.then(() => {
      emailRef.current.value = ''
      passwordRef.current.value = ''
      navigate('/expenses')
    })

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
