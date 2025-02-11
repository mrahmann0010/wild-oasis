"use client"
import { useState } from "react";


export default function Count({users}){
    const [count, setCount] = useState(0);
    console.log(users);
    return(
        <>
            <div>{count}</div>
            <button onClick={()=>setCount((count)=> count+1)}>Click</button>
        </>
    )
}