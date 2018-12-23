import React from "react";
import avatar from "./assets/avatar-review.png";


function ProjectItem(props) {
    return (
        <div className={`card border-0 ${props.muted ? 'bg-light' : 'shadow-sm'} mb-3 px-4`}>
            <div className={`card-header px-0 ${props.muted ? 'bg-light' : ''}`}>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted font-weight-bold mb-1">Job title, Nam porttitor blandit accumsan.</p>
                    <div className="d-flex align-items-center">
                        <strong className="text-secondary mr-2">Rebecca Nelson</strong>
                        <img src={avatar} alt="" />
                    </div>
                </div>
                <div className="text-muted">
                    <span className="mr-5"><strong>Quantity: </strong>2</span>
                    <span><strong>Materials: </strong>PVC, ABS</span>
                </div>
            </div>
            <div className="card-body px-1 py-2">
                <p className="h6 text-muted">Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nex tortor urna. Ut laoreet soldales nisi, quis, iaculos nulla iaculos vitae. Donex saggittis facurbis lacus efet vlanidt. auis vidar uticesu , at condments</p>
            </div>
        </div>
    );
}

export default ProjectItem;
