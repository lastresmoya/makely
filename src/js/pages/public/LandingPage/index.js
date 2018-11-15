import React from 'react';
import draw1 from "./assets/draw1.png";
import draw2 from "./assets/draw2.png";
import iconCreator from "./assets/icon-creator.png";
import iconAgree from "./assets/icon-agree.png";
import icon3D from "./assets/icon-3dmodel.png";

function LandingPage (props) {
    return(
        <div>
            <header className="d-flex align-items-center bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 className="text-white display-3 font-weight-bold">Find 3D printers online</h1>
                            <p className="lead text-white">With Makely you can find anyone with a 3D printer to create your idea. The only limit is your imagination!</p>
                            <button className="btn btn-lg btn-primary px-4">GET STARTED</button>
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
                    <button className="btn btn-secondary btn-lg px-4 mt-4">GET STARTED</button>
                </div>
            </section>

            <section className="py-5 bg-custom bg-figures-1">
                <div className="container">
                    <div className="row my-2 align-items-center">
                        <div className="col-sm-7">
                            <p>Makely is platform for those who want to create things but never knew how to 3D print or 3D model. Let one of our experienced community creators take care of all intricacies and details surrounding the process. All you need to do is describe your idea to them!</p>
                        </div>
                        <div className="col-sm-5">
                            <img src={draw1} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="row my-2 align-items-center">
                        <div className="col-sm-7">
                            <img src={draw2} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-sm-5">
                            <p>On the flipside, if you are a 3D printing enthusiast you can become part of the community as a Creator! It is fantastic way to generate additional income. Don’t let that 3D printer sit there collecting dust!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-custom bg-figures-2">
                <div className="container">
                    <div className="row my-2 align-items-center">
                        <div className="col-sm-7">
                            <p>Makely is platform for those who want to create things but never knew how to 3D print or 3D model. Let one of our experienced community creators take care of all intricacies and details surrounding the process. All you need to do is describe your idea to them!</p>
                        </div>
                        <div className="col-sm-5">
                            <img src={draw1} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="row my-2 align-items-center">
                        <div className="col-sm-7">
                            <img src={draw2} className="img-fluid" alt="" />
                        </div>
                        <div className="col-sm-5">
                            <p>Makely is platform for those who want to create things but never knew how to 3D print or 3D model. Let one of our experienced community creators take care of all intricacies and details surrounding the process. All you need to do is describe your idea to them!</p>
                        </div>
                    </div>
                </div>
            </section>


        </div> 
    )
}

export default LandingPage;