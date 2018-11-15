
import React from "react";

function BtnSecondary({content}) {
    return (
        <button className="btn btn-custom btn-secondary btn-lg rounded-lg"><small className="font-weight-bold">{content}</small></button>
    );
}

export default BtnSecondary;
