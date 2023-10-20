let About = ()=>{
    let data = [
        {
            name : "rohit",
            age : 25,
            fee : 5000
        },
        {
            name : "amar",
            age : 22,
            fee : 4000
        },
        {
            name : "vijay",
            age : 20,
            fee : 6000
        },
        {
            name : "nidhi",
            age : 23,
            fee : 5500
        }
    ]
    return(
        <>
            <h1>About</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{value.name}</td>
                                    <td>{value.age}</td>
                                    <td>{value.fee}</td>
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )


}

export default About;