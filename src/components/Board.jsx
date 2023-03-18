import React from 'react'
import { Square } from './Square'
import { useSelector, useDispatch } from 'react-redux'
import { addMotion, resetGame } from '../store/player'
import { isVictory } from './isVictory'

export const Board = () => {
    const squareArray = useSelector(state => state.player.squars)
    const moves = useSelector(state => state.player.moveCount)
    const winner = isVictory(squareArray)
    const dispatch = useDispatch()

    const handleClick = (id) => {
      if (!winner) dispatch(addMotion(id))
    }


  return (
    <div className='px-6'>

      { winner  && 
            <h2 className='text-4xl md:text-6xl mb-6 text-white'>Winner is <span className={`px-2 ${winner === 'X' ? 'text-red-600' : 'text-blue-600'} font-bold`}>{winner}</span>!</h2>
      } 

      
      { !winner && moves == 9 && 
        <h2 className='text-6xl mb-6 text-white'>Draw!</h2>
      }

      <div className='bg-red-900 h-[18rem] w-[18rem] sm:h-[24rem] sm:w-[24rem] md:h-[36rem] md:w-[36rem] rounded-xl grid grid-cols-3 grid-rows-3 p-2 gap-2 mb-4'>
        {
          squareArray.map(square => <Square key={square.id} value={square.value} id={square.id} handleClick={handleClick} />) 
        }
      </div>

      <button className='py-2 px-8 text-2xl bg-white text-red-800 uppercase rounded-lg transition duration hover:bg-gray-100 hover:box hover:shadow-red-800 hover:shadow-md' onClick={() => dispatch(resetGame())}>Start again</button>
    </div>

  )
}
