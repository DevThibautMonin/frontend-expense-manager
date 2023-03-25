import styles from './Navbar.module.css'
import ReactDOM from "react-dom"
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authentication.actions'

const Navbar = () => {

  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }

  const token = localStorage.getItem('token')
  const decodedToken = jwt_decode(token)

  return (
    <>
      {
        ReactDOM.createPortal(
          <header>
            <nav className={styles.navbar}>
              <div className={styles['navbar-container']}>
                <Link className={styles['navbar-item']}>Dashboard</Link>
                <div className={styles['navbar-right']}>
                </div>
                <div className={styles['navbar-right']}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png" alt='profile' className={styles['profile-picture']} />
                  <span className={styles.username}>{decodedToken.payload.username}</span>
                  <span className={styles.separator}></span>
                  <Link className={styles['navbar-item']} onClick={logoutHandler} to='/'>Logout</Link>
                </div>
              </div>
            </nav>
          </header>,
          document.getElementById('navbar-root')
        )
      }
    </>
  )
}

export default Navbar
