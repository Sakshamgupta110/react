import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>tailwind test</h1>
     <Card username="saksahm" btnText='click me'/>
     <Card username="ritik"/>
    </>
  )
}

export default App
