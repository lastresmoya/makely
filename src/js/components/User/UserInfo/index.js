import React from "react";
import Avatar from "./assets/user-avatar-lg.png";

function UserInfo ({user,userInfo}) {
    const {userName, location, bio, currentView} = userInfo;
    return (
        <div className="d-flex flex-column align-items-center">
            <img src={Avatar} alt=""/>
            <h4 className="pt-4 font-weight-bold">{userName}</h4>
            <p className="h6 text-muted font-weight-normal">{location}</p>
            {user === 'public' && 
                <React.Fragment>
                    <small className="font-weight-normal text-muted text-center">{bio}</small>
                    <button className="btn btn-primary rounded-lg mt-3 text-white py-2">CONTACT</button>
                </React.Fragment>
            }
            {user === 'logged' &&
                <React.Fragment>
                    {currentView === 'client' &&
                        <React.Fragment>
                            <button className="btn btn-primary rounded-lg mt-3 text-white">CONTACT</button>
                        </React.Fragment>
                    }
                    {currentView === 'creator' &&
                        <React.Fragment>
                            <button className="btn btn-light rounded-lg mt-3 py-2 ">EDIT PROFILE</button>
                        </React.Fragment>
                    }
                </React.Fragment>
            }
        </div>
    );
}

export default UserInfo;
