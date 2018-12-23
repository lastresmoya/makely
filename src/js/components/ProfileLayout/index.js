import React from "react";
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import UserInfo from "Components/User/UserInfo";
import PortfolioandReviews from "./PortfolioandReviews";
import Projects from "./Projects";
import ListGroupItemMini from 'Components/Lists/ListGroupItemMini';



class ProfileLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: 'Mark H.',
            location: 'London, United Kingdom',
            bio: 'Vestibulum rutrum quam vitae fringilia tinciditun. Suspendisse nex tortor urna. Ut laoreet sodales nisi, quis laculis nulla lacilis vitae.',
            currentView: 'creator'
        }
    }
    
    render(){
        const {isLogged} = this.props;
        const {userName, currentView} = this.state;
        let renderTitle = () => {
            if (isLogged) return <PageTitle title="Your Profile"/>;
            else return <PageTitle title={`${userName} Profile`}/>;
        }
        let renderPortfolio = () => {
            if((isLogged&&currentView==='creator')|| !isLogged){
                return <PortfolioandReviews/>
            }
        }
        let renderProjects = () => {
            if(isLogged && currentView==='client') return <Projects/>
        }
        let renderMessageCount = () => {
            if(isLogged) return <ListGroupItemMini label="MESSAGES" value="3"/>
        }
        let renderClientsWorked = () => {
            if ((isLogged && currentView === 'creator') || !isLogged) return <ListGroupItemMini label="Clients Worked With" value="5" /> ;
        }
        let renderResponseTime = () => {
            if ((isLogged && currentView === 'creator') || !isLogged) return <ListGroupItemMini label="Response time" value="2hrs" />
        }
        let renderMyJobs = () => {
            if (isLogged && currentView === 'creator') return <ListGroupItemMini label="My Jobs" value="6" />
        }
        let renderCreatorsWorked = () => {
            if (isLogged && currentView === 'client') return <ListGroupItemMini label="Creators Worked With" value="3" />
        }
        return (
            <React.Fragment>
                {/* Breadcrumbs */}
                {isLogged && <Breadcrumbs current={userName} />}
                {/* Page Title */}
                {renderTitle()}

                <section className="py-4 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <UserInfo isLogged={isLogged} userInfo={this.state} />
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {renderMessageCount()}
                                        {renderMyJobs()}
                                        <ListGroupItemMini label="Completed Jobs" value="3" />
                                        {renderClientsWorked()}
                                        {renderCreatorsWorked()}
                                        {renderResponseTime()}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                {isLogged &&
                                    <React.Fragment>
                                        <div className="card shadow-sm border-0 mb-3">
                                            <ul className="nav nav-tabs mx-3">
                                                <li className="nav-item mr-4">
                                                    <a className={`nav-link px-0 py-3 ${currentView==='creator' ? 'active' : ''}`} onClick={()=>this.setState({currentView:'creator'})}>Creator Profile</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className={`nav-link px-0 py-3 ${currentView==='client' ? 'active' : ''}`} onClick={()=>this.setState({currentView:'client'})}>Client Profile</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                }
                                {renderProjects()}
                                {renderPortfolio()}

                            </div>
                        </div>
                    </div>
                </section>

                {/* {user === 'public' &&
                    <div> Esta cajita solo aparece para el público</div>
                } */}
                
            </React.Fragment>
        );
    }
}

export default ProfileLayout;
