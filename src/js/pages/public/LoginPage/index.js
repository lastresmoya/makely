import React from "react";
import { Link } from "react-router-dom"; 
import BtnSecondary from "Components/Buttons/BtnSecondary";
import CheckInput from "Components/Forms/CheckInput";
import TextInput from "Components/Forms/TextInput";

class LoginPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentView: 'login'
        }
    }
    render(){
        return (
            <div className="bg-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div className="col-sm-8 m-auto">
                                        {this.state.currentView === 'login' &&
                                            <React.Fragment>
                                                <section className="text-center py-4">
                                                    <h2 className="font-weight-bold">Welcome back</h2>
                                                    <div className="divider"></div>
                                                    <TextInput type="email" placeholder="Email"/>
                                                    <TextInput type="password" placeholder="Password"/>
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <CheckInput label="Remember Me" />
                                                        <button className="btn px-0 btn-link text-dark" onClick={()=> this.setState({currentView:'forgotpassword'})}>Forgot Password</button>
                                                    </div>
                                                    <Link to="/profile/general">
                                                        <BtnSecondary content="LOGIN" />
                                                    </Link>
                                                    <div className="mt-4">
                                                        <span className="mr-2">Don't have an account?</span>
                                                        <Link className="btn px-0 btn-link text-danger" to="/signup">Sign up Here</Link>
                                                    </div>
                                                </section>
                                            </React.Fragment>
                                        }

                                        {/* Forgot Password Section */}
                                        {this.state.currentView === 'forgotpassword' &&
                                            <React.Fragment>
                                                Forgot Password
                                            </React.Fragment>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            {/* Here goes Reset Password Email*/}



                {/* Here Goes New Password Input */}
            </div>
        );
    }
}

export default LoginPage;
