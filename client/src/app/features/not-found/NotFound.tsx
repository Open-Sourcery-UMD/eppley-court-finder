import { Link } from 'react-router'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <>
      <h2>404 Not Found</h2>
      <Link to='/'>
        <p className={styles.p}>Back to home</p>
      </Link>
    </>
  )
}