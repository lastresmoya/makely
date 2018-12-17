import React from "react";

function BtnPrimary ({content}) {
    return (
        <button className="btn btn-custom btn-lg btn-primary rounded-lg"><small className="font-weight-bold">{content}</small></button>
    );
}

export default BtnPrimary;
