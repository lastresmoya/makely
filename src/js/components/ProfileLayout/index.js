import React from "react";
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import CardSm from "Components/Cards/CardSm";
import UserInfo from "Components/User/UserInfo";
import PortfolioandReviews from "./PortfolioandReviews";


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
        const {user} = this.props;
        const {userName, currentView} = this.state;
        const userTitle = () => {
            if (user === 'logged') { return `Your Profile`}
            else return `${userName} Profile`;
        }
        return (
            <React.Fragment>
                {/* Breadcrumbs */}
                {user === 'logged' && <Breadcrumbs current={userName} />}
                {/* Page Title */}
                <PageTitle title={userTitle()}/>

                <section className="py-4 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <CardSm>
                                    <UserInfo user={user} userInfo={this.state}/>
                                </CardSm>
                            </div>
                            <div className="col-sm-8">
                                {user === 'logged' &&
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
                                        
                                        
                                        
                                        {currentView === 'client' &&
                                            <React.Fragment>
                                                <CardSm>
                                                        Active Projects
                                                </CardSm>
                                                <CardSm>
                                                        Completed Projects
                                                </CardSm>
                                            </React.Fragment>
                                        }
                                        {currentView === 'creator' && <PortfolioandReviews/>} 

                                    </React.Fragment>
                                }
                                { user === 'public' && <PortfolioandReviews/>}

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
