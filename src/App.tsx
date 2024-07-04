import React from "react"
import PomodoroTimer from './components/PomodoroTimer'
import './styles/App.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <PomodoroTimer />
    </div>
  )
}

export default App
