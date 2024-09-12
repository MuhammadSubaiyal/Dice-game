import React, { useState } from 'react';
import Totalscore from './totalscore';
import Numbers from './numbers';
import styles from './gameplay.module.css';
import Rolldice from './rolldice';

export default function Gameplay() {
  const [score, setscore] = useState(0);
  const [currentDice, setcurrentDice] = useState(1);
  const [select, isselect] = useState();
  const[error,seterror] = useState()

  function randomdice(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rolldice = () => {
    if (!select) {
      return seterror("You have not selected any number")
    }
    seterror("");
    const newdice = randomdice(1, 7);
    setcurrentDice(newdice);


    if (select === newdice) {
      setscore((prevScore) => prevScore + newdice);
    } else {
      setscore((prevScore) => prevScore - 2);
    }

    isselect(undefined); // Reset the selected number after each roll
  };

  const resetnumber = ()=>{
    setscore(0)
  }

  return (
    <>
      <div className={styles.flex}>
        <Totalscore score={score} />
        <Numbers seterror={seterror} error={error} select={select} isselect={isselect} />
      </div>
      <Rolldice resetnumber={resetnumber} currentDice={currentDice} rolldice={rolldice} />
    </>
  );
}
