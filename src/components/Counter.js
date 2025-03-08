import React from 'react'

export default function Counter() {
  return (
    <div className='flex gap-5 items items-center'>
      <button className='px-10 py-2 bg-slate-800 text-white'> - </button>
      <p> 0 </p>
      <button className='px-10 py-2 bg-slate-800 text-white'> + </button>
    </div>
  )
}
