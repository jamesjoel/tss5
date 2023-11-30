import { useState } from "react"
import axios from 'axios'
let Home = ()=>{

    
    let [temp, setTemp] = useState("");
    let [allData, setAllData] = useState({});

    let arr = [
        {
            id : 1,
            name : "Indore",
            lat : 22.7196,
            long : 75.8577,
        },
        {
            id : 2,
            name : "Ujjain",
            lat : 23.1765,
            long : 75.7885,
        },
        {
            id : 3,
            name : "Surat",
            lat : 21.1702,
            long : 72.8311,
        },
        {
            id : 4,
            name : "Chennai",
            lat : 13.0827,
            long : 80.2707,
        },
        {
            id : 5,
            name : "Shrinagar",
            lat : 34.0837,
            long : 74.7973,
        }
    ]
    
    let demo = (event)=>{
        let id = event.target.value;
        let data = {};
        arr.forEach(value=>{
            if(value.id == id)
            {
                data = value;
            }
        })
        axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.long}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`).then(response=>{
            // console.log(response.data);
            setAllData(response.data);
            setTemp(response.data.current.temperature_2m);
        })
        
    }
    return(
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <label>Select Your City</label>
                        <select onChange={(event)=>demo(event)}>
                            <option>Select</option>
                            {
                                arr.map((value, index)=>{
                                    return(
                                        <option value={value.id} key={index}>{value.name}</option>
                                    )
                                })
                            }
                        </select>
                        <br />
                        <br />
                        Current Temp : {temp}
                        <br />
                        <br />
                        {
                           allData && allData.hourly && allData.hourly.time ?  allData.hourly.time.map((value, index)=>{
                                

                                    return(
                                        (index)%24==0 ?  <h4>Date : {value} --- Temp {allData.hourly.temperature_2m[index]}</h4> : ''
                                    )
                                
                            })
                            : ''
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;