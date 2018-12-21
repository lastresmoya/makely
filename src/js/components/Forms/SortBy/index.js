import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid';

function SortBy(props) {
    let renderDefault = () => {
        if(props.default){
            return `${props.default}`
        } else {
            return "popularity"
        }
    }
    return (
        <div className="dropdown">
            <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddSort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort by {renderDefault()}  <FaIcon icon={faAngleDown} />
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ddSort">
                {props.children}
            </div>
        </div>
    );
}

export default SortBy;
