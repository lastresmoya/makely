import React from "react";
import { Link } from "react-router-dom"; 
import BtnSecondary from "Components/Buttons/BtnSecondary";
import BtnDanger from "Components/Buttons/BtnDanger";
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
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <div className="card border-0 py-4 mb-5">
                                <div className="card-body">
                                    <div className="col-sm-8 m-auto">
                                        {this.state.currentView === 'login' &&
                                            <section>
                                                <h2 className="font-weight-bold text-center">Welcome back</h2>
                                                <div className="divider"></div>
                                                <TextInput type="email" placeholder="Email" />
                                                <TextInput type="password" placeholder="Password" />
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <CheckInput label="Remember Me" />
                                                    <button className="btn px-0 btn-link text-dark" onClick={() => this.setState({ currentView: 'forgotpassword' })}>Forgot Password</button>
                                                </div>
                                                <div className="text-center">
                                                    <Link to="/profile/general">
                                                        <BtnSecondary content="LOGIN" />
                                                    </Link>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    <span className="mr-2">Don't have an account?</span>
                                                    <Link className="btn px-0 btn-link text-danger" to="/signup">Sign up Here</Link>
                                                </div>
                                            </section>
                                        }

                                        {/* Forgot Password Section */}
                                        {this.state.currentView === 'forgotpassword' &&
                                            <section>
                                                <h2 className="font-weight-bold text-center">Reset Password</h2>
                                                <div className="divider"></div>
                                                <p>We will send you instructions on how to reset your password. Please make sure to use the email you signed up with.</p>
                                                <TextInput type="email" placeholder="Email" />
                                                <div onClick={()=>this.setState({currentView:'resetpassword'})} className="text-center mt-5">
                                                    <BtnSecondary content="SEND INSTRUCTIONS" />
                                                </div>
                                            </section>
                                        }
                                        {/* Reset Password Section */}
                                        {this.state.currentView === 'resetpassword' &&
                                            <section>
                                                <h2 className="font-weight-bold text-center">Reset Password</h2>
                                                <div className="divider"></div>
                                                <TextInput type="password" placeholder="ENTER NEW PASSWORD" />
                                                <TextInput type="password" placeholder="CONFIRM PASSWORD" />
                                                <div onClick={() => this.setState({ currentView: 'login' })} className="text-center mt-5">
                                                    <BtnDanger content="UPDATE" />
                                                </div>
                                            </section>
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
