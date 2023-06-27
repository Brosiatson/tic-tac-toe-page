import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const ticTacToeSlice = createSlice({
    name: "tictactoe",
    initialState:{
        aiPicks: "",
        freeFields: "012345678",
        isPlayer: true,
        playerPicks: "",
        usedFields: "",
        winner: "",
        winningCombinations: ["012", "345", "678", "036", "147", "258", "048", "246"]
    },
    reducers: {
        addTurn: (state, action: PayloadAction<{ indexField: string }>) => {
            if(state.isPlayer) {
                if(!(state.usedFields.includes(action.payload.indexField)) && !state.winner){
                    state.playerPicks = state.playerPicks + action.payload.indexField
                    state.freeFields = "".concat(...state.freeFields.split("").filter(number => number !== action.payload.indexField))
                    state.usedFields = state.usedFields + action.payload.indexField
                    state.isPlayer = !state.isPlayer
                }
            } else {
                const aiPick = String(state.freeFields[Math.floor(Math.random() * state.freeFields.length)])

                if(!(state.usedFields.includes(aiPick)) && !state.winner) {    
                    state.aiPicks = state.aiPicks + aiPick
                    state.freeFields = "".concat(...state.freeFields.split("").filter(number => number !== aiPick))
                    state.usedFields = state.usedFields + aiPick
                    state.isPlayer = !state.isPlayer
                }
            }
        },
        checkBoard: (state) => {
            if(state.usedFields.length === 9) {
                state.winner = "neither"
            }
            state.winningCombinations.forEach(comb => { 
                if(state.playerPicks.includes(comb[0]) && state.playerPicks.includes(comb[1]) && state.playerPicks.includes(comb[2])) {
                    state.winner = "player"
                    return
                } 
                if(state.aiPicks.includes(comb[0]) && state.aiPicks.includes(comb[1]) && state.aiPicks.includes(comb[2])) {
                    state.winner = "ai"
                    return
                }
            })
        },
        resetBoard: (state) => {
            state.aiPicks = ""
            state.freeFields = "012345678"
            state.isPlayer = true
            state.playerPicks = ""
            state.usedFields = ""
            state.winner = ""
        },
    },
})

export default ticTacToeSlice.reducer
export const {addTurn, checkBoard, resetBoard} = ticTacToeSlice.actions