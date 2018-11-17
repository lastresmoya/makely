import React from 'react';
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import SortBy from "Components/Forms/SortBy";
import JobCard from "Components/Jobs/JobCard";
import FaIcon from '@fortawesome/react-fontawesome';
import { faWrench, faCheckCircle } from '@fortawesome/fontawesome-free-solid';
import { faTimesCircle } from '@fortawesome/fontawesome-free-regular';


function MyJobs (props) {
    return(
        <div>
            <Breadcrumbs/>
            <PageTitle title="All Jobs"/>
            <div className="container py-4">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5><span className="text-primary mr-2"><FaIcon icon={faWrench} /></span><strong>Active</strong></h5>
                            <SortBy default="date"/>
                        </div>
                        <div className="d-sm-flex">
                            <JobCard size={4} status="active"/>
                            <JobCard size={4} status="active"/>
                            <JobCard size={4} status="active"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5><span className="text-muted mr-2"><FaIcon icon={faCheckCircle} /></span><strong>Completed</strong></h5>
                            <SortBy default="date" />
                        </div>
                        <div className="d-sm-flex">
                            <JobCard size={4} status="completed"/>
                            <JobCard size={4} status="completed"/>
                            <JobCard size={4} status="completed"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5><span className="text-danger mr-2"><FaIcon icon={faTimesCircle} /></span><strong>Cancelled</strong></h5>
                            <SortBy default="date" />
                        </div>
                        <div className="d-sm-flex">
                            <JobCard size={4} status="cancelled"/>
                            <JobCard size={4} status="cancelled"/>
                            <JobCard size={4} status="cancelled"/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default MyJobs;