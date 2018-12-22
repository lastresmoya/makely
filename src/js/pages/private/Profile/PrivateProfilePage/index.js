import React from "react";
import ProfileLayout from "Components/ProfileLayout"

class PrivateProfilePage extends React.Component {
    render(){
        return (
            <ProfileLayout user="logged"/>
        );
    }
}

export default PrivateProfilePage;
