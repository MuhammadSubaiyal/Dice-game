import React from 'react'
import styles from './rolldice.module.css'

export default function Rolldice({resetnumber,currentDice,rolldice }) {
   

    return (
        <div className={styles.rollcontainer}>
            <div onClick={rolldice} className={styles.image}>
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>

            <p className={styles.sen}>Click On Dice To Roll</p>

            <div className={styles.buttons}>
                <button onClick={resetnumber} className={styles.but1}>Reset Score</button>
            </div>

        </div>
    )
}
