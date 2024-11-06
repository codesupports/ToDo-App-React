import { useState } from 'react'
import './App.css'
import ToDO from './components/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <ToDO />
      <div className='note'>Great! With that final touch, we have now done building a Todo App using ReactJS.</div>
    </div>
  )
}

export default App
