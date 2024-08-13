import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    return (
        <div>
            <p>Count: {count}</p>
            <button style={{color:"white"}} onClick={() => setCount(count + 1)} >Increment </button>
            <button style={{color:"white"}} onClick={() => setCount(count - 1)} >Decrement </button>
            <button style={{color:"white"}} onClick={() => setCount(0)} > Reset </button>

            <br/>

            <p>Name: {name}</p>
            <button style={{color:"white"}} onClick={() => setName('Wanda')} >Set name as Wanda </button>
            <button style={{color:"white"}} onClick={() => setName('')} >Reset </button>
            <button style={{color:"white"}} onClick={() => setName('Iron Man')} > Set name as Iron Man </button>
        </div>
    )
}
export default Counter;