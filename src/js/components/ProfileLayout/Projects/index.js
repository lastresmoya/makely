import React from "react";
import CardSm from "Components/Cards/CardSm";
import ProjectItem from "Components/User/ProjectItem";

function Projects(props) {
    return (
        <div data-aos="fade">
            <CardSm>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="font-weight-bold">Active Projects</h5>
                    <span className="h5 text-danger">2</span>
                </div>
                <ProjectItem/>
                <ProjectItem />
            </CardSm>
            <br/>
            <CardSm>
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h5 className="font-weight-bold">Completed Projects</h5>
                    <span className="h5 text-success">3</span>
                </div>
                <ProjectItem muted />
                <ProjectItem muted />
                <ProjectItem muted />
            </CardSm>
        </div>
    );
}

export default Projects;
