import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { addTurn, checkBoard } from "../../redux/slice"
import './Field.css'

export const Field: React.FC<{index: number}> = ({index}) => {
    const reduxValues = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    const handleButton = (index: number) => {
        setTimeout(() => {
            dispatch(addTurn({indexField: String(index)}))
            dispatch(checkBoard())
        }, 100)
        setTimeout(() =>{
            dispatch(addTurn({indexField: ""}))
            dispatch(checkBoard())
        }, 500)
    }

    const crossImg = require("../../img/cross.png")
    const circleImg = require("../../img/circle.png")

    return (
        <div>
            <button
                key={index}
                onClick={() => handleButton(index)}
            >
            {
                reduxValues.playerPicks.includes(String(index)) ? <img src={circleImg} alt="circle"></img> : 
                reduxValues.aiPicks.includes(String(index)) ? <img src={crossImg} alt="cross"></img> : null
            }
            </button>
        </div>
    )
}