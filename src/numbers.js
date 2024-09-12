import React from 'react'
import styles from './numbers.module.css'
export default function Numbers({seterror, error,select,isselect}) {

  const numbers = [1, 2, 3, 4, 5, 6];
  const errorhandler =(value)=>{
    isselect(value);
    seterror("");
  }
  
  return (
    <div className={styles.main}>
      <p className={styles.error}>{error}</p>
      <div className={styles.grid}>

        {numbers.map((value,i) => <p onClick={()=> errorhandler(value)} key={i} className={select === value ? `${styles.box1}` : `${styles.box}`}>{value} </p>)}

      </div>
      <div className={styles.para}>
        <p >Select Number</p>
      </div>
    </div>)
}
