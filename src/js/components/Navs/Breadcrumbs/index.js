import React from "react";
import { Link } from "react-router-dom";
import FaIcon from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';


function Breadcrumbs({current}) {
    return (
        <div className="bg-light card m-0">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 px-0">
                        <li className="breadcrumb-item"><Link to={"/"}><FaIcon icon={faHome} /></Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{current}</li>
                    </ol>
                </nav>
            </div>
        </div>
    );
}

export default Breadcrumbs;
