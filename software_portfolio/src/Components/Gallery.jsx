import './Gallery.modules.css';
import React, { useEffect, useState } from "react";

const Gallery =() => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Gallery</h1>
            <div className='counter'>
            <p>Picture Count: {count}</p>
            <button onClick={() => setCount(0)}>Reset</button>
            </div>
            
        <div className="picture">
        <img onClick={() => setCount(count + 1)} src="photo/1.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/2.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/3.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/4.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/5.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/6.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/7.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/8.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/9.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/10.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/11.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/12.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/13.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/14.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/15.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/16.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/17.jpg" alt="picture"/>
        <img onClick={() => setCount(count + 1)} src="photo/18.jpg" alt="picture"/>
        </div>
        </div>
    )
};

export default Gallery;