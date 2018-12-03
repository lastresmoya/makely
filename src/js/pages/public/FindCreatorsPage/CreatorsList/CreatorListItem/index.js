import React from "react";
import creatorThumb from "./assets/creator-thumb.png";
import FaIcon from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faThumbsUp,
    faMapMarkerAlt,
    faTrophy,
    faGlobe,
    faShoppingCart
} from '@fortawesome/fontawesome-free-solid';
import BtnHeart from '../../../../../components/Buttons/BtnHeart/BtnHeart';

class CreatorListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLike: false
        }
    }

    isLike() {
        this.setState({ isLike: !this.state.isLike});
    }

    render() {
        return (
            <div className="card mb-3 shadow-sm card-creator">
                <div className="card-body p-2 d-flex justify-content-start align-items-stretch">
                    <img src={creatorThumb} alt="" />
                    <div className="px-3 w-100 position-relative">
                        <div className="d-flex align-items-center justify-content-start pt-0 pb-1">
                            <span className="font-weight-bold h4 mr-3 mb-0">John Brewer</span>
                            <FaIcon icon={faThumbsUp} />
                            <small className="font-weight-bold text-muted ml-2 font-weight-bold">98%</small>
                            <span className="text-muted ml-5"><FaIcon icon={faTrophy} /></span>
                        </div>
                        <p><span className="text-danger"><FaIcon icon={faMapMarkerAlt} /></span> <span className="text-muted font-weight-bold">London, United Kingdom</span></p>
                        <div className="badges-container position-absolute">
                            <a className="badge badge-light  mr-1">PRINTING</a>
                            <a className="badge badge-light  mr-1">MODELING</a>
                            <a className="badge badge-light  mr-1">CONSULTATION</a>
                            <a className="badge badge-light  mr-1"><FaIcon icon={faGlobe} /> GLOBAL SHIPPING</a>
                            <a className="badge badge-light "><FaIcon icon={faShoppingCart} /> MARKET</a>
                        </div>
                    </div>
                    <div className="align-self-center">
                        <button className="btn btn-outline-secondary rounded-lg px-4">CONTACT</button>
                    </div>
                    <BtnHeart isLike={this.state.isLike} onClick={() => this.isLike()}/>
                </div>
            </div>
        );
    }
}
// function CreatorListItem(props) {
//     return (
//         <div className="card mb-3 shadow-sm card-creator">
//             <div className="card-body p-2 d-flex justify-content-start align-items-stretch">
//                 <img src={creatorThumb} alt="" />
//                 <div className="px-3 w-100 position-relative">
//                     <div className="d-flex align-items-center justify-content-start pt-0 pb-1">
//                         <span className="font-weight-bold h4 mr-3 mb-0">John Brewer</span>
//                         <FaIcon icon={faThumbsUp} />
//                         <small className="font-weight-bold text-muted ml-2 font-weight-bold">98%</small>
//                         <span className="text-muted ml-5"><FaIcon icon={faTrophy} /></span>
//                     </div>
//                     <p><span className="text-danger"><FaIcon icon={faMapMarkerAlt} /></span> <span className="text-muted font-weight-bold">London, United Kingdom</span></p>
//                     <div className="badges-container position-absolute">
//                         <a className="badge badge-light  mr-1">PRINTING</a>
//                         <a className="badge badge-light  mr-1">MODELING</a>
//                         <a className="badge badge-light  mr-1">CONSULTATION</a>
//                         <a className="badge badge-light  mr-1"><FaIcon icon={faGlobe} /> GLOBAL SHIPPING</a>
//                         <a className="badge badge-light "><FaIcon icon={faShoppingCart} /> MARKET</a>
//                     </div>
//                 </div>
//                 <div className="align-self-center">
//                     <button className="btn btn-outline-secondary rounded-lg px-4">CONTACT</button>
//                 </div>
//                 <BtnHeart isActive={false} />
//                 {/* <button className="align-self-start btn btn-light rounded-lg bg-white border-0 ml-4">
//                     <FaIcon icon={faHeart}/>
//                 </button> */}
//             </div>
//         </div>
//     );
// }

export default CreatorListItem;
