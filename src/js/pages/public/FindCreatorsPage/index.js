import React from 'react';
import FiltersBar from "./FiltersBar";
import CreatorsList from "./CreatorsList";

function FindCreatorsPage (props) {
    return(
        <div>
            <FiltersBar/>
            <div className="container">
                <CreatorsList/>
            </div>
        </div> 
    )
}

export default FindCreatorsPage;