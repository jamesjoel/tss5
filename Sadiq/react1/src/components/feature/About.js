import {useState} from 'react';

let About = () =>{

    let [color, setColor] = useState("white");
    let [fontColor, setFontColor] = useState("black");

    let themeRed = ()=>{
        setColor("red")
        setFontColor("white")
    }
    let themeBlue = ()=>{
        setColor("blue")
        setFontColor("white")
    }
    let themeYellow = ()=>{
        setColor("yellow")
        setFontColor("black")
    }
    let themeGreen = ()=>{
        setColor("green")
        setFontColor("white")
    }

    let data = [
        {
            name : "Rohit",
            class : 10,
            salary : 45000,
            contact : 8675645
        },
        {
            name : "Mohit",
            class : 11,
            salary : 40000,
            contact : 8458965
        },
        {
            name : "Shyam",
            class : 5,
            salary : 5600,
            contact : 6574657
        },
        {
            name : "Paras",
            class : 9,
            salary : 15000,
            contact : 6573354
        },
        {
            name : "Ghanshyam",
            class : 12,
            salary : 45569,
            contact : 7684567
        },
        {
            name : "Arjun",
            class : 8,
            salary : 38000,
            contact : 6573956
        }
    ]
    return(
        <>
            <h1 className="text-center my-3">About Page</h1>
            <div className="containe my-4">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <div className="card">
                <div style={{backgroundColor : color}} className="card-header text-center"><h3 style={{color : fontColor}}>Teacher's Data</h3></div>
                <div className="card-body">
                    <table className={`table table-hover table-striped ${color ==='red'&&'table-danger'} ${color ==='blue'&&'table-primary'} ${color ==='yellow'&&'table-warning'} ${color ==='green'&&'table-success'}`}>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>NAME</th>
                                <th>CLASS</th>
                                <th>SALARY</th>
                                <th>CONTACT NUMBER</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value, index)=>{
                                return(
                                        <tr>
                                            <td>{ index+1 }</td>
                                            <td>{ value.name }</td>
                                            <td>{ value.class }</td>
                                            <td>&#8377; { value.salary }</td>
                                            <td>+91 { value.contact }</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div style={{backgroundColor : color}} className="card-footer text-center">
                    <h4 style={{color : fontColor, display : "inline"}}>Change Theme : </h4>
                    <button onClick={themeRed} className="btn btn-outline-danger mx-2"> RED </button>
                    <button onClick={themeBlue}  className="btn btn-outline-primary mx-2"> BLUE </button>
                    <button onClick={themeYellow}  className="btn btn-outline-warning mx-2"> YELLOW </button>
                    <button onClick={themeGreen} className="btn btn-outline-success mx-2"> GREEN </button>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;