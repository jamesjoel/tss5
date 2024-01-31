import React from 'react'
import { useState } from 'react';
import { defaul, light } from '../shared/css';
import ChangeSwitch from '../shared/switch'

const CalcLightDark = () => {
    const [input, setinput] = useState('');
    const [theme, setTheme] = useState(defaul);
    const [tec, setTec] = useState('');
    const [result, setResult] = useState('');
    const [func, setFunc] = useState('');
   
    let clearSlate= ()=>{
        setinput('');
        setFunc('');
        setResult('');
        setTec('');
    }

    let handleClick= (value)=>{

        setTec(`${tec}${value}`);

        if(input){
            if(value==='+' || value==='-' || value==='/' || value==='*'){
                setFunc(value)
            }
            else if (value==='C'){
                setinput('');
                setFunc('');
                setResult('')
            }
            else if (value==='='){
                setResult(input); 
                setTec('')   
            }
            else{
                if(func){
                    if(func==='+'){
                        setinput(input+value);
                        // setFunc('');
                    }
                    else if(func==='-'){
                        setinput(input-value);
                        // setFunc('');
                    }
                    else if(func==="/"){
                        setinput(input/value)
                        // setFunc('')
                    }
                    else {
                        setinput(input*value)
                        // setFunc('')
                    }
                }
                else{
                    setinput(input*10 + value)
                }
            }
            

        }
        else{
        if(value==='C'){
            setinput('');
            setFunc('')
            setTec('')

        }
        else if(value==='+' || value==='-' || value==='/' || value==='*'){
            setFunc(value)
        }
        else if(value==='='){
            setResult('');
        }
        else{
            setinput(value)
        }
    }
    }


    return (
        <div className="container-fluid bordered" style={theme.BG}>
            <ChangeSwitch/>
            
           
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                <div className='dropdown'>
            <button data-bs-toggle="dropdown" className='btn ms-5  dropdown-toggle' style={theme.buttn} >Themes</button>
            <div className='dropdown-menu' style={theme.buttn} >
                <button className='dropdown-item' style={theme.buttn} onClick={()=>{setTheme(light)}}>White</button>
                <button className='dropdown-item' style={theme.buttn} onClick={()=>{setTheme(defaul)}}  >Default</button>
            </div>
            </div>
                    <div className="card box-shadow ms-5 my-3" style={theme.calcBG} > 
                        <div className="card-content ms-3">
                            <div className="card-header">
                                <h4 > Common Calculator</h4>
                                <input type='text' value={tec} className='form-control' readOnly/>
                             </div>
                            <div className="card-body">
                                <div className="buttons ">
                                    <button className='form-control btn btn-primary' onClick={clearSlate}>Clear</button>
                                    {[1,2,3,4,5,6,7,8,9,0,'+','=','-','/','*'].map((value)=>{
                                        return(
                                        <button key={value} style={theme.keybuttn}  className='btn offset-md-1 my-1' onClick={()=>handleClick(value)} >{value}</button>)
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                {/* <label>Result</label> */}
                            <input className='form-control' value={result} readOnly/>
                            </div>
                            
                        
                        
                        
                            </div>
                            </div>
                        </div>
                    </div>
                    <dialog className="dialog" id="dialog">hello</dialog>
                </div>
        //     </div>
        // </div>


    
  )
}

export default CalcLightDark