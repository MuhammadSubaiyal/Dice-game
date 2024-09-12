import styles from './home.module.css'

export default function Home({handlegame}) {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <img src="/images/dice.png" alt="" />
            </div>
            <div className={styles.head}>

                <h1>DICE GAME</h1>


                <button className={styles.playnow} onClick={handlegame}>PLAY NOW</button>

            </div>
        </div>
    )
}
