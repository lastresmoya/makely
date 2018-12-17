import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/fontawesome-free-solid';


function FAQItem ({id, title, content}) {
    console.log(id,title,content);
    return (
        <React.Fragment>
            <a className="btn-link h4" data-toggle="collapse" href={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                <span className="mr-2"><FaIcon icon={faQuestionCircle} /></span> {title}
            </a>
            <div className="collapse" id={`collapse${id}`}>
                {content}
            </div>
        </React.Fragment>
    );
}

export default FAQItem;
