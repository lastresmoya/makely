import React from "react";
import ProfileLayout from "Components/ProfileLayout"

class PublicProfilePage extends React.Component {
    render(){
        return (
            <ProfileLayout isLogged={false}/>
        );
    }
}

export default PublicProfilePage;
