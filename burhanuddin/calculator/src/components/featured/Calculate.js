import React, { useState } from 'react'


const Calculate = () => {
    const [input, setinput] = useState('');
    
    const [result, setResult] = useState('');
    const [func, setFunc] = useState('')
    // const demo = Key(props)

    let handleClick= (value)=>{

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
                    setinput(value)
                }
            }
            

        }
        else{
        if(value==='C'){
            setinput('');
            setFunc('')

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
        <div className="container">
            <div className="row">
                <div className="col-md-3 offset-md-4 my-5">
                    <div className="card " >
                        {/* <div className="row">
                            <div className="col-md-6 offset-md-3"> */}
                        <div className="card-content">
                            <div className="card-header">
                                <h4> Common Calculator </h4>
                                <input type='text' value={input} className='form-control' readOnly/>
                             </div>
                            <div className="card-body">
                                <div className="buttons offset-md-">
                                    {[1,2,3,4,5,6,7,8,9,0,'+','=','-','/','*','C'].map((value)=>{
                                        return(
                                        <button key={value} style={{width:"50px"}} className='btn btn-primary offset-md-1 my-1' onClick={()=>handleClick(value)} >{value}</button>)
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
                </div>
        //     </div>
        // </div>


    
  )
}

export default Calculate