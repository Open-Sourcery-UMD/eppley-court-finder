import styles from './App.module.css'
import { Link, Outlet } from 'react-router'

/*
  This 'encloses' all of the pages in the site.
  Whatever goes in here should be for stuff like header/navigation bars
  which would be displayed everywhere on the site.

  Currently this is placeholder code.
*/

export default function App() {
  return (
    <>
      <p>hi i am the page header nice 2 meet u</p>

      <section className={styles.headerLinks}>
        <Link to='/'><p>Home</p></Link>
        <Link to='/badminton'><p>Badminton</p></Link>
        <Link to='/tennis-pickleball'><p>TennisPickleball</p></Link>
      </section>

      <h1>Eppley Court Finder</h1>
      <main>
        <Outlet />
      </main>
    </>
  )
}
