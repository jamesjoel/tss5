import React from 'react'
import Demo1 from './Demo1'
import Data from './Data'



const App2 = () => {

    let user = { 
        name : "Vijay",
        age : 25
    }

  return (
    <>
    <Data.Provider value={user}>
        <div>App2</div>
        <Demo1 />
    </Data.Provider>
    </>
  )
}

export default App2