import React, { useState } from 'react'

const CatState = () => {
    const [isSleeping, setIsSleeping]= useState(false);
    const wakeUpCat = () =>
    {
        setIsSleeping(true);
    }
  return (
    <div>
        <p>{`Cat is ${isSleeping?"Sleeping":"Awake..."}`}</p>
        <button type ="button" onClick={wakeUpCat}>Wake up!!!</button>
    </div>
  )
}

export default CatState