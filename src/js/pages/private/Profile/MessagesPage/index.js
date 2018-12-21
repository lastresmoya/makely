import React from 'react';
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import MessageItem from "./MessageItem";
import MessageJob from "./MessageJob";
import avatarAlice from "./assets/avatar-alice.png";
import avatarMark from "./assets/avatar-mark.png";
import FaIcon from '@fortawesome/react-fontawesome';
import { faSearch, faPlus, faTimesCircle } from '@fortawesome/fontawesome-free-solid';


function MessagesPage (props) {
    return(
        <div>
            {/* 
            This View Assumes that you're logged in as a Creator,
            although it would be used for creators and people looking for creators
            */}
            <Breadcrumbs current="Messages"/>
            <PageTitle title="Messages"/>
            <div className="container py-4">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card shadow-sm ongoing-jobs">
                            <div className="card-header">
                                <h5 className="card-title m-0">Ongoing Jobs</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-0">
                                    <div className="input-group input-group--messages search">
                                        <input type="text" className="form-control border-0 px-3 py-2" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                                        <div className="input-group-append position-relative">
                                            <button className="btn btn-outline-secondary border-0 bg-transparent p-0 position-absolute" type="button" id="search-addon">
                                                <FaIcon icon={faSearch} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <MessageItem/>
                                <MessageItem />
                                <MessageItem />
                            </ul>
                        </div>
                        <a href="#" className="font-weight-bold text-muted text-center d-block my-4">See all jobs</a>
                    </div>
                    <div className="col-sm-8">
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h5 className="card-title m-0">Messages</h5>
                            </div>
                            <MessageJob/>
                            <div className="card-body message-box">
                                {/* Alice */}
                                <div className="d-flex align-items-start mb-4 message-box__item">
                                    <img src={avatarAlice} alt=""/>
                                    <div className="px-3 py-3 ml-2 mr-5 bg-light-secondary card shadow-sm w-75 border-0">
                                        <div className="d-flex justify-content-between"><strong>Alice Smith</strong> <strong className="text-muted">5:45pm</strong></div>
                                        <p className="m-0">In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ip</p>
                                    </div>
                                </div>
                                
                                {/* Me Mark */}
                                <div className="d-flex align-items-start mb-4 message-box__item">
                                    <div className="px-3 py-3 mr-2 ml-5 bg-light card shadow-sm w-75 border-0">
                                        <div className="d-flex justify-content-between"><strong className="text-muted">5:45pm</strong><strong>You</strong></div>
                                        <p className="m-0">In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ip</p>
                                    </div>
                                    <img src={avatarMark} alt="" />
                                </div>

                                {/* Me Mark Declined */}
                                <div className="d-flex align-items-start mb-4 message-box__item">
                                    <div className="px-3 py-3 mr-2 ml-5 bg-light-danger card shadow-sm w-75 border-0 d-flex justify-content-start flex-row">
                                        <div className="h5 text-danger mr-3"><FaIcon icon={faTimesCircle}/></div>
                                        <div className="w-100">
                                            <strong>You have declined this project</strong>
                                            <p className="m-0"><strong>Reason:</strong> In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. </p>
                                        </div>
                                    </div>
                                    <img src={avatarMark} alt="" />

                                </div>
                            </div>
                            <div className="card-footer p-0">
                                <textarea name="" className="form-control border-0" rows="3" defaultValue="Start typing here..."></textarea>
                            </div>
                            <div className="card-footer bg-light d-flex justify-content-between align-items-center py-1">
                                <button className="btn btn-link px-0 text-muted font-weight-bold"><FaIcon icon={faPlus} /><span className="ml-2">Attach Files</span></button>
                                <div className="card-text text-muted">Press enter to send</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default MessagesPage;