import React from 'react'
import { Board } from './Board'


export const Game = () => {
  return (
    <div className='w-full h-full bg-gray-400 flex flex-col items-center justify-center text-center'>
        <Board />
    </div>
  )
}
