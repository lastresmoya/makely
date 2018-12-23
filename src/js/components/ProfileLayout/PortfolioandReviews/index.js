import React from "react";
import CardSm from "Components/Cards/CardSm";

function PortfolioandReviews(props) {
    return (
        <CardSm>
            <h5 className="font-weight-bold mb-3">Portfolio</h5>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <span>arrow</span>
                    <div>thumbnail1</div>
                    <div>thumbnail2</div>
                    <div>thumbnail3</div>
                <span>arrow</span>
            </div>
            <h5 className="font-weight-bold mb-3">Reviews</h5>
        </CardSm>
    );
}

export default PortfolioandReviews;
