import React, { useEffect, useState } from 'react'

export default function Counter() {
  const [counter, setCounter]= useState(0)

  useEffect(() => {

    setTimeout(() => {
      setCounter(counter+1)
    }, (2000));

  });

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
    
    </>
  )
}
