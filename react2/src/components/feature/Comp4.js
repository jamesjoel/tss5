import React, {useState} from 'react'

const Comp4 = () => {

  let [left, setLeft] = useState(0);
  let [top, setTop] = useState(0);

  let [type, setType] = useState("password");
  let [lable, setLable] = useState("Show");


  let demo = ()=>{
    let a = Math.random(); // 0.3257454354
    let b = Math.floor(a*500);

    let x = Math.random();
    let y = Math.floor(x*800);

    setLeft(y);
    setTop(b);
    
    
  }

  let show1 = ()=>{
    // if(type=="password"){
      setType("text");
      setLable("Hide");
    // }else{
      
    // }
  }

  let show2 = ()=>{
    setType("password");
      setLable("Show");
  }

  return (
    <>
      <div onMouseOver={demo} style={{ height : "100px", width : "100px", backgroundColor : "#40301A", marginLeft : left, marginTop : top}}></div>
      <br />
      <input type={type} />
      <button onMouseOver={show1} onMouseOut={show2}>{lable}</button>
    </>
  )
}

export default Comp4