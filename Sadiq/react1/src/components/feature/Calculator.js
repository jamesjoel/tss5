import { useState } from "react";
let Calculator = ()=>{

    let [Num, setNum1] = useState(0)
    let Number1 = ()=>{
        setNum1(Num*10+1)
    }
    let Number2 = ()=>{
        setNum1(Num*10+2)
    }
    let Number3 = ()=>{
        setNum1(Num*10+3)
    }
    let Number4 = ()=>{
        setNum1(Num*10+4)
    }
    let Number5 = ()=>{
        setNum1(Num*10+5)
    }
    let Number6 = ()=>{
        setNum1(Num*10+6)
    }
    let Number7 = ()=>{
        setNum1(Num*10+7)
    }
    let Number8 = ()=>{
        setNum1(Num*10+8)
    }
    let Number9 = ()=>{
        setNum1(Num*10+9)
    }
    let Number0 = ()=>{
        setNum1(Num*10+0)
    }
    let Clear = ()=>{
        setNum1(0)
    }

    let addition =()=>{
        let add = Num
        setNum1(0)
        add += Num
        console.log(add)
    }


    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="card">
                            <div className="card-header bg-success text-center"><h2 className="text-light">CALCULATOR</h2></div>
                            <div className="card-body bg-dark">
                                <input type="number" value={Num} className=" text-center form-control" />
                                <br />
                                <div className="container p-0">
                                    <div className="row">
                                        <div className="col-md-5 text-center">
                                            <div className="btn-group">
                                                <button onClick={Number1} className="btn btn-success text-light" style={{fontSize : "22px"}}>1</button>
                                                <button onClick={Number2} className="btn text-light btn-success" style={{fontSize : "22px"}}>2</button>
                                                <button onClick={Number3} className="btn btn-success text-light" style={{fontSize : "22px"}}>3</button>
                                                <button onClick={Number4} className="btn btn-success text-light" style={{fontSize : "22px"}}>4</button>
                                                <button onClick={Number5} className="btn btn-success text-light" style={{fontSize : "22px"}}>5</button>
                                                <button onClick={Number6} className="btn btn-success text-light" style={{fontSize : "22px"}}>6</button>
                                                <button onClick={Number7} className="btn btn-success text-light" style={{fontSize : "22px"}}>7</button>
                                                <button onClick={Number8} className="btn btn-success text-light" style={{fontSize : "22px"}}>8</button>
                                                <button onClick={Number9} className="btn btn-success text-light" style={{fontSize : "22px"}}>9</button>
                                                <button onClick={Number0} className="btn btn-success text-light" style={{fontSize : "22px"}}>0</button>
                                            </div>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-success text-light" style={{fontSize : "22px"}}>x</button>
                                                <button className="btn btn-success text-light" style={{fontSize : "22px"}}>/</button>
                                                <button onClick={addition} className="btn btn-success text-light" style={{fontSize : "22px"}}>+</button>
                                                <button className="btn btn-success text-light" style={{fontSize : "22px"}}>-</button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <div className="btn-group">
                                                <button className="btn btn-outline-success text-light" style={{fontSize : "20px"}}>=</button>
                                                <button className="btn btn-outline-success text-light" style={{fontSize : "20px"}}>BackSpace</button>
                                                <button onClick={Clear} className="btn btn-outline-danger text-light" style={{fontSize : "20px"}}>Clear</button>
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