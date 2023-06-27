import './App.css'
import { Header } from './components/Header/Index'
import { ResultAlert } from './components/ResultAlert/Index'
import { Board } from './components/Board/Index'
import { Button } from './components/Button/Index'

function App() {
  return (
    <>
      <Header />
      <ResultAlert />
      <Board />
      <Button />
    </>
  )
}

export default App
