import React from "react";
import ModalContentRow from "./ModalContentRow";
import CheckInput from "Components/Forms/CheckInput";
import FaIcon from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import thumb from "./assets/demo-thumbnail.png";
import addBtn from "./assets/add-btn.png";
import profileImgEdit from "./assets/profile-img-edit.png";

function EditProfileModal(props) {
    return (
        <div className="modal fade" id="editProfileModal" tabIndex="-1" role="dialog" aria-labelledby="editProfileModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                
                <div className="modal-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1">
                                <div className="modal-header d-flex justify-content-center">
                                    <h5 className="modal-title" id="editProfileModalLabel">Edit your profile</h5>
                                </div>
                                <div className="modal-body mb-5">
                                {/*  */}
                                    <div className="container">
                                        {/* Profile Image */}
                                        <ModalContentRow label="Profile Image">
                                            <img src={profileImgEdit} alt=""/>
                                        </ModalContentRow>
                                        {/* Bio */}
                                        <ModalContentRow label="Bio">
                                            <textarea name="" id="" rows="3" className="form-control bg-transparent"></textarea>
                                        </ModalContentRow>
                                        {/* EMail */}
                                        <ModalContentRow label="Email">
                                            <input type="text" className="form-control bg-transparent"/>
                                        </ModalContentRow>
                                        {/* Password */}
                                        <ModalContentRow label="Password">
                                            <input type="password" className="form-control bg-transparent mb-3" placeholder="current password"/>
                                            <input type="password" className="form-control bg-transparent mb-3" placeholder="new password"/>
                                            <input type="password" className="form-control bg-transparent" placeholder="confirm password"/>
                                        </ModalContentRow>
                                        {/* Portfolio */}
                                        <ModalContentRow label="Portfolio">
                                            <img src={thumb} alt="" className="img-thumbnail col-4 p-1 mb-2" />
                                            <img src={thumb} alt="" className="img-thumbnail col-4 p-1 mb-2" />
                                            <img src={thumb} alt="" className="img-thumbnail col-4 p-1 mb-2" />
                                            <img src={addBtn} alt="" className="img-thumbnail col-4 p-1 mb-2" />

                                        </ModalContentRow>
                                        {/* Something */}
                                        <ModalContentRow label="Password">
                                            <CheckInput label="Printing"/>
                                             <CheckInput label="Modeling"/>
                                            <CheckInput label="Consultation" />
                                        </ModalContentRow>
                                        {/* Materials */}
                                        <ModalContentRow label="Materials">
                                            <strong>Plastic</strong>
                                            <div className="d-flex my-2">
                                                <div className="mr-3">
                                                    <CheckInput label="PLA" />
                                                    <CheckInput label="PETG" />
                                                    <CheckInput label="ABS" />
                                                    <CheckInput label="TPU" />
                                                </div>
                                                <div>
                                                    <CheckInput label="Resin" />
                                                    <CheckInput label="ASA" />
                                                    <CheckInput label="Nylon" />
                                                    <CheckInput label="PEI" />
                                                </div>
                                            </div>
                                            <strong>Metal</strong>
                                            <div className="d-flex mt-2">
                                                <div className="mr-3">
                                                    <CheckInput label="Steel" />
                                                    <CheckInput label="Aluminum" />
                                                </div>
                                            </div>
                                        </ModalContentRow>
                                        {/* Printers */}
                                        <ModalContentRow label="Printers">
                                            <div className="form-inline">
                                                <select className="custom-select col mr-3">
                                                    <option defaultValue>Model</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                                <select className="custom-select col">
                                                    <option defaultValue>Make</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="form-group mt-3">
                                                <span className="badge badge-light mr-2 text-muted">
                                                    Model A make 1a <FaIcon icon={faTimes} />
                                                </span>
                                            </div>
                                        </ModalContentRow>
                                        <div className="d-flex justify-content-center align-items-center mt-4">
                                            <button type="button" className="btn btn-primary rounded-lg mr-3 px-5 text-white">SAVE</button>
                                            <button type="button" className="btn btn-light rounded-lg px-5" data-dismiss="modal">CANCEL</button>
                                        </div>
                                    </div>

                                {/*  */}
                                </div>
                            </div>
                            <div className="col-1">
                                <button type="button" className="close mt-2 p-2" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><FaIcon icon={faTimes}/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default EditProfileModal;


