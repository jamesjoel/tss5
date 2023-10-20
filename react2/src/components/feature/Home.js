let Home = ()=>{

    let a = "rohit";
    let x = 10;
    let arr = ["red", "green", "blue", "yellow", "pink"];
    let user = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amar",
            age : 22
        },
        {
            name : "vijay",
            age : 20
        },
        {
            name : "nidhi",
            age : 23
        }
    ]


    return(
        <>
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, facilis. Deserunt consectetur, quibusdam odit illo saepe expedita nesciunt aliquam? Suscipit rerum officiis asperiores quam, saepe architecto quasi neque quod vitae.</p>
            <h2>{ a }</h2>
            {
                x == 11 ? <h3>Indore</h3> : <h3>Mumbai</h3>
            }

            {
                arr.map((value)=>{
                    return(
                        <h1>{value}</h1>
                    )
                })
            }

            {
                user.map((value)=>{
                    return(
                        <h5>{value.name} {value.age}</h5>
                    )
                })
            }
            
        </>
    )
}

export default Home;