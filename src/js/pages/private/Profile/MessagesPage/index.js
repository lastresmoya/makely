import React from 'react';
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import MessageItem from "./MessageItem";
import FaIcon from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';


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
                        <div className="card shadow-sm">
                            <div className="card-header">
                                <h5 className="card-title m-0">Ongoing Jobs</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control border-0 px-3 py-2" placeholder="Search" aria-label="Search" aria-describedby="search-addon"/>
                                        <div className="input-group-append ">
                                            <span className="input-group-text border-0 bg-transparent py-2 pr-4" id="search-addon"><FaIcon icon={faSearch}/></span>
                                        </div>
                                    </div>
                                </li>
                                <MessageItem/>
                                <MessageItem />
                                <MessageItem />
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-8">

                    </div>
                </div>
            </div>
        </div> 
    )
}

export default MessagesPage;