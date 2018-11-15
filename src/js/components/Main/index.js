import React from "react";
import Navbar from "../_shared/Navbar"; 
import Footer from "../_shared/Footer";

function Main(props) {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
}

export default Main;
