import React from "react";

function MessageJob(props) {
    return (
        <div className="card-body bg-light d-flex justify-content-between align-items-start message-job">
            <div>
                <p className="card-text font-weight-bold mb-1">Job title, Nam porttitor blandit accumsan.</p>
                <p className="card-text font-weight-bold mb-1">Quantity: <span className="text-muted">2</span></p>
                <p className="card-text font-weight-bold mb-1">Total Cost: <span className="text-muted">£50.00</span></p>
                <p className="card-text font-weight-bold mb-1">Materials: <span className="text-muted">PVC, ABS</span></p>
                <span className="h5"><span className="text-uppercase badge badge-warning">NEGOTIATION</span></span>
            </div>
            <div>
                <button className="btn btn-secondary px-3 rounded-lg mr-3">ACCEPT</button>
                <button className="btn btn-outline-secondary btn-cancel--custom px-3 rounded-lg"><span >CANCEL</span></button>
            </div>
        </div>
    );
}

export default MessageJob;
