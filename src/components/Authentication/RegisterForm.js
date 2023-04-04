import Button from "../UI/Button"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import styles from './RegisterForm.module.css'
import { useDispatch } from "react-redux"
import { register } from "../../store/actions/authentication.actions"

const RegisterForm = (props) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmationPasswordRef = useRef()

  const submitRegisterHandler = async (event) => {
    event.preventDefault()
    dispatch(register(usernameRef.current.value, emailRef.current.value, passwordRef.current.value, navigate))
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submitRegisterHandler} className={styles.form}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="john.doe@email.com" ref={emailRef} />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" placeholder="John Doe" ref={usernameRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} placeholder="********" />
        <label htmlFor="password-confirmation">Password confirmation</label>
        <input id="password-confirmation" type="password" ref={confirmationPasswordRef} placeholder="********" />
        <p>Already have an account ? <Link to='/'>Login</Link></p>
        <Button type="submit">Register</Button>
      </form>
    </div>

  )
}

export default RegisterForm
