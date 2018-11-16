import React from 'react';
import FiltersBar from "./FiltersBar";
import CreatorsList from "./CreatorsList";

function FindCreatorsPage (props) {
    return(
        <div>
            <FiltersBar/>
            <div className="container my-4 pb-5">
                <CreatorsList/>
            </div>
        </div> 
    )
}

export default FindCreatorsPage;