import React from "react";
import { Link } from "react-router-dom";
import BtnSecondary from "Components/Buttons/BtnSecondary";
import BtnDanger from "Components/Buttons/BtnDanger";
import TextInput from "Components/Forms/TextInput";
import CheckInput from "Components/Forms/CheckInput";


function SignupPage(props) {
    return (
        <div className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto">
                        <div className="card border-0 py-4 mb-5">
                            <div className="card-body">
                                <div className="col-sm-8 m-auto">
                                    <section/><section/>
                                    <section>
                                        <h2 className="font-weight-bold text-center">Sign up and start creating</h2>
                                        <div className="divider"></div>
                                        <TextInput icon="user" placeholder="FIRST NAME" />
                                        <TextInput icon="user" placeholder="LAST NAME" />
                                        <TextInput type="email" placeholder="EMAIL" />
                                        <TextInput type="password" placeholder="PASSWORD" />
                                        <TextInput type="password" placeholder="CONFIRM PASSWORD" />
                                        <p className="font-weight-bold mt-4">Account type</p>
                                        <div className="d-flex justify-content-start align-items-center mb-4">
                                            <div className="mr-3"><CheckInput label="CLIENT" /></div>
                                            <div className="mr-3"><CheckInput label="CREATOR" /></div>
                                            <div className="mr-3"><CheckInput label="BOTH" /></div>
                                        </div>
                                        <div className="text-center pb-4">
                                            <Link to="/profile/general">
                                                <BtnDanger content="SIGNUP" />
                                            </Link>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <span className="mr-2">Already have an account?</span>
                                            <Link className="btn px-0 btn-link text-secondary" to="/login">Sign in here</Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
