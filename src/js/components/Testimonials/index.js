import React from "react";
import testimonial1 from "./assets/testimonial1.png";
import avatar1 from "./assets/avatar-1.png";
import FaIcon from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/fontawesome-free-solid';


function Testimonials (props) {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <h2 className="h3 pb-2 d-flex flex-column align-items-center justify-content-center">
                        <span className="text-info">What</span>
                        <span className="display-4 font-weight-bold">people say?</span>
                    </h2>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-auto mb-5 pb-5">
                    <button className="btn btn-circle btn-info"><FaIcon icon={faArrowLeft} /></button>
                </div>
                <div className="col-sm-6 text-center">
                    <img src={testimonial1} className="mt-4 mb-5 img-fluid" alt="" />
                    <p className="font-weight-bold lead">What an amazing moving service to help get things done, rid your place of any and all unwanted STUFF.</p>
                    <div className="d-flex justify-content-center align-items-center m-auto">
                        <img src={avatar1} alt="" />
                        <strong className="text-info ml-3 mr-5">Alice Smith</strong>
                    </div>
                </div>
                <div className="col-auto mb-5 pb-5">
                    <button className="btn btn-circle btn-info"><FaIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
