import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/fontawesome-free-solid';

function BtnHeart(props) {
    return (
        <button
            onClick={props.onClick}
            className={
                props.isLike ? 'btn-heart align-self-start btn btn-light rounded-lg bg-white border-0 ml-4 text-danger'
                : 'btn-heart align-self-start btn btn-light rounded-lg bg-white border-0 ml-4'
            }
        >
            <FaIcon icon={faHeart} />
        </button>
    );
}

export default BtnHeart;
