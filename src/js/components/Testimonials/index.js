import React from "react";
import testimonial1 from "./assets/testimonial1.png";
import avatar1 from "./assets/avatar-1.png";
import FaIcon from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/fontawesome-free-solid';


class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg',
                'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/EVHXF4MUT6.jpg',
                'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/D7VE3SK3RD.jpg',
                'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/0XRFUE80AZ.jpg',
                'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/2DQJJ9RLVD.jpg'
            ],
            current: 0,
            isNext: true
        };
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h2 className="h4 pb-2 d-flex flex-column align-items-center">
                            <span className="display-4 text-info font-weight-bold">Testimonials</span>
                            <span className="font-weight-bold">What others are saying</span>
                        </h2>
                    </div>
                </div>
                <div id="testimonialsCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col-sm-6 mx-auto w-md-100 text-center">
                                    <img src={testimonial1} className="mt-4 mb-5 img-fluid" alt="" />
                                    <p className="font-weight-bold lead">What an amazing moving service to help get things done, rid your place of any and all unwanted STUFF.</p>
                                    <div className="d-flex justify-content-center align-items-center m-auto">
                                        <img src={avatar1} alt="" />
                                        <strong className="text-info ml-3 mr-5">Alice Smith</strong>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col-sm-6 mx-auto w-md-100 text-center">
                                    <img src={testimonial1} className="mt-4 mb-5 img-fluid" alt="" />
                                    <p className="font-weight-bold lead">What an amazing moving service to help get things done, rid your place of any and all unwanted STUFF.</p>
                                    <div className="d-flex justify-content-center align-items-center m-auto">
                                        <img src={avatar1} alt="" />
                                        <strong className="text-info ml-3 mr-5">SECOND SLIDE</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="carousel-control-prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true">
                            <button className="btn btn-circle btn-info position-absolutw" href="#testimonialsCarousel" role="button" data-slide="prev"><FaIcon icon={faArrowLeft} /></button>
                        </span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next">
                        <span className="carousel-control-next-icon" aria-hidden="true">
                            <button className="btn btn-circle btn-info position-absolute" href="#testimonialsCarousel" role="button" data-slide="next"><FaIcon icon={faArrowRight} /></button>
                        </span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Testimonials;