import React from 'react'

export const Square = ({value, id, handleClick}) => {


  return (
    <div onClick={() => handleClick({id})} className='flex justify-center items-center p-2 bg-white text-center rounded-sm text-[5rem] sm:text-[7rem] md:text-[10rem]  transition duration-300 hover:bg-gray-100 hover:cursor-pointer'>
        <h2 className={value === 'X' ? 'text-red-600' : 'text-blue-500'}>{value}</h2>
    </div>
  )
}
