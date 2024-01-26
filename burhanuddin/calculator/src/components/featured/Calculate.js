import React, { useState } from 'react'


const Calculate = () => {
    const [input, setinput] = useState('');
    const [theme, setTheme] = useState('Default');
    const [tec, setTec] = useState('');
    const [result, setResult] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [func, setFunc] = useState('');
    const manga={
        calcBG : {
            maxWidth:"320px",
        backgroundImage: 'url(https://i.etsystatic.com/34721648/r/il/e43af4/3882196329/il_570xN.3882196329_gddw.jpg)'
        },
        BG : {
            backgroundImage: 'url(https://jeroenthoughts.files.wordpress.com/2023/08/7gysvr141vn81.jpg)',
            minHeight:"600px"
        },
        buttn: {
            backgroundImage: 'url(https://jeroenthoughts.files.wordpress.com/2023/08/7gysvr141vn81.jpg)',
            maxHeight: "20px"
        }
    }
    const style2={

    }


    // const demo = Key(props)
    let handleOnClick= ()=>{
        setIsOpen(!isOpen);
    };

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
        <div className="container-fluid bordered" style={manga.BG}>
            <button className='btn btn-outline-dark offset-md-5 my-4' onClick={handleOnClick}>Themes</button>
            {isOpen && (
              <div className="row">
                <div className="container">
                    <div className="col-md-2 offset-md-5">
                    <div className='dropdown-content'>
                    <ul>
                        <button className='btn' value="manga" onClick={(event)=>{setTheme(event.target.value); console.log(theme)}} style={manga.buttn}>Manga</button>
                    </ul>
                </div>
                    </div>
                </div>


              </div>

            )}
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                    <div className="card box-shadow ms-5" style={manga.calcBG} >
                        {/* <div className="row">
                            <div className="col-md-6 offset-md-3"> */}
                        <div className="card-content ms-3">
                            <div className="card-header">
                                <h4 className='bg-light'> Common Calculator</h4>
                                <input type='text' value={tec} className='form-control' readOnly/>
                             </div>
                            <div className="card-body">
                                <div className="buttons ">
                                    <button className='form-control btn btn-primary' onClick={clearSlate}>Clear</button>
                                    {[1,2,3,4,5,6,7,8,9,0,'+','=','-','/','*'].map((value)=>{
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
                    <dialog className="dialog" id="dialog">hello</dialog>
                </div>
        //     </div>
        // </div>


    
  )
}

export default Calculate