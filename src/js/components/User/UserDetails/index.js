import React from "react";
import BadgeDefault from 'Components/Badges/BadgeDefault';
import FaIcon from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';


function UserDetails(props) {
    return (
        <React.Fragment>
          {/* Rating */}
          <div className="list-group-item">
            <strong className="text-muted font-weight-normal">RATING</strong>
            <div className="text-warning h3 mb-0">
              <FaIcon icon={faStar} className="h5" />
              <FaIcon icon={faStar} className="h5" />
              <FaIcon icon={faStar} className="h5" />
              <FaIcon icon={faStar} className="h5" />
              <FaIcon icon={faStar} className="h5" />
            </div>
          </div>
          {/* Badges */}
          <div className="list-group-item">
            <strong className="text-muted font-weight-normal">BADGES</strong>
            <div>
              <span className="badge badge-secondary badge-circle mr-2" />
              <span className="badge badge-danger badge-circle mr-2" />
              <span className="badge badge-warning badge-circle mr-2" />
              <span className="badge badge-primary badge-circle" />
            </div>
          </div>
          {/* Services */}
          <div className="list-group-item">
            <strong className="text-muted font-weight-normal">SERVICES</strong>
            <div>
              <BadgeDefault content="Printing"/>
              <BadgeDefault content="Modeling" />
              <BadgeDefault content="Consultation" />
            </div>
          </div>
          {/* Materials */}
          <div className="list-group-item">
            <strong className="text-muted font-weight-normal">MATERIALS</strong>
            <div>
              <small className="font-weight-bold text-muted py-3">Plastic</small>
              <div><BadgeDefault content="PVC" /><BadgeDefault content="Nylon" /></div>
            </div>
            <div>
              <small className="font-weight-bold text-muted py-3">Metals</small>
              <div><BadgeDefault content="Steel" /></div>
            </div>
          </div>
          {/* Printers */}
          <div className="list-group-item">
            <strong className="text-muted font-weight-normal">PRINTERS</strong>
            <div>
              <BadgeDefault content="Model A" />
              <BadgeDefault content="Model B" />
            </div>
          </div>

        </React.Fragment>
    );
}

export default UserDetails;
