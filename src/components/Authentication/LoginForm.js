import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import { login } from "../../services/authentication.service"
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()

  const submitLoginHandler = (event) => {
    event.preventDefault()

    if (!(emailRef.current.value || emailRef.current.value)) {
      setError(true)
      return
    }

    login(emailRef.current.value, passwordRef.current.value)
    emailRef.current.value = ''
    passwordRef.current.value = ''
    navigate('/expenses')

  }

  return (
    <form onSubmit={submitLoginHandler} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input className={error ? styles.invalid : ''} id="email" type="text" placeholder="john.doe@email.com" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input className={error ? styles.invalid : ''} id="password" type="password" ref={passwordRef} />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
