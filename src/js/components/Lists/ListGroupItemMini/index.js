import React from "react";

function ListGroupItemMini({label,value}) {
    return (
        <div className="list-group-item d-flex justify-content-between align-items-center font-weight-bold ">
            <span className="text-muted text-uppercase">{label}</span>
            <span className="text-secondary ">{value}</span>
        </div>
    );
}

export default ListGroupItemMini;
