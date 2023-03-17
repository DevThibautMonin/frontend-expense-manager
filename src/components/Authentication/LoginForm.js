import { useRef, useState } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { login } from "../../services/authentication.service"
import styles from './LoginForm.module.css'
import Button from '../UI/Button'

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
      <input className={error ? styles.invalid : ''} id="email" type="text" placeholder="john.doe@email.com" ref={emailRef} />
      <label htmlFor="password">Password</label>
      <input className={error ? styles.invalid : ''} id="password" type="password" ref={passwordRef} />
      <p>Don't have an account ? <Link to='/register'>Register</Link></p>
      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm
