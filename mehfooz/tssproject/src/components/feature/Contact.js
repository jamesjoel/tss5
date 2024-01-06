import React from 'react'
import Box from '../shared/Box'

const Contact = (props) => {
  return (
    <>
    <Box/>
   <div style={{width:"300px",minHeight:"200px,backgroundColor:#406201"}}>
    <h2>hello contact,{props.demo}</h2>
    <p>rtm:{props.text}</p>
   </div>
   </>
  )
}

export default Contact