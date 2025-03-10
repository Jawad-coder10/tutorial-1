import React, { useState } from 'react'

export default function Compteur() {

    const [counter, setCounter] = useState(0);

    function add() {


    }

  return (
    <div className='h-full mt-16 flex flex-col items-center justify-center'>
    <div className='flex gap-5 items items-center'>
      <button
      onClick={() => { setCounter(-1) }} 
      className='px-10 py-2 bg-slate-800
       text-white'> - </button>
      <p> {counter} </p>
      <button
      className='px-10 py-2 bg-slate-800 text-white'
      onClick={() => { setCounter(1) }} 
      >
         + </button>
      <button
      onClick={() => { setCounter(0)}} 
      className='px-10 py-2 bg-red-400 text-white'> reset </button>
    </div>
    
    <div className='flex gap-5 items items-center mt-5'>
      <button
      className='px-10 py-2 bg-green-400 text-white'>Cliquer </button>
    </div>
    </div>
  )
}