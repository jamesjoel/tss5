import React from 'react'
import o_icon from '../assets/O-icon.png'
import x_icon from '../assets/X-icon.png'
import '../assets/TicTacToe.css'
import { useState } from 'react';


let data = Array(9).fill("");

const TicTacToe = () => {
  
  let [chance, setChance] = useState(0);
  let [game, setGame] = useState(false);
  let [winner, setWinner] = useState("");
  

  const handleClick = (event, index)=>{

    if(game){return 0;}
  
    else if(chance%2==0){
      event.target.innerHTML = `<img src='${o_icon}'>`
      setChance(++chance)
      data[index] = "O";
      checkWinner()
    }
    else{
      event.target.innerHTML = `<img src='${x_icon}'>`
      setChance(++chance)
      data[index] = "X";
      checkWinner()
    }

  }
  
  const checkWinner = ()=>{
    if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
      setGame(true)
      setWinner(data[2])
    }
    else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
      setGame(true)
      setWinner(data[6])
    }
    else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
      setGame(true)
      setWinner(data[7])
    }
    else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
      setGame(true)
      setWinner(data[8])
    }
    else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
      setGame(true)
      setWinner(data[5])
    }
    else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
      setGame(true)
      setWinner(data[8])
    }
    else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
      setGame(true)
      setWinner(data[6])
    }
    else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
      setGame(true)
      setWinner(data[8])
    }
  }


  return (
    <div className='container' >
      <h2 className='title'> { winner ? `Congratulations ${winner}` :  "Tic Tac Toe"}</h2>
      <h2 className='title'> {chance==9 && !winner ? "Draw Game" : "" } </h2>

      <div className="board">
        <div className="row1">
          <div className="box" onClick={(event)=>{handleClick(event,0)}}></div>
          <div className="box" onClick={(event)=>{handleClick(event,1)}}></div>
          <div className="box"onClick={(event)=>{handleClick(event,2)}}></div>
        </div>
        <div className="row2">
          <div className="box" onClick={(event)=>{handleClick(event,3)}}></div>
          <div className="box" onClick={(event)=>{handleClick(event,4)}}></div>
          <div className="box" onClick={(event)=>{handleClick(event,5)}}></div>
        </div>
        <div className="row3">
          <div className="box" onClick={(event)=>{handleClick(event,6)}}></div>
          <div className="box" onClick={(event)=>{handleClick(event,7)}}></div>
          <div className="box" onClick={(event)=>{handleClick(event,8)}}></div>
        </div>
      </div>

      <a href='/'><button className='reset' >Reset</button></a>
    </div>
  )
}

export default TicTacToe