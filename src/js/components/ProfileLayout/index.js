import React from "react";
import Breadcrumbs from "Components/Navs/Breadcrumbs";
import PageTitle from "Components/Type/PageTitle";
import UserInfo from "Components/User/UserInfo"

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
        const {userName} = this.state;
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

                <section className="py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-body">
                                        <UserInfo user={user} userInfo={this.state}/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-8">
                            
                            </div>
                        </div>
                    </div>
                </section>

                {user === 'public' &&
                    <div> Esta cajita solo aparece para el público</div>
                }
                {user === 'logged' &&
                    <React.Fragment></React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default ProfileLayout;
