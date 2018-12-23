import React from "react";
import CardSm from "Components/Cards/CardSm";
import Pagination from "Components/Navs/Pagination";
import ReviewItem from "Components/User/ReviewItem";
import thumb from "./assets/demo-thumbnail.png";
import FaIcon from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';


function PortfolioandReviews(props) {
  return (
    <CardSm>
      <h5 className="font-weight-bold mb-3">Portfolio</h5>
      <div className="d-flex align-items-center justify-content-between mb-5">
        <button className="align-self-stretch bg-transparent border-0 btn-light text-muted h3 m-0"><FaIcon icon={faAngleLeft}/></button>
        <img src={thumb} alt="" className="img-thumbnail"/>
        <img src={thumb} alt="" className="img-thumbnail" />
        <img src={thumb} alt="" className="img-thumbnail" />
        <button className="align-self-stretch bg-transparent border-0 btn-light text-muted h3 m-0"><FaIcon icon={faAngleRight} /></button>
      </div>
      <h5 className="font-weight-bold mb-3">Reviews</h5>
      <hr/>
      <ReviewItem/>
      <ReviewItem />
      <ReviewItem />
      <Pagination/>
    </CardSm>
  );
}

export default PortfolioandReviews;
