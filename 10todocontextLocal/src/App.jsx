import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
 const [todos,setTodes] = useState([])

 const addTodo =(todo)=>{
    setTodes((prev)=> [...prev,{id:Date.now(),...todo}])
 }

 const updateTodo =(id,todo) =>{
  setTodes((prev)=> prev.map((item)=> (item.id === id ? todo : item ) ))
 }

 const deleteTodo =(id)=>{
  setTodes((prev)=> prev.filter((item)=> item.id !== id))
 }

 const toogleComplete = (id) => {
     setTodes((prev) => prev.map((prevTode)=> prevTode.id===id? {...prevTode,completed:!prevTode.completed} : prevTode))
 }

 useEffect(
  ()=>{
    const todos =JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
       setTodes(todos)
  }
},[])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm /> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                            </div>
                         ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
