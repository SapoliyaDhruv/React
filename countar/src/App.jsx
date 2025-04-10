import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // hooks
  let [counter,setCounter] = useState(0)
  // counter is variable name
  // setCounter is methos name
  const addValue = () => { 
    counter = counter + 1
    setCounter(counter)
  }

  const removeValue = () => {
    counter = counter - 1
    if (counter <= 0) {
      setCounter(counter = 0)
      
    }
    else {
      setCounter(counter)
    }
  }
  
  return (
    <>
      <h1>Count Value:-{counter}</h1>
      <button
        onClick={addValue}
       >Add Value</button>
      <br/>
      <button
        onClick={removeValue}
      >Remove Value</button>

    </>
  )
}

export default App
