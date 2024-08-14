import {useState} from "react";
import "./Textbox.modules.css";

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
                        return <p>{message}</p>
                    })
                }
            </div>
        </div>    
    )
}

export default TextBox;