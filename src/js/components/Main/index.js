import React from "react";
import Navbar from "Components/Navbar"; 
import Footer from "Components/Footer";

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
