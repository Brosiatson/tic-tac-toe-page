import { useAppSelector } from "../../hooks"
import './ResultAlert.css'

export const ResultAlert: React.FC = () => {
    const reduxValues = useAppSelector(state => state.counter)

    const result = reduxValues.winner === "neither" ? "DRAW" :
    reduxValues.winner === "player" ? "WIN" :
    reduxValues.winner === "ai" ? "LOSE" : null

    return (
        <div className="div-result">
            <p>{result}</p>
        </div>  
    )
}