import styles from './LoginError.module.css'

const LoginError = (props) => {
  return (
    <span className={styles.error}>{props.errorMessage}</span>
  )
}

export default LoginError
