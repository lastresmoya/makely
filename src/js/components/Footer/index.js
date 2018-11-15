import React from "react";
import logo from "Images/logo-makely.png";

function Footer(props) {
    return (
        <footer className="py-5 text-white">
            <div className="container">
                <div className="text-center"><img src={logo} alt="" /></div>
                <div className="d-sm-flex justify-content-sm-center py-5">
                    <ul className="list-unstyled">
                        <li className="mb-4">ABOUT</li>
                        <li><a href="">Team</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>
                    <ul className="list-unstyled mx-sm-5">
                        <li className="mb-4">SUPPORT</li>
                        <li><a href="">FAQs</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li className="mb-4">CONNECT</li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Youtube</a></li>
                    </ul>
                </div>
                <div className="text-center"><a href="" className="btn-link text-white">Terms and Conditions</a></div>
            </div>
        </footer>
    );
}

export default Footer;
