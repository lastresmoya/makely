import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "Components/Type/PageTitle";
import BtnSecondary from "Components/Buttons/BtnSecondary";

function ContactPage (props) {
    return (
        <div>
            <PageTitle title="Contact Us"/>
            <div className="container my-4"> 
                <div className="row">
                    <div className="col-sm-8 m-auto">
                        <h4 className="font-weight-bold">Contact Us</h4>
                        <p className="font-weight-normal text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium pretium tempor. Ut eget imperdiet neque. In volutpat ante semper diam molestie, et aliquam erat laoreet. Sed sit amet arcu aliquet, molestie justo at, auctor nunc. Phasellus ligula ipsum, volutpat eget semper id, viverra eget nibh. Suspendisse luctus mattis cursus. Nam consectetur ante at nisl hendrerit gravida. </p>
                        <p><Link to={"/faqs"} className="btn-link">Have you read the FAQs?</Link></p>
                    
                        <form>
                            <h4 className="font-weight-bold mb-4">Contact Form</h4>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <input type="text" className="form-control" placeholder="Select Category" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-sm-6">
                                    <input type="text" className="form-control" placeholder="First Name" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input type="text" className="form-control" placeholder="Second Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Body" rows="4"></textarea>
                            </div>
                            <div className="form-group d-flex justify-content-end">
                                <BtnSecondary content="SEND" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ContactPage;
