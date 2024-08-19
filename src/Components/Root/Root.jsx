import { NavLink, Outlet } from "react-router-dom";
import './Root.css'

const Root = () => {
    return (
        <div>
            <h2>Main Root is this</h2>
            <div style={{display:"flex", gap: "10px", justifyContent:"center"}}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/home"}>Countries</NavLink>
            <NavLink to={"/comments"}>Comments</NavLink>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;