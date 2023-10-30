import React from 'react'

const Comp7 = () => {
    let demo1 = ()=>{
        console.log("welcome");
    }
    let demo2 = (event)=>{
        event.preventDefault();
        console.log("hello");
    }
  return (
    <div className='my-5'>
        <input onCopy={demo1} onPaste={(event)=>demo2(event)} type='text' />
    </div>
  )
}
// indore
export default Comp7