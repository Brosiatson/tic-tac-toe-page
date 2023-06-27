import { Field } from "../Field/Index"
import './Board.css'

export const Board: React.FC = () => {
    const board = Array(9).fill(null)
    const boardFieldsMap = board.map((field, index) => <Field key={index} index={index}/>)

    return(
        <div className='div-tic-tac-toe'>{boardFieldsMap}</div>
    )
}