import { useState } from "react";
let Calculator = ()=>{

    let [Num, setNum] = useState("")

    let handleButtonClick = (btnText)=>{
        if (btnText === 'x') {
            btnText = '*';
        }

        if (btnText === '÷') {
            btnText = '/';
        }

        setNum(Num + btnText);
    }

    let backSpace = ()=>{
        let newNum = Num.split("");
        newNum.splice(newNum.length-1,1);
        newNum = newNum.join("");
        setNum(newNum)
    }


    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card">
                            <div className="card-header bg-success text-center"><h2 className="text-light">CALCULATOR</h2></div>
                            <div className="card-body bg-dark">
                                {/* <input type="number" value={Num} readOnly={true} className=" text-center form-control" /> */}
                                <div style={{backgroundColor : "white"}}>{Num}</div>
                                <br />
                                <div className="container p-0">
                                    <div className="row">
                                        <div className="col-md-5 text-center">
                                            <div className="btn-group">
                                                <button onClick={()=>{handleButtonClick("1")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>1</button>
                                                <button onClick={()=>{handleButtonClick("2")}} className="btn text-light btn-success" style={{fontSize : "22px"}}>2</button>
                                                <button onClick={()=>{handleButtonClick("3")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>3</button>
                                                <button onClick={()=>{handleButtonClick("4")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>4</button>
                                                <button onClick={()=>{handleButtonClick("5")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>5</button>
                                                <button onClick={()=>{handleButtonClick("6")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>6</button>
                                                <button onClick={()=>{handleButtonClick("7")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>7</button>
                                                <button onClick={()=>{handleButtonClick("8")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>8</button>
                                                <button onClick={()=>{handleButtonClick("9")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>9</button>
                                                <button onClick={()=>{handleButtonClick("0")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>0</button>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <div className="btn-group">
                                                <button onClick={()=>{handleButtonClick("x")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>x</button>
                                                <button onClick={()=>{handleButtonClick("/")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>/</button>
                                                <button onClick={()=>{handleButtonClick("+")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>+</button>
                                                <button onClick={()=>{handleButtonClick("-")}} className="btn btn-success text-light" style={{fontSize : "22px"}}>-</button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div className="btn-group">
                                                <button id="eval" onClick={()=>{setNum(eval(Num))}} className="btn btn-outline-success text-light" style={{fontSize : "20px"}}>=</button>
                                                <button onClick={backSpace} className="btn btn-outline-success text-light" style={{fontSize : "20px"}}>BackSpace</button>
                                                <button onClick={()=>{setNum("")}} className="btn btn-outline-danger text-light" style={{fontSize : "20px"}}>Clear</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer bg-success">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calculator;