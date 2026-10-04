import { useState } from 'react'
import styles from './Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0);

  function clickButton() {
    setCount(count + Math.round(Math.random()) * 2 - 1);
  }

  return (
    <>
      <p className={styles.p}>this is the home page</p>
      <button
        type="button"
        className={styles.counter}
        onClick={clickButton}
      >
        Count is {count}
      </button>
      <h2>test text</h2>
    </>
  )
}
