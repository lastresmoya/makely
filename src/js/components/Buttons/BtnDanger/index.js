import React from "react";

function BtnDanger({ content }) {
    return (
        <button className="btn btn-custom btn-lg btn-danger rounded-lg"><small className="font-weight-bold">{content}</small></button>
    );
}

export default BtnDanger;
