import React, {useState} from 'react'

const Comp6 = () => {

    let [bg, setBg] = useState("white");

    let demo = (event)=>{
        if(event.key == "a" || event.key=="A" || event.key == "b" || event.key == "c")
        {
            console.log("****");
        }
    }

  return (
    <div className='mt-5'>
        <input onBlur={()=>setBg("red")} onFocus={()=>setBg("yellow")} style={{backgroundColor : bg}} type='text' onKeyUp={()=>console.log("#######")} onKeyDown={(event)=>demo(event)} />
    </div>
  )
}

export default Comp6

/*

    let y = [...x];
    let z = y;

*/