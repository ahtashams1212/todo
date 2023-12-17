'use client'

import { useState } from "react"
import { todoObject } from "./models/todo";
import { v4 as uuid } from 'uuid';



const Home: React.FC=() => {
  const [todo, settodo] = useState<string>('');
  const [todos,settodos]= useState<todoObject[]>([]);
  const addtodo = () =>{
  settodos([{id: uuid(), value: todo, done: false }, ...todos ])
  settodo("");
  }
  const marktododone = (id: string)=>{
 settodos(todos.map(todo => todo.id ===id ? { ...todo, done: !todo.done } : todo));

  }
  return (
    <main className="flex bg-yellow min-h-screen   flex-col place-items-center p-3 gap-4 ">
    <h1 className="font-bold  text-6xl text-black-800 ">
      Todos
    </h1>
    <input className='px-3 py-2 rounded text-blue-900 '
    type="text"
     placeholder="Add a todo" 
     onChange={(e)=> settodo(e.target.value)}
     value={todo}
     />
     <button className='font-bold py-2 px-4 border-4 border-red-700 rounded-md bg-yellow-300 text-green-900'
     onClick={()=>addtodo()}
     >ADD TODOS
     
     </button>
    <ul className='mt-3'>
      {
        todos.map(todo => (

          <li
          key={todo.id}  // Add the key prop here
          onClick={()=> marktododone(todo.id)}
          className={`  text-4xl ml-1 cursor-pointer font-bold  text-green-400 ${todo.done ?'line-through' : 'no-underline' }`}>
        {todo.value}
      </li>
        ))
      }

      
    </ul>


    </main>
    
  )
}

export default Home;