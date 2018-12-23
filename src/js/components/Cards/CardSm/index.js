import React from "react";

function CardSm(props) {
    return (
        <div className="card shadow-sm border-0">
            <div className="card-body">
                {props.children}
            </div>
        </div>
    );
}

export default CardSm;
