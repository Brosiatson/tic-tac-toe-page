import { useAppDispatch, useAppSelector } from "../../hooks"
import { resetBoard } from "../../redux/slice"
import './Button.css'

export const Button: React.FC = () => {
    const reduxValues = useAppSelector(state => state.counter)
    const dispatch = useAppDispatch()

    return(
        <div className="div-button">
            {reduxValues.winner ? <button onClick={() => dispatch(resetBoard())}>PLAY AGAIN</button> : null}
        </div>
    )
}