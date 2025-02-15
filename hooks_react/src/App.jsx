import { useState, useEffect, useRef } from 'react';
import data from './TemplateData';
import './Style.css';

function App() {

  //useState is a react hook, which creates an "state variable" which helps us to track state in components and updates the user interface when state changes.
  //syntax use to declare the state
  //color is the initial value
  //and setColor is the updated value
//   const [color,setColor] = useState('Violate')
  
//   const changeColor=()=>{
//     setColor('Red');
//   }

//   // const [brand,setBrand] = useState('Ferrari');
//   // const [colour,setColour] = useState('red');
//   // const [year,setYear] = useState('2023');
//   // const [model,setModel] = useState('Rome');

//   //instead of using multiple state store it in a key value pair
//   const [car,setCar] = useState({
//     brand:"Ferrari",
//     model:"Roma",
//     year:"2023",
//     colour:"red"
//   })

//  const changeYear =()=>{
//     setCar((prev)=>{
//       return {...prev, year:"2024"}
//     })
//   }

//   const[count, setCount] = useState(0);

//   const increseCount=()=>{
//     setCount(count+1)
//   }

//   const decreaseCount=()=>{
//     if(count>0){
//       setCount(count-1)
//     }
//   }

//   //useEffect(cb,[])  cb=callback   []=array
//   const[ct,setct]=useState(0);
 
//   //when we use useEfect hook without any dependency it will execute callback function whenever any state changes
//   //here ct state is changing after every 2 sec
//   useEffect(()=>{
//     setTimeout(()=>{
//       setct(ct=>ct+1);
//     },2000)
//   }, [ct]) //when empty array dependency is added it will execute function only when page is refreshed
//   //when ct is added to the array then it will execute the function when page is loded and when count gets change

//   //useRef hook
//   const[value,setValue]=useState(0);
//   const num = useRef(0);


//   //this will run when value changes
//   useEffect(()=>{
//     num.current=num.current+1;
//   },[value])

//   const inputVal=useRef();

//   const buttonclicked=()=>{
//     console.log(inputVal.current)
//     inputVal.current.style.background='blue';
//   }
  
//   return (
 //    <>
//     //<h1><i>USESTATE HOOK</i></h1>
//     <h1>
//       My favourite color is {color}!
//     </h1>
//     <button onClick={changeColor}>Red</button>

//     <h1>My {car.brand}</h1>
//     <h2>It is a {car.colour} {car.brand} from {car.year}</h2>
//     <button onClick={changeYear}>Change year</button>

//     <h3>Count: {count}</h3>
//     <button onClick={increseCount}>Increase count</button>
//     <button onClick={decreaseCount}>Decrease count</button>

//     <h1><i>USEEFFECT HOOK</i></h1>
//     <h3>I have rendered {ct} times</h3>

//     <h1>USEREF HOOK</h1>
//     <button onClick={()=>{setValue(prev=>prev-1)}}>-1</button>
//     <h1>{value}</h1>
//     <button onClick={()=>{setValue(prev=>prev+1)}}>+1</button>
//     <h3>Render count: {num.current}</h3>

//     <input type='text' ref={inputVal}/>
//     <br/><br/>
//     <button onClick={buttonclicked}>Click here</button>
 //   </>

    
    
 // )

 const[searchItem,setSearchItem]=useState("");
 return(
  <>
   <div className='templateContainer'>
    <div className='searchInput_container'>
      <input id="searchinput" type='text' placeholder='search here...' onChange={(event)=>{
        setSearchItem(event.target.value);
      }} />
    </div>

    <div className='template_container'>
      {
        data.filter((val) => {
          if(searchItem===""){
            return val;
          } else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
          }
          return null;
        })
        .map((val) => {
          return(
            <div className='template' key={val.id}>
              <img src={val.image} alt={val.title} />
              <h3>{val.title}</h3>
              <p className='price'>${val.price}</p>
            </div>
          )
        })
      }
    </div>
   </div>
  </>
 )
}

export default App
