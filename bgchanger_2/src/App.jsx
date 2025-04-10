import { useState } from 'react'
import './App.css'
import "tailwindcss";

function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2">  
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Red")}
            style={{backgroundColor:"Red"}}>
            Red</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Green")}
            style={{backgroundColor:"Green"}}>
            Green</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Yellow")}
            style={{backgroundColor:"Yellow"}}>
            Yellow</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("White")}
            style={{backgroundColor:"White"}}>
            White</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Gold")}
            style={{backgroundColor:"Gold"}}>
            Gold</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Orange")}
            style={{backgroundColor:"Orange"}}>
            Oranges</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Blue")}
            style={{backgroundColor:"Blue"}}>
            Blues</button>
          <button className="outline-none px-4 rounded-3xl"
            onClick={() => setColor("Olive")}
            style={{backgroundColor:"Olive"}}>
            Olive</button>

         </div>
         
      </div>


    </div>
    
  )
}

export default App
