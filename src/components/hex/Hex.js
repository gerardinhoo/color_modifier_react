import React, {useState} from 'react';
import "./Hex.css"

const Background = () => {
  const [hex] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]);
  const [name, setName] = useState("");

  const changeColor = () => {
    let hexColor = "#";
    for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    document.body.style.backgroundColor = hexColor;
    setName(hexColor)
  }
}

  const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length);
  }
  

return (
    <div className="container">
      <h2>Original Background Modifier</h2>
      <button onClick={changeColor}>CLICK</button>
      <h3>{name}</h3>
    </div>
  )
}

export default Background;