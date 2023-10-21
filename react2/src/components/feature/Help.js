import {useState} from 'react'
let Help = ()=>{

    let [a, setA] = useState(100);
    let [b, setB] = useState(100);
    let [m, setM] = useState(0);
    
    let demo = ()=>{
        setA(a+10);
        setB(b+10);
        setM(m+10);
    }
    let undo = ()=>{
        setA(100);
        setB(100);
        setM(0);
    }

    return(
        <>
        <button onClick={demo} className='btn btn-info'>OK</button>
        <button onClick={undo} className='btn btn-info'>Undo</button>
            <div style={{ backgroundColor : "red", height : a+"px", width : b+"px", marginLeft : m+"px" }}></div>        
        </>
    )
}

export default Help;



