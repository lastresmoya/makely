import React from 'react';
import draw1 from "./assets/draw1.png";
import draw2 from "./assets/draw2.png";
import iconCreator from "./assets/icon-creator.png";
import iconAgree from "./assets/icon-agree.png";
import icon3D from "./assets/icon-3dmodel.png";
import iconPrinter from "./assets/icon-3dprinter.png";
import iconConsult from "./assets/icon-consult.png";
import iconWallet from "./assets/icon-wallet.png";
import BtnPrimary from "Components/Buttons/BtnPrimary";
import BtnSecondary from "Components/Buttons/BtnSecondary";

function LandingPage (props) {
    return(
        <div>
            <header className="d-flex align-items-center bg-dark px-sm-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="text-white display-3 font-weight-bold">Find 3D printers online</h1>
                            <p className="lead text-white">With Makely you can find anyone with a 3D printer to create your idea. The only limit is your imagination!</p>
                            <BtnPrimary content="GET STARTED"/>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-5 bg-dark text-white text-center bg-curve bg-curve-bottom">
                <div className="container">
                    <h1 className="d-flex flex-column"><span className="text-danger">How</span><span className="display-4 font-weight-bold">It Works</span></h1>
                    <div className="row">
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">1</strong><span>Find a Creator</span></p>
                            <img src={iconCreator} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">2</strong><span>Agree on a price</span></p>
                            <img src={iconAgree} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">3</strong><span>Creator designs and prints the item</span></p>
                            <img src={icon3D} alt=""/>
                        </div>
                        <div className="col-sm-3">
                            <p className="d-flex flex-column" style={{height:"6rem"}}><strong className="text-danger h2">4</strong><span>Your item gets delivered</span></p>
                            <img src={iconCreator} alt=""/>
                        </div>
                    </div>
                    <BtnSecondary content="GET STARTED"/>
                </div>
            </section>

            <section className="py-5 bg-custom bg-figures-1">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <div className="row my-2 align-items-center">
                                <div className="col-sm-7">
                                    <p className="font-weight-bold">Makely is platform for those who want to create things but never knew how to 3D print or 3D model. Let one of our experienced community creators take care of all intricacies and details surrounding the process. All you need to do is describe your idea to them!</p>
                                </div>
                                <div className="col-sm-5">
                                    <img src={draw1} className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="row my-2 align-items-center">
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

            <section className="py-5 bg-custom bg-figures-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <h2 className="h1 pb-2 d-flex flex-column align-items-start">
                                <span className="text-secondary">What</span><span className="display-4 font-weight-bold">can I do with Makely</span>
                            </h2>
                            <div className="row text-center my-5">
                                <div className="col-sm-3">
                                    <img src={iconPrinter} alt="" />
                                    <h3 className="text-secondary h5 my-4"><strong>3D Print</strong></h3>
                                    <p className="text-muted"><small>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.</small></p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={icon3D} alt="" />
                                    <h3 className="text-secondary h5 my-4"><strong>3D Model</strong></h3>
                                    <p className="text-muted"><small>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.</small></p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={iconConsult} alt="" />
                                    <h3 className="text-secondary h5 my-4"><strong>Get Consultation</strong></h3>
                                    <p className="text-muted"><small>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.</small></p>
                                </div>
                                <div className="col-sm-3">
                                    <img src={iconWallet} alt="" />
                                    <h3 className="text-secondary h5 my-4"><strong>Earn Money</strong></h3>
                                    <p className="text-muted"><small>Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra eleifend lacus, vitae ullamcorper metuso.</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

            <section className="py-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-10 m-auto">
                            <h2 className="h3 pb-2 d-flex flex-column align-items-center">
                                <span className="display-4 font-weight-bold text-white">Get Inspired</span>
                                <span className="text-info">by other creations</span>
                            </h2>
                            <div className="row">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div> 
    )
}

export default LandingPage;