import React from "react";
import avatar from "./assets/avatar-alice.png";

function MessageItem(props) {
    return (
        <div className="list-group-item d-flex align-items-start  list-group-item-action px-2 job-list">
            <img src={avatar} alt=""/>
            <div className="w-100 ml-2">
                <div className="d-flex justify-content-between align-items-center text-muted font-weight-bold">
                    <span>Alice Smith</span><span>01/01/2018</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold mr-3">Job Title, Nam portittor blandit accumsan</span>
                    <span className="badge badge-pill badge-danger">3</span>
                </div>
            </div>
        </div>
    );
}

export default MessageItem;
