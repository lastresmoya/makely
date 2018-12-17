import React from "react";
import { Link } from "react-router-dom";
import logo from "Images/logo-makely.png";

function Footer(props) {
    return (
        <footer className="py-5 text-white">
            <div className="container">
                <div className="text-center"><img src={logo} alt="" /></div>
                <div className="d-sm-flex justify-content-sm-center py-5">
                    <ul className="list-unstyled">
                        <li className="mb-4">ABOUT</li>
                        <li><a className="no-underline" href="">Team</a></li>
                        <li><a className="no-underline" href="">Blog</a></li>
                    </ul>
                    <ul className="list-unstyled mx-sm-5">
                        <li className="mb-4">SUPPORT</li>
                        <li><Link className="no-underline" to={"/faqs"}>FAQs</Link></li>
                        <li><a className="no-underline" href="">Contact Us</a></li>
                    </ul>
                    <ul className="list-unstyled">
                        <li className="mb-4">CONNECT</li>
                        <li><a className="no-underline" href="">Facebook</a></li>
                        <li><a className="no-underline" href="">Twitter</a></li>
                        <li><a className="no-underline" href="">Youtube</a></li>
                    </ul>
                </div>
                <div className="text-center"><a href="" className="btn-link text-white no-underline">Terms and Conditions</a></div>
            </div>
        </footer>
    );
}

export default Footer;
