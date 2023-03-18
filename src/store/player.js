import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCross: true,
    moveCount: 0,
    squars: [
    {
        id: 1,
        value: null,
        isLocked: false,
    },
    {
        id: 2,
        value: null,
        isLocked: false,
    },
    {
        id: 3,
        value: null,
        isLocked: false,
    },
    {
        id: 4,
        value: null,
        isLocked: false,
    },
    {
        id: 5,
        value: null,
        isLocked: false,
    },
    {
        id: 6,
        value: null,
        isLocked: false,
    },
    {
        id: 7,
        value: null,
        isLocked: false,
    },
    {
        id: 8,
        value: null,
        isLocked: false,
    },
    {
        id: 9,
        value: null,
        isLocked: false,
    }],
}


const playerSlice = createSlice({
    name: 'player', 
    initialState,
    reducers: {
        addMotion (state, action) {
            const toggleSquare = state.squars.find(square => square.id === action.payload.id)
            if (!toggleSquare.isLocked) {
                toggleSquare.value = state.isCross ? 'X' : 'O'
                toggleSquare.isLocked = !toggleSquare.isLocked
                state.isCross = !state.isCross
                state.moveCount += 1
            }
            return 
        },
        resetGame (state) {
            state.squars = state.squars.map(square => {
                square.value = null
                square.isLocked = false
                return square
            })
            state.isCross = true
            state.moveCount = 0
        }
    }
})

export const {addMotion, resetGame} = playerSlice.actions
export default playerSlice.reducer