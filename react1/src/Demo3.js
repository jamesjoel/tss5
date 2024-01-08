import React, {useContext} from 'react'
import Data from './Data'

const Demo3 = () => {

    let test = useContext(Data);

  return (
    <>
        <div>Demo3</div>
        <h1>{test.name}</h1>
        <h1>{test.age}</h1>
    </>
  )
}

export default Demo3