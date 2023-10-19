import Box from "./Box";
import MiniBox from "./MiniBox";
import './Style.css';
let Home = ()=>{
    return(
        <>
            <Box />
            <h1 className="demo">Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore consectetur quia, a corrupti nulla odit, mollitia consequatur doloremque officia dolor quisquam suscipit omnis. Reprehenderit blanditiis saepe aut fugit. Ut, sapiente!</p>
            <button className="btn btn-info">OK</button>
            <MiniBox />

        </>
    )
}

export default Home;