import { Link } from 'react-router'
import styles from './Home.module.css'

export default function Home() {

  return (
    <>
      <p>Welcome to Eppley Court Finder!</p>
      <div className={styles.buttonsContainer}>
        <Link to='/tennis-pickleball'><button className={styles.button}>Tennis/pickleball</button></Link>
        <Link to='/badminton'><button className={styles.button}>Badminton</button></Link>
        <Link to='/faq'><button className={styles.button}>FAQ</button></Link>
      </div>
    </>
  )
}
