import React from "react";
import BtnSecondary from "Components/Buttons/BtnSecondary";

function CTA(props) {
    return (
        <section className="bg-curve bg-curve-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 m-auto">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-end">
                            <div>
                                <h2 className="h3 m-0  d-flex flex-column align-items-start">
                                    <span className="text-secondary font-weight-bold">Start 3D</span>
                                    <span className="display-4 text-white font-weight-bold">printing your ideas now</span>
                                </h2>
                            </div>
                            <div className="col-auto mb-2">
                                <BtnSecondary content="SIGN UP FOR FREE!" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;