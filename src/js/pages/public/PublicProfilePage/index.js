import React from "react";
import ProfileLayout from "Components/ProfileLayout"

class PublicProfilePage extends React.Component {
    render(){
        return (
            <ProfileLayout user="public"/>
        );
    }
}

export default PublicProfilePage;
