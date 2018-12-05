import React from "react";
import { Link } from "react-router-dom";
import logo from "Images/logo-makely.svg";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-0">
            <div className="container">
                <Link className="navbar-brand" to={"/"}><img src={logo} alt="" /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">HOW IT WORKS <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/about"}>ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact"}>CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/find-creators"} >FIND CREATORS</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to={"/login"} className="btn btn-link my-2 my-sm-0 text-white nav-link">LOGIN</Link>
                        <Link to={"/signup"} className="btn btn-sign btn-outline-success my-2 my-sm-0 rounded-lg text-white nav-link">SIGN UP</Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
