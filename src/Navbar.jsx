import logo from "./images/logo.png"

export default function Navbar(){
    return(
        <div className="navbar">
            <img src={logo} alt="logo" className="navLogo"/>
            <span className="nav-title">my travel journal.</span>
        </div>
    )
}