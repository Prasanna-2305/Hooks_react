import React, {useState} from 'react'

export default function Hooks1() {
    const [item , setItem] = useState("Jai Hind")
  return (
    <div>
        <h1>{item}</h1>
        <button onClick={()=> setItem("Indian Army")}>updater</button>
    </div>
  )
}


