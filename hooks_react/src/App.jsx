import './App.css'
import { useState } from 'react';

function App() {

  //useState is a react hook, which creates an "state variable" which helps us to track state in components and updates the user interface when state changes.
  //syntax use to declare the state
  //color is the initial value
  //and setColor is the updated value
  const [color,setColor] = useState('Violate')
  
  const changeColor=()=>{
    setColor('Red');
  }

  // const [brand,setBrand] = useState('Ferrari');
  // const [colour,setColour] = useState('red');
  // const [year,setYear] = useState('2023');
  // const [model,setModel] = useState('Rome');

  //instead of using multiple state store it in a key value pair
  const [car,setCar] = useState({
    brand:"Ferrari",
    model:"Roma",
    year:"2023",
    colour:"red"
  })

 const changeYear =()=>{
    setCar((prev)=>{
      return {...prev, year:"2024"}
    })
  }
  return (
    <>
    <h1>
      My favourite color is {color}!
    </h1>
    <button onClick={changeColor}>Red</button>

    <h1>My {car.brand}</h1>
    <h2>It is a {car.colour} {car.brand} from {car.year}</h2>
    <button onClick={changeYear}>Change year</button>
    </>
  )
}

export default App
