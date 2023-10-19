import Box from "./Box";
import MiniBox from "./MiniBox";
import './Style.css';
let Home = ()=>{

    let demo = {
        color : "blue",
        fontSize : "20px",
        backgroundColor : "yellow"
    }


    return(
        <>
            <Box />
            <h1 className="demo">Home Page</h1>
            <p style={demo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quas! Sed quod, animi, omnis impedit atque fugit eligendi, perferendis quaerat ut temporibus minima commodi facere alias id iusto dicta. Consectetur?</p>
            <button className="btn btn-info">OK</button>
            <h3 style={{ backgroundColor : "green", fontSize : "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ipsum. Debitis, labore consequuntur libero dignissimos, deleniti sapiente possimus sint facilis dolorem nulla autem illum corporis commodi sequi quis unde enim!</h3>
            <MiniBox />

        </>
    )
}

export default Home;