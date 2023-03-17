import styles from './LoginError.module.css'

const LoginError = (props) => {
  return (
    <p className={styles.error}>{props.errorMessage}</p>
  )
}

export default LoginError
