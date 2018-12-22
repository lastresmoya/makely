import React from "react";
import FaIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faLock } from '@fortawesome/fontawesome-free-solid';


function TextInput({type, placeholder}) {
    let renderIcon = () => {
        if(type==='email') {
            return <FaIcon icon={faEnvelope}/>
        }
        if (type === 'password') {
            return <FaIcon icon={faLock} />
        }
    } 
    return (
        <React.Fragment>
            <div className="input-group mb-3 border-bottom">
                <div className="input-group-prepend ">
                    <span className="input-group-text bg-transparent border-0" id={`${type}-addon`}>{renderIcon()}</span>
                </div>
                <input type={type} className="form-control bg-transparent border-0" placeholder={placeholder} aria-label={placeholder} aria-describedby={`${type}-addon`}/>
            </div>
        </React.Fragment>
    );
}

export default TextInput;
