import React from 'react';
import draw1 from "./assets/draw1.png";
import draw2 from "./assets/draw2.png";
import iconCreator from "./assets/icon-creator.png";
import iconAgree from "./assets/icon-agree.png";
import icon3D from "./assets/icon-3dmodel.png";
import iconPrinter from "./assets/icon-3dprinter.png";
import iconConsult from "./assets/icon-consult.png";
import iconWallet from "./assets/icon-wallet.png";
import map from "./assets/map-locations.png";
import creation1 from "./assets/creation1.png";
import creation2 from "./assets/creation2.png";
import creation3 from "./assets/creation3.png";
import creation4 from "./assets/creation4.png";
import BtnPrimary from "Components/Buttons/BtnPrimary";
import BtnSecondary from "Components/Buttons/BtnSecondary";
import Testimonials from "Components/Testimonials";
import CTA from "Components/CTA";

function LandingPage (props) {
    return(
        <div>
            <header className="d-flex align-items-center bg-dark px-sm-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="text-white display-4 font-weight-bold">Find 3D printers online</h1>
                            <p className="lead text-white py-4 font-weight-bold">With Makely you can find anyone with a 3D printer to create your idea. The only limit is your imagination!</p>
                            <BtnPrimary content="GET STARTED"/>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 bg-dark text-white text-center ">
                <div className="container py-4">
                    <h2 className="h2 pb-2 d-flex flex-column align-items-center">
                        <span className="text-danger font-weight-bold">How</span>
                        <span className="display-4 text-white font-weight-bold">It Works</span>
                    </h2>
                    <div className="row pb-5">
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">1</strong><span className="font-weight-bold">Find a Creator</span></p>
                            <img src={iconCreator} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">2</strong><span className="font-weight-bold">Agree on a price</span></p>
                            <img src={iconAgree} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">3</strong><span className="font-weight-bold">Creator designs and prints the item</span></p>
                            <img src={icon3D} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">4</strong><span className="font-weight-bold">Your item gets delivered</span></p>
                            <img src={iconCreator} alt=""/>
                        </div>
                    </div>
                    <BtnSecondary content="GET STARTED"/>
                </div>
            </section>
            <div className="bg-curve bg-curve-bottom"></div>

            <section className="pt-0 bg-detail bg-detail-left">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 m-auto">
                            <div className="row pt-0 pb-4 align-items-center">
                                <div className="col-sm-7">
                                    <p className="font-weight-bold">Makely is platform for those who want to create things but never knew how to 3D print or 3D model. Let one of our experienced community creators take care of all intricacies and details surrounding the process. All you need to do is describe your idea to them!</p>
                                </div>
                                <div className="col-sm-5">
                                    <img src={draw1} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="row py-4 align-items-center">
                                <div className="col-sm-5">
                                    <img src={draw2} className="img-fluid" alt="" />
                                </div>
                                <div className="col-sm-7">
                                    <p className="font-weight-bold">On the flipside, if you are a 3D printing enthusiast you can become part of the community as a Creator! It is fantastic way to generate additional income. Don’t let that 3D printer sit there collecting dust!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-detail bg-detail-right pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <h2 className="h1 pb-2 d-flex flex-column align-items-start">
                                <span className="text-secondary font-weight-bold">What</span><span className="display-4 font-weight-bold">can I do with Makely</span>
                            </h2>
                            <div className="row text-center my-5">
                                <div className="col-sm-3">
                                    <img src={iconPrinter} alt="" />
                                    <h3 className="text-secondary h6 my-4 font-weight-bold">
                                        <strong>3D Print</strong></h3>
                                    <p className="text-muted">
                                        <small className="font-weight-bold">
                                            Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.
                                        </small>
                                    </p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={icon3D} alt="" />
                                    <h3 className="text-secondary h6 my-4 font-weight-bold">
                                        <strong>3D Model</strong></h3>
                                    <p className="text-muted">
                                        <small className="font-weight-bold">
                                            Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.
                                        </small>
                                    </p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={iconConsult} alt="" />
                                    <h3 className="text-secondary h6 my-4 font-weight-bold">
                                        <strong>Get Consultation</strong></h3>
                                    <p className="text-muted">
                                        <small className="font-weight-bold">
                                            Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.
                                        </small>
                                    </p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={iconWallet} alt="" />
                                    <h3 className="text-secondary h6 my-4 font-weight-bold">
                                        <strong>Earn Money</strong></h3>
                                    <p className="text-muted">
                                        <small className="font-weight-bold">
                                            Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-curve bg-curve-top py-5">&nbsp;</section>

            <section className="bg-dark">
                <div className="container">
                    {/* Get Inspired */}
                    <div className="row py-5">
                        <div className="col-sm-10 m-auto">
                            <h2 className="h4 pb-2 d-flex flex-column align-items-center">
                                <span className="display-4 text-white font-weight-bold">Get Inspired</span>
                                <span className="text-info font-weight-bold">by other creations</span>
                            </h2>
                            <div className="d-flex justify-content-center text-white py-4">
                                <figure className="px-2">
                                    <img src={creation1} alt="" className="img-fluid" />
                                    <figcaption className="py-2 font-weight-bold">Example 1</figcaption>
                                </figure>
                                <figure className="px-2">
                                    <img src={creation2} alt="" className="img-fluid" />
                                    <figcaption className="py-2 font-weight-bold">Example 2</figcaption>
                                </figure>
                                <figure className="px-2">
                                    <img src={creation3} alt="" className="img-fluid" />
                                    <figcaption className="py-2 font-weight-bold">Example 3</figcaption>
                                </figure>
                                <figure className="px-2">
                                    <img src={creation4} alt="" className="img-fluid" />
                                    <figcaption className="py-2 font-weight-bold">Example 4</figcaption>
                                </figure>
                            </div>
                            <div className="row">
                                <div className="col text-center">
                                    <BtnPrimary content="VIEW MORE" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-5 bg-dark">
                <div className="container">
                    {/* Explore */}
                    <div className="row py-5 text-center">   
                        <div className="col">
                            <h2 className="h3 pb-2 d-flex flex-column align-items-center">
                                <span className="text-danger font-weight-bold">Explore</span>
                                <span className="display-4 text-white font-weight-bold">all locations</span>
                            </h2>
                            <img src={map} alt="" className="img-fluid pt-4 pb-3"/>

                            <p className="text-white font-weight-bold">Creators available in multiple location across the world. Find one near you now!</p>
                            <BtnSecondary content="EXPLORE ALL"/>
                       </div>
                    </div>
                </div>
            </section>

            <section className="py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </section>

           <CTA/>

        </div> 
    )
}

export default LandingPage;