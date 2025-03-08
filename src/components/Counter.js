import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
   
  const active = true;
  console.log("active : " , !active);
  return (
    <div className="flex items-center gap-5">
      <button
        onClick={() => setCounter(counter - 1)}
        className="px-10 py-2 bg-slate-800 text-white"
      >
        -
      </button>
      <p> {counter} </p>
      <button
        onClick={() => setCounter(counter + 1)}
        className="px-10 py-2 bg-slate-800 text-white"
      >
      
        +
      </button>
    </div>
  );
}
