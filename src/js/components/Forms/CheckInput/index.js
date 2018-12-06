import React from "react";

function CheckInput(props) {
    return (
        <div className="form-check pb-1">
            <input
                type="checkbox"
                className="form-check-input"
                id={`${props.label}`}
                onClick={props.onClick}
            />
            <label className="form-check-label text-capitalize" htmlFor={`${props.label}Check`}>
                {props.label}
            </label>
        </div>
    );
}

export default CheckInput;
