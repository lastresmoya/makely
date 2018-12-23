import React from "react";

function ModalContentRow(props) {
    const leftCol = 3;
    const rightCol = 12 - leftCol;
    return (
        <div className="row mb-3">
            <div className={`col-${leftCol} text-right font-weight-bold text-muted`}>{props.label}:</div>
            <div className={`col-${rightCol}`}>
                {props.children}
            </div>
        </div>
    );
}

export default ModalContentRow;
