import React, {useState} from 'react';
import "./background.css"

const Background = () => {
  const [color] = useState([
    "red", "green", "blue", "yellow", "tomato"
  ]);

  const [name, setName] = useState("")
  
  const changeColor = () => {
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor; 
    setName(randomColor)
  }

return (
    <div className="container">
      <h2>Original Background Modifier</h2>
      <button onClick={changeColor}>CLICK</button>
      <h3>{name.toUpperCase()}</h3>
    </div>
  )
}

export default Background;
