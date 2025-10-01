import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState("Yo")

  const greetings: string[] = ['hi', 'howdy', 'hey there', 'what up', 'salutations', 'greetings', 'fatty has arrived']


  return (
    <>
      <p onClick={() => setGreeting(greetings[Math.floor((greetings.length - 1) * Math.random())])}>{greeting}.</p>
    </>
  )
}

export default App
