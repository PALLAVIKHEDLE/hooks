import React, { useState, useRef, useEffect } from 'react';

function MyComponent() {
    const [count, setCount]=useState(0)
    const valueRef=useRef(null)
    const nodeRef=useRef(null)

    useEffect(()=>{
        valueRef.current=count
        nodeRef.current.style.backgroundColor='lightblue'
    },[count])
 return (
    <div>
        <p>Value stored using useRef: {valueRef.current}</p>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <div ref={nodeRef} style={{width:'150px', height:'150px', border:'1px solid black'}}>This is a DOM Node</div>
    </div>
 )
}

export default MyComponent;




