import React from 'react'
import styles from './totalscore.module.css'
export default function Totalscore({score}) {
  return (
    <div className= {styles.total}>
        <h1 className={styles.num}>{score}</h1>
        <p>Total Score</p>
    </div>
  )
}
