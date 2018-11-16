import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faAngleDown, faTimes } from '@fortawesome/fontawesome-free-solid';
import CheckInput from "Components/Forms/CheckInput";

function FiltersBar (props) {
    return (
        <div>
            {/* FilterTop */}
            <div className="card">
                <div className="card-body py-3">
                    <div className="container">
                        <div className="d-flex">
                            <div className="btn-group">
                                {/* Location */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Location  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddLocation">
                                        <form className="py-1 px-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" id="locationInput" placeholder="Add Location" />
                                            </div>
                                            <div className="px-2">
                                                <div><small className="py-2 mr-2 font-weight-bold">United Kingdom <span className="text-muted"><FaIcon icon={faTimes} /></span></small></div>
                                                <div><small className="py-2 mr-2 font-weight-bold">United States <span className="text-muted"><FaIcon icon={faTimes} /></span></small></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Services */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddServices" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Services  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddServices">
                                        <form className="py-1 px-3">
                                            <CheckInput label="printing" />
                                            <CheckInput label="Modelling" />
                                            <CheckInput label="Consultation" />
                                        </form>
                                    </div>
                                </div>

                                {/* Materials */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddMaterials" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Materials  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddMaterials">
                                        <form className="py-1 px-3">
                                            <CheckInput label="Plastic" />
                                            <CheckInput label="Metals" />
                                        </form>
                                        <div className="dropdown-divider"></div>

                                        <strong className="text-secondary px-3">Advanced Filter <FaIcon icon={faAngleDown} /></strong>
                                        <h6 className="dropdown-header">Plastic</h6>
                                        <div className="px-3 py-1">
                                            <div className="form-row">
                                                <div className="col-sm-6"><CheckInput label="PLA" /></div>
                                                <div className="col-sm-6"><CheckInput label="Resin" /></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-sm-6"><CheckInput label="PETG" /></div>
                                                <div className="col-sm-6"><CheckInput label="ASA" /></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-sm-6"><CheckInput label="ABS" /></div>
                                                <div className="col-sm-6"><CheckInput label="Nylon" /></div>
                                            </div>
                                            <div className="form-row">
                                                <div className="col-sm-6"><CheckInput label="TPU" /></div>
                                                <div className="col-sm-6"><CheckInput label="PEI" /></div>
                                            </div>
                                        </div>
                                        <h6 className="dropdown-header">Metals</h6>
                                        <div className="px-3 py-1">
                                            <div className="form-row">
                                                <div className="col-sm-6"><CheckInput label="Steel" /></div>
                                                <div className="col-sm-6"><CheckInput label="Aluminium" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Language */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddLanguages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Language  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddLanguages">
                                        <form className="py-1 px-3">
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" id="languageInput" placeholder="Add Language" />
                                            </div>
                                            <div className="px-2">
                                                <div><small className="py-2 mr-2 font-weight-bold">English <span className="text-muted"><FaIcon icon={faTimes} /></span></small></div>
                                                <div><small className="py-2 mr-2 font-weight-bold">Spanish <span className="text-muted"><FaIcon icon={faTimes} /></span></small></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Projects */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddProjects" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Projects  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddProjects">
                                        <h6 className="dropdown-header">Project Completed</h6>
                                        <form className="py-1 px-3">
                                            <CheckInput label="0-5" />
                                            <CheckInput label="6-10" />
                                            <CheckInput label="11+" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="btn-group ml-auto">
                                {/* More Filters */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddMoreFilters" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        More Filters  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddMoreFilters">
                                        <form className="py-1 px-3">
                                        </form>
                                    </div>
                                </div>

                                {/* Sort By */}
                                <div className="dropdown">
                                    <a className="btn btn-light dropdown-toggle text-muted" href="#" role="button" id="ddSort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sort by popularity  <FaIcon icon={faAngleDown} />
                                    </a>

                                    <div className="dropdown-menu" aria-labelledby="ddSort">
                                        <form className="py-1 px-3">
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* MoreFilters */}
            <div className="card">
                <div className="card-body py-3">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col ml-3">
                                <button className="btn btn-light btn-sm mr-2 font-weight-bold">Filter 1 <FaIcon icon={faTimes} /></button>
                                <button className="btn btn-light btn-sm font-weight-bold">Filter 2 <FaIcon icon={faTimes} /></button>
                            </div>
                            <div className="col-auto ml-auto mr-3">
                                <strong>A total of 234</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> 
    );
}

export default FiltersBar;
