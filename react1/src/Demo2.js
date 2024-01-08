import React, {useContext} from 'react'
import Demo3 from './Demo3'
import Data from './Data'

const Demo2 = () => {

  let hello = useContext(Data);

  return (
    <>
    <div>Demo2</div>
    {hello.name}
    <Demo3 />
    </>
  )
}

export default Demo2