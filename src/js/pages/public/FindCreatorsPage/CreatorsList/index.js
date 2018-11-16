import React from "react";
import CreatorListItem from "./CreatorListItem";
import Pagination from "Components/Navs/Pagination";

function CreatorsList(props) {
    return (
        <div>
            <CreatorListItem/>
            <CreatorListItem />
            <CreatorListItem />
            <CreatorListItem />
            <div className="pt-4">
                <Pagination />
            </div>
        </div>
    );
}

export default CreatorsList;
