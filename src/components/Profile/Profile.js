import jwtDecode from 'jwt-decode';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getUserToken } from '../../store/actions/authentication.actions'
import styles from './Profile.module.css'
import Loader from '../UI/Loader'

const Profile = (props) => {

  const dispatch = useDispatch()
  const [user, setUser] = useState(undefined)
  const isLoading = useSelector(state => state.ui.isLoading)

  const token = getUserToken('token')
  const decodedToken = jwtDecode(token)

  const fetchUser = useCallback(async () => {
    setUser(await dispatch(getUser(decodedToken.id)))
  }, [dispatch, decodedToken.id])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.card}>
        <img src={user?.data?.avatar || ''} alt='profile' className={styles['profile-picture']} />
        <label htmlFor="email">Email</label>
        <input id='email' type='email' readOnly placeholder={user?.data?.user?.email || ''} />
        <label htmlFor="username">Username</label>
        <input id='username' type='text' readOnly placeholder={user?.data?.user?.username || ''} />
      </div>
    </>
  )
}

export default Profile
