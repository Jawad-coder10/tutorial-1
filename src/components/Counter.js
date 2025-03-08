import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [counter, setCounter]= useState(0)
  const [active, isActive]= useState(false)

  useEffect(() => {

      setCounter(counter+100)

  },[active]);

  return (
    <>
    <div className='flex gap-5 items items-center'>
      <button 
        onClick={()=>setCounter(counter-5)}
      className='px-10 py-2 bg-slate-800
       text-white'> - </button>
      <p> {counter} </p>
      <button
         onClick={()=>setCounter(counter+5)}
      className='px-10 py-2 bg-slate-800 text-white'> + </button>
      <button
         onClick={()=>setCounter(0)}
      className='px-10 py-2 bg-red-400 text-white'> reset </button>
    </div>
    
    <div className='flex gap-5 items items-center mt-5'>
      <button
         onClick={()=>isActive(!active)}
      className='px-10 py-2 bg-green-400 text-white'>Cliquer : {JSON.stringify(active)} </button>
    </div>
    </>
  )
}
