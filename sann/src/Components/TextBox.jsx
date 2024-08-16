import {useState} from "react";
import "./Textbox.modules.css";
import MessageBar from "./Message";

const TextBox=() => {
    const [name, setName] = useState('');
    const updateName=(e)=>{
        const username = e.target.value;
        setName(username);
    }
    const onPClick=(V)=>{
        alert("Button clicked.");
    }
    const messages=['GM', 'Good Morning', 'Good', 'Morning'];
    return (
        <div>
            <p onClick={onPClick}>This is me {name}</p>
            <input value={name} onChange={updateName}/>
            <div className="message">
                {
                    messages.map(message=> {
                        return <MessageBar key={message} message={message}/>
                    })
                }
            </div>
        </div>    
    )
}

export default TextBox;