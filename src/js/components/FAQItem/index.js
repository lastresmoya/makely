import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid';


function FAQItem ({id, title, content}) {
    console.log(id,title,content);
    return (
        <div className="d-flex flex-column text-left mb-3">
            <a className="btn-link h4" data-toggle="collapse" href={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                <span className="mr-2 faq-icon"><FaIcon icon={faQuestionCircle} /></span> <span className="text-dark">{title}</span>
            </a>
            <div className="collapse pl-4 ml-3" id={`collapse${id}`}>
                {content}
            </div>
        </div>
    );
}

export default FAQItem;
