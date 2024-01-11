import React, {useContext, createContext} from 'react'

let Data = createContext();
// create a componet called <Data>

const App = () => {

  let name = "Rohit";

  return (
    <div style={{height : "600px", width : "600px", backgroundColor : "red"}}>
      <h1>App Comp</h1>
      
      <Data.Provider value={name}>
          <Box1 />
      </Data.Provider>

    </div>

  )
}

export default App

let Box1 = ()=>{
  return(
    <>
      <div style={{height : "400px", width : "400px", backgroundColor : "blue"}}>
        <h2>Box1</h2>
        <Box2 />
      </div>
    </>
  )
}
let Box2 = ()=>{
  let x = useContext(Data);
  return(
    <>
      <div style={{height : "300px", width : "300px", backgroundColor : "yellow"}}>
        <h2>Box2</h2>
        {x}
        <Box3 />
      </div>
    </>
  )
}
let Box3 = ()=>{

  let name = useContext(Data);

  return(
    <>
      <div style={{height : "200px", width : "200px", backgroundColor : "green"}}>
        <h2>Box3</h2>
        <h1>{name}</h1>
      </div>
    </>
  )
}