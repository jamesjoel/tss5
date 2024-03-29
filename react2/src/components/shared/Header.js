import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
let Header = ()=>{

    let allData = useSelector(state=>state);

    return(
        <>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Logo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/inbox">Inbox ({allData.length})</NavLink>
                    </li>
                    {
                        localStorage.getItem("access-token")
                        ?
                        <>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout">Logout</NavLink>
                            </li>
                        </>
                        :
                        <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        </>
                    }
                    
                    {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/help">Help</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp2">Comp2</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp3">Comp3</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp4">Comp4</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp5">Comp5</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp6">Comp6</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/comp7">Comp7</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/student">Student</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/student-list">Student-List</NavLink>
                    </li> */}
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Header;