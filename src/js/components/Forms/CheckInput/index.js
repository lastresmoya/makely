import React from "react";

function CheckInput({label}) {
    return (
        <div className="form-check pb-1">
            <input type="checkbox" className="form-check-input" id={`${label}Check`} />
            <label className="form-check-label text-capitalize" htmlFor={`${label}Check`}>
                {label}
            </label>
        </div>
    );
}

export default CheckInput;
