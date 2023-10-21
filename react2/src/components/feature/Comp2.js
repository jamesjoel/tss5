import {useState} from 'react'
let Comp2 = ()=>{

    let [h, setH] = useState(100)
    let [w, setW] = useState(100)
    let [color, setColor] = useState("blue")

    let demo1 = ()=>{
        setColor("green");
    }
    let demo2 = ()=>{
        setH(h+1);
        setW(w+1);
    }
    let demo3 = ()=>{
        setColor("red");
        setH(100)
        setW(100)
    }

    return(
        <div onMouseOut={demo3} onMouseMove={demo2} onMouseOver={demo1} style={{backgroundColor : color, height : h+"px", width : w+"px"}}></div>
    )
}

export default Comp2;