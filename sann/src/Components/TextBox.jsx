import {useState} from "react";
const TextBox=() => {
    const [name, setName] = useState('');
    const updateName=(e)=>{
        const username = e.target.value;
        setName(username);
    }
    const onPClick=(V)=>{
        alert("Button clicked.");
    }
    return (
        <div>
            <p onClick={onPClick}>This is me {name}</p>
            <input style={{color:"white"}} value={name} onChange={updateName}/>
        </div>    
    )
}

export default TextBox;