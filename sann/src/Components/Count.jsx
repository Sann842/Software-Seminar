import React, { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        document.title=`You clicked ${count} times`;
        }, [count]); // Updates the title only when "count" changes
    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)} >Increment </button>
            <button onClick={() => setCount(count - 1)} >Decrement </button>
            <button onClick={() => setCount(0)} > Reset </button>

            <br/>

            <p>Name: {name}</p>
            <button onClick={() => setName('Wanda')} >Set name as Wanda </button>
            <button onClick={() => setName('')} >Reset </button>
            <button onClick={() => setName('Iron Man')} > Set name as Iron Man </button>
        </div>
    )
}
export default Counter;