import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue=()=>{
   // counter=counter+1
   if(counter<20)
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1)
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove Value</button>
    
    </>
  )
}
export default App
