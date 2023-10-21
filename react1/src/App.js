import React, {useState, useCallback} from 'react'
import Demo from './Demo';

const App = () => {
    let [num, setNum] = useState(0)
    let [x, setX] = useState([]);

    let a = "rohit";

    let hello = useCallback(()=>{
        console.log("********* do somthing")
    }, [x]);
  return (
    <>
        <h1>Num Value : {num}</h1>
        <button onClick={()=>setNum(num+1)}>OK</button>
        <Demo x={x} hello={hello}/>
    </>
  )
}



export default App