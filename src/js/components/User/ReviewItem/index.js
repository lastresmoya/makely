import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';
import avatar from "./assets/avatar-review.png";

function ReviewItem(props) {
    return (
        <div className="card bg-light border-0 mb-3 px-4">
            <div className="card-header bg-light px-0">
                <div className="d-flex justify-content-between align-items-center">
                    <p className="text-muted font-weight-bold mb-1">Job title, Nam porttitor blandit accumsan.</p>
                    <div className="text-warning">
                        <FaIcon icon={faStar} /><FaIcon icon={faStar} /><FaIcon icon={faStar} /><FaIcon icon={faStar} /><FaIcon icon={faStar} />
                    </div>
                </div>
                <div className="text-muted">
                  <span className="mr-5"><strong>Quantity: </strong>2</span>
                  <span><strong>Materials: </strong>PVC, ABS</span>
                </div>
            </div>
            <div className="card-body px-0 py-2 d-flex justify-content-start align-items-start">
                <img src={avatar} alt=""/>
                <div className="w-100 ml-3 text-muted">
                  <strong>Rebecca Nelson</strong>
                  <p className="h6">Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nex tortor urna. Ut laoreet soldales nisi, quis, iaculos nulla iaculos vitae. Donex saggittis facurbis lacus efet vlanidt. auis vidar uticesu , at condments</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;
