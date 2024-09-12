import React, { useState } from 'react'
import Home from './home'
import Gameplay  from './gameplay'

export default function App() {

  const [isgame, setgame]= useState(false)

  function handlegame(){
    setgame((i)=> !i)
  }
  return (
    <>
    {isgame ? <Gameplay/> : <Home  handlegame={handlegame}/>}
    </>
  )
  
}

