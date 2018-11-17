import React from "react";

function PageTitle({title}) {
    return (
        <div className="card">
            <div className="card-body pb-2 pt-3">
                <div className="container">
                    <h3 className="font-weight-bold">{title}</h3>
                </div>
            </div>
        </div>
    );
}

export default PageTitle;
