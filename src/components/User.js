import React, { useState } from 'react';

export default function User() {

   const [data, setData] = useState(
    {
    name: "Amarrat",
    email: "amarrat@gmail.com",
    age: 7
    }
)

 const handleChange = (age__) => {
        
    setData({
        ...data,
       age: age__
    })
 }

    return (
        <div>
            <div className="mt-16 max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
                <img 
                    src="https://www.w3schools.com/w3images/avatar2.png" 
                    alt="Avatar" 
                    className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
                    <p className="text-gray-600">{data.email}</p>
                    <p className="text-gray-600">Âge: {data.age} ans</p>
                </div>
            </div>
            <div className="mt-4">
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Modifier les informations
                </button>
            </div>
        </div>

        <div className='flex mt-8 text-white gap-7 items-center justify-center'>
            <button className='px-5 py-3 bg-blue-500 rounded-lg' onClick={()=> handleChange(70) }> 70 ans </button>
            <button className='px-5 py-3 bg-blue-500 rounded-lg' onClick={()=> handleChange(100) }> 100 ans </button>
        </div>
        </div>
    );
}
