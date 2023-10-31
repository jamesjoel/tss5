import React from 'react'

const Box = (props) => {
  return (
    <>
        <div style={{ width : "300px", minHeight : "200px", backgroundColor : "#406201"}}>
            <h2>Hello, {props.demo}</h2>
            <p>Your City : {props.test}</p>
        </div>
    </>
  )
}

export default Box