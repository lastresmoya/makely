import React from "react";
import jobCardImg from "./assets/job-card-img.png";
import avatar from "./assets/avatar-alice.png";

function JobCard({status,size}) {
    let renderStatus = () => {
        if(status === "active"){
            return "success"
        } else if (status === "completed"){
            return "secondary"
        } else if (status === "cancelled") {
            return "danger"
        }
        else {
            return ""
        }
    }
    return (
        <div className="card w-100 mx-sm-2 mb-5 shadow-sm">
            
            <div className="card-img-wrapper pt-1">
                <div className="upper d-flex justify-content-end">
                    <span className="h6"><span className="badge badge-light text-muted px-2 py-1">01/01/2018</span></span>
                </div>
                <div className="lower d-flex justify-content-between align-items-end">
                    <div className="w-100">
                        <span className="h5"><span className={`text-uppercase badge badge-${renderStatus()}`}>{status}</span></span>
                        <p className="card-title mt-3  mb-0 text-white">Job title, Nam portitor blandit accumsan.</p>
                    </div>
                    <img src={avatar} alt="" className="avatar"/>
                </div>
                <img className="card-img" src={jobCardImg} alt="Card image" />
            </div>
            {/* <div className="card-img-overlay text-white">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">Last updated 3 mins ago</p>
            </div> */}
            <div className="card-body px-3 py-2">
                <p className="card-text font-weight-bold mb-1 d-flex justify-content-between">
                    <span>Quantity: <span className="text-muted">2</span></span>
                    <span className="text-muted">Alice Smith</span>
                </p>
                <p className="card-text font-weight-bold mb-1">Total Cost: <span className="text-muted">£50.00</span></p>
                <p className="card-text font-weight-bold mb-1">Materials: <span className="text-muted">PVC, ABS</span></p>
            </div>
        </div>
    );
}

export default JobCard;
