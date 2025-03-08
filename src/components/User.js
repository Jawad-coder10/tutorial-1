import React from 'react'

export default function User() {

  const data = {
    name: "elanrif",
    email: "elanrif@gmail.com",
    image: "https://",
    age: 12,

  }  

  console.log("User: ", data);
  return (
    <div
     className='flex items-center mt-10 justify-center'
    >
    Bonjour tout le monde !
    </div>
  )
}
